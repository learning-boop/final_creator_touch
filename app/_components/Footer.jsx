"use client";

const SOCIALS = [
  {
    label: "Instagram", href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "LinkedIn", href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    label: "Facebook", href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    )
  },
  {
    label: "X", href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
];

function FooterLink({ href, label }) {
  return (
    <a href={href} className="block overflow-hidden no-underline" style={{ height: 14, lineHeight: "14px", color: "rgba(244,243,241,0.42)" }}>
      <span className="foot-roll-inner block transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.76,0,.24,1)]">
        <span className="block" style={{ height: 14 }}>{label}</span>
        <span aria-hidden="true" className="block" style={{ height: 14, color: "#F4F3F1" }}>{label}</span>
      </span>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.foot-roll-wrap:hover .foot-roll-inner{transform:translateY(-50%)}` }} />
      <footer className="foot-roll-wrap relative z-[1] flex flex-col md:flex-row justify-between items-start md:items-end gap-3.5 md:gap-8 px-[18px] py-6 md:px-7 md:py-8 border-t border-ct-fg/10 bg-ct-bg">
        <div className="flex flex-col gap-4">
          <img src="/assets/images/logo/creator-touch.png" alt="creatorstouchglobal.com" className="w-36 h-36 block object-contain" style={{ mixBlendMode: "screen" }} />
          <div className="flex gap-2.5">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="flex items-center justify-center w-[34px] h-[34px] border border-ct-fg/14 rounded-full text-ct-fg/45 transition-[color,border-color] duration-[250ms] hover:text-ct-fg hover:border-ct-fg/40">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex flex-wrap gap-3.5 gap-x-4 md:gap-6 font-mono text-[10px] tracking-[0.14em] uppercase">
            <FooterLink href="/portfolio" label="Portfolio" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/blog" label="Blog" />
            <FooterLink href="/about" label="About" />
            <FooterLink href="/contact" label="Contact" />
            <FooterLink href="/careers" label="Careers" />
          </div>
          <div className="flex flex-wrap gap-3.5 gap-x-4 md:gap-6 font-mono text-[10px] tracking-[0.14em] uppercase">
            <FooterLink href="/privacy-policy" label="Privacy Policy" />
            <FooterLink href="/terms-and-conditions" label="Terms & Conditions" />
          </div>
          <div className="flex items-center gap-3">
            {[
              ["Visa", "ChatGPT Image Sep 22, 2026, 01_41_12 PM.png"],
              ["Mastercard", "ChatGPT Image Sep 22, 2026, 01_41_18 PM.png"],
              ["RuPay", "ChatGPT Image Sep 22, 2026, 01_41_22 PM.png"],
            ].map(([alt, file]) => (
              <img key={alt} src={`/assets/images/clients/${file}`} alt={alt} className="h-6 md:h-7 w-auto object-contain opacity-60" />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
