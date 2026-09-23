import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "Industries We Serve — Creators Touch Global",
  description:
    "Creators Touch Global serves businesses across healthcare, aesthetics, education, retail, non-profit, recruitment, and pet care. 2000+ brands across India, UK, UAE, Singapore, and USA.",
  alternates: { canonical: "https://creatorstouchglobal.com/industries" },
  keywords: ["industries we serve", "healthcare website design", "aesthetics website design", "education website", "retail website", "ngo website"],
  openGraph: {
    title: "Industries We Serve — Creators Touch Global",
    description: "From healthcare to retail, education to aesthetics — we build digital solutions for every industry.",
    url: "https://creatorstouchglobal.com/industries",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: { card: "summary", title: "Industries We Serve — Creators Touch Global", description: "Digital solutions for every industry." },
};

const INDUSTRIES = [
  {
    name: "Healthcare",
    color: "#00C9A7",
    description: "Multi-speciality hospitals, clinics, paediatric centres, and therapy practices. We build websites that help patients find the right care, book appointments, and trust their provider — before they walk through the door.",
    stats: "10+ healthcare clients served",
  },
  {
    name: "Aesthetics",
    color: "#C9A227",
    description: "Medical aesthetics clinics, dermal filler practices, thread lifting specialists, and anti-wrinkle clinics. We create luxury digital experiences that build trust, educate patients, and drive high-value consultation bookings.",
    stats: "8+ aesthetics brands built",
  },
  {
    name: "Education",
    color: "#C94060",
    description: "Schools, colleges, training institutes, and e-learning platforms. We design websites that serve parents, students, and staff — with admissions, academics, and campus life all in one place.",
    stats: "5+ education institutions served",
  },
  {
    name: "Retail & E-commerce",
    color: "#D4A843",
    description: "Jewellery houses, fashion brands, grocery stores, and online retailers. We build e-commerce stores that look like your brand and sell like a machine — Shopify, WooCommerce, and custom platforms.",
    stats: "15+ retail brands launched online",
  },
  {
    name: "Non-Profit & NGO",
    color: "#E5A100",
    description: "Charitable organisations, social impact groups, and community foundations. We create emotionally compelling websites that drive donations, showcase impact, and recruit volunteers.",
    stats: "5+ non-profits supported",
  },
  {
    name: "Recruitment & HR",
    color: "#1B4F8A",
    description: "Job portals, recruitment agencies, and HR platforms. We build scalable web platforms that power hiring campaigns, candidate screening, and interview scheduling at scale.",
    stats: "20,000+ registrations per event",
  },
  {
    name: "Pet Care & Veterinary",
    color: "#2D2459",
    description: "Veterinary hospitals, pet stores, grooming services, and boarding facilities. We build warm, trust-driven websites that help pet owners find the right care for their companions.",
    stats: "Growing segment",
  },
  {
    name: "Hospitality & Food",
    color: "#E85D2A",
    description: "Restaurants, hotels, convention centres, and catering services. We create websites that showcase your space, menu, and events — driving reservations and enquiries.",
    stats: "10+ hospitality clients",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            {INDUSTRIES.length} Industries
          </span>
          <h1 className="m-0 mb-7 text-[clamp(48px,8vw,110px)] font-medium leading-[0.92] tracking-[-0.055em]">
            Industries<br />
            <em className="font-serif italic font-normal text-ct-fg/45">We Serve</em>
          </h1>
          <p className="m-0 text-[clamp(16px,1.8vw,20px)] leading-[1.65] text-ct-fg/50 max-w-[560px]">
            Every industry has its own language, its own customers, and its own challenges. We don&apos;t do one-size-fits-all — we build digital solutions tailored to how your industry works.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="px-7 py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          {INDUSTRIES.map((industry, i) => {
            const projects = CASE_STUDIES.filter((cs) =>
              cs.category.toLowerCase().includes(industry.name.toLowerCase().split(" ")[0])
            );

            return (
              <div key={industry.name} className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-start p-8 rounded-2xl border border-ct-fg/8 hover:border-ct-fg/16 transition-colors">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ background: industry.color }} />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-medium tracking-[-0.04em]" style={{ color: industry.color }}>
                    {industry.name}
                  </h2>
                  <p className="m-0 text-[15px] leading-[1.65] text-ct-fg/50 max-w-[600px]">
                    {industry.description}
                  </p>
                  {projects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {projects.slice(0, 4).map((p) => (
                        <Link
                          key={p.slug}
                          href={`/work/${p.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] no-underline hover:text-ct-fg transition-colors"
                          style={{ borderColor: p.accentColor + "44", color: p.accentColor }}
                        >
                          {p.client}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 self-center">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ct-fg/35">
                    {industry.stats}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-7 py-24 bg-ct-card border-t border-ct-fg/10">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="m-0 mb-4 text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.04em]">
            Don&apos;t see your industry?
          </h2>
          <p className="m-0 mb-8 text-[17px] leading-[1.6] text-ct-fg/55 max-w-[480px] mx-auto">
            We&apos;ve worked with 2000+ brands across every industry imaginable. Tell us about your business and we&apos;ll show you what we can do.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-[18px] bg-ct-pink rounded-full text-[14px] font-medium tracking-[-0.02em] text-ct-bg no-underline"
          >
            Get a free consultation &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-7 py-6 border-t border-ct-fg/10 flex justify-between items-center">
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/28">
          Creators Touch Global &middot; &copy; 2026
        </span>
        <Link href="/" className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">
          Back to home
        </Link>
      </footer>
    </div>
  );
}
