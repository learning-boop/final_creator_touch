import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, CITIES } from "@/app/_data/services-cities";

export const metadata: Metadata = {
  title: "All Services & Locations — Creators Touch Global",
  description:
    "Browse all digital services offered by Creators Touch Global across Vijayawada, Guntur, Hyderabad, Amaravati, Visakhapatnam, Tirupati, and Rajahmundry. Website development, SEO, branding, e-commerce, and more.",
  alternates: { canonical: "https://creatorstouchglobal.com/services/all" },
  openGraph: {
    title: "All Services & Locations — Creators Touch Global",
    description:
      "Browse all digital services offered by Creators Touch Global across 7 cities. Website development, SEO, branding, e-commerce, and more.",
    url: "https://creatorstouchglobal.com/services/all",
    siteName: "Creators Touch Global",
    type: "website",
  },
};

export default function AllServicesPage() {
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
            {SERVICES.length} Services &middot; {CITIES.length} Cities &middot; {SERVICES.length * CITIES.length} Pages
          </span>
          <h1 className="m-0 mb-7 text-[clamp(36px,6vw,80px)] font-medium leading-[0.96] tracking-[-0.05em]">
            All Services
            <br />
            <span className="font-serif italic font-normal text-ct-fg/45">&amp; Locations</span>
          </h1>
          <p className="m-0 text-[17px] leading-[1.75] text-ct-fg/55 max-w-[560px]">
            Browse every service we offer across every city we serve. Click any link to learn more about what we can do for your business in your city.
          </p>
        </div>
      </section>

      {/* Quick city jump */}
      <section className="px-7 py-8 border-b border-ct-fg/10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/35 mr-5">Jump to city:</span>
          <div className="inline-flex flex-wrap gap-2 mt-2">
            {CITIES.map((city) => (
              <a
                key={city.slug}
                href={`#${city.slug}`}
                className="px-4 py-1.5 rounded-full border border-ct-fg/12 font-mono text-[10px] tracking-[0.12em] uppercase text-ct-fg/60 no-underline hover:border-ct-fg/30 hover:text-ct-fg transition-colors"
              >
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services grouped by city */}
      <div className="max-w-[1100px] mx-auto px-7">
        {CITIES.map((city, ci) => (
          <section key={city.slug} id={city.slug} className={`py-16 ${ci < CITIES.length - 1 ? "border-b border-ct-fg/10" : ""}`}>
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <h2 className="m-0 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
                {city.name}
              </h2>
            </div>
            <p className="m-0 mb-8 text-[15px] text-ct-fg/45 ml-[calc(11px*2+16px+4px)]">
              {city.name} is {city.tagline} &mdash; {SERVICES.length} services available
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-0 md:ml-[calc(11px*2+16px+4px)]">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}-in-${city.slug}`}
                  className="group flex items-start gap-3 p-5 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-[7px] shrink-0"
                    style={{ background: service.color }}
                  />
                  <div>
                    <span className="text-[14px] font-medium tracking-[-0.02em] text-ct-fg group-hover:text-ct-fg transition-colors block">
                      {service.title}
                    </span>
                    <span className="text-[12px] text-ct-fg/40 block mt-1">
                      Best {service.title.toLowerCase()} in {city.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Services grouped by service type */}
      <div className="max-w-[1100px] mx-auto px-7 border-t border-ct-fg/10">
        <section className="py-16">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            Browse by Service
          </span>
          <h2 className="m-0 mb-10 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
            All Services Across Cities
          </h2>

          {SERVICES.map((service) => (
            <div key={service.slug} className="mb-10 last:mb-0">
              <h3 className="m-0 mb-4 text-[20px] font-medium tracking-[-0.02em]" style={{ color: service.color }}>
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/services/${service.slug}-in-${city.slug}`}
                    className="px-4 py-2 rounded-full border text-[12px] no-underline hover:text-ct-fg transition-colors"
                    style={{ borderColor: service.color + "33", color: service.color + "cc" }}
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* CTA */}
      <section className="px-7 py-24 bg-ct-card border-t border-ct-fg/10">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="m-0 mb-4 text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.04em]">
            Ready to get started?
          </h2>
          <p className="m-0 mb-8 text-[17px] leading-[1.6] text-ct-fg/55 max-w-[440px] mx-auto">
            Tell us your city, your service, and your goals. We&apos;ll handle the rest.
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
