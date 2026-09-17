import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Creators Touch Global",
  description:
    "17+ years of helping Indian businesses look credible, grow digitally, and compete globally. Learn who we are and why we care.",
  alternates: { canonical: "https://creatorstouchglobal.com/about" },
  keywords: ["about creators touch", "digital studio vijayawada", "web design agency india", "creators touch team", "M.S. Hari Krishna"],
  openGraph: {
    title: "About — Creators Touch Global",
    description: "17+ years of helping Indian businesses look credible, grow digitally, and compete globally.",
    url: "https://creatorstouchglobal.com/about",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "About — Creators Touch Global",
    description: "17+ years of helping Indian businesses look credible, grow digitally, and compete globally.",
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
  { value: "17+", label: "Years in business" },
  { value: "2000+", label: "Projects delivered" },
  { value: "12+", label: "Industries served" },
  { value: "3", label: "Countries active" },
];

const VALUES = [
  {
    title: "Clarity over complexity",
    desc: "We explain everything in plain language. No jargon, no hidden fees, no surprises. You always know what we are doing and why.",
  },
  {
    title: "Results, not just deliverables",
    desc: "A logo is not the goal. More customers are. We measure success by what changes in your business, not by what we hand over.",
  },
  {
    title: "Made for India",
    desc: "We understand the Indian customer, the Indian market, and the Indian business owner. Everything we build is grounded in that reality.",
  },
  {
    title: "Long-term thinking",
    desc: "We do not chase quick wins. We build systems, brands, and assets that compound over time and keep working for you.",
  },
];

const TIMELINE = [
  { year: "2007", event: "Founded in vijayawada as a graphic design studio serving local businesses." },
  { year: "2012", event: "Expanded into digital — websites, social media, and early SEO for Indian SMEs." },
  { year: "2017", event: "Launched performance marketing practice. First international client (UAE)." },
  { year: "2020", event: "Pivoted fully remote. Doubled team size. Added WhatsApp automation and e-commerce builds." },
  { year: "2024", event: "Opened presence in UK. Serving clients across India, UAE, and Europe." },
  { year: "2026", event: "500+ projects. Building the definitive digital studio for Indian small business." },
];

export default function AboutPage() {
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
      <section style={S("padding:96px 28px 80px;border-bottom:" + HAIR)}>
        <div style={S("max-width:960px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            Who we are
          </p>
          <h1 style={S("margin:0 0 36px;font-size:clamp(42px,7vw,96px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            About us
          </h1>
          <p style={S(`${SERIF};font-size:clamp(20px,2.6vw,32px);line-height:1.45;color:rgba(244,243,241,0.75);max-width:680px;margin:0`)}>
            We are a digital studio founded in Vijayawada, built for the small business owner who is serious about growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div style={S(`display:grid;grid-template-columns:repeat(4,1fr);border-bottom:${HAIR}`)}>
        {STATS.map((s) => (
          <div key={s.label} style={S(`padding:40px 28px;border-right:${HAIR};display:flex;flex-direction:column;gap:8px`)}>
            <span style={S("font-size:clamp(28px,4vw,52px);font-weight:500;letter-spacing:-0.05em;color:#FF3D8F")}>{s.value}</span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.4)`)}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div style={S("max-width:960px;margin:0 auto;padding:0 28px")}>

        {/* Mission */}
        <div style={S(`display:grid;grid-template-columns:200px 1fr;gap:48px;padding:80px 0;border-bottom:${HAIR}`)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>
            Our mission
          </span>
          <div>
            <p style={S("margin:0 0 24px;font-size:clamp(17px,1.9vw,22px);line-height:1.6;color:rgba(244,243,241,0.78)")}>
              Most digital agencies are built for big brands with big budgets. We built Creators Touch for everyone else — the shop owner in Bengaluru, the clinic in Pune, the clothing label in Surat trying to reach customers online.
            </p>
            <p style={S("margin:0;font-size:clamp(15px,1.6vw,18px);line-height:1.7;color:rgba(244,243,241,0.52)")}>
              We believe great design and smart marketing should not be a luxury. Our mission is to close the gap between what Indian small businesses look like and what they deserve to look like — so they can compete, grow, and thrive.
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={S(`padding:80px 0;border-bottom:${HAIR}`)}>
          <div style={S("display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:48px")}>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>
              How we work
            </span>
            <h2 style={S("margin:0;font-size:clamp(22px,3vw,38px);font-weight:500;letter-spacing:-0.04em")}>
              Principles we never compromise on
            </h2>
          </div>
          <div style={S("display:grid;grid-template-columns:repeat(2,1fr);gap:2px;margin-left:248px")}>
            {VALUES.map((v) => (
              <div key={v.title} style={S("padding:32px 28px;background:#0C0D10;border-radius:4px")}>
                <h3 style={S("margin:0 0 12px;font-size:17px;font-weight:500;letter-spacing:-0.03em;color:#F4F3F1")}>{v.title}</h3>
                <p style={S("margin:0;font-size:14px;line-height:1.65;color:rgba(244,243,241,0.5)")}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={S(`display:grid;grid-template-columns:200px 1fr;gap:48px;padding:80px 0;border-bottom:${HAIR}`)}>
          <span style={S(`${MONO};font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(244,243,241,0.35);padding-top:6px`)}>
            Our story
          </span>
          <div style={S("display:flex;flex-direction:column;gap:0")}>
            {TIMELINE.map((item, i) => (
              <div key={item.year} style={S(`display:flex;gap:32px;padding:28px 0;border-bottom:${i < TIMELINE.length - 1 ? "1px solid rgba(244,243,241,0.06)" : "none"}`)}>
                <span style={S(`${MONO};font-size:11px;letter-spacing:0.1em;color:#FF3D8F;flex-shrink:0;min-width:44px;padding-top:2px`)}>
                  {item.year}
                </span>
                <p style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.6)")}>
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div style={S("padding:80px 0")}>
          <p style={S(`${SERIF};font-size:clamp(22px,3vw,38px);line-height:1.4;color:rgba(244,243,241,0.75);max-width:700px;margin:0`)}>
            &ldquo;We started as designers who cared about craft. We grew into a full-service studio that cares about outcomes. The craft never left.&rdquo;
          </p>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.3);margin:24px 0 0`)}>
            — Founders, Creators Touch Global
          </p>
        </div>

      </div>

      {/* CTA strip */}
      <section style={S(`padding:80px 28px;background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:960px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap")}>
          <div>
            <h2 style={S("margin:0 0 14px;font-size:clamp(24px,3.5vw,44px);font-weight:500;letter-spacing:-0.04em")}>
              Work with us
            </h2>
            <p style={S("margin:0;font-size:16px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:400px")}>
              Free consultation, honest advice, no obligation. Tell us about your business and we&apos;ll tell you exactly how we can help.
            </p>
          </div>
          <div style={S("display:flex;gap:16px;flex-wrap:wrap")}>
            <a
              href="/contact"
              style={S("display:inline-flex;align-items:center;gap:12px;padding:18px 32px;background:#FF3D8F;border-radius:100px;font-size:14px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none")}
            >
              Get in touch →
            </a>
            <a
              href="/services"
              style={S(`display:inline-flex;align-items:center;gap:12px;padding:18px 32px;border:${HAIR};border-radius:100px;font-size:14px;letter-spacing:-0.02em;color:#F4F3F1;text-decoration:none`)}
            >
              Our services
            </a>
          </div>
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
