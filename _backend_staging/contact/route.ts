import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

// POST /api/contact — save a contact form submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, needs, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const submission = await getDb().contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        needs: Array.isArray(needs) ? needs : [],
        message: message || null,
      },
    });

    return NextResponse.json({ success: true, id: submission.id }, { status: 201 });
  } catch (err) {
    console.error("Contact submission error:", err);
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }
}

// GET /api/contact — list submissions (for admin use)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));

    const where = status ? { status } : {};

    const [submissions, total] = await Promise.all([
      getDb().contactSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      getDb().contactSubmission.count({ where }),
    ]);

    return NextResponse.json({ submissions, total, page, limit });
  } catch (err) {
    console.error("Contact list error:", err);
    return NextResponse.json({ error: "Failed to fetch submissions." }, { status: 500 });
  }
}
