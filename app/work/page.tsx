import type { Metadata } from "next";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "Our Work — Creators Touch Global",
  description:
    "Case studies and project details from Creators Touch Global — real results for real Indian businesses across healthcare, brand, e-commerce, and more.",
};

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

export default function WorkPage() {
  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>

      {/* Nav */}
      <header style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:rgba(8,9,10,0.88);backdrop-filter:blur(18px);border-bottom:" + HAIR)}>
        <a href="/" style={S("display:flex;align-items:center;gap:10px;text-decoration:none;color:#F4F3F1")}>
          <img src="/assets/images/creator_touch.png" alt="Creators Touch" style={S("width:32px;height:32px")} />
          <span style={S("font-size:13px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
        </a>
        <a href="/" style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);text-decoration:none`)}>
          ← Back home
        </a>
      </header>

      {/* Hero */}
      <section style={S("padding:96px 28px 72px;border-bottom:" + HAIR)}>
        <div style={S("max-width:1100px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            Selected projects
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(42px,7vw,96px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            Our work
          </h1>
          <p style={S(`${SERIF};font-size:clamp(18px,2.2vw,26px);line-height:1.5;color:rgba(244,243,241,0.65);max-width:520px;margin:0`)}>
            Real businesses. Real problems. Real results.
          </p>
        </div>
      </section>

      {/* Project list */}
      <div style={S("max-width:1100px;margin:0 auto;padding:0 28px")}>
        {CASE_STUDIES.map((cs, idx) => (
          <a
            key={cs.slug}
            href={`/work/${cs.slug}`}
            style={S(`display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:80px 0;border-bottom:${idx < CASE_STUDIES.length - 1 ? HAIR : "none"};text-decoration:none;color:#F4F3F1`)}
          >
            {/* Text — alternate sides */}
            <div style={S(idx % 2 === 1 ? "order:2" : "order:1")}>
              <div style={S("display:flex;align-items:center;gap:14px;margin-bottom:28px;flex-wrap:wrap")}>
                <span style={S(`${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:5px 14px;border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.5)`)}>
                  {cs.category}
                </span>
                <span style={S(`${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.28)`)}>
                  {cs.year}
                </span>
              </div>

              <h2 style={S(`margin:0 0 18px;font-size:clamp(32px,4.5vw,64px);font-weight:500;line-height:0.94;letter-spacing:-0.05em;color:${cs.accentColor}`)}>
                {cs.client}
              </h2>

              <p style={S(`${SERIF};font-size:clamp(16px,1.7vw,20px);line-height:1.5;color:rgba(244,243,241,0.6);margin:0 0 36px;max-width:440px`)}>
                {cs.tagline}
              </p>

              {/* Key results */}
              <div style={S("display:flex;flex-wrap:wrap;gap:20px;margin-bottom:36px")}>
                {cs.results.slice(0, 2).map((r) => (
                  <div key={r.label} style={S("display:flex;flex-direction:column;gap:4px")}>
                    <span style={S(`font-size:clamp(18px,2vw,26px);font-weight:500;letter-spacing:-0.04em;color:${cs.accentColor}`)}>{r.value}</span>
                    <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>{r.label}</span>
                  </div>
                ))}
              </div>

              <span style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.45)`)}>
                View case study →
              </span>
            </div>

            {/* Image */}
            <div style={S(`${idx % 2 === 1 ? "order:1" : "order:2"};border-radius:16px;overflow:hidden;aspect-ratio:4/3;background:#0C0D10;position:relative`)}>
              <img
                src={cs.images.hero}
                alt={cs.client}
                style={S("width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.22,1,.36,1)")}
              />
            </div>
          </a>
        ))}
      </div>

      {/* CTA strip */}
      <section style={S(`padding:96px 28px;background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap")}>
          <div>
            <h2 style={S("margin:0 0 14px;font-size:clamp(26px,3.5vw,48px);font-weight:500;letter-spacing:-0.04em")}>
              Your project could be next
            </h2>
            <p style={S("margin:0;font-size:16px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:420px")}>
              Free consultation, honest strategy, no obligation. Let&apos;s talk about what you need.
            </p>
          </div>
          <a
            href="/#contact"
            style={S("display:inline-flex;align-items:center;gap:12px;padding:18px 32px;background:#FF3D8F;border-radius:100px;font-size:14px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none;flex-shrink:0")}
          >
            Start a project →
          </a>
        </div>
      </section>

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
