import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Creators Touch Global",
  description:
    "Join Creators Touch Global. We're looking for designers, developers, marketers, and strategists who care about craft and want to help Indian businesses grow.",
  alternates: { canonical: "https://creatorstouchglobal.com/careers" },
  keywords: [
    "careers creators touch",
    "jobs digital agency vijayawada",
    "web designer jobs india",
    "digital marketing jobs vijayawada",
    "creators touch careers",
  ],
  openGraph: {
    title: "Careers — Creators Touch Global",
    description:
      "Join Creators Touch Global. We're hiring designers, developers, and marketers who care about craft.",
    url: "https://creatorstouchglobal.com/careers",
    siteName: "Creators Touch Global",
    type: "website",
    images: [
      {
        url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png",
        width: 512,
        height: 512,
        alt: "Creators Touch Global",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Careers — Creators Touch Global",
    description:
      "Join Creators Touch Global. We're hiring designers, developers, and marketers who care about craft.",
  },
};

const LABEL = "font-mono text-[10px] tracking-[0.16em] uppercase text-ct-fg/35";

const OPENINGS = [
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Vijayawada",
    desc: "Build performant websites and web apps using Next.js, React, and Node.js. You care about clean code, fast load times, and accessibility. 2+ years experience.",
  },
  {
    title: "Performance / Digital Marketer",
    type: "Full-time",
    location: "Remote / Vijayawada",
    desc: "Run Google Ads, Meta Ads, and paid campaigns that deliver measurable ROI. Plan and execute digital marketing strategies across SEO, social media, and email. Data-driven, detail-oriented, and experienced with Indian market budgets.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-ct-bg text-ct-fg font-sans overflow-x-hidden">
      {/* Hero */}
      <section className="px-5 md:px-7 pt-20 md:pt-24 pb-14 md:pb-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className={`${LABEL} block mb-7`}>Careers</span>
          <h1 className="m-0 mb-5 text-[clamp(36px,7vw,88px)] font-medium leading-[0.94] tracking-[-0.05em]">
            Build what
            <br />
            <span className="font-serif italic font-normal text-ct-pink">
              matters.
            </span>
          </h1>
          <p className="m-0 text-[clamp(16px,2vw,20px)] leading-[1.7] text-ct-fg/55 max-w-[560px]">
            We&rsquo;re a small team helping Indian businesses look credible,
            grow digitally, and compete globally. If you care about craft and
            impact, you&rsquo;ll fit right in.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-5 md:px-7 py-14 md:py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto">
          <span className={`${LABEL} block mb-4`}>Open positions</span>
          <h2 className="m-0 mb-10 md:mb-14 text-[clamp(22px,3vw,38px)] font-medium tracking-[-0.04em]">
            Current openings
          </h2>
          <div className="flex flex-col gap-[2px]">
            {OPENINGS.map((job) => (
              <div
                key={job.title}
                className="group p-6 md:p-7 bg-ct-card rounded-xl border border-ct-fg/6 hover:border-ct-fg/16 transition-[border-color] duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-8 mb-3">
                  <h3 className="m-0 text-[18px] font-medium tracking-[-0.03em] group-hover:text-ct-pink transition-colors duration-200">
                    {job.title}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className="inline-flex px-3 py-1 rounded-full bg-ct-fg/6 text-ct-fg/50 font-mono text-[10px] tracking-[0.1em] uppercase">
                      {job.type}
                    </span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-ct-fg/6 text-ct-fg/50 font-mono text-[10px] tracking-[0.1em] uppercase">
                      {job.location}
                    </span>
                  </div>
                </div>
                <p className="m-0 text-[14px] leading-[1.7] text-ct-fg/45 max-w-[640px]">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="px-5 md:px-7 py-14 md:py-20 border-b border-ct-fg/10">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <span className={`${LABEL} pt-1.5`}>How to apply</span>
          <div>
            <h2 className="m-0 mb-5 text-[clamp(22px,3vw,38px)] font-medium tracking-[-0.04em]">
              No cover letters. No algorithms.
            </h2>
            <p className="m-0 mb-6 text-[15px] leading-[1.7] text-ct-fg/55 max-w-[560px]">
              Send us an email with your portfolio or resume, a short note about
              which role interests you and why, and any links to work
              you&rsquo;re proud of. That&rsquo;s it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <a
                href="mailto:learning@creatorstechglobal.in?subject=Application — Creators Touch Global"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-ct-pink text-ct-bg border-none rounded-full text-[15px] font-medium tracking-[-0.02em] no-underline hover:bg-ct-pink/85 transition-colors"
              >
                Apply via email
                <span className="font-mono text-[13px]">&#8594;</span>
              </a>
              <span className="font-mono text-[11px] tracking-[0.1em] text-ct-fg/30">
                learning@creatorstechglobal.in
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Don't see a fit */}
      <section className="px-5 md:px-7 py-14 md:py-20">
        <div className="max-w-[960px] mx-auto text-center">
          <p className="font-serif italic font-normal text-[clamp(20px,3vw,36px)] leading-[1.4] text-ct-fg/70 max-w-[640px] mx-auto m-0 mb-5">
            Don&rsquo;t see a role that fits? We&rsquo;re always open to
            meeting talented people.
          </p>
          <a
            href="mailto:learning@creatorstechglobal.in?subject=General Inquiry — Careers"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-ct-pink no-underline hover:text-ct-pink/70 transition-colors"
          >
            Say hello &rarr;
          </a>
        </div>
      </section>

    </div>
  );
}
