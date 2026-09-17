import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, CITIES } from "@/app/_data/services-cities";
import { BLOG_POSTS } from "@/app/_data/blog-posts";
import { CASE_STUDIES } from "@/app/_data/case-studies";

export const metadata: Metadata = {
  title: "All Pages — Creators Touch Global",
  description:
    "Complete directory of every page on Creators Touch Global — services, city pages, case studies, blog posts, and more.",
  alternates: { canonical: "https://creatorstouchglobal.com/sitemap-links" },
};

const CORE_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact / Start a Project" },
  { href: "/services/all", label: "All Services & Locations" },
  { href: "/sitemap-links", label: "All Pages Directory" },
];

export default function SitemapLinksPage() {
  const totalServiceCity = SERVICES.length * CITIES.length;
  const totalPages = CORE_PAGES.length + totalServiceCity + CASE_STUDIES.length + BLOG_POSTS.length;

  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-7 py-4 bg-ct-bg/88 backdrop-blur-[18px] border-b border-ct-fg/10">
        <Link href="/" className="flex items-center gap-2.5 no-underline text-ct-fg">
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" className="w-8 h-8" />
          <span className="text-[13px] font-semibold tracking-[-0.03em]">Creators Touch</span>
        </Link>
        <nav className="flex items-center gap-5 font-mono text-[10px] tracking-[0.14em] uppercase">
          <Link href="/" className="text-ct-fg/50 no-underline hover:text-ct-fg transition-colors">Home</Link>
          <Link href="/services" className="text-ct-fg/50 no-underline hover:text-ct-fg transition-colors">Services</Link>
          <Link href="/work" className="text-ct-fg/50 no-underline hover:text-ct-fg transition-colors">Portfolio</Link>
          <Link href="/about" className="text-ct-fg/50 no-underline hover:text-ct-fg transition-colors">About</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            Site Directory &middot; {totalPages} Pages
          </span>
          <h1 className="m-0 mb-5 text-[clamp(36px,6vw,72px)] font-medium leading-[0.96] tracking-[-0.05em]">
            All Pages
          </h1>
          <p className="m-0 text-[17px] leading-[1.75] text-ct-fg/55 max-w-[520px]">
            Complete directory of every page on Creators Touch Global.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-7">

        {/* ── Core Pages ── */}
        <section className="py-14 border-b border-ct-fg/10">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">01</span>
            <h2 className="m-0 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">Core Pages</h2>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28 ml-auto">{CORE_PAGES.length} pages</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CORE_PAGES.map((p) => (
              <Link key={p.href} href={p.href} className="p-4 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors">
                <span className="text-[14px] font-medium text-ct-fg block">{p.label}</span>
                <span className="text-[11px] text-ct-fg/30 font-mono block mt-1">{p.href}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section className="py-14 border-b border-ct-fg/10">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">02</span>
            <h2 className="m-0 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">Case Studies</h2>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28 ml-auto">{CASE_STUDIES.length} pages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CASE_STUDIES.map((cs) => (
              <Link key={cs.slug} href={`/work/${cs.slug}`} className="flex items-start gap-4 p-5 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors">
                <span className="w-2 h-2 rounded-full mt-[7px] shrink-0" style={{ background: cs.color }} />
                <div>
                  <span className="text-[14px] font-medium text-ct-fg block">{cs.client}</span>
                  <span className="text-[12px] text-ct-fg/40 block mt-1">{cs.category}</span>
                  <span className="text-[11px] text-ct-fg/25 font-mono block mt-1">/work/{cs.slug}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Blog Posts ── */}
        <section className="py-14 border-b border-ct-fg/10">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">03</span>
            <h2 className="m-0 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">Blog Posts</h2>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28 ml-auto">{BLOG_POSTS.length} pages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="flex items-start gap-4 p-5 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors">
                <span className="w-2 h-2 rounded-full mt-[7px] shrink-0" style={{ background: post.color }} />
                <div>
                  <span className="text-[14px] font-medium text-ct-fg block">{post.title}</span>
                  <span className="text-[12px] text-ct-fg/40 block mt-1">{post.cat} &middot; {post.date}</span>
                  <span className="text-[11px] text-ct-fg/25 font-mono block mt-1">/blog/{post.slug}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Service × City Pages ── */}
        <section className="py-14">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">04</span>
            <h2 className="m-0 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">Service &times; City Pages</h2>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28 ml-auto">{totalServiceCity} pages</span>
          </div>

          {SERVICES.map((service) => (
            <div key={service.slug} className="mb-10 last:mb-0">
              <h3 className="m-0 mb-4 text-[18px] font-medium tracking-[-0.02em]" style={{ color: service.color }}>
                {service.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/services/${service.slug}-in-${city.slug}`}
                    className="px-4 py-2.5 rounded-lg bg-ct-card border border-ct-fg/6 text-[12px] text-ct-fg/60 no-underline hover:border-ct-fg/16 hover:text-ct-fg transition-colors text-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

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
