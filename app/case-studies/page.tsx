import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Creators Touch Global",
  description:
    "Detailed case studies showing real results for real businesses. See how Creators Touch Global helped 2000+ brands grow with websites, SEO, branding, and digital marketing.",
  alternates: { canonical: "https://creatorstouchglobal.com/case-studies" },
  keywords: ["case studies", "web design case studies", "digital marketing results", "website design results", "seo case studies"],
  openGraph: {
    title: "Case Studies — Creators Touch Global",
    description: "Detailed case studies showing real results for real businesses.",
    url: "https://creatorstouchglobal.com/case-studies",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: { card: "summary", title: "Case Studies — Creators Touch Global", description: "Real results for real businesses." },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            {CASE_STUDIES.length} case studies
          </span>
          <h1 className="m-0 mb-7 text-[clamp(48px,8vw,110px)] font-medium leading-[0.92] tracking-[-0.055em]">
            Case<br />
            <em className="font-serif italic font-normal text-ct-pink">Studies</em>
          </h1>
          <p className="m-0 text-[clamp(16px,1.8vw,20px)] leading-[1.65] text-ct-fg/50 max-w-[540px]">
            Real businesses. Real challenges. Real results. Every case study here shows exactly what we did, how we did it, and the measurable impact it had.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="px-7 py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 no-underline text-ct-fg p-6 rounded-2xl border border-ct-fg/8 hover:border-ct-fg/20 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ct-card">
                <img
                  src={cs.images.hero}
                  alt={cs.client}
                  loading="lazy"
                  className="w-full h-full object-cover object-top block transition-transform duration-700 [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-ct-fg/28">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ct-fg/42">{cs.category}</span>
                </div>
                <h2 className="m-0 text-[clamp(24px,3vw,36px)] font-medium tracking-[-0.04em]" style={{ color: cs.accentColor }}>
                  {cs.client}
                </h2>
                <p className="m-0 font-serif italic text-[18px] leading-[1.4] text-ct-fg/65">
                  {cs.tagline}
                </p>
                <p className="m-0 text-[14px] leading-[1.65] text-ct-fg/45 line-clamp-3">
                  {cs.summary}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {cs.results.slice(0, 3).map((r) => (
                    <div key={r.label} className="flex flex-col gap-1">
                      <span className="text-[20px] font-medium tracking-[-0.03em]" style={{ color: cs.accentColor }}>{r.value}</span>
                      <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-ct-fg/38">{r.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cs.services.map((s) => (
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
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="m-0 mb-4 text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.04em]">
            Your project could be next.
          </h2>
          <p className="m-0 mb-8 text-[17px] leading-[1.6] text-ct-fg/55 max-w-[440px] mx-auto">
            Free consultation, honest strategy, no obligation. Tell us about your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-[18px] bg-ct-pink rounded-full text-[14px] font-medium tracking-[-0.02em] text-ct-bg no-underline"
          >
            Start a project &rarr;
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
