import type { Metadata } from "next";
import { CASE_STUDIES } from "@/app/_data/case-studies";
import WorkPageContent from "@/app/_components/work/WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work — Creators Touch Global",
  description:
    "Case studies and project details from Creators Touch Global — real results for businesses across aesthetics, healthcare, and more.",
  alternates: { canonical: "https://creatorstouchglobal.com/work" },
  keywords: ["creators touch portfolio", "web design case studies", "aesthetics website design", "healthcare website design", "uk aesthetics web design"],
  openGraph: {
    title: "Our Work — Creators Touch Global",
    description: "Case studies and real results for businesses across aesthetics, healthcare, and more.",
    url: "https://creatorstouchglobal.com/work",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Our Work — Creators Touch Global",
    description: "Case studies and real results for businesses across aesthetics, healthcare, and more.",
  },
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
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <style dangerouslySetInnerHTML={{ __html: `
        .wk-process{display:grid;grid-template-columns:1fr;gap:2px}
        @media(min-width:640px){.wk-process{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:850px){.wk-process{grid-template-columns:repeat(4,1fr)}}
      `}} />

      {/* ── Hero ── */}
      <section style={S("padding:64px 20px 48px;border-bottom:" + HAIR)}>
        <div style={S("max-width:1200px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            Selected projects
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(48px,8vw,110px);font-weight:500;line-height:0.92;letter-spacing:-0.055em")}>
            Work that<br />
            <em style={S(`${SERIF};color:#FF3D8F`)}>speaks for itself.</em>
          </h1>
          <p style={S("margin:0;font-size:clamp(16px,1.8vw,20px);line-height:1.65;color:rgba(244,243,241,0.5);max-width:540px")}>
            Every project here started with a real business problem and ended with measurable results. No templates. No shortcuts. Just work we are proud of.
          </p>
        </div>
      </section>

      {/* ── Interactive project section (client) ── */}
      <WorkPageContent caseStudies={CASE_STUDIES} />

      {/* ── Process strip ── */}
      <section style={S(`padding:80px 28px;border-top:${HAIR};border-bottom:${HAIR};background:#0C0D10`)}>
        <div style={S("max-width:1200px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 36px`)}>
            How every project starts
          </p>
          <div className="wk-process" style={S("gap:2px")}>
            {[
              { num: "01", title: "Discovery", desc: "We listen. You tell us what your business needs, who your customers are, and where you want to go." },
              { num: "02", title: "Strategy", desc: "We map the fastest path from where you are to where you want to be — then present it in plain language." },
              { num: "03", title: "Build", desc: "Design, develop, test. You see real progress every week and approve at every stage." },
              { num: "04", title: "Launch & grow", desc: "Go live, measure results, and iterate. We stay with you long after launch." },
            ].map((step) => (
              <div key={step.num} style={S("padding:28px 24px;background:rgba(244,243,241,0.02);border-radius:4px;display:flex;flex-direction:column;gap:14px")}>
                <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;color:#FF3D8F`)}>{step.num}</span>
                <h3 style={S("margin:0;font-size:17px;font-weight:500;letter-spacing:-0.03em")}>{step.title}</h3>
                <p style={S("margin:0;font-size:14px;line-height:1.65;color:rgba(244,243,241,0.45)")}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={S("padding:96px 28px;background:#08090A")}>
        <div style={S("max-width:1200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;gap:28px")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0`)}>
            Ready to start?
          </p>
          <h2 style={S("margin:0;font-size:clamp(32px,5vw,72px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            Your project could<br />
            <em style={S(`${SERIF};color:#FF3D8F`)}>be next.</em>
          </h2>
          <p style={S("margin:0;font-size:17px;line-height:1.65;color:rgba(244,243,241,0.48);max-width:460px")}>
            Free consultation, honest strategy, no obligation. Tell us about your business and we&apos;ll tell you exactly how we can help.
          </p>
          <div style={S("display:flex;gap:16px;flex-wrap:wrap;margin-top:8px")}>
            <a
              href="/contact"
              style={S("display:inline-flex;align-items:center;gap:12px;padding:18px 36px;background:#FF3D8F;border-radius:100px;font-size:15px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none")}
            >
              Start a project &rarr;
            </a>
            <a
              href="/services"
              style={S(`display:inline-flex;align-items:center;gap:12px;padding:18px 36px;border:${HAIR};border-radius:100px;font-size:15px;letter-spacing:-0.02em;color:#F4F3F1;text-decoration:none`)}
            >
              Our services
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={S(`padding:24px 28px;border-top:${HAIR};display:flex;justify-content:space-between;align-items:center`)}>
        <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.28)`)}>
          Creators Touch Global &middot; &copy; 2026
        </span>
        <a href="/" style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35);text-decoration:none`)}>
          Back to home
        </a>
      </footer>
    </div>
  );
}
