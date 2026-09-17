import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, CITIES, getAllServiceCitySlugs, parseSlug } from "@/app/_data/services-cities";

export function generateStaticParams() {
  return getAllServiceCitySlugs().map((slug) => ({ slug }));
}

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
    alternates: { canonical: `https://creatorstouchglobal.com/services/${slug}` },
    keywords: [
      ...service.keywords.map((k) => `${k} ${city.name.toLowerCase()}`),
      `best ${service.title.toLowerCase()} in ${city.name.toLowerCase()}`,
      `${service.title.toLowerCase()} agency ${city.name.toLowerCase()}`,
      `${service.title.toLowerCase()} company ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://creatorstouchglobal.com/services/${slug}`,
      siteName: "Creators Touch Global",
      type: "website",
      images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const match = parseSlug(slug);
  if (!match) notFound();
  const { service, city } = match;

  const otherCities = CITIES.filter((c) => c.slug !== city.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5);

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

      {/* Breadcrumb */}
      <div className="max-w-[960px] mx-auto px-7 pt-8">
        <nav className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/35 flex items-center gap-2">
          <Link href="/" className="text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">Services</Link>
          <span>/</span>
          <Link href={`/services/all`} className="text-ct-fg/35 no-underline hover:text-ct-fg/60 transition-colors">{city.name}</Link>
          <span>/</span>
          <span className="text-ct-fg/60">{service.title}</span>
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
          <p className="font-serif italic text-[clamp(18px,2.2vw,26px)] leading-[1.5] text-ct-fg/65 max-w-[620px] m-0">
            {service.longDesc}
          </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-ct-card rounded-xl border border-ct-fg/8">
              <span className="text-[clamp(32px,4vw,48px)] font-medium tracking-[-0.04em]" style={{ color: service.color }}>2000+</span>
              <p className="m-0 mt-2 text-[14px] text-ct-fg/50">Brands served across India since 2008</p>
            </div>
            <div className="p-7 bg-ct-card rounded-xl border border-ct-fg/8">
              <span className="text-[clamp(32px,4vw,48px)] font-medium tracking-[-0.04em]" style={{ color: service.color }}>17+</span>
              <p className="m-0 mt-2 text-[14px] text-ct-fg/50">Years of experience in digital services</p>
            </div>
            <div className="p-7 bg-ct-card rounded-xl border border-ct-fg/8">
              <span className="text-[clamp(32px,4vw,48px)] font-medium tracking-[-0.04em]" style={{ color: service.color }}>100%</span>
              <p className="m-0 mt-2 text-[14px] text-ct-fg/50">In-house team — no outsourcing, no freelancers</p>
            </div>
          </div>
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
              { step: "03", label: "Execution", desc: `Our in-house team builds, tests, and refines every detail.` },
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
                href={`/services/${service.slug}-in-${c.slug}`}
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
                href={`/services/${s.slug}-in-${city.slug}`}
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
              href="/work"
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
