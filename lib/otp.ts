import crypto from "crypto";
import bcrypt from "bcryptjs";
import twilio from "twilio";

// Generate a 6-digit OTP
export function generateOtp(): string {
  return crypto.randomInt(100_000, 999_999).toString();
}

// Hash OTP before storing
export async function hashOtp(code: string): Promise<string> {
  return bcrypt.hash(code, 10);
}

// Compare plain code with stored hash
export async function verifyOtpHash(code: string, hash: string): Promise<boolean> {
  return bcrypt.compare(code, hash);
}

// Send OTP via Twilio SMS
export async function sendOtpSms(phone: string, code: string): Promise<void> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!sid || !token || !from) {
    console.warn("[OTP] Twilio credentials not configured — OTP not sent. Code:", code);
    return;
  }

  const client = twilio(sid, token);
  await client.messages.create({
    body: `Your Creators Touch verification code is: ${code}. Valid for 5 minutes.`,
    from,
    to: phone,
  });
}

// OTP expiry duration (5 minutes)
export const OTP_EXPIRY_MS = 5 * 60 * 1000;

// Max verification attempts before OTP is invalidated
export const MAX_ATTEMPTS = 5;

// Rate limit: minimum gap between OTP requests for the same phone (60s)
export const RATE_LIMIT_MS = 60 * 1000;
