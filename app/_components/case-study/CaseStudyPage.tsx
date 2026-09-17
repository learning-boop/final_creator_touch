"use client";
import { useState, useEffect } from "react";
import type { CaseStudy } from "@/app/_data/case-studies";
import OtpGateModal from "@/app/_components/OtpGateModal";

const MONO = "font-family:'Geist Mono',monospace";
const SERIF = "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400";
const HAIR = "1px solid rgba(244,243,241,0.10)";

function S(css: string): React.CSSProperties {
  const o: Record<string, string> = {};
  css.split(";").forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim();
    const v = d.slice(i + 1).trim();
    if (k) o[k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = v;
  });
  return o as React.CSSProperties;
}

export default function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  const hasHero = cs.images.hero && !cs.images.hero.endsWith("hero.jpg") && !cs.images.hero.endsWith("hero.png");
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("otp_verified") === "true") setVerified(true);
  }, []);

  const handleLiveClick = (e: React.MouseEvent) => {
    if (verified) return; // already verified, let the link work
    e.preventDefault();
    setShowOtp(true);
  };

  const handleVerified = () => {
    setVerified(true);
    setShowOtp(false);
    // Open the live site after verification
    window.open(cs.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>

      {/* Nav */}
      <header style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:rgba(8,9,10,0.88);backdrop-filter:blur(18px);border-bottom:" + HAIR)}>
        <a href="/" style={S("display:flex;align-items:center;gap:10px;text-decoration:none;color:#F4F3F1")}>
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" style={S("width:32px;height:32px")} />
          <span style={S("font-size:13px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
        </a>
        <nav style={S(`display:flex;align-items:center;gap:20px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase`)}>
          <a href="/" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Home</a>
          <a href="/work" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Portfolio</a>
          <a href="/services" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Services</a>
          <a href="/blog" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Blog</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={S("position:relative;padding:96px 28px 72px;border-bottom:" + HAIR)}>
        <div style={S("max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:28px")}>
          <div style={S("display:flex;align-items:center;gap:16px;flex-wrap:wrap")}>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;padding:5px 14px;border:1px solid rgba(244,243,241,0.16);border-radius:100px;color:rgba(244,243,241,0.55)`)}>
              {cs.category}
            </span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>
              {cs.year}
            </span>
          </div>

          <h1 style={S("margin:0;font-size:clamp(48px,8vw,110px);font-weight:500;line-height:0.94;letter-spacing:-0.055em")}>
            {cs.client}
          </h1>

          <p style={S(`${SERIF};font-size:clamp(20px,2.4vw,30px);line-height:1.4;color:rgba(244,243,241,0.7);max-width:640px;margin:0`)}>
            {cs.tagline}
          </p>

          {cs.url !== "#" && (
            <a href={cs.url} target="_blank" rel="noopener noreferrer"
              onClick={handleLiveClick}
              style={S(`display:inline-flex;align-items:center;gap:10px;padding:12px 22px;border:1px solid rgba(244,243,241,0.18);border-radius:100px;font-size:13px;letter-spacing:-0.02em;color:#F4F3F1;text-decoration:none;align-self:flex-start;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase`)}>
              Visit live site →
            </a>
          )}
          {showOtp && <OtpGateModal onVerified={handleVerified} onClose={() => setShowOtp(false)} />}
        </div>
      </section>

      {/* Hero image */}
      {hasHero ? (
        <div style={S("width:100%;aspect-ratio:16/7;overflow:hidden;background:#0C0D10")}>
          <img src={cs.images.hero} alt={cs.client} style={S("width:100%;height:100%;object-fit:cover;display:block")} />
        </div>
      ) : (
        <div style={S(`width:100%;height:320px;background:linear-gradient(135deg,rgba(255,61,143,0.08),rgba(41,168,220,0.08));display:flex;align-items:center;justify-content:center;border-bottom:${HAIR}`)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.2)`)}>
            Project imagery coming soon
          </span>
        </div>
      )}

      {/* Results strip */}
      <div style={S(`display:grid;grid-template-columns:repeat(4,1fr);border-bottom:${HAIR}`)}>
        {cs.results.map((r) => (
          <div key={r.label} style={S(`padding:32px 28px;border-right:${HAIR};display:flex;flex-direction:column;gap:8px`)}>
            <span style={S(`font-size:clamp(22px,2.8vw,36px);font-weight:500;letter-spacing:-0.04em;color:${cs.accentColor}`)}>{r.value}</span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.4)`)}>{r.label}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div style={S("max-width:900px;margin:0 auto;padding:96px 28px")}>

        {/* Summary */}
        <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:80px;padding-bottom:80px;border-bottom:" + HAIR)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>Overview</span>
          <p style={S("margin:0;font-size:clamp(17px,1.8vw,22px);line-height:1.6;color:rgba(244,243,241,0.75)")}>{cs.summary}</p>
        </div>

        {/* Challenge */}
        <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:80px;padding-bottom:80px;border-bottom:" + HAIR)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>The challenge</span>
          <p style={S("margin:0;font-size:17px;line-height:1.7;color:rgba(244,243,241,0.6)")}>{cs.challenge}</p>
        </div>

        {/* Approach */}
        <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:80px;padding-bottom:80px;border-bottom:" + HAIR)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>What we did</span>
          <div style={S("display:flex;flex-direction:column;gap:32px")}>
            {cs.approach.map((step, i) => {
              const [title, ...rest] = step.split(": ");
              return (
                <div key={i} style={S("display:flex;flex-direction:column;gap:10px;padding-bottom:32px;border-bottom:1px solid rgba(244,243,241,0.06)")}>
                  <div style={S("display:flex;align-items:baseline;gap:16px")}>
                    <span style={S(`${MONO};font-size:10px;color:rgba(244,243,241,0.28)`)}>0{i + 1}</span>
                    <h3 style={S(`margin:0;font-size:18px;font-weight:500;letter-spacing:-0.03em;color:${cs.accentColor}`)}>{title}</h3>
                  </div>
                  {rest.length > 0 && (
                    <p style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.55);padding-left:26px")}>{rest.join(": ")}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Screens */}
        {cs.images.screens.some((s) => !s.endsWith("screen-1.jpg") && !s.endsWith("screen-2.jpg") && !s.endsWith("screen-3.jpg")) && (
          <div style={S("display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:80px;padding-bottom:80px;border-bottom:" + HAIR)}>
            {cs.images.screens.map((src, i) => (
              <div key={i} style={S("aspect-ratio:16/10;overflow:hidden;border-radius:12px;background:#0C0D10")}>
                <img src={src} alt={`${cs.client} screen ${i + 1}`} loading="lazy" style={S("width:100%;height:100%;object-fit:cover;display:block")} />
              </div>
            ))}
          </div>
        )}

        {/* Outcome */}
        <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:80px;padding-bottom:80px;border-bottom:" + HAIR)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>The outcome</span>
          <p style={S(`${SERIF};font-size:clamp(18px,2vw,26px);line-height:1.5;color:rgba(244,243,241,0.75);margin:0`)}>{cs.outcome}</p>
        </div>

        {/* Services */}
        <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px")}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>Services</span>
          <div style={S("display:flex;flex-wrap:wrap;gap:10px")}>
            {cs.services.map((s) => (
              <span key={s} style={S(`${MONO};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;padding:7px 16px;border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.6)`)}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Next project */}
      <a href={`/work/${cs.nextSlug}`} style={S(`display:block;padding:64px 28px;border-top:${HAIR};text-decoration:none;background:#0C0D10;transition:background .25s ease`)}>
        <div style={S("max-width:900px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:24px")}>
          <div style={S("display:flex;flex-direction:column;gap:10px")}>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>Next case study</span>
            <span style={S("font-size:clamp(24px,3vw,40px);font-weight:400;letter-spacing:-0.04em;color:#F4F3F1")}>
              {cs.nextSlug.charAt(0).toUpperCase() + cs.nextSlug.slice(1).replace(/-/g, " ")} →
            </span>
          </div>
        </div>
      </a>

      {/* Footer */}
      <footer style={S(`padding:24px 28px;border-top:${HAIR};display:flex;justify-content:space-between;align-items:center`)}>
        <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.28)`)}>
          Creators Touch Global &middot; © 2026
        </span>
        <a href="/" style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35);text-decoration:none`)}>
          Back to home
        </a>
      </footer>
    </div>
  );
}
