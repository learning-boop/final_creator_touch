"use client";

import { useState, useEffect } from "react";
import type { CaseStudy } from "@/app/_data/case-studies";
import OtpGateModal from "@/app/_components/OtpGateModal";

const MONO = "font-family:'Geist Mono',monospace";
const SERIF =
  "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400";
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

const STATS = [
  { value: "8+", label: "Projects delivered" },
  { value: "5", label: "Specialisations" },
  { value: "95+", label: "Avg. mobile score" },
  { value: "100%", label: "Client retention" },
];

export default function WorkPageContent({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("otp_verified") === "true") setVerified(true);
  }, []);

  const handleProjectClick = (e: React.MouseEvent, url: string) => {
    if (verified) {
      // Already verified — navigate normally
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
    // Let them continue browsing — navigate to the case study page instead
    if (pendingUrl) {
      const slug = caseStudies.find((cs) => cs.url === pendingUrl)?.slug;
      if (slug) window.location.href = `/work/${slug}`;
      setPendingUrl(null);
    }
  };

  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .wk-stats{display:grid;grid-template-columns:repeat(2,1fr)}
        .wk-featured{display:flex;flex-direction:column;gap:32px}
        .wk-project{display:flex;flex-direction:column;gap:32px;padding:48px 0}
        .wk-project-img{order:1}
        .wk-project-text{order:2}
        .wk-process{display:grid;grid-template-columns:1fr;gap:2px}
        @media(min-width:640px){
          .wk-stats{grid-template-columns:repeat(4,1fr)}
          .wk-process{grid-template-columns:repeat(2,1fr)}
        }
        @media(min-width:850px){
          .wk-featured{display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center}
          .wk-project{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:72px 0}
          .wk-process{grid-template-columns:repeat(4,1fr)}
        }
      `}} />
      {/* ── Stats strip ── */}
      <div
        className="wk-stats"
        style={S(
          `border-bottom:${HAIR}`
        )}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={S(
              `padding:36px 28px;display:flex;flex-direction:column;gap:8px;${i < STATS.length - 1 ? "border-right:" + HAIR : ""}`
            )}
          >
            <span
              style={S(
                "font-size:clamp(26px,3.5vw,44px);font-weight:500;letter-spacing:-0.05em;color:#FF3D8F"
              )}
            >
              {s.value}
            </span>
            <span
              style={S(
                `${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.38)`
              )}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── Category pills ── */}
      <div style={S(`padding:28px;border-bottom:${HAIR}`)}>
        <div
          style={S(
            "max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:10px"
          )}
        >
          {[
            "All",
            ...Array.from(
              new Set(caseStudies.map((cs) => cs.category.split(" · ")[0]))
            ),
          ].map((cat) => (
            <span
              key={cat}
              style={S(
                `${MONO};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;padding:8px 18px;border-radius:100px;color:${cat === "All" ? "#08090A" : "rgba(244,243,241,0.55)"};background:${cat === "All" ? "#F4F3F1" : "transparent"};border:1px solid ${cat === "All" ? "#F4F3F1" : "rgba(244,243,241,0.14)"};cursor:pointer`
              )}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured project (full-width) ── */}
      <div
        onClick={(e) => handleProjectClick(e, featured.url)}
        style={S(
          `display:block;text-decoration:none;color:#F4F3F1;border-bottom:${HAIR};cursor:pointer`
        )}
      >
        <div style={S("max-width:1200px;margin:0 auto;padding:72px 28px")}>
          <div
            style={S(
              "display:flex;align-items:center;gap:14px;margin-bottom:24px"
            )}
          >
            <span
              style={S(
                `${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:5px 14px;border:1px solid ${featured.accentColor}55;border-radius:100px;color:${featured.accentColor}`
              )}
            >
              Featured
            </span>
            <span
              style={S(
                `${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.28)`
              )}
            >
              {featured.category}
            </span>
          </div>
          <div className="wk-featured">
            <div
              style={S(
                "border-radius:20px;overflow:hidden;aspect-ratio:4/3;background:#0C0D10"
              )}
            >
              <img
                src={featured.images.hero}
                alt={featured.client}
                style={S(
                  "width:100%;height:100%;object-fit:cover;display:block"
                )}
              />
            </div>
            <div style={S("display:flex;flex-direction:column;gap:24px")}>
              <h2
                style={S(
                  `margin:0;font-size:clamp(36px,5vw,72px);font-weight:500;line-height:0.94;letter-spacing:-0.05em;color:${featured.accentColor}`
                )}
              >
                {featured.client}
              </h2>
              <p
                style={S(
                  `${SERIF};font-size:clamp(17px,1.8vw,22px);line-height:1.5;color:rgba(244,243,241,0.65);margin:0;max-width:440px`
                )}
              >
                {featured.tagline}
              </p>
              <div style={S("display:flex;flex-wrap:wrap;gap:24px")}>
                {featured.results.slice(0, 3).map((r) => (
                  <div
                    key={r.label}
                    style={S(
                      "display:flex;flex-direction:column;gap:4px"
                    )}
                  >
                    <span
                      style={S(
                        `font-size:clamp(18px,2vw,28px);font-weight:500;letter-spacing:-0.04em;color:${featured.accentColor}`
                      )}
                    >
                      {r.value}
                    </span>
                    <span
                      style={S(
                        `${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`
                      )}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={S(
                  "display:flex;flex-wrap:wrap;gap:8px;margin-top:4px"
                )}
              >
                {featured.services.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    style={S(
                      `${MONO};font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(244,243,241,0.1);border-radius:100px;color:rgba(244,243,241,0.4)`
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span
                style={S(
                  `${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.45);margin-top:8px`
                )}
              >
                View live site &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Project grid (alternating layout) ── */}
      <div style={S("max-width:1200px;margin:0 auto;padding:0 28px")}>
        {rest.map((cs, idx) => (
          <div
            key={cs.slug}
            onClick={(e) => handleProjectClick(e, cs.url)}
            className="wk-project"
            style={S(
              `border-bottom:${idx < rest.length - 1 ? HAIR : "none"};text-decoration:none;color:#F4F3F1;cursor:pointer`
            )}
          >
            {/* Image */}
            <div
              className="wk-project-img"
              style={S(
                `border-radius:16px;overflow:hidden;aspect-ratio:4/3;background:#0C0D10;position:relative`
              )}
            >
              <img
                src={cs.images.hero}
                alt={cs.client}
                loading="lazy"
                style={S(
                  "width:100%;height:100%;object-fit:cover;display:block"
                )}
              />
              {/* Year badge */}
              <span
                style={S(
                  `position:absolute;top:16px;left:16px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;padding:5px 14px;background:rgba(8,9,10,0.72);backdrop-filter:blur(8px);border:1px solid rgba(244,243,241,0.12);border-radius:100px;color:rgba(244,243,241,0.6)`
                )}
              >
                {cs.year}
              </span>
            </div>

            {/* Text */}
            <div className="wk-project-text">
              <div
                style={S(
                  "display:flex;align-items:center;gap:14px;margin-bottom:20px;flex-wrap:wrap"
                )}
              >
                <span
                  style={S(
                    `${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;padding:5px 14px;border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.5)`
                  )}
                >
                  {cs.category}
                </span>
              </div>

              <h2
                style={S(
                  `margin:0 0 16px;font-size:clamp(30px,4vw,56px);font-weight:500;line-height:0.94;letter-spacing:-0.05em;color:${cs.accentColor}`
                )}
              >
                {cs.client}
              </h2>

              <p
                style={S(
                  `${SERIF};font-size:clamp(16px,1.6vw,20px);line-height:1.5;color:rgba(244,243,241,0.58);margin:0 0 28px;max-width:420px`
                )}
              >
                {cs.tagline}
              </p>

              {/* Results */}
              <div
                style={S(
                  "display:flex;flex-wrap:wrap;gap:24px;margin-bottom:28px"
                )}
              >
                {cs.results.slice(0, 2).map((r) => (
                  <div
                    key={r.label}
                    style={S(
                      "display:flex;flex-direction:column;gap:4px"
                    )}
                  >
                    <span
                      style={S(
                        `font-size:clamp(18px,2vw,26px);font-weight:500;letter-spacing:-0.04em;color:${cs.accentColor}`
                      )}
                    >
                      {r.value}
                    </span>
                    <span
                      style={S(
                        `${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`
                      )}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div
                style={S(
                  "display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px"
                )}
              >
                {cs.services.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    style={S(
                      `${MONO};font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(244,243,241,0.1);border-radius:100px;color:rgba(244,243,241,0.4)`
                    )}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <span
                style={S(
                  `${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.45)`
                )}
              >
                View live site &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* OTP Modal */}
      {showOtp && (
        <OtpGateModal onVerified={handleVerified} onClose={handleClose} />
      )}
    </>
  );
}
