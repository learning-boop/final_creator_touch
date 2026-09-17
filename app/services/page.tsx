import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Creators Touch Global",
  description:
    "Digital marketing, website design, brand identity, e-commerce, and automation services tailored for Indian small businesses ready to grow.",
  alternates: { canonical: "https://creatorstouchglobal.com/services" },
  keywords: ["web design services vijayawada", "digital marketing services", "SEO services vijayawada", "ecommerce development", "shopify india", "branding agency", "whatsapp automation"],
  openGraph: {
    title: "Services — Creators Touch Global",
    description: "Digital marketing, website design, brand identity, e-commerce, and automation services for Indian small businesses.",
    url: "https://creatorstouchglobal.com/services",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Services — Creators Touch Global",
    description: "Digital marketing, website design, brand identity, e-commerce, and automation services for Indian small businesses.",
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

const SERVICES = [
  {
    num: "01",
    title: "Get More Customers",
    color: "#FF3D8F",
    desc: "Stop relying on word-of-mouth alone. We run targeted ads and build your online presence so new customers find you every day.",
    items: [
      { name: "Google Search Ads", detail: "Show up when people search for your exact service — pay only for real clicks." },
      { name: "Meta & Instagram Ads", detail: "Reach thousands of people in your city, your niche, your price range." },
      { name: "Search Engine Optimisation", detail: "Rank higher on Google without paying per click — long-term, compounding growth." },
      { name: "Landing Pages", detail: "Purpose-built pages that turn ad clicks into calls, messages, and sales." },
    ],
  },
  {
    num: "02",
    title: "Build a Better Website",
    color: "#29A8DC",
    desc: "Your website is your most important salesperson — it works 24 hours a day. We build fast, beautiful, mobile-first websites that actually convert.",
    items: [
      { name: "Website Design", detail: "Clean, premium designs that make your business look credible and trustworthy." },
      { name: "Website Development", detail: "Rock-solid Next.js builds — fast, secure, and easy to update." },
      { name: "Mobile Optimisation", detail: "Over 80 % of your customers are on phones. We make sure every pixel is perfect." },
      { name: "Speed & Performance", detail: "A slow site loses sales. We optimise load times, Core Web Vitals, and uptime." },
    ],
  },
  {
    num: "03",
    title: "Build a Stronger Brand",
    color: "#cc0066",
    desc: "People buy from brands they recognise and trust. We craft a visual and verbal identity that makes you instantly memorable.",
    items: [
      { name: "Logo & Brand Identity", detail: "A professional logo, colours, and typography system — cohesive across every touchpoint." },
      { name: "Brand Guidelines", detail: "A clear rulebook so your team, printers, and social posts always look consistent." },
      { name: "Copywriting", detail: "Words that speak your customer's language — headlines, taglines, website copy." },
      { name: "Social Media Visuals", detail: "Feed-ready graphics, Reels covers, and stories templates that build brand recognition." },
    ],
  },
  {
    num: "04",
    title: "Sell Products Online",
    color: "#96BF48",
    desc: "From a single product to a full catalogue — we build e-commerce stores that make buying simple, fast, and trustworthy.",
    items: [
      { name: "Shopify Store Design", detail: "Beautiful, conversion-optimised Shopify stores that look great and sell more." },
      { name: "Product Catalogues", detail: "Organised, searchable catalogues with great photography guidelines and copy." },
      { name: "Secure Checkout", detail: "Smooth checkout flows with trusted payment gateways — UPI, cards, COD." },
      { name: "Inventory Management", detail: "Set up stock tracking, low-stock alerts, and order management from day one." },
    ],
  },
  {
    num: "05",
    title: "Save Time with Automation",
    color: "#25D366",
    desc: "Stop doing manually what a system can do for you. We automate follow-ups, confirmations, and reminders so you can focus on the work that matters.",
    items: [
      { name: "WhatsApp Automation", detail: "Instant replies, lead follow-ups, and order updates — all on WhatsApp." },
      { name: "Order Confirmations", detail: "Automatic booking and order confirmations sent the moment a customer pays." },
      { name: "Appointment Reminders", detail: "Reduce no-shows with automated reminders via WhatsApp or SMS." },
      { name: "Lead Follow-ups", detail: "Never let a hot lead go cold — automated sequences that nurture and convert." },
    ],
  },
];

export default function ServicesPage() {
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
          <a href="/about" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>About</a>
          <a href="/blog" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Blog</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={S("padding:96px 28px 72px;border-bottom:" + HAIR)}>
        <div style={S("max-width:960px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            What we do
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(42px,7vw,96px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            Services
          </h1>
          <p style={S(`${SERIF};font-size:clamp(18px,2.2vw,26px);line-height:1.5;color:rgba(244,243,241,0.65);max-width:580px;margin:0`)}>
            Five ways we help Indian small businesses grow faster, look better, and work smarter.
          </p>
        </div>
      </section>

      {/* Services list */}
      <div style={S("max-width:960px;margin:0 auto;padding:0 28px")}>
        {SERVICES.map((svc, idx) => (
          <section key={svc.num} style={S(`padding:72px 0;border-bottom:${idx < SERVICES.length - 1 ? HAIR : "none"}`)}>

            {/* Header row */}
            <div style={S("display:grid;grid-template-columns:80px 1fr;gap:32px;align-items:start;margin-bottom:48px")}>
              <span style={S(`${MONO};font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.28);padding-top:4px`)}>
                {svc.num}
              </span>
              <div>
                <h2 style={S(`margin:0 0 18px;font-size:clamp(28px,4vw,52px);font-weight:500;letter-spacing:-0.04em;color:${svc.color}`)}>
                  {svc.title}
                </h2>
                <p style={S("margin:0;font-size:clamp(15px,1.6vw,18px);line-height:1.65;color:rgba(244,243,241,0.6);max-width:540px")}>
                  {svc.desc}
                </p>
              </div>
            </div>

            {/* Item cards */}
            <div style={S("display:grid;grid-template-columns:repeat(2,1fr);gap:2px;margin-left:112px")}>
              {svc.items.map((item) => (
                <div key={item.name} style={S(`padding:28px 24px;background:#0C0D10;border-radius:4px;display:flex;flex-direction:column;gap:10px`)}>
                  <h3 style={S("margin:0;font-size:15px;font-weight:500;letter-spacing:-0.025em;color:#F4F3F1")}>
                    {item.name}
                  </h3>
                  <p style={S("margin:0;font-size:13px;line-height:1.6;color:rgba(244,243,241,0.48)")}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA strip */}
      <section style={S(`padding:96px 28px;background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:960px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap")}>
          <div>
            <h2 style={S("margin:0 0 14px;font-size:clamp(28px,4vw,52px);font-weight:500;letter-spacing:-0.04em")}>
              Ready to start?
            </h2>
            <p style={S("margin:0;font-size:17px;line-height:1.6;color:rgba(244,243,241,0.55);max-width:440px")}>
              Tell us what you need. We&apos;ll put together a plan built around your business and your budget.
            </p>
          </div>
          <div style={S("display:flex;gap:16px;flex-wrap:wrap")}>
            <a
              href="/contact"
              style={S("display:inline-flex;align-items:center;gap:12px;padding:18px 32px;background:#FF3D8F;border-radius:100px;font-size:14px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none")}
            >
              Get a free consultation →
            </a>
            <a
              href="/work"
              style={S(`display:inline-flex;align-items:center;gap:12px;padding:18px 32px;border:${HAIR};border-radius:100px;font-size:14px;letter-spacing:-0.02em;color:#F4F3F1;text-decoration:none`)}
            >
              See our work
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
