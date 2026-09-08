import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { anthropic, SYSTEM_PROMPT } from "@/lib/ai";

export const dynamic = "force-dynamic";

// POST /api/voice — process a voice transcript and get AI response
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, transcript, visitorId, name, email, duration } = body;

    if (!transcript || typeof transcript !== "string" || !transcript.trim()) {
      return NextResponse.json({ error: "Transcript is required." }, { status: 400 });
    }

    // Get or create session
    let session;
    if (sessionId) {
      session = await getDb().voiceSession.findUnique({
        where: { id: sessionId },
        include: { entries: { orderBy: { createdAt: "asc" }, take: 30 } },
      });
      if (!session) {
        return NextResponse.json({ error: "Session not found." }, { status: 404 });
      }
    } else {
      session = await getDb().voiceSession.create({
        data: {
          visitorId: visitorId || null,
          name: name || null,
          email: email || null,
        },
        include: { entries: true },
      });
    }

    // Save user voice entry
    await getDb().voiceEntry.create({
      data: {
        sessionId: session.id,
        role: "user",
        transcript: transcript.trim(),
        duration: duration || null,
      },
    });

    // Build message history for Claude
    const history = session.entries.map((e: { role: string; transcript: string }) => ({
      role: e.role as "user" | "assistant",
      content: e.transcript,
    }));
    history.push({ role: "user", content: transcript.trim() });

    // Call Claude
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 512,
      system:
        SYSTEM_PROMPT +
        "\n\nThis is a voice conversation. Keep your responses concise and conversational — under 3 sentences when possible. Speak naturally as if talking on the phone.",
      messages: history,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Save assistant entry
    await getDb().voiceEntry.create({
      data: {
        sessionId: session.id,
        role: "assistant",
        transcript: assistantContent,
      },
    });

    // Update session
    await getDb().voiceSession.update({
      where: { id: session.id },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({
      sessionId: session.id,
      reply: assistantContent,
    });
  } catch (err) {
    console.error("Voice error:", err);
    return NextResponse.json({ error: "Failed to process voice input." }, { status: 500 });
  }
}

// GET /api/voice?sessionId=xxx — retrieve session history
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json({ error: "sessionId is required." }, { status: 400 });
    }

    const session = await getDb().voiceSession.findUnique({
      where: { id: sessionId },
      include: { entries: { orderBy: { createdAt: "asc" } } },
    });

    if (!session) {
      return NextResponse.json({ error: "Session not found." }, { status: 404 });
    }

    return NextResponse.json({ session });
  } catch (err) {
    console.error("Voice fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch session." }, { status: 500 });
  }
}
