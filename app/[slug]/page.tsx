import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, CITIES, getAllServiceCitySlugs, parseSlug, type ServiceData, type CityData } from "@/app/_data/services-cities";
import { CASE_STUDIES } from "@/app/_data/case-studies";

// ── Static params: all service-city combos ──
export function generateStaticParams() {
  return getAllServiceCitySlugs().map((slug) => ({ slug }));
}

// ── Metadata ──
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const match = parseSlug(slug);
  if (!match) return {};

  const { service, city } = match;
  const title = `Best ${service.title} in ${city.name} | Creators Touch Global`;
  const description = `Looking for the best ${service.title.toLowerCase()} in ${city.name}? Creators Touch Global delivers ${service.shortDesc.toLowerCase()} Trusted by 2000+ brands across ${city.state}.`;
  return {
    title,
    description,
    alternates: { canonical: `https://creatorstouchglobal.com/${slug}` },
    keywords: [
      ...service.keywords.map((k) => `${k} ${city.name.toLowerCase()}`),
      `best ${service.title.toLowerCase()} in ${city.name.toLowerCase()}`,
      `${service.title.toLowerCase()} agency ${city.name.toLowerCase()}`,
      `${service.title.toLowerCase()} company ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://creatorstouchglobal.com/${slug}`,
      siteName: "Creators Touch Global",
      type: "website",
      images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
    },
    twitter: { card: "summary", title, description },
  };
}

// ── Page ──
export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const match = parseSlug(slug);
  if (!match) notFound();

  const { service, city } = match;
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5);
  const relatedProjects = CASE_STUDIES.filter((cs) => service.relatedSlugs.includes(cs.slug));

  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="max-w-[960px] mx-auto px-7 pt-8">
        <nav className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/35 flex items-center gap-2">
          <Link href="/" className="text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-ct-fg/60">{service.title} in {city.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="px-7 pt-16 pb-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-7">
            {city.name}, {city.state}
          </span>
          <h1 className="m-0 mb-7 text-[clamp(36px,6vw,80px)] font-medium leading-[0.96] tracking-[-0.05em]">
            Best{" "}
            <span style={{ color: service.color }}>{service.title}</span>
            <br />
            in {city.name}
          </h1>
          <p className="font-serif italic text-[clamp(20px,2.5vw,32px)] leading-[1.35] text-ct-fg/75 max-w-[700px] m-0 mb-8">
            {service.tagline}
          </p>
          <p className="text-[17px] leading-[1.75] text-ct-fg/55 max-w-[620px] m-0">
            {service.longDesc}
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="px-7 py-20 border-b border-ct-fg/10 bg-[#0C0D10]">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            Why Creators Touch
          </span>
          <h2 className="m-0 mb-6 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
            17 Years. 2000+ Brands.{" "}
            <em className="font-serif italic font-normal" style={{ color: service.color }}>One Standard.</em>
          </h2>
          <p className="m-0 mb-10 text-[17px] leading-[1.75] text-ct-fg/60 max-w-[640px]">
            {service.aboutUs}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2000+", label: "Brands served" },
              { value: "17+", label: "Years of experience" },
              { value: "5", label: "Countries" },
              { value: "100%", label: "In-house team" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="text-[clamp(28px,3.5vw,44px)] font-medium tracking-[-0.04em]" style={{ color: service.color }}>{s.value}</span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/38">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this city */}
      <section className="px-7 py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            Why {city.name}
          </span>
          <h2 className="m-0 mb-6 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
            Why Businesses in {city.name} Choose Us
          </h2>
          <p className="m-0 mb-10 text-[17px] leading-[1.75] text-ct-fg/60 max-w-[640px]">
            {city.name} is {city.tagline}. Local businesses here need a digital partner who understands the market, speaks the language, and delivers results — not just promises. With 2000+ brands served since 2008, Creators Touch Global is the most trusted {service.title.toLowerCase()} agency in {city.name}.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-7 py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            What You Get
          </span>
          <h2 className="m-0 mb-10 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
            Our {service.title} Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-ct-card rounded">
                <span className="font-mono text-[11px] tracking-[0.14em] shrink-0 mt-0.5" style={{ color: service.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="m-0 text-[15px] leading-[1.65] text-ct-fg/70">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Work */}
      {relatedProjects.length > 0 && (
        <section className="px-7 py-20 border-b border-ct-fg/10 bg-[#0C0D10]">
          <div className="max-w-[960px] mx-auto">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
              Related Work
            </span>
            <h2 className="m-0 mb-10 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
              Projects Like Yours &mdash;{" "}
              <em className="font-serif italic font-normal" style={{ color: service.color }}>delivered.</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 6).map((cs) => (
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
            <div className="mt-10 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ct-fg/14 text-[13px] text-ct-fg/60 no-underline hover:text-ct-fg hover:border-ct-fg/30 transition-colors"
              >
                View all projects &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="px-7 py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            How It Works
          </span>
          <h2 className="m-0 mb-10 text-[clamp(28px,4vw,48px)] font-medium tracking-[-0.04em]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Discovery", desc: `We learn about your business, your ${city.name} market, and your goals.` },
              { step: "02", label: "Strategy", desc: "We create a tailored plan with clear timelines and deliverables." },
              { step: "03", label: "Execution", desc: "Our in-house team builds, tests, and refines every detail." },
              { step: "04", label: "Growth", desc: "We launch, measure results, and optimise for continuous improvement." },
            ].map((p) => (
              <div key={p.step} className="relative">
                <span className="font-mono text-[11px] tracking-[0.14em] block mb-3" style={{ color: service.color }}>{p.step}</span>
                <h3 className="m-0 mb-2 text-[18px] font-medium tracking-[-0.02em]">{p.label}</h3>
                <p className="m-0 text-[14px] leading-[1.65] text-ct-fg/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same service, other cities */}
      <section className="px-7 py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            Also Available In
          </span>
          <h2 className="m-0 mb-8 text-[clamp(24px,3vw,36px)] font-medium tracking-[-0.04em]">
            {service.title} in Other Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${service.slug}-${c.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ct-fg/12 text-[13px] text-ct-fg/70 no-underline hover:border-ct-fg/30 hover:text-ct-fg transition-colors"
              >
                {service.title} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other services in same city */}
      <section className="px-7 py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ct-fg/35 block mb-5">
            More Services
          </span>
          <h2 className="m-0 mb-8 text-[clamp(24px,3vw,36px)] font-medium tracking-[-0.04em]">
            Other Services in {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-${city.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] no-underline hover:text-ct-fg transition-colors"
                style={{ borderColor: s.color + "44", color: s.color }}
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/services/all"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ct-fg/12 text-[13px] text-ct-fg/50 no-underline hover:text-ct-fg transition-colors"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-7 py-24 bg-ct-card border-t border-ct-fg/10">
        <div className="max-w-[960px] mx-auto flex justify-between items-center gap-10 flex-wrap">
          <div>
            <h2 className="m-0 mb-4 text-[clamp(28px,4vw,52px)] font-medium tracking-[-0.04em]">
              Ready to grow in {city.name}?
            </h2>
            <p className="m-0 text-[17px] leading-[1.6] text-ct-fg/55 max-w-[440px]">
              Tell us what you need. We&apos;ll put together a {service.title.toLowerCase()} plan built around your business and your budget.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-[18px] rounded-full text-[14px] font-medium tracking-[-0.02em] text-ct-bg no-underline"
              style={{ background: service.color }}
            >
              Get a free consultation &rarr;
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-[18px] rounded-full border border-ct-fg/10 text-[14px] tracking-[-0.02em] text-ct-fg no-underline hover:border-ct-fg/30 transition-colors"
            >
              See our work
            </Link>
          </div>
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
