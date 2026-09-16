"use client";
// Creators Touch Global — homepage (Tailwind conversion)
import { useEffect, useState, useRef } from "react";
import "../css/home.css";
import { initHomeFX } from "./home-fx";
import ServicesSection from "../services/ServicesSection";

// Repeated Tailwind class patterns
const EYE = "font-mono m-0 text-[11px] tracking-[0.16em] uppercase text-ct-fg/42";
const LABEL = "font-mono text-[10px] tracking-[0.16em] uppercase text-ct-fg/42";
const LABEL_SM = "font-mono text-[9px] tracking-[0.16em] uppercase text-ct-fg/35";
const SEC = "relative z-[1] px-[18px] py-[72px] md:px-7 md:py-28 border-b border-ct-fg/10";
const BODY = "m-0 text-[17px] leading-[1.75] text-ct-fg/60";
const H2 = "m-0 font-normal leading-[1.1] tracking-[-0.04em]";

const SERVICES = [
  { number: "01", title: "Strategy", description: "Before we touch a pixel, we understand your market, your competitors, and the one positioning angle that makes you the obvious choice.", bullets: ["Research", "Competitor teardown", "Growth plan"] },
  { number: "02", title: "Branding", description: "Logos anyone can copy. Identity no one can. We build brand systems that hold their shape across every surface — from a business card to a billboard.", bullets: ["Logo", "Brand system", "Brand voice"] },
  { number: "03", title: "Content", description: "Words that sell. Visuals that stop the scroll. Motion that makes people feel something. Content created with the algorithm and the human in mind.", bullets: ["Copywriting", "Visual design", "Motion"] },
  { number: "04", title: "Website Design", description: "We have designed websites for hospitals, malls, universities and jewellers — and every single one was built to convert, not just to impress.", bullets: ["UI/UX", "User research", "Prototype"] },
  { number: "05", title: "Development", description: "Fast. Accessible. Maintainable. We build in Next.js, Shopify, and WordPress — code that loads in under 2 seconds and your team can actually manage.", bullets: ["Next.js / Shopify", "CMS setup", "Performance"] }
];

const CLIENTS = [
  ["Trust Hospital", "trust-hospital.png"],
  ["Anjaneya Jewellery", "anjaneya-jewellery.png"],
  ["Change NGO", "change-ngo.png"],
  ["Dr. Matla", "dr-matla.png"],
  ["Lot Mobiles", "lot-mobiles.png"],
  ["St. Paul's School VJA", "st-pauls-school.png"],
  ["Meditron CDC", "meditron-cdc.png"],
  ["Kensley Aesthetics", "kensley-aesthetics.png"],
].map(([name, f]) => ({ name, logo: "/assets/images/clients/" + f }));

const PROJECTS = [
  {
    title: "Trust Hospital", category: "Healthcare · Website Design", year: "2023", tag: "Web + UX",
    desc: "A full-featured hospital website covering patient information, specialist profiles, department pages, and an appointment booking flow — built to establish trust and drive conversions.",
    img: "/assets/images/projects/trust-hospital/screen-1.png",
    url: "https://trusthospital.com", caseStudy: "/work/trust-hospital"
  },
  {
    title: "Anjaneya Jewellery", category: "Jewellery & Luxury · E-commerce", year: "2023", tag: "Brand + E-comm",
    desc: "A high-end jewellery showcase with curated collection pages, custom order enquiry, a photo lookbook, and certification details — designed to reflect premium brand positioning.",
    img: "/assets/images/projects/anjaneya-jewellery/screen-1.png",
    url: "https://anjaneyajewellery.com", caseStudy: "/work/anjaneya-jewellery"
  },
  {
    title: "Change NGO", category: "Non-profit · Campaign Site", year: "2024", tag: "Web + Strategy",
    desc: "An impact-driven NGO platform with donation funnels, volunteer registration, campaign microsites, and impact reporting dashboards — built to inspire action and drive giving.",
    img: "/assets/images/projects/change-ngo/screen-1.png",
    url: "https://change.ngo", caseStudy: "/work/change-ngo"
  },
  {
    title: "Dr. Matla", category: "Healthcare · Personal Brand", year: "2024", tag: "Brand + SEO",
    desc: "A personal medical practice website featuring doctor profile, areas of specialisation, patient testimonials, and an online consultation booking system.",
    img: "/assets/images/projects/dr-matla/screen-1.png",
    url: "https://drmatla.com", caseStudy: "/work/dr-matla"
  },
  {
    title: "St. Paul's School VJA", category: "Education · Institution Site", year: "2024", tag: "Portal + SEO",
    desc: "A comprehensive school website with an admissions portal, academic calendar, faculty directory, event gallery, and an online fee payment module.",
    img: "/assets/images/projects/st-pauls-school-vja/screen-1.png",
    url: "https://stpaulsschoolvja.com", caseStudy: "/work/st-pauls-school-vja"
  },
  {
    title: "Meditron CDC", category: "Healthcare · Paediatric Therapy", year: "2025", tag: "Web + Brand",
    desc: "A specialist child development centre website covering speech, occupational and physiotherapy services — designed to build trust with families and drive appointment bookings.",
    img: "/assets/images/projects/meditron-cdc/screen-1.png",
    url: "https://meditroncdc.com", caseStudy: "/work/meditron-cdc"
  },
  {
    title: "Kensley Aesthetics", category: "Aesthetics · Clinic", year: "2025", tag: "Brand + Web",
    desc: "A premium aesthetics clinic website for a Newcastle & London practice — showcasing treatments, before/after galleries, and an online consultation booking system.",
    img: "/assets/images/projects/kensley-aesthetics/screen-1.png",
    url: "https://kensleyaesthetics.com", caseStudy: "/work/kensleyaesthetics"
  },
];

const INDUSTRIES = [
  { num: "01", title: "E-commerce & Retail", tags: "Conversion funnels", img: "/assets/images/image-01.png" },
  { num: "02", title: "Real Estate", tags: "Property portals", img: "/assets/images/image-06.png" },
  { num: "03", title: "Education & EdTech", tags: "Course platforms", img: "/assets/images/image-03.png" },
  { num: "04", title: "Healthcare", tags: "Patient portals", img: "/assets/images/image-02.png" },
  { num: "05", title: "Food & Beverage", tags: "Online ordering", img: "/assets/images/image-05.png" },
  { num: "06", title: "Jewellery & Luxury", tags: "Lookbooks", img: "/assets/images/image-04.png" },
];

const REVIEWS = [
  { name: "Sudheer Kumar", company: "AP Yellow Pages", initials: "SK", text: "There is no company that can beat Creators Touch. Thanks to their talent, our site has taken off in the search engines like a rocket." },
  { name: "Karthika", company: "APGEA", initials: "KA", text: "Highly innovative in their work. They have the best team on board, bubbling with talent. I would highly recommend their services." },
  { name: "Sanjana", company: "Anu Hospitals", initials: "SA", text: "Very sharp, high-quality team. The project management was fantastic — specific timelines for all the bits and pieces. They design and build in a nice, elegant way." },
  { name: "Ramya Vamsi", company: "Herbals", initials: "RV", text: "Great quality work and on-time delivery. Reasonable cost, outstanding customer support, and quick, easy changes to my website." },
  { name: "Vijay Reddy", company: "MVR Mall", initials: "VR", text: "The team completely transformed our digital presence. Our website now reflects the premium experience we deliver in-store — and footfall has measurably improved." },
  { name: "Priya Nair", company: "KL University", initials: "PN", text: "Outstanding work on our admissions portal. They understood our requirements perfectly and delivered well ahead of schedule." },
  { name: "Arun Sharma", company: "Cream Stone", initials: "AS", text: "Our franchise marketing kits and website redesign were handled brilliantly. We saw a measurable uptick in online orders within the first month." },
  { name: "Deepa Rao", company: "Durga Ghree", initials: "DR", text: "Creative, reliable and always on brand. Creators Touch helped us modernise our identity while keeping our heritage intact." },
];

const IMG1 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (1).png";
const IMG2 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (2).png";
const IMG3 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (3).png";
const IMG4 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_12 PM (4).png";
const IMG5 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (5).png";
const IMG6 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (6).png";
const IMG7 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_15 PM (7).png";
const IMG8 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_15 PM (8).png";
const IMG9 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_16 PM (9).png";

const SERVICE_GROUPS = [
  { num: "01", title: "Get more customers", color: "#FF3D8F", desc: "Show up where your customers are already looking — and give them a strong reason to choose you over everyone else.", items: ["Google Search Ads", "Meta & Instagram Ads", "SEO", "Landing Pages"] },
  { num: "02", title: "Build a better website", color: "#29A8DC", desc: "A website that works for your business around the clock — fast, clear, and built to turn visitors into real enquiries.", items: ["Website Design", "Website Development", "Mobile Optimisation", "Speed & Performance"] },
  { num: "03", title: "Build a stronger brand", color: "#cc0066", desc: "Your brand is the first impression you never get to redo. We make sure it earns the trust it deserves.", items: ["Logo & Identity", "Brand Guidelines", "Copywriting", "Social Media Visuals"] },
  { num: "04", title: "Sell your products online", color: "#96BF48", desc: "From your first product to your thousandth order — stores built to look and feel like your brand.", items: ["Shopify Store Design", "Product Catalogues", "Secure Checkout", "Inventory Setup"] },
  { num: "05", title: "Save time with automation", color: "#25D366", desc: "Never miss a customer again. Automated messages that follow up, confirm and convert — without any extra effort from you.", items: ["WhatsApp Automation", "Order Confirmations", "Appointment Reminders", "Lead Follow-ups"] },
];

const MARQ = ["Brand strategy", "Websites", "Performance marketing", "AI workflows", "Content studio"];

const INSIGHTS = [
  { cat: "Branding", title: "Why Your Business Needs a Brand, Not Just a Logo", excerpt: "A logo is a mark. A brand is the feeling people get when they hear your name. Here's why the difference matters for your bottom line.", date: "Aug 2026", read: "4 min", color: "#FF3D8F", cover: "/assets/images/blog-cover-images/01-brand-not-just-logo.png" },
  { cat: "Digital", title: "5 Signs Your Website Is Costing You Customers", excerpt: "Most business owners don't realise their website is quietly turning people away. Here are the five most common culprits — and how to fix them.", date: "Jul 2026", read: "5 min", color: "#29A8DC", cover: "/assets/images/blog-cover-images/02-website-costing-customers.png" },
  { cat: "Automation", title: "WhatsApp Automation: The Secret Weapon for Local Businesses", excerpt: "Customers who message you expect a fast reply. Automated responses can follow up, qualify and convert leads while you sleep.", date: "Jul 2026", read: "3 min", color: "#25D366", cover: "/assets/images/blog-cover-images/03-whatsapp-automation-local-business.png" },
  { cat: "Marketing", title: "SEO vs. Paid Ads: What's Right for Your Business?", excerpt: "Both work. But they work differently. Understanding the tradeoff is the first step to spending your marketing budget wisely.", date: "Jun 2026", read: "6 min", color: "#cc0066", cover: "/assets/images/blog-cover-images/04-seo-vs-paid-ads.png" },
  { cat: "Analytics", title: "How to Measure If Your Digital Marketing Is Working", excerpt: "Likes and visits don't pay the bills. Here's what to actually track to know if your marketing spend is earning its keep.", date: "Jun 2026", read: "5 min", color: "#c9a227", cover: "/assets/images/blog-cover-images/05-measure-digital-marketing.png" },
  { cat: "Design", title: "The Real Cost of a Badly Designed Website", excerpt: "Bad design isn't just ugly — it actively costs you customers, rankings and credibility. Here's what to look for and how to fix it.", date: "May 2026", read: "4 min", color: "#96BF48", cover: "/assets/images/blog-cover-images/06-cost-of-bad-website-design.png" },
];

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

function RollLink({ href, label, h = 15, dim = "rgba(244,243,241,0.62)", hi = "#FF3D8F" }) {
  return (
    <a href={href} data-roll="1" className="block overflow-hidden" style={{ height: h, lineHeight: `${h}px`, color: dim }}>
      <span data-roll-inner="1" className="block transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.76,0,.24,1)]">
        <span className="block" style={{ height: h }}>{label}</span>
        <span aria-hidden="true" className="block" style={{ height: h, color: hi }}>{label}</span>
      </span>
    </a>
  );
}

function Star5({ size = 13 }) {
  return <span className="text-ct-star tracking-[3px] leading-none" style={{ fontSize: size }}>★★★★★</span>;
}

function ReviewCard({ r, hidden }) {
  return (
    <div aria-hidden={hidden || undefined}
      className="flex-none w-[85vw] max-w-[340px] md:w-[400px] md:max-w-none flex flex-col gap-4 bg-ct-card border border-ct-fg/10 rounded-[18px] p-[22px] md:p-[26px]">
      <div className="flex justify-between items-center">
        <Star5 />
        <span className={LABEL_SM}>GOOGLE</span>
      </div>
      <p className="m-0 text-sm md:text-[15px] leading-[1.6] text-ct-fg/72">&ldquo;{r.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        <span className="w-[38px] h-[38px] rounded-full bg-[linear-gradient(135deg,rgba(204,0,102,0.4),rgba(9,119,168,0.4))] inline-flex items-center justify-center text-xs font-semibold tracking-[0.02em]">{r.initials}</span>
        <span className="flex flex-col gap-0.5">
          <span className="text-sm font-medium tracking-[-0.01em]">{r.name}</span>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ct-fg/42">{r.company}</span>
        </span>
      </div>
    </div>
  );
}

function MarqueeRow() {
  return (
    <div data-m-marq="1" className="flex items-center gap-10 pr-10 font-serif text-[34px] tracking-[-0.01em] text-ct-fg/72 whitespace-nowrap">
      {MARQ.map((w, i) => (
        <span key={w} className="contents">
          <span className={i % 2 ? "italic" : ""}>{w}</span>
          <span style={{ color: i % 2 ? "#0977a8" : "#cc0066" }}>✦</span>
        </span>
      ))}
    </div>
  );
}

const SVC_IMGS = [
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (2).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (1).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (3).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_16 PM (9).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_15 PM (8).png",
];
const SVC_COLORS = ["#FF3D8F", "#29A8DC", "#cc0066", "#96BF48", "#25D366"];
const SVC_GROUP_IMGS = [
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (3).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_16 PM (9).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (1).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_12 PM (4).png",
  "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (5).png",
];

function ContactForm() {
  const NEEDS = ["Website", "Marketing", "SEO", "Branding", "E-commerce", "Automation"];
  const [fields, setFields] = useState({ name: "", phone: "", email: "", needs: [], message: "" });
  const [status, setStatus] = useState("idle");

  const toggleNeed = need => setFields(f => ({
    ...f,
    needs: f.needs.includes(need) ? f.needs.filter(n => n !== need) : [...f.needs, need],
  }));

  const handle = e => {
    e.preventDefault();
    setStatus("sending");
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...fields, needs: fields.needs.join(", ") }),
    })
      .then(r => r.ok ? setStatus("sent") : setStatus("error"))
      .catch(() => setStatus("error"));
  };

  if (status === "sent") {
    return (
      <div className="py-12">
        <p className="font-serif italic font-normal text-[clamp(24px,3vw,40px)] m-0 mb-3 text-ct-fg">We&rsquo;ll be in touch soon.</p>
        <p className="m-0 text-[15px] leading-[1.6] text-ct-fg/50">Thanks for reaching out. We usually respond within one business day.</p>
      </div>
    );
  }

  const inputCls = "ct-input w-full bg-ct-fg/4 border border-ct-fg/14 rounded-[10px] px-4 py-3.5 text-ct-fg font-sans text-[15px] tracking-[-0.02em] outline-none placeholder:text-ct-fg/22 focus:border-ct-fg/38 transition-[border-color] duration-200";

  return (
    <form onSubmit={handle} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="ct-name" className={LABEL}>Name</label>
          <input id="ct-name" name="name" type="text" required className={inputCls}
            value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ct-phone" className={LABEL}>Phone / WhatsApp</label>
          <input id="ct-phone" name="phone" type="tel" className={inputCls}
            value={fields.phone} onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
            placeholder="+91 98859 33339" />
        </div>
        <div className="col-span-full flex flex-col gap-2">
          <label htmlFor="ct-email" className={LABEL}>Email</label>
          <input id="ct-email" name="email" type="email" required className={inputCls}
            value={fields.email} onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            placeholder="hello@yourbusiness.com" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className={LABEL}>What do you need help with?</span>
        <div className="flex flex-wrap gap-2">
          {NEEDS.map(need => (
            <button key={need} type="button" onClick={() => toggleNeed(need)}
              className={`px-[18px] py-2 rounded-full font-sans text-[13px] tracking-[-0.01em] cursor-pointer transition-[background,color,border-color] duration-200 border ${
                fields.needs.includes(need)
                  ? "bg-ct-pink text-ct-bg border-ct-pink"
                  : "bg-transparent text-ct-fg/62 border-ct-fg/18"
              }`}>
              {need}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="ct-msg" className={LABEL}>Tell us about your business</label>
        <textarea id="ct-msg" name="message" rows={4} className={`${inputCls} resize-y min-h-[120px]`}
          value={fields.message} onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          placeholder="You don't need to know the marketing terminology. Just tell us about your business and what you'd like to improve." />
      </div>
      <div className="flex items-center gap-3.5 flex-wrap">
        <button type="submit" disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 px-[26px] py-[15px] bg-ct-fg text-ct-bg border-none rounded-full text-[15px] font-medium tracking-[-0.02em] cursor-pointer font-sans transition-[background,color] duration-[250ms] hover:bg-ct-pink hover:text-ct-bg disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center md:justify-start">
          {status === "sending" ? "Sending\u2026" : "Book a Free Consultation"}
          <span className="font-mono text-[13px]">&#8594;</span>
        </button>
        <a href="https://wa.me/919885933339" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-[22px] py-[15px] border border-ct-green/32 rounded-full text-sm tracking-[-0.01em] text-ct-green/85 font-sans">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat on WhatsApp
        </a>
        {status === "error" && <span className="text-[13px] text-ct-pink">Something went wrong &mdash; email hello@creatorstouch.in</span>}
      </div>
      <p className="font-mono m-0 text-[10px] tracking-[0.12em] uppercase text-ct-fg/28">We usually respond within one business day.</p>
    </form>
  );
}

export default function CreatorsTouchHome({ visualReview = false } = {}) {
  useEffect(() => initHomeFX({ logoSrc: "/assets/images/creator_touch.png", disableLogo: visualReview }), [visualReview]);

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [menuOpen]);

  const progressRef = useRef(null);
  const mobCtaRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const header = document.getElementById("ct-header");
      if (header) {
        if (sy > 48) {
          header.style.background = "rgba(8,9,10,0.88)";
          header.style.backdropFilter = "blur(18px)";
          header.style.borderBottomColor = "rgba(244,243,241,0.10)";
        } else {
          header.style.background = "rgba(8,9,10,0)";
          header.style.backdropFilter = "none";
          header.style.borderBottomColor = "transparent";
        }
      }
      if (progressRef.current) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        progressRef.current.style.width = docH > 0 ? (sy / docH * 100) + "%" : "0%";
      }
      if (mobCtaRef.current) {
        mobCtaRef.current.classList.toggle("ct-show", sy > window.innerHeight * 0.6);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ct-root bg-ct-bg text-ct-fg font-sans font-normal tracking-[-0.02em] overflow-x-clip cursor-default">
      {/* Film grain overlay */}
      <div aria-hidden="true" className="ct-grain" />

      {/* Sticky mobile CTA — appears after scrolling past hero */}
      <div ref={mobCtaRef} className="ct-mob-cta">
        <a href="/contact" className="flex items-center justify-between px-6 py-[17px] bg-[linear-gradient(90deg,#FF3D8F_0%,#b44bdf_50%,#29A8DC_100%)] rounded-full shadow-[0_14px_44px_rgba(255,61,143,0.42),0_2px_0_rgba(255,255,255,0.08)_inset] transition-[opacity,transform] duration-200 active:opacity-[0.88] active:scale-[0.97]">
          <span className="text-base font-medium tracking-[-0.02em] text-white">Start a project</span>
          <span className="w-9 h-9 rounded-full bg-white/20 inline-flex items-center justify-center text-[15px] text-white shrink-0">→</span>
        </a>
      </div>

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[9999] bg-ct-fg/6">
        <div ref={progressRef} className="h-full w-0 bg-[linear-gradient(90deg,#FF3D8F,#29A8DC)] transition-[width] duration-100 ease-linear" />
      </div>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-ct-bg flex flex-col px-7 pt-4 pb-8" aria-modal="true" role="dialog" aria-label="Navigation menu">
          <div className="flex items-center justify-between pb-12">
            <a href="#top" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
              <img src="/assets/images/creator_touch.png" alt="Creators Touch" className="w-16 h-16 block" />
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
            {[["/work","Work"],["/services","Services"],["/blog","Blog"],["/about","About"],["/contact","Contact"]].map(([href, label], i) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                className="ct-menu-item text-[clamp(36px,9vw,60px)] font-normal tracking-[-0.04em] text-ct-fg py-3 border-b border-ct-fg/8 leading-[1.1]"
                style={{ animationDelay: `${i * 60 + 40}ms` }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-wrap gap-6 pt-8">
            <a href="tel:+919885933339" className="font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/42">+91 98859 33339</a>
            <a href="mailto:hello@creatorstouch.in" className="font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/42">hello@creatorstouch.in</a>
          </div>
        </div>
      )}

      {/* Header */}
      <header id="ct-header" className="sticky top-0 z-50 flex items-center justify-between gap-6 px-[18px] py-3 md:px-7 md:py-4 bg-[rgba(8,9,10,0)] border-b border-transparent transition-[background,border-color,backdrop-filter] duration-[350ms]">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/assets/images/creator_touch.png" alt="Creators Touch" className="w-10 h-10 md:w-[90px] md:h-[90px] block" />
          <span className="flex flex-col leading-[1.05]">
            <span className="text-xs md:text-sm font-semibold tracking-[-0.03em]">Creators Touch</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.14em] uppercase text-ct-fg/62">
          <RollLink href="/work" label="Work" />
          <RollLink href="/services" label="Services" />
          <RollLink href="/blog" label="Blog" />
          <RollLink href="/about" label="About" />
          <a href="/contact" data-magnetic="1" className="inline-flex items-center gap-2 px-4 py-[9px] border border-ct-fg/22 rounded-full text-ct-fg hover:bg-ct-fg hover:text-ct-bg hover:border-ct-fg transition-[background,color,border-color] duration-200">Start a project</a>
        </nav>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="flex md:hidden bg-transparent border-none text-ct-fg cursor-pointer p-1.5 items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* ── HERO ── */}
      <section id="top" className="relative z-[1] flex flex-col justify-between min-h-svh md:min-h-[92vh] px-[18px] pt-7 pb-[22px] md:px-7 md:pt-[72px] md:pb-7 gap-6 md:gap-0 border-b border-ct-fg/10">
        <div className="flex justify-between items-start gap-4 md:gap-8">
          <p className="ct-bounce-wrap font-mono m-0 text-[9px] md:text-[11px] tracking-[0.14em] md:tracking-[0.16em] uppercase text-ct-fg/50 max-w-none md:max-w-[220px] leading-[1.5] md:leading-[1.6]">
            {[..."Digital studio"].map((ch, i) => (
              <span key={i} className="ct-bounce-char" style={{ animationDelay: `${i * 22}ms` }}>{ch === " " ? "\u00A0" : ch}</span>
            ))}
            <br />
            {[..."Vijayawada · India"].map((ch, i) => (
              <span key={`b${i}`} className="ct-bounce-char" style={{ animationDelay: `${(14 + i) * 22}ms` }}>{ch === " " ? "\u00A0" : ch}</span>
            ))}
          </p>
          <p className="font-mono m-0 text-[9px] md:text-[11px] tracking-[0.14em] md:tracking-[0.16em] uppercase text-ct-fg/50 text-right leading-[1.5] md:leading-[1.6]">Web · Marketing · AI<br />Est. 2008</p>
        </div>
        <h1 data-hero-title="1" className="mt-4 md:mt-14 text-[clamp(38px,11.5vw,64px)] md:text-[clamp(40px,7.8vw,128px)] font-medium md:font-medium leading-[0.92] tracking-[-0.055em] text-balance will-change-transform [text-shadow:0_2px_20px_rgba(8,9,10,0.7),0_0_60px_rgba(8,9,10,0.5)] md:[text-shadow:none]">
          <span className="block overflow-hidden pb-[0.15em]"><span data-px-hl="1" className="block">We create and <span className="ct-hero-pop">grow</span></span></span>
          <span className="block overflow-hidden pb-[0.15em] pl-[0.09em]"><span data-px-hl="1" className="block"><span className="ct-hero-pop">digital</span> brands people</span></span>
          <span className="block overflow-hidden pb-[0.15em] pl-[0.18em]">
            <span data-px-hl="1" className="block">cannot <em className="font-serif italic font-normal tracking-[-0.02em] text-ct-pink">ignore.</em></span>
          </span>
        </h1>
        <div data-reveal="1" className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-5 md:gap-10 mt-8 md:mt-[72px] pt-5 md:pt-[26px] border-t border-ct-fg/10">
          <div className="flex flex-wrap gap-4 gap-x-6 md:gap-12">
            {[["17", " yrs", "Building brands", "17 yrs"], ["2000", "+", "Clients said yes", "2000+"], ["5", "", "Core disciplines", "05", "2"]].map(([n, suf, lab, txt, pad]) => (
              <div key={lab} className="flex flex-col gap-[7px]">
                <span data-count={n} data-suffix={suf || undefined} data-pad={pad} className="text-[22px] md:text-[26px] font-medium tracking-[-0.04em] leading-none">{txt}</span>
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase text-ct-fg/42">{lab}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-sm md:text-[17px] leading-[1.55] md:leading-[1.5] text-ct-fg/60 max-w-full md:max-w-[460px] justify-self-start md:justify-self-end">Strategy, identity, content and engineering under one roof. <span className="text-ct-fg">We make those first seconds impossible to ignore.</span></p>
        </div>
        <div className="hidden md:flex items-center gap-2.5 mt-8 self-start">
          <div className="w-px h-9 bg-[linear-gradient(to_bottom,rgba(244,243,241,0),rgba(244,243,241,0.4))] animate-[ct-pulse_2s_ease-in-out_infinite]" />
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-ct-fg/35">Scroll</span>
        </div>
      </section>

      {/* ── Disciplines icon strip ── */}
      <div className="relative z-[1] px-[18px] py-10 md:px-7 border-b border-ct-fg/10 bg-ct-bg">
        <div data-stagger="1" className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-5">
          {[
            { img: "/assets/images/Codex Image Sep 8, 2026, 05_17_25 PM.png", label: "Strategy & AI", sub: "Data-led plans that find the fastest path to growth." },
            { img: "/assets/images/Codex Image Sep 8, 2026, 05_17_59 PM.png", label: "Development", sub: "Fast, accessible code — Next.js, Shopify, WordPress." },
            { img: "/assets/images/Codex Image Sep 8, 2026, 05_18_06 PM.png", label: "Branding & Content", sub: "Identity, copy and visuals that stop the scroll." },
            { img: "/assets/images/Codex Image Sep 8, 2026, 05_18_12 PM.png", label: "SEO & Marketing", sub: "Show up where customers are already looking." },
          ].map(d => (
            <div key={d.label} className="group/disc flex flex-col md:flex-row items-center md:items-center gap-2.5 md:gap-[18px] p-[18px] md:p-[24px_22px] border border-ct-fg/8 rounded-2xl bg-ct-card text-center md:text-left transition-[border-color,transform] duration-300 hover:border-ct-fg/22 hover:-translate-y-1">
              <img src={d.img} alt={d.label} loading="lazy" className="w-11 h-11 md:w-14 md:h-14 object-contain block shrink-0 drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-transform duration-[350ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover/disc:scale-[1.08]" />
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="m-0 text-[13px] md:text-[15px] font-medium tracking-[-0.02em]">{d.label}</h3>
                <p className="m-0 text-[11px] md:text-xs leading-[1.5] text-ct-fg/42 hidden md:block">{d.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 THE STUDIO ── */}
      <section id="studio" className={SEC}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-8 md:gap-20 items-center">
          <div className="flex flex-col gap-9">
            <p data-reveal="1" className={EYE}>01 &mdash; Our story</p>
            <h2 data-reveal="1" className={`${H2} text-[clamp(34px,4vw,60px)]`}>
              17 years building businesses people{" "}
              <em className="font-serif italic font-normal text-ct-pink">trust.</em>
            </h2>
            <p data-reveal="1" className={`${BODY} max-w-[480px]`}>
              We started in Vijayawada in 2008. Since then we have designed and built for hospitals, schools, jewellers, malls, restaurants and real-estate developers across India, the UK, UAE, Singapore and the USA.
            </p>
            <p data-reveal="1" data-reveal-delay="80" className={`${BODY} max-w-[480px]`}>
              One team &mdash; strategy, design, marketing and technology all under one roof. No handoffs. No gaps. No intent lost between departments.
            </p>
            <div data-reveal="1" data-reveal-delay="160" className="flex flex-wrap gap-4 gap-x-6 md:gap-10 pt-8 border-t border-ct-fg/14">
              {[["17+", "Years of experience"], ["2000+", "Clients across 5 countries"], ["5", "Core disciplines"]].map(([n, l]) => (
                <div key={l} className="flex flex-col gap-1.5">
                  <span className="text-[28px] md:text-[38px] font-medium tracking-[-0.04em] leading-none">{n}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/40 leading-[1.5]">{l}</span>
                </div>
              ))}
            </div>
            <div data-reveal="1" data-reveal-delay="220" className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-ct-blue/22 rounded-full bg-ct-blue/6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-ct-blue shrink-0 animate-[ct-pulse_2.4s_ease-in-out_infinite]" />
              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ct-blue/90">India &middot; UK &middot; UAE &middot; Singapore &middot; USA</span>
            </div>
          </div>
          <div data-reveal="1" className="relative rounded-3xl overflow-hidden">
            <img src={IMG1} alt="Creators Touch team collaborating on a project" loading="lazy"
              className="w-full block object-cover aspect-[4/5]" />
            <div className="absolute bottom-0 left-0 right-0 px-8 py-7 bg-[linear-gradient(to_top,rgba(8,9,10,0.9)_0%,transparent_100%)]">
              <p className="m-0 text-sm leading-[1.65] text-ct-fg/80 max-w-[340px]">&ldquo;Before we design a single page, we understand your business, your customers, and what they need to hear to say yes.&rdquo;</p>
            </div>
          </div>
        </div>
        <div data-reveal="1" className="mt-20 pt-10 border-t border-ct-fg/14">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ct-fg/30 m-0 mb-7">Trusted by</p>
          <div className="group/marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] max-md:mx-[-18px]">
            <div className="flex items-center gap-8 md:gap-14 w-max animate-[ct-marquee_28s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <img key={`${c.name}-${i}`} src={c.logo} alt={c.name} title={c.name} loading="lazy" draggable="false"
                  className="h-9 md:h-[52px] w-auto max-w-[120px] md:max-w-[180px] object-contain opacity-85 shrink-0 transition-[opacity,transform] duration-300 select-none pointer-events-none" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 SERVICES ── */}
      <ServicesSection />

      {/* ── 03 SELECTED WORK ── */}
      <section id="work" className={SEC}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[18px] md:gap-8 mb-9 md:mb-[52px]">
          <div data-reveal="1" className="flex flex-col gap-[18px]">
            <p className={EYE}>03 &mdash; Selected work</p>
            <h2 className="m-0 text-[clamp(36px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.05em]">
              Work that<br /><em className="font-serif italic font-normal text-ct-pink">proves it.</em>
            </h2>
          </div>
          <p data-reveal="1" data-reveal-delay="120" className="m-0 text-[15px] leading-[1.65] text-ct-fg/50 max-w-full md:max-w-[260px] text-left md:text-right">
            Every project here solved a real problem for a real business.
          </p>
        </div>
        <div data-reveal="1" className="relative rounded-[20px] overflow-hidden mb-12">
          <img src={IMG3} alt="Creators Touch team reviewing work across devices" loading="lazy"
            className="w-full h-auto block" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,10,0.65)_0%,transparent_55%)] flex items-end p-10">
            <p className="font-mono m-0 text-[11px] tracking-[0.18em] uppercase text-ct-fg/65">Healthcare &middot; Education &middot; Retail &middot; Jewellery &middot; Aesthetics &middot; NGO</p>
          </div>
        </div>
        <div data-stagger="1" className="grid grid-cols-1 min-[761px]:grid-cols-2 min-[1025px]:grid-cols-3 gap-7">
          {PROJECTS.map(p => (
            <a key={p.title} href={p.caseStudy || p.url} target={p.caseStudy ? "_self" : "_blank"} rel={p.caseStudy ? undefined : "noopener noreferrer"}
              className="group/proj relative overflow-visible min-[761px]:overflow-hidden min-[761px]:rounded-2xl cursor-pointer block [transform-style:preserve-3d] hover:shadow-[0_28px_72px_rgba(0,0,0,0.55)]"
              data-cursor-text={p.caseStudy ? "Case study" : "View"}>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl min-[761px]:rounded-none bg-ct-card">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover object-top block transition-transform duration-700 [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover/proj:scale-[1.06]" />
              </div>
              {/* Desktop/tablet overlay */}
              <div className="hidden min-[761px]:flex absolute inset-0 bg-[linear-gradient(0deg,rgba(8,9,10,0.94)_0%,rgba(8,9,10,0.18)_55%,transparent_100%)] flex-col justify-end p-[22px]">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  {p.caseStudy && <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-3 py-[5px] bg-ct-pink/18 border border-ct-pink/40 rounded-full text-ct-pink/90">Case study</span>}
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-3 py-[5px] bg-ct-bg/65 border border-ct-fg/14 rounded-full text-ct-fg/70">{p.tag}</span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ct-fg/50 mb-1.5">{p.category}</span>
                <h3 className="m-0 mb-1.5 text-[22px] font-normal tracking-[-0.03em] text-ct-fg">{p.title}</h3>
                <p className="m-0 text-[13px] leading-[1.5] text-ct-fg/55">{p.desc}</p>
              </div>
              {/* Mobile label below image */}
              <div className="min-[761px]:hidden flex flex-col gap-[5px] pt-3 px-1">
                <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-ct-fg/42">{p.category}</span>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="m-0 text-[17px] font-normal tracking-[-0.03em] text-ct-fg leading-[1.2]">{p.title}</h3>
                  {p.caseStudy && <span className="font-mono text-[9px] tracking-[0.1em] uppercase px-[11px] py-[5px] border border-ct-pink/40 rounded-full text-ct-pink/90 whitespace-nowrap shrink-0">Case study &rarr;</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── 04 E-COMMERCE ── */}
      <section id="ecommerce" className={SEC}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="flex flex-col gap-9">
            <p data-reveal="1" className={EYE}>04 &mdash; Shopify &amp; E-commerce</p>
            <h2 data-reveal="1" className={`${H2} text-[clamp(26px,7vw,42px)] md:text-[clamp(30px,3.8vw,56px)]`}>
              Turn your products into a business<br />that{" "}
              <em className="font-serif italic font-normal text-ct-lime">sells around the clock.</em>
            </h2>
            <p data-reveal="1" className={`${BODY} max-w-[440px]`}>
              You have put everything into your products. Your online store should reflect that &mdash; and work as hard as you do. Designed to turn more visitors into customers.
            </p>
            <div data-reveal="1" data-reveal-delay="80" className="flex flex-col">
              {[
                ["Better online shopping experience", "Your customers browse on their phones. We build stores that feel effortless on every device."],
                ["Easy product management", "Add products, update prices and track orders without any technical knowledge needed."],
                ["Professional brand experience", "Your store looks and feels like your brand — not like every other online shop."],
                ["Designed to convert", "Every detail is built to make buying easy and natural for your customers."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3.5 items-start py-4 border-t border-ct-fg/14">
                  <span className="w-1.5 h-1.5 rounded-full bg-ct-lime shrink-0 mt-2" />
                  <div>
                    <p className="m-0 mb-1 text-[15px] font-medium tracking-[-0.01em]">{t}</p>
                    <p className="m-0 text-sm leading-[1.6] text-ct-fg/50">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="1">
              <a href="/contact" className="inline-flex items-center gap-2.5 px-[26px] py-3.5 bg-ct-lime text-ct-bg rounded-full text-[15px] font-medium tracking-[-0.01em] font-sans">
                Start your store <span className="font-mono text-[13px]">&#8594;</span>
              </a>
            </div>
          </div>
          <div data-reveal="1" className="relative rounded-3xl overflow-hidden max-md:order-first">
            <img src={IMG4} alt="Small business owner packing products and managing their online store" loading="lazy"
              className="w-full block object-cover aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* ── 05 WHATSAPP & AUTOMATION ── */}
      <section id="automation" className={SEC}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div data-reveal="1" className="relative rounded-3xl overflow-hidden max-md:order-2">
            <img src={IMG5} alt="Business owner using WhatsApp automation to stay in touch with customers" loading="lazy"
              className="w-full block object-cover aspect-[3/4]" />
          </div>
          <div className="flex flex-col gap-9">
            <p data-reveal="1" className={EYE}>05 &mdash; WhatsApp &amp; Automation</p>
            <h2 data-reveal="1" className={`${H2} text-[clamp(26px,7vw,42px)] md:text-[clamp(30px,3.8vw,56px)]`}>
              Stop losing customers<br />
              <em className="font-serif italic font-normal text-ct-green">while you&rsquo;re busy</em><br />
              running your business.
            </h2>
            <p data-reveal="1" className={`${BODY} max-w-[440px]`}>
              Your customers send a message. What happens next? We build systems that respond, follow up and close sales automatically &mdash; so no one falls through the cracks.
            </p>
            <div data-reveal="1" data-reveal-delay="80" className="flex flex-col p-6 bg-ct-green/5 border border-ct-green/14 rounded-2xl">
              <p className="font-mono m-0 mb-5 text-[10px] tracking-[0.18em] uppercase text-ct-green/65">How it works</p>
              {[
                ["Customer sends an enquiry", "They message you on WhatsApp or fill in a form on your website"],
                ["Instant automatic reply", "They get a response immediately — even at 2 am"],
                ["Smart follow-up", "Reminders, appointment confirmations and quotes are sent automatically"],
                ["More sales, less effort", "You focus on delivering. The system handles the conversation."],
              ].map(([t, d], i, arr) => (
                <div key={t} className={`flex gap-4 items-start ${i < arr.length - 1 ? "pb-4 mb-4 border-b border-ct-green/10" : ""}`}>
                  <span className="w-6 h-6 rounded-full bg-ct-green/12 border border-ct-green/28 inline-flex items-center justify-center shrink-0 font-mono text-[10px] text-ct-green/80">{i + 1}</span>
                  <div>
                    <p className="m-0 mb-[3px] text-sm font-medium tracking-[-0.01em]">{t}</p>
                    <p className="m-0 text-[13px] leading-[1.55] text-ct-fg/50">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="1" className="flex flex-wrap gap-2">
              {["Order confirmation", "Appointment reminder", "Lead follow-up", "Abandoned cart", "Customer support", "Review request"].map(tag => (
                <span key={tag} className="font-mono text-[10px] tracking-[0.1em] uppercase px-[13px] py-1.5 border border-ct-green/20 rounded-full text-ct-green/70">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 INDUSTRIES ── */}
      <section id="industries" className={SEC}>
        <div className="flex flex-col gap-[52px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 flex-wrap">
            <div className="flex flex-col gap-[18px]">
              <p data-reveal="1" className={EYE}>06 &mdash; Industries</p>
              <h2 data-reveal="1" className="m-0 text-[clamp(32px,4.5vw,68px)] font-medium leading-[0.96] tracking-[-0.05em]">
                Explore the industries<br /><em className="font-serif italic font-normal text-ct-fg/50">we understand.</em>
              </h2>
            </div>
            <p data-reveal="1" className="m-0 text-[15px] leading-[1.65] text-ct-fg/50 max-w-full md:max-w-[300px] text-left md:text-right">
              From hospital reception desks to jewellery counters &mdash; if it&rsquo;s a real business, we have probably built for it.
            </p>
          </div>
          <div data-reveal="1" className="grid grid-cols-2 md:grid-cols-3 gap-px rounded-3xl overflow-hidden bg-ct-fg/6">
            {INDUSTRIES.map(ind => (
              <div key={ind.num} className="group/ind relative flex flex-col justify-end aspect-[4/3] md:aspect-[3/2] cursor-pointer overflow-hidden">
                <img src={ind.img} alt={ind.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover/ind:scale-[1.06]" />
                <div className="absolute inset-0 bg-ct-bg/40 transition-[background] duration-300 group-hover/ind:bg-ct-bg/70 group-hover/ind:backdrop-blur-[6px]" />
                <div className="relative z-[1] p-[clamp(12px,2vw,20px)] translate-y-1 md:translate-y-2 opacity-80 md:opacity-0 transition-[opacity,transform] duration-300 group-hover/ind:opacity-100 group-hover/ind:translate-y-0">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-ct-fg/60 block mb-1">{ind.num}</span>
                  <span className="text-[clamp(13px,1.4vw,18px)] font-medium tracking-[-0.02em] text-ct-fg leading-[1.2] block">{ind.title}</span>
                  <span className="text-[clamp(10px,1vw,13px)] text-ct-fg/50 block mt-[3px]">{ind.tags}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH PROGRESS ── */}
      <section id="growth" className={`${SEC} border-b-ct-fg/10`}>
        <div className="flex flex-col gap-[72px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 flex-wrap">
            <div className="flex flex-col gap-[18px]">
              <p data-reveal="1" className={EYE}>Our Growth Progress</p>
              <h2 data-reveal="1" className="m-0 text-[clamp(32px,4.5vw,68px)] font-medium leading-[0.96] tracking-[-0.05em]">
                From brief<br /><em className="font-serif italic font-normal text-ct-pink">to breakthrough.</em>
              </h2>
            </div>
            <p data-reveal="1" className="m-0 text-[15px] leading-[1.65] text-ct-fg/50 max-w-[280px] text-left md:text-right">
              A five-step process that takes you from first conversation to measurable, lasting growth.
            </p>
          </div>

          {/* Steps with animated connecting line */}
          <div data-growth-wrap="1" className="relative">
            <div className="ct-growth-line-wrap hidden md:block absolute top-7 left-[calc(10%+4px)] right-[calc(10%+4px)] h-px bg-ct-fg/8 overflow-hidden" aria-hidden="true">
              <div className="ct-growth-line h-full bg-[linear-gradient(90deg,#FF3D8F,#29A8DC)] origin-left scale-x-0 transition-transform duration-[1800ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {[
                { n: "01", title: "Discover", sub: "Understand your market", desc: "We dig into your business, your competitors and your customers before touching a single pixel.", color: "#FF3D8F" },
                { n: "02", title: "Strategise", sub: "Plan the approach", desc: "Goals, budget, channels and timeline — all agreed in writing before any creative work begins.", color: "#cc0066" },
                { n: "03", title: "Create", sub: "Build the work", desc: "Design, content and development done by one team. No handoffs. No gaps. No intent lost between departments.", color: "#29A8DC" },
                { n: "04", title: "Launch", sub: "Go live with confidence", desc: "Tested, refined and released. Your brand enters the market ready for real customers.", color: "#0977a8" },
                { n: "05", title: "Grow", sub: "Optimise and scale", desc: "We track what works, improve what doesn't and keep pushing until the numbers give us a reason to go further.", color: "#96BF48" },
              ].map((step, i) => (
                <div key={step.n} data-growth-step="1" className="ct-growth-step flex flex-row md:flex-col items-start md:items-stretch gap-4 md:gap-5"
                  style={{ animationDelay: `${i * 160}ms` }}>
                  <div className="flex justify-start md:justify-center mb-0 md:mb-2">
                    <div className="relative w-11 h-11 md:w-14 md:h-14">
                      <div className="w-full h-full rounded-full bg-ct-card border border-ct-fg/14 flex items-center justify-center">
                        <span className="font-mono text-[11px] tracking-[0.14em] text-ct-fg/55">{step.n}</span>
                      </div>
                      <div className="ct-gstep-ring absolute rounded-full opacity-0 scale-[0.7] transition-[opacity,transform] duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)]"
                        style={{ inset: -4, border: `2px solid ${step.color}` }} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="m-0 text-[clamp(16px,1.8vw,22px)] font-normal tracking-[-0.03em]" style={{ color: step.color }}>{step.title}</h3>
                    <p className="font-mono m-0 text-[9px] tracking-[0.14em] uppercase text-ct-fg/35">{step.sub}</p>
                    <p className="m-0 text-[13px] leading-[1.65] text-ct-fg/50 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword marquee strip */}
          <div className="overflow-hidden py-5 border-t border-ct-fg/7 border-b border-b-ct-fg/7">
            <div className="flex w-max animate-[ct-marquee_38s_linear_infinite]">
              {[1, 2].map(k => (
                <div key={k} className="flex items-center gap-7 pr-7 font-mono text-[10px] tracking-[0.16em] uppercase text-ct-fg/32 whitespace-nowrap">
                  {["Brand strategy", "Customer insights", "Positioning", "Value proposition", "Brand identity", "Performance marketing", "Rebranding", "Omnichannel", "Social ads", "Technical SEO", "KPI tracking"].map((t, i) => (
                    <span key={t} className="contents">
                      <span>{t}</span>
                      <span style={{ color: i % 2 ? "#0977a8" : "#cc0066" }}>✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 TESTIMONIALS ── */}
      <section id="reviews" className={`${SEC} max-md:px-[18px]`}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-7 md:gap-16 items-start mb-8 md:mb-16">
          <div data-reveal="1" className="relative rounded-3xl overflow-hidden">
            <img src={IMG7} alt="Small business owners who trust Creators Touch" loading="lazy"
              className="w-full h-auto block" />
          </div>
          <div className="flex flex-col gap-7">
            <p data-reveal="1" className={EYE}>07 &mdash; What clients say</p>
            <h2 data-reveal="1" className="m-0 text-[clamp(32px,4vw,58px)] font-medium leading-none tracking-[-0.05em]">
              People like you<br /><em className="font-serif italic font-normal text-ct-pink">trusted us.</em>
            </h2>
            <p data-reveal="1" className="m-0 text-base leading-[1.7] text-ct-fg/55 max-w-[380px]">
              Nothing we say about our own work is worth as much as what a client says about how it changed theirs.
            </p>
            <div data-reveal="1" className="flex items-center gap-4 px-6 py-5 bg-ct-card rounded-[14px] border border-ct-fg/8">
              <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <Star5 size={14} />
                <p className="font-mono m-0 mt-[5px] text-[10px] tracking-[0.14em] uppercase text-ct-fg/42">5.0 &middot; Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mx-[-18px] md:mx-[-28px]">
          <div data-rev-track="1" className="flex gap-5 w-max animate-[ct-marquee_80s_linear_infinite]">
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
            {REVIEWS.map(r => <ReviewCard key={r.name + "-dup"} r={r} hidden />)}
          </div>
        </div>
      </section>

      
      {/* ── INSIGHTS & INSPIRES ── */}
      <section id="insights" className={`${SEC} border-b-ct-fg/10`}>
        <div className="flex flex-col gap-[52px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 flex-wrap">
            <div className="flex flex-col gap-[18px]">
              <p data-reveal="1" className={EYE}>Insights &amp; Inspires</p>
              <h2 data-reveal="1" className="m-0 text-[clamp(32px,4.5vw,68px)] font-medium leading-[0.96] tracking-[-0.05em]">
                Ideas that move<br /><em className="font-serif italic font-normal text-ct-pink">your business.</em>
              </h2>
            </div>
            <a href="/blog" data-reveal="1"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-ct-fg/18 rounded-full font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/55 self-end">
              All articles <span>→</span>
            </a>
          </div>
          <div data-stagger="1" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.map(ins => (
              <article key={ins.title}
                className="flex flex-col border border-ct-fg/9 rounded-[20px] overflow-hidden bg-ct-card cursor-pointer transition-[transform,box-shadow] duration-[350ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:shadow-[0_28px_72px_rgba(0,0,0,0.6)]">
                {/* Cover image */}
                <div className="aspect-video relative overflow-hidden">
                  <img src={ins.cover} alt={ins.title} loading="lazy" className="w-full h-full object-cover block" />
                  <span className="absolute top-3.5 left-3.5 text-[11px] font-medium tracking-[0.08em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-[8px]" style={{ color: ins.color, borderColor: ins.color + "55", background: ins.color + "18" }}>{ins.cat}</span>
                </div>
                <div className="flex flex-col gap-3.5 p-6 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className={LABEL_SM}>{ins.date}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-ct-fg/22" />
                    <span className={LABEL_SM}>{ins.read} read</span>
                  </div>
                  <h3 className="m-0 text-[clamp(15px,1.5vw,18px)] font-normal leading-[1.35] tracking-[-0.02em]">{ins.title}</h3>
                  <p className="m-0 text-[13px] leading-[1.65] text-ct-fg/50">{ins.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-ct-fg/7 flex items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase" style={{ color: ins.color }}>Read article</span>
                    <span style={{ color: ins.color }}>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 TECHNOLOGY STACK ── */}
      <section id="tech-stack" className={`${SEC} border-b-ct-fg/10`}>
        <div className="flex flex-col gap-[52px]">
          <div className="flex flex-col items-center text-center gap-6">
            <p data-reveal="1" className={EYE}>08 &mdash; Technology</p>
            <h2 data-reveal="1" className="m-0 text-[clamp(36px,5vw,72px)] font-medium leading-[1] tracking-[-0.04em]">
              Technology <em className="font-serif italic font-normal text-ct-pink">Stack</em>
            </h2>
            <div data-reveal="1" className="w-full max-w-[780px] rounded-[20px] px-6 py-5 md:px-10 md:py-6" style={{ background: "linear-gradient(135deg, rgba(180,230,240,0.12), rgba(120,200,220,0.08))" }}>
              <p className="m-0 text-[15px] md:text-[17px] leading-[1.7] text-ct-fg/65">
                Our engineers apprehend your business requirements and help you choose the right technology for your solution.
              </p>
            </div>
          </div>

          <div data-stagger="1" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { cat: "Frontend", items: [
                { name: "JavaScript (ES6+)", img: "javascript.png" },
                { name: "TypeScript", img: "typescript.png" },
                { name: "React.js", img: "react.png" },
                { name: "Next.js", img: "nextjs.png" },
                { name: "RxJS", img: "rxjs.png" },
                { name: "Tailwind CSS", img: "tailwind.png" },
              ]},
              { cat: "Backend", items: [
                { name: "Node.js", img: "nodejs.png" },
                { name: "Express.js", img: "expressjs.png" },
                { name: "Hapi.js", img: "hapijs.png" },
              ]},
              { cat: "Database & Infrastructure", items: [
                { name: "PostgreSQL", img: "postgresql.png" },
                { name: "Redis", img: "redis.png" },
                { name: "Git", img: "git.png" },
                { name: "CI/CD", img: "cicd.png" },
                { name: "Microservices", img: "microservices.png" },
              ]},
              { cat: "Platforms & Design", items: [
                { name: "Webflow", img: "webflow.png" },
                { name: "Shopify", img: "shopify.png" },
                { name: "Figma", img: "figma.png" },
                { name: "Blender", img: "blender.png" },
              ]},
            ].map(group => (
              <div key={group.cat} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 border-b border-ct-fg/14 pb-3">
                  <h3 className="m-0 text-[clamp(18px,2vw,24px)] font-medium tracking-[-0.02em]">{group.cat}</h3>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {group.items.map(tech => (
                    <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default">
                      <div className="w-[72px] h-[72px] rounded-[16px] border border-ct-fg/10 flex items-center justify-center bg-ct-fg/[0.03] transition-[border-color,background] duration-300 group-hover:border-ct-fg/25 group-hover:bg-ct-fg/[0.06]">
                        <img src={"/assets/images/tech/" + tech.img} alt={tech.name} className="w-9 h-9 object-contain" />
                      </div>
                      <span className="font-mono text-[10px] md:text-[11px] tracking-[0.04em] text-ct-fg/55 text-center leading-[1.3]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 CONTACT ── */}
      <section id="contact" className="relative z-[1] px-[18px] py-[72px] md:px-7 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <p data-reveal="1" className={EYE}>09 &mdash; Let&rsquo;s talk</p>
              <h2 data-reveal="1" className={`${H2} mt-[18px] mb-5 text-[clamp(30px,3.6vw,54px)]`}>
                Tell us where you want<br />
                <em className="font-serif italic font-normal text-ct-pink">your business to go.</em>
              </h2>
              <p data-reveal="1" className="m-0 text-base leading-[1.75] text-ct-fg/55 max-w-[420px]">
                You don&rsquo;t need to know the marketing terminology. Tell us about your business and what you want to improve. We&rsquo;ll help you figure out the next step.
              </p>
            </div>
            <div data-reveal="1" className="relative rounded-[20px] overflow-hidden">
              <img src={IMG9} alt="A friendly consultation meeting at Creators Touch" loading="lazy"
                className="w-full block object-cover aspect-[4/3]" />
            </div>
            <div data-reveal="1" className="flex flex-col">
              {[
                ["Call or WhatsApp", "+91 98859 33339", "tel:+919885933339"],
                ["Email us", "hello@creatorstouch.in", "mailto:hello@creatorstouch.in"],
                ["Find us", "Vijayawada, Andhra Pradesh", null],
              ].map(([lab, val, href]) => (
                <div key={lab} className="flex flex-col gap-[5px] py-[18px] border-b border-ct-fg/14">
                  <span className={LABEL}>{lab}</span>
                  {href
                    ? <a href={href} className="text-lg font-normal tracking-[-0.025em] text-ct-fg">{val}</a>
                    : <span className="text-lg font-normal tracking-[-0.025em] text-ct-fg/70">{val}</span>}
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="1">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-[1] flex flex-col md:flex-row justify-between items-start md:items-end gap-3.5 md:gap-8 px-[18px] py-6 md:px-7 md:py-8 pb-[calc(env(safe-area-inset-bottom,0px)+96px)] md:pb-8 border-t border-ct-fg/10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/images/creator_touch.png" alt="" className="w-7 h-7 block" />
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/42">Creators Touch Global &middot; &copy; 2026</span>
          </div>
          <div className="flex gap-2.5">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="flex items-center justify-center w-[34px] h-[34px] border border-ct-fg/14 rounded-full text-ct-fg/45 transition-[color,border-color] duration-[250ms] hover:text-ct-fg hover:border-ct-fg/40">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3.5 gap-x-4 md:gap-6 font-mono text-[10px] tracking-[0.14em] uppercase text-ct-fg/42">
          <RollLink href="/work" label="Work" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/services" label="Services" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/blog" label="Blog" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/about" label="About" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/contact" label="Contact" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
        </div>
      </footer>
    </div>
  );
}
