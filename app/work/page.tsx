import type { Metadata } from "next";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "Our Work — Creators Touch Global",
  description:
    "Case studies and project details from Creators Touch Global — real results for real Indian businesses across healthcare, brand, e-commerce, and more.",
  alternates: { canonical: "https://creatorstouchglobal.com/work" },
  keywords: ["creators touch portfolio", "web design case studies", "vijayawada projects", "healthcare website design", "ecommerce case study india"],
  openGraph: {
    title: "Our Work — Creators Touch Global",
    description: "Case studies and real results for Indian businesses across healthcare, education, retail and more.",
    url: "https://creatorstouchglobal.com/work",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Our Work — Creators Touch Global",
    description: "Case studies and real results for Indian businesses across healthcare, education, retail and more.",
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

const STATS = [
  { value: "7+", label: "Case studies" },
  { value: "6", label: "Industries" },
  { value: "95+", label: "Avg. mobile score" },
  { value: "100%", label: "Client retention" },
];

export default function WorkPage() {
  const featured = CASE_STUDIES[0];
  const rest = CASE_STUDIES.slice(1);

  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>

      {/* ── Nav ── */}
      <header style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:rgba(8,9,10,0.88);backdrop-filter:blur(18px);border-bottom:" + HAIR)}>
        <a href="/" style={S("display:flex;align-items:center;gap:10px;text-decoration:none;color:#F4F3F1")}>
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" style={S("width:32px;height:32px")} />
          <span style={S("font-size:13px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
        </a>
        <nav style={S(`display:flex;align-items:center;gap:20px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase`)}>
          <a href="/" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Home</a>
          <a href="/services" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Services</a>
          <a href="/about" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>About</a>
          <a href="/blog" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Blog</a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section style={S("padding:96px 28px 72px;border-bottom:" + HAIR)}>
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

      {/* ── Stats strip ── */}
      <div style={S(`display:grid;grid-template-columns:repeat(4,1fr);border-bottom:${HAIR}`)}>
        {STATS.map((s, i) => (
          <div key={s.label} style={S(`padding:36px 28px;display:flex;flex-direction:column;gap:8px;${i < STATS.length - 1 ? "border-right:" + HAIR : ""}`)}>
            <span style={S("font-size:clamp(26px,3.5vw,44px);font-weight:500;letter-spacing:-0.05em;color:#FF3D8F")}>{s.value}</span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.38)`)}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Category pills ── */}
      <div style={S(`padding:28px;border-bottom:${HAIR}`)}>
        <div style={S("max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:10px")}>
          {["All", ...Array.from(new Set(CASE_STUDIES.map(cs => cs.category.split(" · ")[0])))].map((cat) => (
            <span key={cat} style={S(`${MONO};font-size:10px;letter-spacing:0.12em;text-transform:uppercase;padding:8px 18px;border-radius:100px;color:${cat === "All" ? "#08090A" : "rgba(244,243,241,0.55)"};background:${cat === "All" ? "#F4F3F1" : "transparent"};border:1px solid ${cat === "All" ? "#F4F3F1" : "rgba(244,243,241,0.14)"};cursor:pointer`)}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured project (full-width) ── */}
      <a href={`/work/${featured.slug}`} style={S(`display:block;text-decoration:none;color:#F4F3F1;border-bottom:${HAIR}`)}>
        <div style={S("max-width:1200px;margin:0 auto;padding:72px 28px")}>
          <div style={S("display:flex;align-items:center;gap:14px;margin-bottom:24px")}>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:5px 14px;border:1px solid ${featured.accentColor}55;border-radius:100px;color:${featured.accentColor}`)}>
              Featured
            </span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.28)`)}>
              {featured.category}
            </span>
          </div>
          <div style={S("display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center")}>
            <div style={S("border-radius:20px;overflow:hidden;aspect-ratio:4/3;background:#0C0D10")}>
              <img src={featured.images.hero} alt={featured.client} style={S("width:100%;height:100%;object-fit:cover;display:block")} />
            </div>
            <div style={S("display:flex;flex-direction:column;gap:24px")}>
              <h2 style={S(`margin:0;font-size:clamp(36px,5vw,72px);font-weight:500;line-height:0.94;letter-spacing:-0.05em;color:${featured.accentColor}`)}>
                {featured.client}
              </h2>
              <p style={S(`${SERIF};font-size:clamp(17px,1.8vw,22px);line-height:1.5;color:rgba(244,243,241,0.65);margin:0;max-width:440px`)}>
                {featured.tagline}
              </p>
              <div style={S("display:flex;flex-wrap:wrap;gap:24px")}>
                {featured.results.slice(0, 3).map((r) => (
                  <div key={r.label} style={S("display:flex;flex-direction:column;gap:4px")}>
                    <span style={S(`font-size:clamp(18px,2vw,28px);font-weight:500;letter-spacing:-0.04em;color:${featured.accentColor}`)}>{r.value}</span>
                    <span style={S(`${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>{r.label}</span>
                  </div>
                ))}
              </div>
              <div style={S("display:flex;flex-wrap:wrap;gap:8px;margin-top:4px")}>
                {featured.services.slice(0, 4).map((s) => (
                  <span key={s} style={S(`${MONO};font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(244,243,241,0.1);border-radius:100px;color:rgba(244,243,241,0.4)`)}>
                    {s}
                  </span>
                ))}
              </div>
              <span style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.45);margin-top:8px`)}>
                View case study &rarr;
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* ── Project grid (alternating layout) ── */}
      <div style={S("max-width:1200px;margin:0 auto;padding:0 28px")}>
        {rest.map((cs, idx) => (
          <a
            key={cs.slug}
            href={`/work/${cs.slug}`}
            style={S(`display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:72px 0;border-bottom:${idx < rest.length - 1 ? HAIR : "none"};text-decoration:none;color:#F4F3F1`)}
          >
            {/* Image */}
            <div style={S(`${idx % 2 === 1 ? "order:2" : "order:1"};border-radius:16px;overflow:hidden;aspect-ratio:4/3;background:#0C0D10;position:relative`)}>
              <img
                src={cs.images.hero}
                alt={cs.client}
                loading="lazy"
                style={S("width:100%;height:100%;object-fit:cover;display:block")}
              />
              {/* Year badge */}
              <span style={S(`position:absolute;top:16px;left:16px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;padding:5px 14px;background:rgba(8,9,10,0.72);backdrop-filter:blur(8px);border:1px solid rgba(244,243,241,0.12);border-radius:100px;color:rgba(244,243,241,0.6)`)}>
                {cs.year}
              </span>
            </div>

            {/* Text */}
            <div style={S(idx % 2 === 1 ? "order:1" : "order:2")}>
              <div style={S("display:flex;align-items:center;gap:14px;margin-bottom:20px;flex-wrap:wrap")}>
                <span style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;padding:5px 14px;border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.5)`)}>
                  {cs.category}
                </span>
              </div>

              <h2 style={S(`margin:0 0 16px;font-size:clamp(30px,4vw,56px);font-weight:500;line-height:0.94;letter-spacing:-0.05em;color:${cs.accentColor}`)}>
                {cs.client}
              </h2>

              <p style={S(`${SERIF};font-size:clamp(16px,1.6vw,20px);line-height:1.5;color:rgba(244,243,241,0.58);margin:0 0 28px;max-width:420px`)}>
                {cs.tagline}
              </p>

              {/* Results */}
              <div style={S("display:flex;flex-wrap:wrap;gap:24px;margin-bottom:28px")}>
                {cs.results.slice(0, 2).map((r) => (
                  <div key={r.label} style={S("display:flex;flex-direction:column;gap:4px")}>
                    <span style={S(`font-size:clamp(18px,2vw,26px);font-weight:500;letter-spacing:-0.04em;color:${cs.accentColor}`)}>{r.value}</span>
                    <span style={S(`${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>{r.label}</span>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div style={S("display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px")}>
                {cs.services.slice(0, 3).map((s) => (
                  <span key={s} style={S(`${MONO};font-size:9px;letter-spacing:0.1em;text-transform:uppercase;padding:5px 12px;border:1px solid rgba(244,243,241,0.1);border-radius:100px;color:rgba(244,243,241,0.4)`)}>
                    {s}
                  </span>
                ))}
              </div>

              <span style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.45)`)}>
                View case study &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* ── Process strip ── */}
      <section style={S(`padding:80px 28px;border-top:${HAIR};border-bottom:${HAIR};background:#0C0D10`)}>
        <div style={S("max-width:1200px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 36px`)}>
            How every project starts
          </p>
          <div style={S("display:grid;grid-template-columns:repeat(4,1fr);gap:2px")}>
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
