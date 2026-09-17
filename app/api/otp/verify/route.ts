import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyOtpHash, MAX_ATTEMPTS } from "@/lib/otp";

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();

    if (!phone || !code) {
      return NextResponse.json({ error: "Phone and code are required" }, { status: 400 });
    }

    const normalized = phone.replace(/\s+/g, "");

    // Find the latest unexpired, unverified OTP for this phone
    const otp = await prisma.otp.findFirst({
      where: {
        phone: normalized,
        verified: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });

    if (!otp) {
      return NextResponse.json({ error: "No valid OTP found. Request a new one." }, { status: 400 });
    }

    if (otp.attempts >= MAX_ATTEMPTS) {
      return NextResponse.json({ error: "Too many attempts. Request a new OTP." }, { status: 429 });
    }

    const isValid = await verifyOtpHash(code, otp.codeHash);

    if (!isValid) {
      await prisma.otp.update({
        where: { id: otp.id },
        data: { attempts: { increment: 1 } },
      });
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Mark as verified
    await prisma.otp.update({
      where: { id: otp.id },
      data: { verified: true },
    });

    return NextResponse.json({ message: "Phone verified successfully", verified: true });
  } catch (err) {
    console.error("[OTP Verify]", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
