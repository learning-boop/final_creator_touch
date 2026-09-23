import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Creators Touch Global",
  description:
    "Digital marketing, website design, brand identity, e-commerce, mobile apps, and automation services tailored for businesses ready to grow.",
  alternates: { canonical: "https://creatorstouchglobal.com/services" },
  keywords: ["web design services vijayawada", "digital marketing services", "SEO services vijayawada", "ecommerce development", "shopify india", "branding agency", "whatsapp automation", "mobile app development"],
  openGraph: {
    title: "Services — Creators Touch Global",
    description: "Digital marketing, website design, brand identity, e-commerce, and automation services for businesses.",
    url: "https://creatorstouchglobal.com/services",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Services — Creators Touch Global",
    description: "Digital marketing, website design, brand identity, e-commerce, and automation services for businesses.",
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

const SERVICE_CATEGORIES = [
  {
    title: "Web Design & Development",
    color: "#FF3D8F",
    items: [
      "Corporate Website",
      "E-Commerce Website",
      "Landing Page Design",
      "Responsive Web Design",
      "CMS Website Design",
      "Job Portal Website",
      "Real Estate Website & Portal",
      "Matrimony Website",
      "Redesigning Website",
      "Website Maintenance",
      "WordPress Development",
      "Shopify Store Design",
      "Next.js Development",
    ],
  },
  {
    title: "Design & Branding",
    color: "#29A8DC",
    items: [
      "Brand Identity",
      "Logo Design",
      "Package Design",
      "Graphic Design",
      "Infographics",
      "Brochure Design",
      "Social Media Pack",
      "Newsletter Design",
      "Web Banners",
      "Powerpoint Presentation",
      "E-Mail Template",
      "Brand Guidelines",
    ],
  },
  {
    title: "Digital Marketing",
    color: "#cc0066",
    items: [
      "Local Search SEO",
      "Search Engine Marketing",
      "Google Adwords",
      "Social Media Optimization",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Pay Per Click Management",
      "Online Reputation Management",
      "Conversion Rate Optimization",
      "Marketing Automation",
      "Display Advertising",
      "WhatsApp Automation",
    ],
  },
  {
    title: "Mobile Applications",
    color: "#96BF48",
    items: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
      "Hybrid App Development",
      "Progressive Web Apps",
    ],
  },
  {
    title: "Content Writing Services",
    color: "#25D366",
    items: [
      "Article Writing",
      "Content Writing",
      "Email Marketing Services",
      "Content Marketing Services",
      "Product Descriptions",
      "Blog Writing",
      "Copywriting",
      "Social Media Content",
    ],
  },
  {
    title: "AI & Automation",
    color: "#c9a227",
    items: [
      "AI Chatbot Integration",
      "WhatsApp Business Automation",
      "Lead Follow-up Automation",
      "Appointment Reminders",
      "Order Confirmation Flows",
      "CRM Integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <style dangerouslySetInnerHTML={{ __html: `
        .svc-grid{display:grid;grid-template-columns:1fr;gap:56px}
        @media(min-width:640px){.svc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1024px){.svc-grid{grid-template-columns:repeat(3,1fr)}}
        .svc-item{padding:14px 0;border-bottom:1px solid rgba(244,243,241,0.08);color:rgba(244,243,241,0.7);font-size:15px;letter-spacing:-0.01em;transition:color 0.2s,padding-left 0.2s}
        .svc-item:first-child{border-top:1px solid rgba(244,243,241,0.08)}
        .svc-item:hover{color:#F4F3F1;padding-left:8px}
      `}} />

      {/* Hero */}
      <section style={S("padding:96px 28px 72px;border-bottom:" + HAIR)}>
        <div style={S("max-width:1200px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            What we do
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(42px,7vw,96px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            Our Services
          </h1>
          <p style={S(`${SERIF};font-size:clamp(18px,2.2vw,26px);line-height:1.5;color:rgba(244,243,241,0.65);max-width:620px;margin:0`)}>
            Everything your business needs to grow online &mdash; strategy, design, development, marketing and automation, all under one roof.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={S("max-width:1200px;margin:0 auto;padding:72px 28px 96px")}>
        <div className="svc-grid">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h2 style={S(`margin:0 0 24px;font-size:20px;font-weight:600;letter-spacing:-0.03em;color:${cat.color}`)}>
                {cat.title}
              </h2>
              <div>
                {cat.items.map((item) => (
                  <a
                    key={item}
                    href={`/services/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="svc-item"
                    style={S("display:block;text-decoration:none;cursor:pointer")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section style={S(`border-top:${HAIR};border-bottom:${HAIR};background:#0C0D10`)}>
        <div style={S("max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr)")}>
          {[
            { value: "17+", label: "Years of experience" },
            { value: "2000+", label: "Projects delivered" },
            { value: "5", label: "Countries served" },
            { value: "95+", label: "Avg. performance score" },
          ].map((s, i) => (
            <div key={s.label} style={S(`padding:40px 28px;display:flex;flex-direction:column;gap:8px;${i < 3 ? "border-right:" + HAIR : ""}`)}>
              <span style={S("font-size:clamp(26px,3.5vw,44px);font-weight:500;letter-spacing:-0.05em;color:#FF3D8F")}>
                {s.value}
              </span>
              <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.38)`)}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section style={S("padding:96px 28px;background:#08090A")}>
        <div style={S("max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap")}>
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
              Get a free consultation &rarr;
            </a>
            <a
              href="/portfolio"
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
          Creators Touch Global &middot; &copy; 2026
        </span>
        <a href="/" style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35);text-decoration:none`)}>
          Back to home
        </a>
      </footer>
    </div>
  );
}
