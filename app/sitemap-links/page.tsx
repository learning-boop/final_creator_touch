import type { Metadata } from "next";
import Link from "next/link";
import { INDIVIDUAL_SERVICES } from "@/app/_data/individual-services";
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
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries We Serve" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact / Start a Project" },
  { href: "/services/all", label: "All Services & Locations" },
  { href: "/sitemap-links", label: "All Pages Directory" },
];

export default function SitemapLinksPage() {
  const totalPages = CORE_PAGES.length + INDIVIDUAL_SERVICES.length + CASE_STUDIES.length + BLOG_POSTS.length;

  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
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

        {/* ── Individual Service Pages ── */}
        <section className="py-14">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">04</span>
            <h2 className="m-0 text-[clamp(24px,3vw,40px)] font-medium tracking-[-0.04em]">Service Pages</h2>
            <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28 ml-auto">{INDIVIDUAL_SERVICES.length} pages</span>
          </div>

          {Array.from(new Set(INDIVIDUAL_SERVICES.map((s) => s.category))).map((category) => (
            <div key={category} className="mb-10 last:mb-0">
              <h3 className="m-0 mb-4 text-[18px] font-medium tracking-[-0.02em] text-ct-fg/60">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {INDIVIDUAL_SERVICES.filter((s) => s.category === category).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="p-4 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors"
                  >
                    <span className="text-[14px] font-medium text-ct-fg block">{s.title}</span>
                    <span className="text-[11px] text-ct-fg/30 font-mono block mt-1">/services/{s.slug}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

    </div>
  );
}
