import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "Portfolio — Creators Touch Global",
  description:
    "Browse our portfolio of 2000+ projects — websites, brands, e-commerce stores, and digital campaigns for businesses across India, UK, UAE, Singapore, and USA.",
  alternates: { canonical: "https://creatorstouchglobal.com/portfolio" },
  keywords: ["creators touch portfolio", "web design portfolio", "digital agency portfolio", "website design examples", "best websites india"],
  openGraph: {
    title: "Portfolio — Creators Touch Global",
    description: "Browse our portfolio of 2000+ projects — websites, brands, and digital campaigns.",
    url: "https://creatorstouchglobal.com/portfolio",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: { card: "summary", title: "Portfolio — Creators Touch Global", description: "Browse our portfolio of 2000+ projects." },
};

export default function PortfolioPage() {
  const categories = [...new Set(CASE_STUDIES.map((cs) => cs.category.split(" · ")[0]))];

  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            {CASE_STUDIES.length} featured projects
          </span>
          <h1 className="m-0 mb-7 text-[clamp(48px,8vw,110px)] font-medium leading-[0.92] tracking-[-0.055em]">
            Our<br />
            <em className="font-serif italic font-normal text-ct-fg/45">Portfolio</em>
          </h1>
          <p className="m-0 text-[clamp(16px,1.8vw,20px)] leading-[1.65] text-ct-fg/50 max-w-[540px]">
            Every project here started with a real business problem and ended with measurable results. Websites, brands, e-commerce stores, and digital campaigns — built by our in-house team.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="px-7 py-8 border-b border-ct-fg/10">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/35 self-center mr-3">Filter:</span>
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-1.5 rounded-full border border-ct-fg/12 font-mono text-[10px] tracking-[0.12em] uppercase text-ct-fg/60">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-7 py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group block no-underline text-ct-fg rounded-2xl overflow-hidden border border-ct-fg/8 hover:border-ct-fg/20 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ct-card">
                <img
                  src={cs.images.hero}
                  alt={cs.client}
                  loading="lazy"
                  className="w-full h-full object-cover object-top block transition-transform duration-700 [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ct-fg/42">{cs.category}</span>
                <h3 className="m-0 text-[18px] font-medium tracking-[-0.03em]" style={{ color: cs.accentColor }}>{cs.client}</h3>
                <p className="m-0 text-[13px] leading-[1.55] text-ct-fg/50 line-clamp-2">{cs.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cs.services.slice(0, 3).map((s) => (
                    <span key={s} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1 border border-ct-fg/10 rounded-full text-ct-fg/40">{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-7 py-24 bg-ct-card border-t border-ct-fg/10">
        <div className="max-w-[960px] mx-auto flex justify-between items-center gap-10 flex-wrap">
          <div>
            <h2 className="m-0 mb-4 text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.04em]">
              Your project could be next.
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-ct-fg/55 max-w-[440px]">
              Free consultation, honest strategy, no obligation. Tell us about your business.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-[18px] rounded-full bg-ct-pink text-[14px] font-medium tracking-[-0.02em] text-ct-bg no-underline"
            >
              Start a project &rarr;
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-[18px] rounded-full border border-ct-fg/10 text-[14px] tracking-[-0.02em] text-ct-fg no-underline hover:border-ct-fg/30 transition-colors"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
