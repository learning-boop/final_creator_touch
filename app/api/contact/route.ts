import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthorized } from "@/lib/admin-auth";

// POST — submit a contact form
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, needs, message } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        needs: Array.isArray(needs) ? needs : [],
        message: message?.trim() || null,
      },
    });

    return NextResponse.json({ message: "Submitted successfully", id: submission.id }, { status: 201 });
  } catch (err) {
    console.error("[Contact POST]", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

// GET — admin: list contact submissions
export async function GET(req: NextRequest) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const status = url.searchParams.get("status"); // filter by status
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
  const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") || "20")));

  const where = status ? { status } : {};

  const [submissions, total] = await Promise.all([
    prisma.contactSubmission.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.contactSubmission.count({ where }),
  ]);

  return NextResponse.json({ submissions, total, page, limit });
}
