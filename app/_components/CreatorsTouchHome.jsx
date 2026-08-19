"use client";
// Creators Touch Global — homepage
import { useEffect, useState, useRef } from "react";
import "./home.css";
import { initHomeFX } from "./home-fx";

const _sc = {};
function S(css) {
  if (_sc[css]) return _sc[css];
  const o = {};
  css.split(";").forEach(d => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim(), v = d.slice(i + 1).trim();
    if (k) o[k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v;
  });
  return (_sc[css] = o);
}

const MONO = "font-family:'Geist Mono',monospace;";
const SERIF = "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400;";
const EYEBROW = MONO + "margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)";
const HAIR = "1px solid rgba(244,243,241,0.10)";
const HAIR14 = "1px solid rgba(244,243,241,0.14)";

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

// Featured work — replace images + descriptions with real project shots when available
const PROJECTS = [
  {
    title: "Trust Hospital", category: "Healthcare · Website Design", year: "2023", tag: "Web + UX",
    desc: "A full-featured hospital website covering patient information, specialist profiles, department pages, and an appointment booking flow — built to establish trust and drive conversions.",
    img: "/assets/images/projects/trust-hospital/screen-1.png",
    url: "https://trusthospital.com", caseStudy: null
  },
  {
    title: "Anjaneya Jewellery", category: "Jewellery & Luxury · E-commerce", year: "2023", tag: "Brand + E-comm",
    desc: "A high-end jewellery showcase with curated collection pages, custom order enquiry, a photo lookbook, and certification details — designed to reflect premium brand positioning.",
    img: "/assets/images/projects/anjaneya-jewellery/screen-1.png",
    url: "https://anjaneyajewellery.com"
  },
  {
    title: "Change NGO", category: "Non-profit · Campaign Site", year: "2024", tag: "Web + Strategy",
    desc: "An impact-driven NGO platform with donation funnels, volunteer registration, campaign microsites, and impact reporting dashboards — built to inspire action and drive giving.",
    img: "/assets/images/projects/change-ngo/screen-1.png",
    url: "https://change.ngo"
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
    url: "https://stpaulsschoolvja.com"
  },
  {
    title: "Meditron CDC", category: "Healthcare · Paediatric Therapy", year: "2025", tag: "Web + Brand",
    desc: "A specialist child development centre website covering speech, occupational and physiotherapy services — designed to build trust with families and drive appointment bookings.",
    img: "/assets/images/projects/meditron-cdc/screen-1.png",
    url: "https://meditroncdc.com"
  },
  {
    title: "Kensley Aesthetics", category: "Aesthetics · Clinic", year: "2025", tag: "Brand + Web",
    desc: "A premium aesthetics clinic website for a Newcastle & London practice — showcasing treatments, before/after galleries, and an online consultation booking system.",
    img: "/assets/images/projects/kensley-aesthetics/screen-1.png",
    url: "https://kensleyaesthetics.com", caseStudy: "/work/kinsale"
  },
  {
    title: "Mark", category: "Brand · Web · Marketing", year: "2025", tag: "Full Brand Build",
    desc: "A complete brand identity — from the first logo mark to a full digital marketing system — built for a growing business that needed to look the part before it could grow into the part.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
    url: "#", caseStudy: "/work/mark"
  },
];

const INDUSTRIES = [
  { num: "01", title: "E-commerce & Retail", tags: "Conversion funnels", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&q=80" },
  { num: "02", title: "Real Estate", tags: "Property portals", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80" },
  { num: "03", title: "Education & EdTech", tags: "Course platforms", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80" },
  { num: "04", title: "Hospitality & Tourism", tags: "Booking engines", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80" },
  { num: "05", title: "Food & Beverage", tags: "Online ordering", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" },
  { num: "06", title: "Automotive", tags: "Dealer showcases", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80" },
  { num: "07", title: "Jewellery & Luxury", tags: "Lookbooks", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=80" },
  { num: "08", title: "Government & Civic", tags: "Service portals", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=900&q=80" }
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

// Section imagery — mapped in order to the nine redesigned sections below
const IMG1 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (1).png";
const IMG2 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (2).png";
const IMG3 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (3).png";
const IMG4 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_12 PM (4).png";
const IMG5 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (5).png";
const IMG6 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (6).png";
const IMG7 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_15 PM (7).png";
const IMG8 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_15 PM (8).png";
const IMG9 = "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_16 PM (9).png";

// Services structured around business problems — not disciplines
const SERVICE_GROUPS = [
  { num: "01", title: "Get more customers", color: "#FF3D8F", desc: "Show up where your customers are already looking — and give them a strong reason to choose you over everyone else.", items: ["Google Search Ads", "Meta & Instagram Ads", "SEO", "Landing Pages"] },
  { num: "02", title: "Build a better website", color: "#29A8DC", desc: "A website that works for your business around the clock — fast, clear, and built to turn visitors into real enquiries.", items: ["Website Design", "Website Development", "Mobile Optimisation", "Speed & Performance"] },
  { num: "03", title: "Build a stronger brand", color: "#cc0066", desc: "Your brand is the first impression you never get to redo. We make sure it earns the trust it deserves.", items: ["Logo & Identity", "Brand Guidelines", "Copywriting", "Social Media Visuals"] },
  { num: "04", title: "Sell your products online", color: "#96BF48", desc: "From your first product to your thousandth order — stores built to look and feel like your brand.", items: ["Shopify Store Design", "Product Catalogues", "Secure Checkout", "Inventory Setup"] },
  { num: "05", title: "Save time with automation", color: "#25D366", desc: "Never miss a customer again. Automated messages that follow up, confirm and convert — without any extra effort from you.", items: ["WhatsApp Automation", "Order Confirmations", "Appointment Reminders", "Lead Follow-ups"] },
];

const MARQ = ["Brand strategy", "Websites", "Performance marketing", "AI workflows", "Content studio"];

// Social links — update hrefs with real profile URLs before launch
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
    <a href={href} data-roll="1" style={S(`display:block;overflow:hidden;height:${h}px;line-height:${h}px;color:${dim}`)}>
      <span data-roll-inner="1" style={S("display:block;transition:transform .4s cubic-bezier(.76,0,.24,1)")}>
        <span style={S(`display:block;height:${h}px`)}>{label}</span>
        <span aria-hidden="true" style={S(`display:block;height:${h}px;color:${hi}`)}>{label}</span>
      </span>
    </a>
  );
}

function Star5({ size = 13 }) {
  return <span style={S(`color:#FBBC04;font-size:${size}px;letter-spacing:3px;line-height:1`)}>★★★★★</span>;
}

function ReviewCard({ r, hidden }) {
  return (
    <div aria-hidden={hidden || undefined} data-m-rcard="1" style={S("flex:none;width:400px;display:flex;flex-direction:column;gap:16px;background:#0E0F12;border:1px solid rgba(244,243,241,0.10);border-radius:18px;padding:26px")}>
      <div style={S("display:flex;justify-content:space-between;align-items:center")}>
        <Star5 />
        <span style={S(MONO + "font-size:9px;letter-spacing:0.16em;color:rgba(244,243,241,0.35)")}>GOOGLE</span>
      </div>
      <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.72)")}>&ldquo;{r.text}&rdquo;</p>
      <div style={S("display:flex;align-items:center;gap:12px;margin-top:auto")}>
        <span style={S("width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,rgba(204,0,102,0.4),rgba(9,119,168,0.4));display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;letter-spacing:0.02em")}>{r.initials}</span>
        <span style={S("display:flex;flex-direction:column;gap:2px")}>
          <span style={S("font-size:14px;font-weight:500;letter-spacing:-0.01em")}>{r.name}</span>
          <span style={S(MONO + "font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>{r.company}</span>
        </span>
      </div>
    </div>
  );
}

function MarqueeRow() {
  return (
    <div data-m-marq="1" style={S("display:flex;align-items:center;gap:40px;padding-right:40px;font-family:'Instrument Serif',Georgia,serif;font-size:34px;letter-spacing:-0.01em;color:rgba(244,243,241,0.72);white-space:nowrap")}>
      {MARQ.map((w, i) => (
        <span key={w} style={{ display: "contents" }}>
          <span style={i % 2 ? S("font-style:italic") : undefined}>{w}</span>
          <span style={S(`color:${i % 2 ? "#0977a8" : "#cc0066"}`)}>✦</span>
        </span>
      ))}
    </div>
  );
}

// Contact form — wire up Formspree: replace YOUR_FORM_ID with your real form ID from https://formspree.io
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
      <div style={S("padding:48px 0")}>
        <p style={S(SERIF + "font-size:clamp(24px,3vw,40px);margin:0 0 12px;color:#F4F3F1")}>We&rsquo;ll be in touch soon.</p>
        <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.5)")}>Thanks for reaching out. We usually respond within one business day.</p>
      </div>
    );
  }

  const inputStyle = "background:rgba(244,243,241,0.04);border:1px solid rgba(244,243,241,0.14);border-radius:10px;padding:14px 16px;color:#F4F3F1;font-family:Geist,Arial,sans-serif;font-size:15px;letter-spacing:-0.02em;outline:none;width:100%;box-sizing:border-box";

  return (
    <form onSubmit={handle} style={S("display:flex;flex-direction:column;gap:20px")}>
      <div style={S("display:grid;grid-template-columns:1fr 1fr;gap:16px")} data-m-cform-grid="1">
        <div style={S("display:flex;flex-direction:column;gap:8px")}>
          <label htmlFor="ct-name" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Name</label>
          <input id="ct-name" name="name" type="text" required className="ct-input"
            value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
            style={S(inputStyle)} placeholder="Your name" />
        </div>
        <div style={S("display:flex;flex-direction:column;gap:8px")}>
          <label htmlFor="ct-phone" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Phone / WhatsApp</label>
          <input id="ct-phone" name="phone" type="tel" className="ct-input"
            value={fields.phone} onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
            style={S(inputStyle)} placeholder="+91 98859 33339" />
        </div>
        <div style={S("grid-column:1/-1;display:flex;flex-direction:column;gap:8px")}>
          <label htmlFor="ct-email" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Email</label>
          <input id="ct-email" name="email" type="email" required className="ct-input"
            value={fields.email} onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            style={S(inputStyle)} placeholder="hello@yourbusiness.com" />
        </div>
      </div>
      <div style={S("display:flex;flex-direction:column;gap:12px")}>
        <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>What do you need help with?</span>
        <div style={S("display:flex;flex-wrap:wrap;gap:8px")}>
          {NEEDS.map(need => (
            <button key={need} type="button" onClick={() => toggleNeed(need)}
              style={{
                ...S("padding:8px 18px;border-radius:100px;font-family:Geist,Arial,sans-serif;font-size:13px;letter-spacing:-0.01em;cursor:pointer;transition:background .2s ease,color .2s ease,border-color .2s ease"),
                ...(fields.needs.includes(need)
                  ? S("background:#FF3D8F;color:#08090A;border:1px solid #FF3D8F")
                  : S("background:transparent;color:rgba(244,243,241,0.62);border:1px solid rgba(244,243,241,0.18)")),
              }}>
              {need}
            </button>
          ))}
        </div>
      </div>
      <div style={S("display:flex;flex-direction:column;gap:8px")}>
        <label htmlFor="ct-msg" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Tell us about your business</label>
        <textarea id="ct-msg" name="message" rows={4} className="ct-input"
          value={fields.message} onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          style={S(inputStyle + ";resize:vertical;min-height:120px")}
          placeholder="You don't need to know the marketing terminology. Just tell us about your business and what you'd like to improve." />
      </div>
      <div style={S("display:flex;align-items:center;gap:14px;flex-wrap:wrap")}>
        <button type="submit" disabled={status === "sending"} className="ct-hov-pink ct-submit-btn"
          style={S("display:inline-flex;align-items:center;gap:10px;padding:15px 26px;background:#F4F3F1;color:#08090A;border:none;border-radius:100px;font-size:15px;font-weight:500;letter-spacing:-0.02em;cursor:pointer;font-family:Geist,Arial,sans-serif;transition:background .25s ease,color .25s ease")}>
          {status === "sending" ? "Sending\u2026" : "Book a Free Consultation"}
          <span style={S(MONO + "font-size:13px")}>&#8594;</span>
        </button>
        <a href="https://wa.me/919885933339" target="_blank" rel="noopener noreferrer"
          style={S("display:inline-flex;align-items:center;gap:8px;padding:15px 22px;border:1px solid rgba(37,211,102,0.32);border-radius:100px;font-size:14px;letter-spacing:-0.01em;color:rgba(37,211,102,0.85);font-family:Geist,Arial,sans-serif")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
          Chat on WhatsApp
        </a>
        {status === "error" && <span style={S("font-size:13px;color:#FF3D8F")}>Something went wrong &mdash; email hello@creatorstouch.in</span>}
      </div>
      <p style={S(MONO + "margin:0;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(244,243,241,0.28)")}>We usually respond within one business day.</p>
    </form>
  );
}

export default function CreatorsTouchHome() {
  useEffect(() => initHomeFX({ logoSrc: "/assets/images/creator_touch.png" }), []);

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
    <div className="ct-root" style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;font-weight:400;letter-spacing:-0.02em;overflow-x:hidden;cursor:default")}>
      {/* Film grain overlay — subtle texture for depth */}
      <div aria-hidden="true" className="ct-grain" />

      {/* Sticky mobile CTA — appears after scrolling past hero */}
      <div ref={mobCtaRef} className="ct-mob-cta">
        <a href="#contact" className="ct-mob-cta-pill">
          <span style={S("font-size:16px;font-weight:500;letter-spacing:-0.02em;color:#fff")}>Start a project</span>
          <span style={S("width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.2);display:inline-flex;align-items:center;justify-content:center;font-size:15px;color:#fff;flex-shrink:0")}>→</span>
        </a>
      </div>

      {/* Scroll progress bar */}
      <div style={S("position:fixed;top:0;left:0;right:0;height:2px;z-index:9999;background:rgba(244,243,241,0.06)")}>
        <div ref={progressRef} style={S("height:100%;width:0%;background:linear-gradient(90deg,#FF3D8F,#29A8DC);transition:width .1s linear")} />
      </div>

      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div style={S("position:fixed;inset:0;z-index:200;background:#08090A;display:flex;flex-direction:column;padding:16px 28px 32px")} aria-modal="true" role="dialog" aria-label="Navigation menu">
          <div style={S("display:flex;align-items:center;justify-content:space-between;padding-bottom:48px")}>
            <a href="#top" onClick={() => setMenuOpen(false)} style={S("display:flex;align-items:center;gap:10px")}>
              <img src="/assets/images/creator_touch.png" alt="Creators Touch" style={S("width:48px;height:48px;display:block")} />
              <span style={S("display:flex;flex-direction:column;line-height:1.05")}>
                <span style={S("font-size:14px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
                <span style={S(MONO + "font-size:9px;letter-spacing:0.18em;color:rgba(244,243,241,0.45)")}>GLOBAL</span>
              </span>
            </a>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={S("background:none;border:none;color:#F4F3F1;cursor:pointer;padding:8px;display:flex;align-items:center;justify-content:center")}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav style={S("display:flex;flex-direction:column")}>
            {[["/work","Work"],["/services","Services"],["/about","About"],["#contact","Contact"]].map(([href, label], i) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}
                className="ct-menu-item"
                style={{...S("font-size:clamp(36px,9vw,60px);font-weight:400;letter-spacing:-0.04em;color:#F4F3F1;padding:12px 0;border-bottom:1px solid rgba(244,243,241,0.08);line-height:1.1;text-decoration:none"), animationDelay: `${i * 60 + 40}ms`}}>
                {label}
              </a>
            ))}
          </nav>
          <div style={S("margin-top:auto;display:flex;flex-wrap:wrap;gap:24px;padding-top:32px")}>
            <a href="tel:+919885933339" style={S(MONO + "font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>+91 98859 33339</a>
            <a href="mailto:hello@creatorstouch.in" style={S(MONO + "font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>hello@creatorstouch.in</a>
          </div>
        </div>
      )}

      <header id="ct-header" style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:16px 28px;background:rgba(8,9,10,0);border-bottom:1px solid transparent;transition:background .35s ease,border-color .35s ease,backdrop-filter .35s ease")}>
        <a href="#top" style={S("display:flex;align-items:center;gap:10px")}>
          <img src="/assets/images/creator_touch.png" alt="Creators Touch" style={S("width:48px;height:48px;display:block")} />
          <span style={S("display:flex;flex-direction:column;line-height:1.05")}>
            <span style={S("font-size:14px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
            <span style={S(MONO + "font-size:9px;letter-spacing:0.18em;color:rgba(244,243,241,0.45)")}>GLOBAL</span>
          </span>
        </a>
        <nav data-m-nav="1" style={S("display:flex;align-items:center;gap:28px;" + MONO + "font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.62)")}>
          <RollLink href="/work" label="Work" />
          <RollLink href="/services" label="Services" />
          <RollLink href="/about" label="About" />
          <a href="#contact" data-magnetic="1" data-m-navcta="1" className="ct-hov-cta" style={S("display:inline-flex;align-items:center;gap:8px;padding:9px 16px;border:1px solid rgba(244,243,241,0.22);border-radius:100px;color:#F4F3F1")}>Start a project</a>
        </nav>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="ct-hamburger">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <section id="top" style={S("position:relative;z-index:1;min-height:92vh;display:flex;flex-direction:column;justify-content:space-between;padding:72px 28px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;justify-content:space-between;align-items:flex-start;gap:32px")}>
          <p style={S(MONO + "margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);max-width:220px;line-height:1.6")}>Digital studio<br />Vijayawada · India</p>
          <p style={S(MONO + "margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);text-align:right;line-height:1.6")}>Web · Marketing · AI<br />Est. 2008</p>
        </div>
        <h1 data-hero-title="1" style={S("margin:56px 0 0;font-size:clamp(40px,7.8vw,128px);font-weight:500;line-height:0.92;letter-spacing:-0.055em;text-wrap:balance;will-change:transform")}>
          <span style={S("display:block;overflow:hidden")}><span data-px-hl="1" style={S("display:block")}>We create and grow</span></span>
          <span style={S("display:block;overflow:hidden;padding-left:0.09em")}><span data-px-hl="1" style={S("display:block")}>digital brands people</span></span>
          <span style={S("display:block;overflow:hidden;padding-left:0.18em")}>
            <span data-px-hl="1" style={S("display:block")}>cannot <em style={S(SERIF + "letter-spacing:-0.02em;color:#FF3D8F")}>ignore.</em></span>
          </span>
        </h1>
        <div data-reveal="1" data-m-herobot="1" style={S("display:grid;grid-template-columns:1.1fr 1fr;gap:40px;align-items:end;margin-top:72px;padding-top:26px;border-top:" + HAIR)}>
          <div data-m-stats="1" style={S("display:flex;flex-wrap:wrap;gap:48px")}>
            {[["17", " yrs", "Building brands", "17 yrs"], ["100", "+", "Clients said yes", "100+"], ["5", "", "Core disciplines", "05", "2"]].map(([n, suf, lab, txt, pad]) => (
              <div key={lab} style={S("display:flex;flex-direction:column;gap:7px")}>
                <span data-count={n} data-suffix={suf || undefined} data-pad={pad} style={S("font-size:26px;font-weight:500;letter-spacing:-0.04em;line-height:1")}>{txt}</span>
                <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>{lab}</span>
              </div>
            ))}
          </div>
          <p data-m-herop="1" style={S("margin:0;font-size:17px;line-height:1.5;color:rgba(244,243,241,0.6);max-width:460px;justify-self:end")}>Strategy, identity, content and engineering under one roof. <span style={S("color:#F4F3F1")}>We make those first seconds impossible to ignore.</span></p>
        </div>
        <div style={S("display:flex;align-items:center;gap:10px;margin-top:32px;align-self:flex-start")}>
          <div style={S("width:1px;height:36px;background:linear-gradient(to bottom,rgba(244,243,241,0),rgba(244,243,241,0.4));animation:ct-pulse 2s ease-in-out infinite")} />
          <span style={S(MONO + "font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35)")}>Scroll</span>
        </div>
      </section>

      <div style={S("position:relative;z-index:1;overflow:hidden;padding:22px 0;border-bottom:" + HAIR)}>
        <div data-skew="1" style={S("will-change:transform")}>
          <div style={S("display:flex;width:max-content;animation:ct-marquee 42s linear infinite")}>
            <MarqueeRow /><MarqueeRow />
          </div>
        </div>
      </div>

      {/* ─── 01 THE STUDIO ─── */}
      <section id="studio" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:grid;grid-template-columns:1fr 1.05fr;gap:80px;align-items:center")} data-m-studio-grid="1">
          <div style={S("display:flex;flex-direction:column;gap:36px")}>
            <p data-reveal="1" style={S(EYEBROW)}>01 &mdash; Our story</p>
            <h2 data-reveal="1" style={S("margin:0;font-size:clamp(34px,4vw,60px);font-weight:400;line-height:1.1;letter-spacing:-0.04em")}>
              17 years building businesses people{" "}
              <em style={S(SERIF + "color:#FF3D8F")}>trust.</em>
            </h2>
            <p data-reveal="1" style={S("margin:0;font-size:17px;line-height:1.75;color:rgba(244,243,241,0.6);max-width:480px")}>
              We started in Vijayawada in 2008. Since then we have designed and built for hospitals, schools, jewellers, malls, restaurants and real-estate developers across India, the UK, UAE, Singapore and the USA.
            </p>
            <p data-reveal="1" data-reveal-delay="80" style={S("margin:0;font-size:17px;line-height:1.75;color:rgba(244,243,241,0.6);max-width:480px")}>
              One team &mdash; strategy, design, marketing and technology all under one roof. No handoffs. No gaps. No intent lost between departments.
            </p>
            <div data-reveal="1" data-reveal-delay="160" style={S("display:flex;gap:40px;padding-top:32px;border-top:" + HAIR14)} data-m-studio-stats="1">
              {[["17+", "Years of experience"], ["100+", "Clients across 5 countries"], ["5", "Core disciplines"]].map(([n, l]) => (
                <div key={l} style={S("display:flex;flex-direction:column;gap:6px")}>
                  <span style={S("font-size:38px;font-weight:500;letter-spacing:-0.04em;line-height:1")}>{n}</span>
                  <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.4);line-height:1.5")}>{l}</span>
                </div>
              ))}
            </div>
            <div data-reveal="1" data-reveal-delay="220" style={S("display:inline-flex;align-items:center;gap:10px;padding:10px 16px;border:1px solid rgba(41,168,220,0.22);border-radius:100px;background:rgba(41,168,220,0.06);align-self:flex-start")}>
              <span style={S("width:6px;height:6px;border-radius:50%;background:#29A8DC;flex-shrink:0;animation:ct-pulse 2.4s ease-in-out infinite")} />
              <span style={S(MONO + "font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(41,168,220,0.9)")}>India &middot; UK &middot; UAE &middot; Singapore &middot; USA</span>
            </div>
          </div>
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")}>
            <img src={IMG1} alt="Creators Touch team collaborating on a project" loading="lazy"
              style={S("width:100%;display:block;object-fit:cover;aspect-ratio:4/5")} />
            <div style={S("position:absolute;bottom:0;left:0;right:0;padding:28px 32px;background:linear-gradient(to top,rgba(8,9,10,0.9) 0%,transparent 100%)")}>
              <p style={S("margin:0;font-size:14px;line-height:1.65;color:rgba(244,243,241,0.8);max-width:340px")}>&ldquo;Before we design a single page, we understand your business, your customers, and what they need to hear to say yes.&rdquo;</p>
            </div>
          </div>
        </div>
        <div data-reveal="1" style={S("margin-top:80px;padding-top:40px;border-top:" + HAIR14)}>
          <p style={S(MONO + "font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.3);margin:0 0 28px")}>Trusted by</p>
          <div style={S("display:flex;flex-wrap:wrap;gap:20px 28px;align-items:center")} data-m-clients="1">
            {CLIENTS.map(c => (
              <img key={c.name} src={c.logo} alt={c.name} title={c.name} loading="lazy"
                style={S("height:30px;width:auto;max-width:110px;object-fit:contain;opacity:0.38;filter:saturate(0) brightness(1.4);transition:opacity .3s ease,filter .3s ease")}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.filter = "saturate(0.3) brightness(1.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.38"; e.currentTarget.style.filter = "saturate(0) brightness(1.4)"; }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 02 SERVICES ─── */}
      <section id="services" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:start")} data-m-svc-grid="1">
          <div style={S("position:sticky;top:120px")} data-m-svc-stick="1">
            <p data-reveal="1" style={S(EYEBROW)}>02 &mdash; How we help</p>
            <h2 data-reveal="1" style={S("margin:18px 0 28px;font-size:clamp(32px,3.8vw,56px);font-weight:400;line-height:1.06;letter-spacing:-0.04em")}>
              How we help your<br /><em style={S(SERIF + "color:rgba(244,243,241,0.5)")}>business grow.</em>
            </h2>
            <p data-reveal="1" style={S("margin:0 0 40px;font-size:16px;line-height:1.7;color:rgba(244,243,241,0.55);max-width:380px")}>
              We don&rsquo;t talk in marketing language. We talk in business results. Tell us your problem and we&rsquo;ll tell you exactly how we would fix it.
            </p>
            <div data-reveal="1" style={S("border-radius:20px;overflow:hidden")} data-m-svc-img="1">
              <img src={IMG2} alt="Creators Touch team in a strategy planning session" loading="lazy"
                style={S("width:100%;display:block;object-fit:cover;aspect-ratio:4/3")} />
            </div>
          </div>
          <div style={S("display:flex;flex-direction:column;border-top:" + HAIR14)}>
            {SERVICE_GROUPS.map((sg, i) => (
              <div key={sg.num} data-reveal="1" data-reveal-delay={String(i * 80)} className="ct-hov-row"
                style={S("padding:32px 12px;border-bottom:" + HAIR14 + ";transition:background .25s ease")}>
                <div style={S("display:flex;align-items:baseline;gap:20px;margin-bottom:14px")}>
                  <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;color:rgba(244,243,241,0.35)")}>{sg.num}</span>
                  <h3 style={S("margin:0;font-size:clamp(20px,2.4vw,32px);font-weight:400;letter-spacing:-0.03em")}>{sg.title}</h3>
                </div>
                <p style={S("margin:0 0 16px;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.55);padding-left:38px;max-width:480px")}>{sg.desc}</p>
                <div style={S("display:flex;flex-wrap:wrap;gap:7px;padding-left:38px")}>
                  {sg.items.map(it => (
                    <span key={it} style={{ ...S(MONO + "font-size:10px;letter-spacing:0.1em;text-transform:uppercase;padding:6px 13px;border-radius:100px;border:1px solid"), borderColor: sg.color + "40", color: sg.color, opacity: 0.9 }}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 SELECTED WORK ─── */}
      <section id="work" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:52px")} data-m-shead="1">
          <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px")}>
            <p style={S(EYEBROW)}>03 &mdash; Selected work</p>
            <h2 style={S("margin:0;font-size:clamp(36px,5.5vw,80px);font-weight:500;line-height:0.95;letter-spacing:-0.05em")}>
              Work that<br /><em style={S(SERIF + "color:#FF3D8F")}>proves it.</em>
            </h2>
          </div>
          <p data-reveal="1" data-reveal-delay="120" style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.5);max-width:260px;text-align:right")}>
            Every project here solved a real problem for a real business.
          </p>
        </div>
        <div data-reveal="1" style={S("position:relative;border-radius:20px;overflow:hidden;margin-bottom:48px")}>
          <img src={IMG3} alt="Creators Touch team reviewing work across devices" loading="lazy"
            style={S("width:100%;height:auto;display:block")} />
          <div style={S("position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,9,10,0.65) 0%,transparent 55%);display:flex;align-items:flex-end;padding:40px")}>
            <p style={S(MONO + "margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(244,243,241,0.65)")}>Healthcare &middot; Education &middot; Retail &middot; Jewellery &middot; Aesthetics &middot; NGO</p>
          </div>
        </div>
        <div data-stagger="1" data-m-projects="1" style={S("display:grid;grid-template-columns:repeat(4,1fr);gap:20px")}>
          {PROJECTS.map(p => (
            <a key={p.title} href={p.caseStudy || p.url} target={p.caseStudy ? "_self" : "_blank"} rel={p.caseStudy ? undefined : "noopener noreferrer"}
              className="ct-proj-card" data-cursor-text={p.caseStudy ? "Case study" : "View"}
              style={S("position:relative;border-radius:16px;overflow:hidden;cursor:pointer;text-decoration:none;display:block")}>
              <div style={S("aspect-ratio:4/5;overflow:hidden")}>
                <img src={p.img} alt={p.title} loading="lazy"
                  style={S("width:100%;height:100%;object-fit:cover;display:block;transition:transform .7s cubic-bezier(.22,1,.36,1)")} />
              </div>
              <div className="ct-proj-overlay" style={S("position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,9,10,0.94) 0%,rgba(8,9,10,0.18) 55%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:22px")}>
                <div style={S("position:absolute;top:16px;right:16px;display:flex;align-items:center;gap:8px")}>
                  {p.caseStudy && <span style={S(MONO + "font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(255,61,143,0.18);border:1px solid rgba(255,61,143,0.4);border-radius:100px;color:rgba(255,61,143,0.9)")}>Case study</span>}
                  <span style={S(MONO + "font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(8,9,10,0.65);border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.7)")}>{p.tag}</span>
                </div>
                <span style={S(MONO + "font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);margin-bottom:6px")}>{p.category}</span>
                <h3 style={S("margin:0 0 6px;font-size:22px;font-weight:400;letter-spacing:-0.03em;color:#F4F3F1")}>{p.title}</h3>
                <p style={S("margin:0;font-size:13px;line-height:1.5;color:rgba(244,243,241,0.55)")}>{p.desc}</p>
              </div>
              <div className="ct-proj-mob-label">
                <span className="ct-proj-mob-cat">{p.category}</span>
                <div style={S("display:flex;align-items:center;justify-content:space-between;gap:8px")}>
                  <h3 className="ct-proj-mob-title">{p.title}</h3>
                  {p.caseStudy && <span className="ct-proj-mob-badge">Case study &rarr;</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── 04 E-COMMERCE ─── */}
      <section id="ecommerce" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center")} data-m-ec-grid="1">
          <div style={S("display:flex;flex-direction:column;gap:36px")}>
            <p data-reveal="1" style={S(EYEBROW)}>04 &mdash; Shopify &amp; E-commerce</p>
            <h2 data-reveal="1" style={S("margin:0;font-size:clamp(30px,3.8vw,56px);font-weight:400;line-height:1.1;letter-spacing:-0.04em")}>
              Turn your products into a business<br />that{" "}
              <em style={S(SERIF + "color:#96BF48")}>sells around the clock.</em>
            </h2>
            <p data-reveal="1" style={S("margin:0;font-size:17px;line-height:1.75;color:rgba(244,243,241,0.6);max-width:440px")}>
              You have put everything into your products. Your online store should reflect that &mdash; and work as hard as you do. Designed to turn more visitors into customers.
            </p>
            <div data-reveal="1" data-reveal-delay="80" style={S("display:flex;flex-direction:column;gap:0")}>
              {[
                ["Better online shopping experience", "Your customers browse on their phones. We build stores that feel effortless on every device."],
                ["Easy product management", "Add products, update prices and track orders without any technical knowledge needed."],
                ["Professional brand experience", "Your store looks and feels like your brand — not like every other online shop."],
                ["Designed to convert", "Every detail is built to make buying easy and natural for your customers."],
              ].map(([t, d]) => (
                <div key={t} style={S("display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-top:" + HAIR14)}>
                  <span style={S("width:6px;height:6px;border-radius:50%;background:#96BF48;flex-shrink:0;margin-top:8px")} />
                  <div>
                    <p style={S("margin:0 0 4px;font-size:15px;font-weight:500;letter-spacing:-0.01em")}>{t}</p>
                    <p style={S("margin:0;font-size:14px;line-height:1.6;color:rgba(244,243,241,0.5)")}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="1">
              <a href="#contact" style={S("display:inline-flex;align-items:center;gap:10px;padding:14px 26px;background:#96BF48;color:#08090A;border-radius:100px;font-size:15px;font-weight:500;letter-spacing:-0.01em;font-family:Geist,Arial,sans-serif")}>
                Start your store <span style={S(MONO + "font-size:13px")}>&#8594;</span>
              </a>
            </div>
          </div>
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")}>
            <img src={IMG4} alt="Small business owner packing products and managing their online store" loading="lazy"
              style={S("width:100%;display:block;object-fit:cover;aspect-ratio:3/4")} />
          </div>
        </div>
      </section>

      {/* ─── 05 WHATSAPP & AUTOMATION ─── */}
      <section id="automation" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center")} data-m-auto-grid="1">
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")} data-m-auto-img="1">
            <img src={IMG5} alt="Business owner using WhatsApp automation to stay in touch with customers" loading="lazy"
              style={S("width:100%;display:block;object-fit:cover;aspect-ratio:3/4")} />
          </div>
          <div style={S("display:flex;flex-direction:column;gap:36px")}>
            <p data-reveal="1" style={S(EYEBROW)}>05 &mdash; WhatsApp &amp; Automation</p>
            <h2 data-reveal="1" style={S("margin:0;font-size:clamp(30px,3.8vw,56px);font-weight:400;line-height:1.1;letter-spacing:-0.04em")}>
              Stop losing customers<br />
              <em style={S(SERIF + "color:#25D366")}>while you&rsquo;re busy</em><br />
              running your business.
            </h2>
            <p data-reveal="1" style={S("margin:0;font-size:17px;line-height:1.75;color:rgba(244,243,241,0.6);max-width:440px")}>
              Your customers send a message. What happens next? We build systems that respond, follow up and close sales automatically &mdash; so no one falls through the cracks.
            </p>
            <div data-reveal="1" data-reveal-delay="80" style={S("display:flex;flex-direction:column;padding:24px;background:rgba(37,211,102,0.05);border:1px solid rgba(37,211,102,0.14);border-radius:16px")}>
              <p style={S(MONO + "margin:0 0 20px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(37,211,102,0.65)")}>How it works</p>
              {[
                ["Customer sends an enquiry", "They message you on WhatsApp or fill in a form on your website"],
                ["Instant automatic reply", "They get a response immediately — even at 2 am"],
                ["Smart follow-up", "Reminders, appointment confirmations and quotes are sent automatically"],
                ["More sales, less effort", "You focus on delivering. The system handles the conversation."],
              ].map(([t, d], i, arr) => (
                <div key={t} style={S("display:flex;gap:16px;align-items:flex-start" + (i < arr.length - 1 ? ";padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid rgba(37,211,102,0.10)" : ""))}>
                  <span style={S("width:24px;height:24px;border-radius:50%;background:rgba(37,211,102,0.12);border:1px solid rgba(37,211,102,0.28);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;" + MONO + "font-size:10px;color:rgba(37,211,102,0.8)")}>{i + 1}</span>
                  <div>
                    <p style={S("margin:0 0 3px;font-size:14px;font-weight:500;letter-spacing:-0.01em")}>{t}</p>
                    <p style={S("margin:0;font-size:13px;line-height:1.55;color:rgba(244,243,241,0.5)")}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal="1" style={S("display:flex;flex-wrap:wrap;gap:8px")}>
              {["Order confirmation", "Appointment reminder", "Lead follow-up", "Abandoned cart", "Customer support", "Review request"].map(tag => (
                <span key={tag} style={S(MONO + "font-size:10px;letter-spacing:0.1em;text-transform:uppercase;padding:6px 13px;border:1px solid rgba(37,211,102,0.2);border-radius:100px;color:rgba(37,211,102,0.7)")}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 06 INDUSTRIES ─── */}
      <section id="industries" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;flex-direction:column;gap:52px")}>
          <div style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap")} data-m-ind-head="1">
            <div style={S("display:flex;flex-direction:column;gap:18px")}>
              <p data-reveal="1" style={S(EYEBROW)}>06 &mdash; Industries</p>
              <h2 data-reveal="1" style={S("margin:0;font-size:clamp(32px,4.5vw,68px);font-weight:500;line-height:0.96;letter-spacing:-0.05em")}>
                Explore the industries<br /><em style={S(SERIF + "color:rgba(244,243,241,0.5)")}>we understand.</em>
              </h2>
            </div>
            <p data-reveal="1" style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.5);max-width:300px;text-align:right")} data-m-ind-p="1">
              From hospital reception desks to jewellery counters &mdash; if it&rsquo;s a real business, we have probably built for it.
            </p>
          </div>
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")}>
            <img src={IMG6} alt="Industries we serve including retail, healthcare, education, jewellery, food and real estate" loading="lazy"
              style={S("width:100%;height:auto;display:block")} />
          </div>
          <div data-stagger="1" style={S("display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(244,243,241,0.07);border-radius:20px;overflow:hidden")} data-m-ind-grid="1">
            {[
              { label: "Retail & E-commerce", color: "#FF3D8F" },
              { label: "Healthcare", color: "#29A8DC" },
              { label: "Education", color: "#cc0066" },
              { label: "Jewellery & Luxury", color: "#c9a227" },
              { label: "Hospitality", color: "#FF3D8F" },
              { label: "Food & Beverage", color: "#96BF48" },
              { label: "Real Estate", color: "#29A8DC" },
              { label: "Government & Institutions", color: "rgba(244,243,241,0.6)" },
            ].map(({ label, color }) => (
              <div key={label} className="ct-hov-tile"
                style={S("display:flex;flex-direction:column;gap:14px;padding:32px 24px;background:#0E0F12;transition:background .25s ease")}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "block", flexShrink: 0 }} />
                <span style={S("font-size:15px;font-weight:400;letter-spacing:-0.02em;line-height:1.3")}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 07 TESTIMONIALS ─── */}
      <section id="reviews" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:grid;grid-template-columns:1fr 1.2fr;gap:64px;align-items:start;margin-bottom:64px")} data-m-rev-grid="1">
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")}>
            <img src={IMG7} alt="Small business owners who trust Creators Touch" loading="lazy"
              style={S("width:100%;height:auto;display:block")} />
          </div>
          <div style={S("display:flex;flex-direction:column;gap:28px")}>
            <p data-reveal="1" style={S(EYEBROW)}>07 &mdash; What clients say</p>
            <h2 data-reveal="1" style={S("margin:0;font-size:clamp(32px,4vw,58px);font-weight:500;line-height:1;letter-spacing:-0.05em")}>
              People like you<br /><em style={S(SERIF + "color:#FF3D8F")}>trusted us.</em>
            </h2>
            <p data-reveal="1" style={S("margin:0;font-size:16px;line-height:1.7;color:rgba(244,243,241,0.55);max-width:380px")}>
              Nothing we say about our own work is worth as much as what a client says about how it changed theirs.
            </p>
            <div data-reveal="1" style={S("display:flex;align-items:center;gap:16px;padding:20px 24px;background:#0E0F12;border-radius:14px;border:1px solid rgba(244,243,241,0.08)")}>
              <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <Star5 size={14} />
                <p style={S(MONO + "margin:5px 0 0;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>5.0 &middot; Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div style={S("overflow:hidden;margin:0 -28px")}>
          <div data-rev-track="1" style={S("display:flex;gap:20px;width:max-content;animation:ct-marquee 80s linear infinite")}>
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
            {REVIEWS.map(r => <ReviewCard key={r.name + "-dup"} r={r} hidden />)}
          </div>
        </div>
      </section>

      {/* ─── 08 PROCESS ─── */}
      <section id="process" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;flex-direction:column;gap:52px")}>
          <div style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap")} data-m-shead="1">
            <div style={S("display:flex;flex-direction:column;gap:18px")}>
              <p data-reveal="1" style={S(EYEBROW)}>08 &mdash; How we work</p>
              <h2 data-reveal="1" style={S("margin:0;font-size:clamp(32px,4.5vw,68px);font-weight:500;line-height:0.96;letter-spacing:-0.05em")}>
                Three steps.<br /><em style={S(SERIF + "color:rgba(244,243,241,0.5)")}>One team. Always.</em>
              </h2>
            </div>
            <p data-reveal="1" style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.5);max-width:280px;text-align:right")} data-m-proc-p="1">
              We stay with you from the first conversation to long after launch.
            </p>
          </div>
          <div data-reveal="1" style={S("position:relative;border-radius:24px;overflow:hidden")}>
            <img src={IMG8} alt="Three steps: understanding your business, creating the work, and growing together" loading="lazy"
              style={S("width:100%;display:block;object-fit:cover;max-height:380px")} />
          </div>
          <div data-stagger="1" style={S("display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(244,243,241,0.07);border-radius:20px;overflow:hidden")} data-m-proc-grid="1">
            {[
              { n: "01", title: "Understand", sub: "We listen first", body: "We don\u2019t start designing until we understand your business, your customers and what\u2019s already working. Your goals become our brief.", emotion: "They will listen to me.", color: "#29A8DC" },
              { n: "02", title: "Create", sub: "We build it with you", body: "Strategy, content, design and development \u2014 all done by one team. You see real work in the browser, not slides. Nothing gets lost in handoffs.", emotion: "My business is in good hands.", color: "#FF3D8F" },
              { n: "03", title: "Grow", sub: "We stay after launch", body: "Launch day is not the end. We track what\u2019s working, improve what isn\u2019t, and keep pushing until the results give us a reason to go further.", emotion: "They won\u2019t disappear after launch.", color: "#96BF48" },
            ].map((step, i) => (
              <div key={step.n} data-reveal="1" data-reveal-delay={String(i * 120)}
                style={S("display:flex;flex-direction:column;gap:20px;padding:40px 32px;background:#0E0F12")}>
                <div style={S("display:flex;align-items:center;justify-content:space-between")}>
                  <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;color:rgba(244,243,241,0.35)")}>{step.n}</span>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: step.color, display: "block" }} />
                </div>
                <div>
                  <h3 style={S("margin:0 0 5px;font-size:clamp(26px,2.5vw,38px);font-weight:400;letter-spacing:-0.04em")}>{step.title}</h3>
                  <p style={S(MONO + "margin:0;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.38)")}>{step.sub}</p>
                </div>
                <p style={S("margin:0;font-size:15px;line-height:1.65;color:rgba(244,243,241,0.55)")}>{step.body}</p>
                <p style={S("margin:0;font-size:13px;line-height:1.5;font-style:italic;padding-top:16px;border-top:1px solid rgba(244,243,241,0.07)")} data-step-emotion="1">
                  <span style={{ color: step.color }}>&ldquo;</span>{step.emotion}<span style={{ color: step.color }}>&rdquo;</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 09 CONTACT ─── */}
      <section id="contact" style={S("position:relative;z-index:1;padding:112px 28px 96px")}>
        <div style={S("display:grid;grid-template-columns:1fr 1.1fr;gap:80px;align-items:start")} data-m-contact-grid="1">
          <div style={S("display:flex;flex-direction:column;gap:40px")}>
            <div>
              <p data-reveal="1" style={S(EYEBROW)}>09 &mdash; Let&rsquo;s talk</p>
              <h2 data-reveal="1" style={S("margin:18px 0 20px;font-size:clamp(30px,3.6vw,54px);font-weight:400;line-height:1.1;letter-spacing:-0.04em")}>
                Tell us where you want<br />
                <em style={S(SERIF + "color:#FF3D8F")}>your business to go.</em>
              </h2>
              <p data-reveal="1" style={S("margin:0;font-size:16px;line-height:1.75;color:rgba(244,243,241,0.55);max-width:420px")}>
                You don&rsquo;t need to know the marketing terminology. Tell us about your business and what you want to improve. We&rsquo;ll help you figure out the next step.
              </p>
            </div>
            <div data-reveal="1" style={S("position:relative;border-radius:20px;overflow:hidden")}>
              <img src={IMG9} alt="A friendly consultation meeting at Creators Touch" loading="lazy"
                style={S("width:100%;display:block;object-fit:cover;aspect-ratio:4/3")} />
            </div>
            <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:0")}>
              {[
                ["Call or WhatsApp", "+91 98859 33339", "tel:+919885933339"],
                ["Email us", "hello@creatorstouch.in", "mailto:hello@creatorstouch.in"],
                ["Find us", "Vijayawada, Andhra Pradesh", null],
              ].map(([lab, val, href]) => (
                <div key={lab} style={S("display:flex;flex-direction:column;gap:5px;padding:18px 0;border-bottom:" + HAIR14)}>
                  <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.38)")}>{lab}</span>
                  {href
                    ? <a href={href} style={S("font-size:18px;font-weight:400;letter-spacing:-0.025em;color:#F4F3F1")}>{val}</a>
                    : <span style={S("font-size:18px;font-weight:400;letter-spacing:-0.025em;color:rgba(244,243,241,0.7)")}>{val}</span>}
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="1">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer data-m-foot="1" style={S("position:relative;z-index:1;display:flex;justify-content:space-between;align-items:flex-end;gap:32px;padding:32px 28px;border-top:" + HAIR)}>
        <div style={S("display:flex;flex-direction:column;gap:16px")}>
          <div style={S("display:flex;align-items:center;gap:12px")}>
            <img src="/assets/images/creator_touch.png" alt="" style={S("width:28px;height:28px;display:block")} />
            <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Creators Touch Global &middot; &copy; 2026</span>
          </div>
          <div style={S("display:flex;gap:10px")}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="ct-social-link"
                style={S("display:flex;align-items:center;justify-content:center;width:34px;height:34px;border:1px solid rgba(244,243,241,0.14);border-radius:50%;color:rgba(244,243,241,0.45);transition:color .25s ease,border-color .25s ease")}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div style={S("display:flex;gap:24px;" + MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>
          <RollLink href="/work" label="Work" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/services" label="Services" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="/about" label="About" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="#contact" label="Contact" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
        </div>
      </footer>
    </div>
  );
}
