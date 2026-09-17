"use client";

import { useState } from "react";

type Props = {
  onVerified: () => void;
  onClose: () => void;
};

export default function OtpGateModal({ onVerified, onClose }: Props) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);

  const requestOtp = async () => {
    if (!phone.trim()) { setError("Enter your phone number"); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/otp/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to send OTP"); setLoading(false); return; }
      setStep("otp");
      setCooldown(60);
      const timer = setInterval(() => setCooldown(c => { if (c <= 1) { clearInterval(timer); return 0; } return c - 1; }), 1000);
    } catch { setError("Network error"); }
    setLoading(false);
  };

  const verifyOtp = async () => {
    if (!code.trim()) { setError("Enter the OTP"); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim(), code: code.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Verification failed"); setLoading(false); return; }
      // Store verified state in session
      sessionStorage.setItem("otp_verified", "true");
      onVerified();
    } catch { setError("Network error"); }
    setLoading(false);
  };

  const INPUT: React.CSSProperties = {
    padding: "14px 16px", background: "rgba(244,243,241,0.04)",
    border: "1px solid rgba(244,243,241,0.14)", borderRadius: 10,
    color: "#F4F3F1", fontSize: 15, outline: "none", width: "100%",
    fontFamily: "Geist,Arial,sans-serif",
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      {/* Backdrop */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(8,9,10,0.85)", backdropFilter: "blur(12px)" }} />

      {/* Modal */}
      <div style={{
        position: "relative", width: 400, maxWidth: "90vw", padding: 36,
        background: "#0E0F12", border: "1px solid rgba(244,243,241,0.1)",
        borderRadius: 24, display: "flex", flexDirection: "column", gap: 20,
        fontFamily: "Geist,Arial,sans-serif", color: "#F4F3F1",
      }}>
        {/* Close */}
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16, background: "none",
          border: "none", color: "rgba(244,243,241,0.3)", cursor: "pointer", fontSize: 20,
        }}>&times;</button>

        <div>
          <h2 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 500, letterSpacing: "-0.03em" }}>
            Verify to continue
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(244,243,241,0.5)" }}>
            Enter your phone number to view the live project. We&rsquo;ll send a one-time verification code.
          </p>
        </div>

        {step === "phone" ? (
          <>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder="+91 XXXXX XXXXX" style={INPUT}
              onKeyDown={e => e.key === "Enter" && requestOtp()} />
            <button onClick={requestOtp} disabled={loading}
              style={{ padding: "14px 24px", background: "#FF3D8F", color: "#08090A", border: "none", borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: "pointer", opacity: loading ? 0.5 : 1 }}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <p style={{ margin: 0, fontSize: 13, color: "rgba(244,243,241,0.45)", fontFamily: "'Geist Mono',monospace", letterSpacing: "0.06em" }}>
              OTP sent to {phone}
            </p>
            <input type="text" inputMode="numeric" maxLength={6} value={code}
              onChange={e => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter 6-digit OTP" style={{ ...INPUT, letterSpacing: "0.25em", textAlign: "center", fontSize: 22, fontFamily: "'Geist Mono',monospace" }}
              onKeyDown={e => e.key === "Enter" && verifyOtp()} />
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={verifyOtp} disabled={loading}
                style={{ flex: 1, padding: "14px 24px", background: "#FF3D8F", color: "#08090A", border: "none", borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: "pointer", opacity: loading ? 0.5 : 1 }}>
                {loading ? "Verifying..." : "Verify"}
              </button>
              <button onClick={requestOtp} disabled={cooldown > 0 || loading}
                style={{ padding: "14px 18px", background: "transparent", border: "1px solid rgba(244,243,241,0.14)", borderRadius: 100, fontSize: 13, color: "rgba(244,243,241,0.5)", cursor: "pointer", opacity: cooldown > 0 ? 0.4 : 1 }}>
                {cooldown > 0 ? `${cooldown}s` : "Resend"}
              </button>
            </div>
          </>
        )}

        {error && <p style={{ margin: 0, fontSize: 13, color: "#FF3D8F" }}>{error}</p>}
      </div>
    </div>
  );
}
