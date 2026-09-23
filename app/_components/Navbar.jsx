"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

function RollLink({ href, label, h = 15, dim = "rgba(244,243,241,0.62)", hi = "#29A8DC" }) {
  return (
    <a href={href} className="block overflow-hidden" style={{ height: h, lineHeight: `${h}px`, color: dim }}>
      <span className="roll-inner block transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.76,0,.24,1)]">
        <span className="block" style={{ height: h }}>{label}</span>
        <span aria-hidden="true" className="block" style={{ height: h, color: hi }}>{label}</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-roll:hover .roll-inner{transform:translateY(-50%)}
      `}} />

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-ct-bg flex flex-col px-7 pt-4 pb-8" aria-modal="true" role="dialog" aria-label="Navigation menu">
          <div className="flex items-center justify-between pb-12">
            <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
              <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" className="w-16 h-16 block rounded-lg" style={{ mixBlendMode: "screen" }} />
              <span className="flex flex-col leading-[1.05]">
                <span className="text-sm font-semibold tracking-[-0.03em]">Creators Touch</span>
              </span>
            </a>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="bg-transparent border-none text-ct-fg cursor-pointer p-2 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col">
            {[["/portfolio","Portfolio"],["/services","Services"],["/blog","Blog"],["/about","About"],["/careers","Careers"],["/contact","Contact"]].map(([href, label], i) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                className="text-[clamp(36px,9vw,60px)] font-normal tracking-[-0.04em] text-ct-fg py-3 border-b border-ct-fg/8 leading-[1.1] no-underline"
                style={{ animationDelay: `${i * 60 + 40}ms` }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-wrap gap-6 pt-8">
            <a href="tel:+919885933339" className="font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/42 no-underline">+91 98859 33339</a>
            <a href="mailto:hello@creatorstouch.in" className="font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/42 no-underline">hello@creatorstouch.in</a>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        id="ct-header"
        className={`sticky top-0 z-50 flex items-center justify-between gap-6 px-[18px] py-3 md:px-7 md:py-4 border-b transition-[background,border-color,backdrop-filter] duration-[350ms] ${
          isHome
            ? "bg-[rgba(8,9,10,0)] border-transparent"
            : "bg-ct-bg/88 backdrop-blur-[18px] border-ct-fg/10"
        }`}
      >
        <a href="/" className="flex items-center">
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" className="h-8 md:h-10 w-auto block rounded" style={{ mixBlendMode: "screen" }} />
        </a>
        <nav className="nav-roll hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/62">
          <RollLink href="/portfolio" label="Portfolio" />
          <RollLink href="/services" label="Services" />
          <RollLink href="/blog" label="Blog" />
          <RollLink href="/about" label="About" />
          <RollLink href="/careers" label="Careers" />
          <a href="/contact" className="inline-flex items-center gap-2 px-4 py-[9px] border border-ct-fg/22 rounded-full text-ct-fg hover:bg-ct-fg hover:text-ct-bg hover:border-ct-fg transition-[background,color,border-color] duration-200 no-underline">Start a project</a>
        </nav>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="flex md:hidden bg-transparent border-none text-ct-fg cursor-pointer p-1.5 items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    </>
  );
}
