import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateOtp, hashOtp, sendOtpSms, OTP_EXPIRY_MS, RATE_LIMIT_MS } from "@/lib/otp";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 });
    }

    // Normalize: strip spaces, ensure starts with +
    const normalized = phone.replace(/\s+/g, "");
    if (!/^\+\d{10,15}$/.test(normalized)) {
      return NextResponse.json({ error: "Invalid phone format. Use +91XXXXXXXXXX" }, { status: 400 });
    }

    // Rate limit: check last OTP sent to this phone
    const recent = await prisma.otp.findFirst({
      where: { phone: normalized },
      orderBy: { createdAt: "desc" },
    });

    if (recent && Date.now() - recent.createdAt.getTime() < RATE_LIMIT_MS) {
      const waitSec = Math.ceil((RATE_LIMIT_MS - (Date.now() - recent.createdAt.getTime())) / 1000);
      return NextResponse.json(
        { error: `Please wait ${waitSec}s before requesting another OTP` },
        { status: 429 }
      );
    }

    // Generate, hash, store
    const code = generateOtp();
    const codeHash = await hashOtp(code);
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MS);

    await prisma.otp.create({
      data: { phone: normalized, codeHash, expiresAt },
    });

    // Send via Twilio
    await sendOtpSms(normalized, code);

    return NextResponse.json({ message: "OTP sent", expiresIn: OTP_EXPIRY_MS / 1000 });
  } catch (err) {
    console.error("[OTP Request]", err);
    const message = err instanceof Error ? err.message : "Failed to send OTP";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
