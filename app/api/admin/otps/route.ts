import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthorized } from "@/lib/admin-auth";

export async function GET(req: NextRequest) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const otps = await prisma.otp.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
    select: {
      id: true,
      phone: true,
      verified: true,
      attempts: true,
      createdAt: true,
      expiresAt: true,
    },
  });

  return NextResponse.json({ otps });
}
