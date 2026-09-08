import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { anthropic, SYSTEM_PROMPT } from "@/lib/ai";

export const dynamic = "force-dynamic";

// POST /api/chat — send a message and get an AI response
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { conversationId, message, visitorId, name, email } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Get or create conversation
    let conversation;
    if (conversationId) {
      conversation = await getDb().chatConversation.findUnique({
        where: { id: conversationId },
        include: { messages: { orderBy: { createdAt: "asc" }, take: 50 } },
      });
      if (!conversation) {
        return NextResponse.json({ error: "Conversation not found." }, { status: 404 });
      }
    } else {
      conversation = await getDb().chatConversation.create({
        data: {
          visitorId: visitorId || null,
          name: name || null,
          email: email || null,
        },
        include: { messages: true },
      });
    }

    // Save user message
    await getDb().chatMessage.create({
      data: {
        conversationId: conversation.id,
        role: "user",
        content: message.trim(),
      },
    });

    // Build message history for Claude
    const history = conversation.messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));
    history.push({ role: "user", content: message.trim() });

    // Call Claude
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: history,
    });

    const assistantContent =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Save assistant message
    await getDb().chatMessage.create({
      data: {
        conversationId: conversation.id,
        role: "assistant",
        content: assistantContent,
      },
    });

    // Update conversation timestamp
    await getDb().chatConversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({
      conversationId: conversation.id,
      reply: assistantContent,
    });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json({ error: "Failed to process message." }, { status: 500 });
  }
}

// GET /api/chat?conversationId=xxx — retrieve conversation history
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get("conversationId");

    if (!conversationId) {
      return NextResponse.json({ error: "conversationId is required." }, { status: 400 });
    }

    const conversation = await getDb().chatConversation.findUnique({
      where: { id: conversationId },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    });

    if (!conversation) {
      return NextResponse.json({ error: "Conversation not found." }, { status: 404 });
    }

    return NextResponse.json({ conversation });
  } catch (err) {
    console.error("Chat fetch error:", err);
    return NextResponse.json({ error: "Failed to fetch conversation." }, { status: 500 });
  }
}
