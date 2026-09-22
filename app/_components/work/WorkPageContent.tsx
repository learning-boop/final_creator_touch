"use client";

import { useState, useEffect } from "react";
import type { CaseStudy } from "@/app/_data/case-studies";
import OtpGateModal from "@/app/_components/OtpGateModal";

const MONO = "font-family:'Geist Mono',monospace";

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

export default function WorkPageContent({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.category.split(" · ")[0])))];
  const filtered = activeFilter === "All" ? caseStudies : caseStudies.filter((cs) => cs.category.split(" · ")[0] === activeFilter);

  useEffect(() => {
    if (sessionStorage.getItem("otp_verified") === "true") setVerified(true);
  }, []);

  const handleProjectClick = (e: React.MouseEvent, url: string) => {
    if (verified) {
      window.open(url, "_blank", "noopener,noreferrer");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    setPendingUrl(url);
    setShowOtp(true);
  };

  const handleVerified = () => {
    setVerified(true);
    setShowOtp(false);
    if (pendingUrl) {
      window.open(pendingUrl, "_blank", "noopener,noreferrer");
      setPendingUrl(null);
    }
  };

  const handleClose = () => {
    setShowOtp(false);
    if (pendingUrl) {
      const slug = caseStudies.find((cs) => cs.url === pendingUrl)?.slug;
      if (slug) window.location.href = `/work/${slug}`;
      setPendingUrl(null);
    }
  };

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <style dangerouslySetInnerHTML={{ __html: `
        .wk-grid{display:grid;grid-template-columns:1fr;gap:28px}
        @media(min-width:761px){.wk-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1025px){.wk-grid{grid-template-columns:repeat(3,1fr)}}
        .wk-card{position:relative;cursor:pointer;display:block}
        .wk-card-img img{transition:transform 0.7s cubic-bezier(.22,1,.36,1)}
        .wk-card:hover .wk-card-img img{transform:scale(1.06)}
        .wk-card:hover{box-shadow:0 28px 72px rgba(0,0,0,0.55)}
        .wk-card-overlay{display:none}
        .wk-card-mobile{display:flex}
        @media(min-width:761px){
          .wk-card{overflow:hidden;border-radius:16px}
          .wk-card-overlay{display:flex!important}
          .wk-card-mobile{display:none!important}
          .wk-card-img{border-radius:0!important}
        }
      `}} />

      {/* Category filters */}
      <div style={S(`padding:28px;border-bottom:1px solid rgba(244,243,241,0.10)`)}>
        <div style={S("max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:10px")}>
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={S(
                `${MONO};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;padding:8px 18px;border-radius:100px;cursor:pointer;color:${cat === activeFilter ? "#08090A" : "rgba(244,243,241,0.55)"};background:${cat === activeFilter ? "#F4F3F1" : "transparent"};border:1px solid ${cat === activeFilter ? "#F4F3F1" : "rgba(244,243,241,0.14)"}`
              )}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div style={S("max-width:1200px;margin:0 auto;padding:48px 28px")}>
        {/* Project cards grid */}
        <div className="wk-grid">
          {filtered.map((cs) => (
            <div
              key={cs.slug}
              className="wk-card"
              onClick={(e) => handleProjectClick(e, cs.url)}
            >
              <div className="wk-card-img" style={S("aspect-ratio:4/3;overflow:hidden;border-radius:16px;background:#0C0D10")}>
                <img src={cs.images.hero} alt={cs.client} loading="lazy"
                  style={S("width:100%;height:100%;object-fit:cover;object-position:top;display:block")} />
              </div>
              {/* Desktop overlay */}
              <div className="wk-card-overlay" style={S("display:none;position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,9,10,0.94) 0%,rgba(8,9,10,0.18) 55%,transparent 100%);flex-direction:column;justify-content:flex-end;padding:22px")}>
                <div style={S("position:absolute;top:16px;right:16px;display:flex;align-items:center;gap:8px")}>
                  <span style={S(`${MONO};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(255,61,143,0.18);border:1px solid rgba(255,61,143,0.4);border-radius:100px;color:rgba(255,61,143,0.9)`)}>Case study</span>
                  <span style={S(`${MONO};font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(8,9,10,0.65);border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.7)`)}>{cs.services.slice(0, 2).join(" + ")}</span>
                </div>
                <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);margin-bottom:6px`)}>{cs.category}</span>
                <h3 style={S("margin:0 0 6px;font-size:22px;font-weight:400;letter-spacing:-0.03em;color:#F4F3F1")}>{cs.client}</h3>
                <p style={S("margin:0;font-size:13px;line-height:1.5;color:rgba(244,243,241,0.55)")}>{cs.tagline}</p>
              </div>
              {/* Mobile label */}
              <div className="wk-card-mobile" style={S("flex-direction:column;gap:5px;padding:12px 4px 0")}>
                <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)`)}>{cs.category}</span>
                <div style={S("display:flex;align-items:center;justify-content:space-between;gap:8px")}>
                  <h3 style={S("margin:0;font-size:17px;font-weight:400;letter-spacing:-0.03em;color:#F4F3F1;line-height:1.2")}>{cs.client}</h3>
                  <span style={S(`${MONO};font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 11px;border:1px solid rgba(255,61,143,0.4);border-radius:100px;color:rgba(255,61,143,0.9);white-space:nowrap;flex-shrink:0`)}>Case study &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showOtp && <OtpGateModal onVerified={handleVerified} onClose={handleClose} />}
    </>
  );
}
