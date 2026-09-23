import type { Metadata } from "next";
import Link from "next/link";
import { INDIVIDUAL_SERVICES } from "@/app/_data/individual-services";

export const metadata: Metadata = {
  title: "All Services — Creators Touch Global",
  description:
    "Browse all digital services offered by Creators Touch Global — web design, branding, digital marketing, mobile apps, content writing, AI & automation, and more.",
  alternates: { canonical: "https://creatorstouchglobal.com/services/all" },
  openGraph: {
    title: "All Services — Creators Touch Global",
    description:
      "Browse all digital services offered by Creators Touch Global — web design, branding, digital marketing, mobile apps, content writing, AI & automation, and more.",
    url: "https://creatorstouchglobal.com/services/all",
    siteName: "Creators Touch Global",
    type: "website",
  },
};

// Derive unique ordered categories from the data
const CATEGORIES = Array.from(
  new Map(INDIVIDUAL_SERVICES.map((s) => [s.category, s.category])).keys()
);

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-7 pt-20 pb-16 border-b border-ct-fg/10">
        <div className="max-w-[1100px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            {INDIVIDUAL_SERVICES.length} Services &middot; {CATEGORIES.length} Categories
          </span>
          <h1 className="m-0 mb-7 text-[clamp(36px,6vw,80px)] font-medium leading-[0.96] tracking-[-0.05em]">
            All Services
            <br />
            <span className="font-serif italic font-normal text-ct-fg/45">we offer</span>
          </h1>
          <p className="m-0 text-[17px] leading-[1.75] text-ct-fg/55 max-w-[560px]">
            Browse every service we offer. Click any service to learn how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Services grouped by category */}
      <div className="max-w-[1100px] mx-auto px-7">
        {CATEGORIES.map((category, ci) => {
          const services = INDIVIDUAL_SERVICES.filter((s) => s.category === category);
          return (
            <section
              key={category}
              id={category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className={`py-16 ${ci < CATEGORIES.length - 1 ? "border-b border-ct-fg/10" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/28">
                  {String(ci + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="m-0 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
                    {category}
                  </h2>
                  <p className="m-0 mt-2 text-[14px] text-ct-fg/40 font-mono tracking-[0.06em]">
                    {services.length} service{services.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-0 md:ml-[calc(11px*2+16px+4px)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-3 p-5 rounded-xl bg-ct-card border border-ct-fg/6 no-underline hover:border-ct-fg/16 transition-colors"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-[7px] shrink-0"
                      style={{ background: s.color }}
                    />
                    <div>
                      <span className="text-[14px] font-medium tracking-[-0.02em] text-ct-fg group-hover:text-ct-fg transition-colors block">
                        {s.title}
                      </span>
                      <span className="text-[12px] text-ct-fg/40 block mt-1">
                        {s.shortDesc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
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

    </div>
  );
}
