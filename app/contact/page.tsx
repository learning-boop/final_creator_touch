"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

const LABEL = "font-mono text-[10px] tracking-[0.16em] uppercase text-ct-fg/42";

const NEEDS = ["Website", "Marketing", "SEO", "Branding", "E-commerce", "Automation", "AI", "Video"];

const CONTACT_INFO = [
  { label: "Call or WhatsApp", value: "+91 98859 33339", href: "tel:+919885933339" },
  { label: "Email us", value: "hello@creatorstouchglobal.com", href: "mailto:hello@creatorstouchglobal.com" },
  { label: "Find us", value: "Vijayawada, Andhra Pradesh", href: null },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/creatorstouchglobal", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
  { label: "LinkedIn", href: "https://linkedin.com/company/creatorstouchglobal", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
  { label: "WhatsApp", href: "https://wa.me/919885933339", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg> },
];

function ContactForm() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", needs: [] as string[], message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // OTP state
  const [otpStep, setOtpStep] = useState<"none" | "sending" | "sent" | "verifying" | "verified">("none");
  const [otpCode, setOtpCode] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpCooldown, setOtpCooldown] = useState(0);

  const toggleNeed = (need: string) => setFields(f => ({
    ...f,
    needs: f.needs.includes(need) ? f.needs.filter(n => n !== need) : [...f.needs, need],
  }));

  const fullPhone = () => `+91${fields.phone.replace(/\s/g, "")}`;

  const requestOtp = async () => {
    if (!fields.phone.trim()) { setOtpError("Enter your phone number first"); return; }
    setOtpStep("sending");
    setOtpError("");
    try {
      const res = await fetch("/api/otp/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone() }),
      });
      const data = await res.json();
      if (!res.ok) { setOtpError(data.error || "Failed to send OTP"); setOtpStep("none"); return; }
      setOtpStep("sent");
      setOtpCooldown(60);
      const timer = setInterval(() => setOtpCooldown(c => { if (c <= 1) { clearInterval(timer); return 0; } return c - 1; }), 1000);
    } catch { setOtpError("Network error"); setOtpStep("none"); }
  };

  const verifyOtp = async () => {
    if (!otpCode.trim()) { setOtpError("Enter the OTP code"); return; }
    setOtpStep("verifying");
    setOtpError("");
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone(), code: otpCode.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setOtpError(data.error || "Verification failed"); setOtpStep("sent"); return; }
      setOtpStep("verified");
    } catch { setOtpError("Network error"); setOtpStep("sent"); }
  };

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (fields.phone.trim() && otpStep !== "verified") {
      setOtpError("Please verify your phone number first");
      return;
    }
    setStatus("sending");
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, phone: fields.phone.trim() ? fullPhone() : "" }),
    })
      .then(r => r.ok ? setStatus("sent") : setStatus("error"))
      .catch(() => setStatus("error"));
  };

  if (status === "sent") {
    return (
      <div className="py-12">
        <p className="font-serif italic font-normal text-[clamp(24px,3vw,40px)] m-0 mb-3 text-ct-fg">We&rsquo;ll be in touch soon.</p>
        <p className="m-0 text-[15px] leading-[1.6] text-ct-fg/50">Thanks for reaching out. We usually respond within one business day.</p>
      </div>
    );
  }

  const inputCls = "w-full bg-ct-fg/4 border border-ct-fg/14 rounded-[10px] px-4 py-3.5 text-ct-fg font-sans text-[15px] tracking-[-0.02em] outline-none placeholder:text-ct-fg/22 focus:border-ct-fg/38 transition-[border-color] duration-200";

  return (
    <form onSubmit={handle} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="ct-name" className={LABEL}>Name</label>
          <input id="ct-name" name="name" type="text" required className={inputCls}
            value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ct-phone" className={LABEL}>Phone / WhatsApp</label>
          <div className="flex gap-2">
            <div className="flex flex-1 items-stretch">
              <span className="inline-flex items-center px-3.5 bg-ct-fg/6 border border-ct-fg/14 border-r-0 rounded-l-[10px] text-ct-fg/50 text-[14px] tracking-[-0.01em] select-none whitespace-nowrap">+91</span>
              <input id="ct-phone" name="phone" type="tel" className={`${inputCls} flex-1 !rounded-l-none`}
                value={fields.phone} onChange={e => { setFields(f => ({ ...f, phone: e.target.value.replace(/[^0-9\s]/g, "") })); if (otpStep === "verified") setOtpStep("none"); }}
                placeholder="98859 33339" maxLength={12} disabled={otpStep === "verified"} />
            </div>
            {otpStep === "verified" ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-3 rounded-[10px] bg-ct-green/12 text-ct-green text-[13px] font-medium whitespace-nowrap border border-ct-green/20">
                &#10003; Verified
              </span>
            ) : (
              <button type="button" onClick={requestOtp}
                disabled={otpStep === "sending" || otpCooldown > 0}
                className="px-4 py-3 rounded-[10px] bg-ct-fg/8 border border-ct-fg/14 text-ct-fg/70 text-[13px] font-medium cursor-pointer hover:bg-ct-fg/12 transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap">
                {otpStep === "sending" ? "Sending\u2026" : otpCooldown > 0 ? `Resend (${otpCooldown}s)` : "Send OTP"}
              </button>
            )}
          </div>
          {otpStep === "sent" && (
            <div className="flex gap-2 mt-1">
              <input type="text" inputMode="numeric" maxLength={6} placeholder="Enter 6-digit OTP"
                className={`${inputCls} flex-1`} value={otpCode}
                onChange={e => setOtpCode(e.target.value.replace(/\D/g, "").slice(0, 6))} />
              <button type="button" onClick={verifyOtp}
                className="px-4 py-3 rounded-[10px] bg-ct-pink text-ct-bg text-[13px] font-medium cursor-pointer hover:bg-ct-pink/85 transition-colors disabled:opacity-50 whitespace-nowrap">
                Verify
              </button>
            </div>
          )}
          {otpError && <span className="text-[12px] text-ct-pink mt-0.5">{otpError}</span>}
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <label htmlFor="ct-email" className={LABEL}>Email</label>
          <input id="ct-email" name="email" type="email" required className={inputCls}
            value={fields.email} onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            placeholder="hello@yourbusiness.com" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className={LABEL}>What do you need help with?</span>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map(need => (
            <button key={need} type="button" onClick={() => toggleNeed(need)}
              className={`px-[18px] py-2 rounded-full font-sans text-[13px] tracking-[-0.01em] cursor-pointer transition-[background,color,border-color] duration-200 border ${
                fields.needs.includes(need)
                  ? "bg-ct-pink text-ct-bg border-ct-pink"
                  : "bg-transparent text-ct-fg/62 border-ct-fg/18 hover:border-ct-fg/35"
              }`}>
              {need}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ct-msg" className={LABEL}>Tell us about your business</label>
        <textarea id="ct-msg" name="message" rows={5} className={`${inputCls} resize-y min-h-[140px]`}
          value={fields.message} onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          placeholder="You don't need to know the marketing terminology. Just tell us about your business and what you'd like to improve." />
      </div>
      <div className="flex items-center gap-3.5 flex-wrap">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 px-[26px] py-[15px] bg-ct-fg text-ct-bg border-none rounded-full text-[15px] font-medium tracking-[-0.02em] cursor-pointer font-sans transition-[background,color] duration-[250ms] hover:bg-ct-pink hover:text-ct-bg disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center md:justify-start">
          {status === "sending" ? "Sending\u2026" : "Book a Free Consultation"}
          <span className="font-mono text-[13px]">&#8594;</span>
        </button>
        <a href="https://wa.me/919885933339" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[22px] py-[15px] border border-ct-green/32 rounded-full text-sm tracking-[-0.01em] text-ct-green/85 font-sans hover:border-ct-green/60 transition-colors">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat on WhatsApp
        </a>
        {status === "error" && <span className="text-[13px] text-ct-pink">Something went wrong &mdash; email hello@creatorstouchglobal.com</span>}
      </div>
      <p className="font-mono m-0 text-[10px] tracking-[0.12em] uppercase text-ct-fg/28">We usually respond within one business day.</p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            Start a Project
          </span>
          <h1 className="m-0 mb-5 text-[clamp(36px,6vw,80px)] font-medium leading-[0.96] tracking-[-0.05em]">
            Tell us where you want
            <br />
            <span className="font-serif italic font-normal text-ct-pink">your business to go.</span>
          </h1>
          <p className="m-0 text-[17px] leading-[1.75] text-ct-fg/55 max-w-[520px]">
            You don&rsquo;t need to know the marketing terminology. Tell us about your business and what you want to improve. We&rsquo;ll help you figure out the next step.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-7 py-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-10">
            {/* Contact details */}
            <div className="flex flex-col">
              {CONTACT_INFO.map(({ label, value, href }) => (
                <div key={label} className="flex flex-col gap-[5px] py-[18px] border-b border-ct-fg/14">
                  <span className={LABEL}>{label}</span>
                  {href
                    ? <a href={href} className="text-lg font-normal tracking-[-0.025em] text-ct-fg no-underline hover:text-ct-pink transition-colors">{value}</a>
                    : <span className="text-lg font-normal tracking-[-0.025em] text-ct-fg/70">{value}</span>}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <span className={`${LABEL} block mb-4`}>Follow us</span>
              <div className="flex gap-2.5">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="flex items-center justify-center w-[38px] h-[38px] border border-ct-fg/14 rounded-full text-ct-fg/45 transition-[color,border-color] duration-[250ms] hover:text-ct-fg hover:border-ct-fg/40">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Consultation image */}
            <div className="rounded-[20px] overflow-hidden hidden lg:block">
              <img src="/assets/images/sections/consultation.png"
                alt="A friendly consultation meeting at Creators Touch" loading="lazy"
                className="w-full block object-cover aspect-[4/3]" />
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2000+", label: "Brands served" },
                { value: "17+", label: "Years experience" },
                { value: "<24h", label: "Response time" },
              ].map(s => (
                <div key={s.label} className="text-center p-4 bg-ct-card rounded-xl border border-ct-fg/6">
                  <span className="text-[clamp(20px,2.5vw,28px)] font-medium tracking-[-0.04em] text-ct-pink block">{s.value}</span>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-ct-fg/35 block mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-ct-card border border-ct-fg/8 rounded-[24px] p-7 md:p-10">
            <h2 className="m-0 mb-2 text-[clamp(22px,2.5vw,32px)] font-medium tracking-[-0.04em]">
              Book a Free Consultation
            </h2>
            <p className="m-0 mb-8 text-[14px] leading-[1.65] text-ct-fg/45">
              Fill in the form and we&rsquo;ll get back to you within one business day with a plan tailored to your business.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map / Office section */}
      <section className="px-7 py-16 border-t border-ct-fg/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className={`${LABEL} block mb-5`}>Our Office</span>
              <h2 className="m-0 mb-4 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">
                Vijayawada, Andhra Pradesh
              </h2>
              <p className="m-0 text-[15px] leading-[1.65] text-ct-fg/50 max-w-[420px]">
                We work with businesses across India and internationally, but our home base is in the heart of Vijayawada. Drop in for a coffee and a conversation about your business.
              </p>
            </div>
            <div className="rounded-[20px] overflow-hidden border border-ct-fg/8 aspect-[16/10]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122266.58774755883!2d80.5463885!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1693000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Creators Touch Global — Vijayawada"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
