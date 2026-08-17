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

// Contact form — wire up Formspree: create a free account at https://formspree.io,
// create a form, then replace YOUR_FORM_ID below with the real ID.
function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handle = e => {
    e.preventDefault();
    setStatus("sending");
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(fields),
    })
      .then(r => r.ok ? setStatus("sent") : setStatus("error"))
      .catch(() => setStatus("error"));
  };

  if (status === "sent") {
    return (
      <div style={S("padding:56px 0")}>
        <p style={S(SERIF + "font-size:clamp(26px,3.2vw,44px);margin:0 0 12px;color:#F4F3F1")}>We&rsquo;ll be in touch.</p>
        <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.5)")}>Thanks for reaching out. Expect a reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handle} data-m-cform="1" style={S("display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:56px;padding-top:40px;border-top:" + HAIR14)}>
      <div style={S("display:flex;flex-direction:column;gap:8px")}>
        <label htmlFor="ct-name" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Name</label>
        <input id="ct-name" name="name" type="text" required className="ct-input"
          value={fields.name} onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
          style={S("background:transparent;border:1px solid rgba(244,243,241,0.16);border-radius:10px;padding:14px 16px;color:#F4F3F1;font-family:Geist,Arial,sans-serif;font-size:15px;letter-spacing:-0.02em;outline:none")}
          placeholder="Your name" />
      </div>
      <div style={S("display:flex;flex-direction:column;gap:8px")}>
        <label htmlFor="ct-email" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Email</label>
        <input id="ct-email" name="email" type="email" required className="ct-input"
          value={fields.email} onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
          style={S("background:transparent;border:1px solid rgba(244,243,241,0.16);border-radius:10px;padding:14px 16px;color:#F4F3F1;font-family:Geist,Arial,sans-serif;font-size:15px;letter-spacing:-0.02em;outline:none")}
          placeholder="hello@company.com" />
      </div>
      <div style={S("grid-column:1/-1;display:flex;flex-direction:column;gap:8px")}>
        <label htmlFor="ct-msg" style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Message</label>
        <textarea id="ct-msg" name="message" required rows={5} className="ct-input"
          value={fields.message} onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          style={S("background:transparent;border:1px solid rgba(244,243,241,0.16);border-radius:10px;padding:14px 16px;color:#F4F3F1;font-family:Geist,Arial,sans-serif;font-size:15px;letter-spacing:-0.02em;outline:none;resize:vertical;min-height:140px")}
          placeholder="Tell us about your project\u2026" />
      </div>
      <div style={S("grid-column:1/-1;display:flex;align-items:center;gap:20px;flex-wrap:wrap")}>
        <button type="submit" disabled={status === "sending"} className="ct-hov-pink ct-submit-btn"
          style={S("display:inline-flex;align-items:center;gap:12px;padding:14px 26px;background:#F4F3F1;color:#08090A;border:none;border-radius:100px;font-size:15px;font-weight:500;letter-spacing:-0.02em;cursor:pointer;font-family:Geist,Arial,sans-serif;transition:background .25s ease,color .25s ease")}>
          {status === "sending" ? "Sending\u2026" : "Send message"}
          <span style={S(MONO + "font-size:13px")}>&#8594;</span>
        </button>
        {status === "error" && (
          <span style={S("font-size:14px;color:#FF3D8F")}>Something went wrong &mdash; email us at hello@creatorstouch.in</span>
        )}
      </div>
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
              <img src="/assets/images/creator_touch.png" alt="Creators Touch" style={S("width:34px;height:34px;display:block")} />
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
            {[["#work","Work"],["#services","Services"],["#studio","Studio"],["#industries","Industries"],["#contact","Contact"]].map(([href, label], i) => (
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
          <img src="/assets/images/creator_touch.png" alt="Creators Touch" style={S("width:34px;height:34px;display:block")} />
          <span style={S("display:flex;flex-direction:column;line-height:1.05")}>
            <span style={S("font-size:14px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
            <span style={S(MONO + "font-size:9px;letter-spacing:0.18em;color:rgba(244,243,241,0.45)")}>GLOBAL</span>
          </span>
        </a>
        <nav data-m-nav="1" style={S("display:flex;align-items:center;gap:28px;" + MONO + "font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.62)")}>
          <RollLink href="#work" label="Work" />
          <RollLink href="#services" label="Services" />
          <RollLink href="#studio" label="Studio" />
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
        <h1 data-hero-title="1" style={S("margin:56px 0 0;font-size:clamp(52px,10.2vw,168px);font-weight:500;line-height:0.92;letter-spacing:-0.055em;text-wrap:balance;will-change:transform")}>
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

      <section id="studio" style={S("position:relative;z-index:1;display:grid;grid-template-columns:1fr 1.15fr;gap:64px;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;flex-direction:column;gap:24px")}>
          <p data-reveal="1" style={S(EYEBROW)}>01 &mdash; The studio</p>
          {/* Global reach badge */}
          <div data-reveal="1" data-reveal-delay="80" style={S("display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border:1px solid rgba(41,168,220,0.25);border-radius:100px;background:rgba(41,168,220,0.06);align-self:flex-start")}>
            <span style={S("width:6px;height:6px;border-radius:50%;background:#29A8DC;flex-shrink:0;animation:ct-pulse 2.4s ease-in-out infinite")} />
            <span style={S(MONO + "font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(41,168,220,0.9)")}>India &middot; UK &middot; UAE &middot; Singapore &middot; USA</span>
          </div>
        </div>
        <div style={S("display:flex;flex-direction:column;gap:40px")}>
          <h2 data-reveal="1" style={S("margin:0;font-size:clamp(30px,3.6vw,54px);font-weight:400;line-height:1.14;letter-spacing:-0.035em;color:#F4F3F1;text-wrap:pretty")}>
            Since 2008 we have been the quiet hand behind brands in India and across the world &mdash; <em style={S("font-family:'Instrument Serif',Georgia,serif;font-style:italic;color:rgba(244,243,241,0.55)")}>making complicated businesses feel simple, smart and worth choosing.</em>
          </h2>
          <p data-reveal="1" data-reveal-delay="100" style={S("margin:0;font-size:15px;line-height:1.7;color:rgba(244,243,241,0.5);max-width:560px")}>
            From malls in Vijayawada to clinics in the UK, we have delivered for clients across 5 countries. Distance has never stopped us. The work speaks for itself.
          </p>
          <div data-m-cards="1" style={S("display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:36px 48px;max-width:640px")}>
            {[["One team", "#FF3D8F", "Strategists, designers and engineers on the same table — no handoff gaps, no lost intent.", "120"],
              ["Built to last", "#29A8DC", "Fast, accessible builds you can hand to your own team and keep growing for years.", "240"],
              ["Global reach", "#96BF48", "Serving clients in India, UK, UAE, Singapore and the USA. Borders are not a barrier.", "360"],
              ["17 years deep", "rgba(244,243,241,0.7)", "We have seen trends come and go. What remains is craft, consistency and relationships built on trust.", "480"]].map(([t, c, body, d]) => (
              <div key={t} data-reveal="1" data-reveal-delay={d} style={S("display:flex;flex-direction:column;gap:10px;padding-top:20px;border-top:" + HAIR14)}>
                <span style={S(MONO + `font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${c}`)}>{t}</span>
                <p style={S("margin:0;font-size:15px;line-height:1.55;color:rgba(244,243,241,0.6)")}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div data-m-shead="1" style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:56px")}>
          <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px")}>
            <p style={S(EYEBROW)}>02 &mdash; Capabilities</p>
            <h2 data-plx="0.08" style={S("margin:0;font-size:clamp(38px,6vw,86px);font-weight:500;line-height:0.95;letter-spacing:-0.05em")}>What we do,<br /><em style={S(SERIF + "color:rgba(244,243,241,0.55)")}>end to end.</em></h2>
          </div>
          <p data-reveal="1" data-reveal-delay="140" style={S("margin:0;max-width:300px;font-size:15px;line-height:1.55;color:rgba(244,243,241,0.55);text-align:right")}>Pick one discipline or hand us the whole journey &mdash; from the first positioning workshop to the last deploy.</p>
        </div>
        <div style={S("display:flex;flex-direction:column;border-top:" + HAIR14)}>
          {SERVICES.map(s => (
            <div key={s.number} data-reveal="1" data-srow="1" className="ct-hov-row" style={S("display:grid;grid-template-columns:64px 1.05fr 1.25fr auto;gap:32px;align-items:baseline;padding:30px 12px;border-bottom:" + HAIR14 + ";transition:background 0.25s ease")}>
              <span style={S(MONO + "font-size:11px;letter-spacing:0.12em;color:rgba(244,243,241,0.38)")}>{s.number}</span>
              <h3 data-stitle="1" style={S("margin:0;font-size:clamp(24px,3vw,40px);font-weight:400;line-height:1.02;letter-spacing:-0.04em;transition:transform .45s cubic-bezier(.22,1,.36,1),color .3s ease")}>{s.title}</h3>
              <p style={S("margin:0;font-size:15px;line-height:1.55;color:rgba(244,243,241,0.6);max-width:420px")}>{s.description}</p>
              <div data-m-stags="1" style={S("display:flex;flex-wrap:wrap;gap:7px;justify-content:flex-end")}>
                {s.bullets.map(b => (
                  <span key={b} style={S(MONO + "font-size:10px;letter-spacing:0.1em;text-transform:uppercase;padding:6px 12px;border:1px solid rgba(244,243,241,0.16);border-radius:100px;color:rgba(244,243,241,0.6);white-space:nowrap")}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div data-m-shead="1" style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:52px")}>
          <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px")}>
            <p style={S(EYEBROW)}>03 &mdash; Selected work</p>
            <h2 data-plx="0.08" style={S("margin:0;font-size:clamp(38px,6vw,86px);font-weight:500;line-height:0.95;letter-spacing:-0.05em")}>Work we&rsquo;re <em style={S(SERIF + "color:#FF3D8F")}>proud</em><br />of.</h2>
          </div>
          <p data-reveal="1" data-reveal-delay="140" style={S(MONO + "margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42);text-align:right;line-height:1.8")}>Healthcare &middot; Education<br />Retail &middot; Jewellery<br />Non-profit &middot; Aesthetics</p>
        </div>

        {/* Featured project cards */}
        <div data-stagger="1" data-m-projects="1" style={S("display:grid;grid-template-columns:repeat(4,1fr);gap:20px")}>
          {PROJECTS.map(p => (
            <a key={p.title} href={p.caseStudy || p.url} target={p.caseStudy ? "_self" : "_blank"} rel={p.caseStudy ? undefined : "noopener noreferrer"} className="ct-proj-card" data-cursor-text={p.caseStudy ? "Case study" : "View"} style={S("position:relative;border-radius:16px;overflow:hidden;cursor:pointer;text-decoration:none;display:block")}>
              <div style={S("aspect-ratio:4/3;overflow:hidden")}>
                <img src={p.img} alt={p.title} loading="lazy" style={S("width:100%;height:100%;object-fit:cover;display:block;transition:transform .7s cubic-bezier(.22,1,.36,1)")} />
              </div>
              {/* Desktop overlay — hidden on mobile */}
              <div className="ct-proj-overlay" style={S("position:absolute;inset:0;background:linear-gradient(0deg,rgba(8,9,10,0.94) 0%,rgba(8,9,10,0.18) 55%,transparent 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:22px")}>
                <div style={S("position:absolute;top:16px;right:16px;display:flex;align-items:center;gap:8px")}>
                  {p.caseStudy && (
                    <span style={S(MONO + "font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(255,61,143,0.18);border:1px solid rgba(255,61,143,0.4);border-radius:100px;color:rgba(255,61,143,0.9)")}>Case study</span>
                  )}
                  <span style={S(MONO + "font-size:9px;letter-spacing:0.12em;text-transform:uppercase;padding:5px 12px;background:rgba(8,9,10,0.65);border:1px solid rgba(244,243,241,0.14);border-radius:100px;color:rgba(244,243,241,0.7)")}>{p.tag}</span>
                </div>
                <span style={S(MONO + "font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.5);margin-bottom:6px")}>{p.category}</span>
                <h3 style={S("margin:0 0 6px;font-size:22px;font-weight:400;letter-spacing:-0.03em;color:#F4F3F1")}>{p.title}</h3>
                <p style={S("margin:0;font-size:13px;line-height:1.5;color:rgba(244,243,241,0.55)")}>{p.desc}</p>
              </div>
              {/* Mobile label — shown below image, hidden on desktop */}
              <div className="ct-proj-mob-label">
                <span className="ct-proj-mob-cat">{p.category}</span>
                <div style={S("display:flex;align-items:center;justify-content:space-between;gap:8px")}>
                  <h3 className="ct-proj-mob-title">{p.title}</h3>
                  {p.caseStudy && <span className="ct-proj-mob-badge">Case study →</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Shopify + WhatsApp expansion section */}
      <section id="platforms" style={S("position:relative;z-index:1;padding:112px 28px;border-bottom:" + HAIR)}>
        <div style={S("display:flex;flex-direction:column;gap:64px")}>
          <div style={S("display:flex;flex-direction:column;gap:20px;max-width:760px")}>
            <p data-reveal="1" style={S(EYEBROW)}>04 &mdash; What&rsquo;s next</p>
            <h2 data-reveal="1" data-plx="0.06" style={S("margin:0;font-size:clamp(36px,5.5vw,80px);font-weight:500;line-height:0.96;letter-spacing:-0.05em")}>
              Your business deserves<br />
              <em style={S(SERIF + "color:#FF3D8F")}>to keep growing</em><br />
              while you sleep.
            </h2>
            <p data-reveal="1" data-reveal-delay="120" style={S("margin:0;font-size:18px;line-height:1.7;color:rgba(244,243,241,0.58);max-width:580px")}>
              You&rsquo;ve poured yourself into building something real. Every product chosen with care. Every customer remembered. We are expanding into two powerful tools that put your growth on autopilot &mdash; so you can focus on what only you can do.
            </p>
          </div>

          <div data-stagger="1" data-m-platforms="1" style={S("display:grid;grid-template-columns:1fr 1fr;gap:20px")}>
            {/* Shopify */}
            <div className="ct-hov-tile" style={S("display:flex;flex-direction:column;gap:32px;padding:48px 40px;border:1px solid rgba(244,243,241,0.08);border-radius:20px;background:linear-gradient(135deg,rgba(150,191,72,0.05) 0%,rgba(8,9,10,0) 60%)")}>
              <div style={S("display:flex;align-items:center;gap:16px")}>
                <div style={S("width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#96BF48,#5E8E3E);display:flex;align-items:center;justify-content:center;flex-shrink:0")}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                </div>
                <span style={S(MONO + "font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:5px 13px;border:1px solid rgba(150,191,72,0.35);border-radius:100px;color:rgba(150,191,72,0.85)")}>Shopify Stores</span>
              </div>
              <div style={S("display:flex;flex-direction:column;gap:16px")}>
                <h3 style={S("margin:0;font-size:clamp(24px,2.6vw,36px);font-weight:400;line-height:1.06;letter-spacing:-0.04em")}>
                  Your products deserve a home<em style={S(SERIF + "color:rgba(244,243,241,0.45)")}> that sells itself.</em>
                </h3>
                <p style={S("margin:0;font-size:15px;line-height:1.7;color:rgba(244,243,241,0.52)")}>
                  Most websites tell. A great store sells. We build Shopify experiences that feel unmistakably like your brand &mdash; fast, beautiful, and designed around how your customer actually thinks. So every visit becomes a sale you didn&rsquo;t have to chase.
                </p>
                <p style={S("margin:0;font-size:15px;line-height:1.7;color:rgba(244,243,241,0.52)")}>
                  From your first product listing to your thousandth order, we build the store that grows with you &mdash; and never stops converting.
                </p>
              </div>
              <div style={S("display:flex;align-items:center;gap:8px;margin-top:auto")}>
                <span style={S("width:7px;height:7px;border-radius:50%;background:#96BF48;display:inline-block")} />
                <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(150,191,72,0.8)")}>Now available &mdash; talk to us today</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="ct-hov-tile" style={S("display:flex;flex-direction:column;gap:32px;padding:48px 40px;border:1px solid rgba(244,243,241,0.08);border-radius:20px;background:linear-gradient(135deg,rgba(37,211,102,0.05) 0%,rgba(8,9,10,0) 60%)")}>
              <div style={S("display:flex;align-items:center;gap:16px")}>
                <div style={S("width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#25D366,#128C7E);display:flex;align-items:center;justify-content:center;flex-shrink:0")}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
                <span style={S(MONO + "font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:5px 13px;border:1px solid rgba(37,211,102,0.35);border-radius:100px;color:rgba(37,211,102,0.85)")}>WhatsApp Automation</span>
              </div>
              <div style={S("display:flex;flex-direction:column;gap:16px")}>
                <h3 style={S("margin:0;font-size:clamp(24px,2.6vw,36px);font-weight:400;line-height:1.06;letter-spacing:-0.04em")}>
                  The right message at<em style={S(SERIF + "color:rgba(244,243,241,0.45)")}> exactly the right moment.</em>
                </h3>
                <p style={S("margin:0;font-size:15px;line-height:1.7;color:rgba(244,243,241,0.52)")}>
                  Your customers are already on WhatsApp. We build automations that send order confirmations, follow-ups, and abandoned cart reminders &mdash; in your voice, at the right time &mdash; without you lifting a finger.
                </p>
                <p style={S("margin:0;font-size:15px;line-height:1.7;color:rgba(244,243,241,0.52)")}>
                  Every message feels personal. Because it is. Not a blast. Not a broadcast. A conversation that happens automatically, so no customer ever feels forgotten.
                </p>
              </div>
              <div style={S("display:flex;align-items:center;gap:8px;margin-top:auto")}>
                <span style={S("width:7px;height:7px;border-radius:50%;background:#25D366;display:inline-block")} />
                <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(37,211,102,0.8)")}>Now available &mdash; talk to us today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" style={S("position:relative;z-index:1;display:grid;grid-template-columns:1fr 1.15fr;gap:64px;padding:112px 28px;border-bottom:" + HAIR)}>
        <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px;align-items:flex-start")}>
          <p style={S(EYEBROW)}>05 &mdash; Industries</p>
          <h2 style={S("margin:0;font-size:clamp(30px,3.4vw,50px);font-weight:400;line-height:1.08;letter-spacing:-0.035em")}>Sectors we have<br /><em style={S(SERIF + "color:rgba(244,243,241,0.55)")}>already shipped for.</em></h2>
          <p style={S("margin:0;font-size:15px;line-height:1.55;color:rgba(244,243,241,0.55);max-width:320px")}>Hover a sector &mdash; from retail floors to government portals, we have probably built in it.</p>
        </div>
        <div style={S("display:flex;flex-direction:column")}>
          {INDUSTRIES.map(ind => (
            <div key={ind.num} data-irow="1" data-img={ind.img} data-reveal="1" className="ct-hov-row" style={S("display:grid;grid-template-columns:44px 1fr auto;gap:24px;align-items:baseline;padding:21px 8px;border-top:" + HAIR14 + ";transition:background 0.25s ease")}>
              <span style={S(MONO + "font-size:11px;letter-spacing:0.12em;color:rgba(244,243,241,0.38)")}>{ind.num}</span>
              <h4 data-ititle="1" style={S("margin:0;font-size:23px;font-weight:400;letter-spacing:-0.03em;transition:transform .45s cubic-bezier(.22,1,.36,1),color .3s ease")}>{ind.title}</h4>
              <span data-m-itags="1" style={S(MONO + "font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(244,243,241,0.42);text-align:right")}>{ind.tags}</span>
            </div>
          ))}
          <div style={S("border-top:" + HAIR14)} />
        </div>
      </section>

      <section id="reviews" style={S("position:relative;z-index:1;padding:112px 0;border-bottom:" + HAIR + ";overflow:hidden")}>
        <div data-m-revhead="1" style={S("display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:48px;padding:0 28px")}>
          <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px")}>
            <p style={S(EYEBROW)}>06 &mdash; Word of mouth</p>
            <h2 style={S("margin:0;font-size:clamp(38px,6vw,86px);font-weight:500;line-height:0.95;letter-spacing:-0.05em")}>Clients <em style={S(SERIF + "color:#FF3D8F")}>talk.</em></h2>
            <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:460px")}>Nothing we say about our own work is worth as much as what a client says about how it changed theirs.</p>
          </div>
          <div data-reveal="1" data-reveal-delay="140" style={S("display:flex;align-items:center;gap:14px")}>
            <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span style={S("display:flex;flex-direction:column;gap:3px")}>
              <Star5 size={14} />
              <span style={S(MONO + "font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>5.0 &middot; Google reviews</span>
            </span>
          </div>
        </div>
        <div style={S("overflow:hidden")}>
          <div data-rev-track="1" style={S("display:flex;gap:20px;width:max-content;animation:ct-marquee 72s linear infinite")}>
            {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
            {REVIEWS.map(r => <ReviewCard key={r.name + "-dup"} r={r} hidden />)}
          </div>
        </div>
      </section>

      <section id="process" style={S("position:relative;z-index:1;display:grid;grid-template-columns:1fr 1.15fr;gap:64px;padding:112px 28px;border-bottom:" + HAIR)}>
        <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:18px")}>
          <p style={S(EYEBROW)}>07 &mdash; How it runs</p>
          <h2 style={S("margin:0;font-size:clamp(28px,3.4vw,48px);font-weight:400;line-height:1.1;letter-spacing:-0.035em")}>Three steps.<br /><em style={S(SERIF + "color:rgba(244,243,241,0.45)")}>One version of events.</em></h2>
        </div>
        <div style={S("display:flex;flex-direction:column")}>
          {[["01", "Understand the business", "We don't lift a finger until we know your customers better than most of your competitors do. Their hesitations, their triggers, the moment they decide to trust. Everything we build starts from there.", "0"],
            ["02", "Design the surface", "Every decision is made visible in the browser, not buried in a PDF. You see the real thing, react to the real thing, and we move together — nothing lost in translation, nothing handed off cold.", "110"],
            ["03", "Ship, then keep going", "We don't disappear after launch day. A monthly rhythm of content, campaigns and honest performance reviews — until the numbers give us reason to push further, and then we do.", "220"]].map(([n, t, body, d], i) => (
            <div key={n} data-reveal="1" data-reveal-delay={d === "0" ? undefined : d} style={S("display:grid;grid-template-columns:44px 1fr;gap:28px;padding:28px 0;border-top:" + HAIR14 + (i === 2 ? ";border-bottom:" + HAIR14 : ""))}>
              <span style={S(MONO + "font-size:11px;color:rgba(244,243,241,0.38)")}>{n}</span>
              <div style={S("display:flex;flex-direction:column;gap:10px")}>
                <h4 style={S("margin:0;font-size:24px;font-weight:400;letter-spacing:-0.035em")}>{t}</h4>
                <p style={S("margin:0;font-size:15px;line-height:1.55;color:rgba(244,243,241,0.55);max-width:520px")}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={S("position:relative;z-index:1;padding:120px 28px 96px")}>
        <p data-reveal="1" style={S(EYEBROW + ";margin:0 0 40px")}>08 &mdash; Contact</p>
        <h2 data-plx="0.06" style={S("margin:0;font-size:clamp(46px,9.4vw,150px);font-weight:500;line-height:0.94;letter-spacing:-0.055em")}>
          <span style={S("display:block;overflow:hidden")}><span data-cl="1" style={S("display:block")}>Let&rsquo;s build</span></span>
          <span style={S("display:block;overflow:hidden")}><span data-cl="1" style={S("display:block")}><em style={S(SERIF + "color:#FF3D8F")}>something worth</em></span></span>
          <span style={S("display:block;overflow:hidden")}><span data-cl="1" style={S("display:block")}>noticing.</span></span>
        </h2>
        <div data-m-cgrid="1" style={S("display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px;margin-top:84px;padding-top:28px;border-top:" + HAIR14)}>
          <div data-reveal="1" style={S("display:flex;flex-direction:column;gap:10px")}>
            <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Call us</span>
            <a href="tel:+919885933339" style={S("font-size:22px;font-weight:400;letter-spacing:-0.035em")}>+91 98859 33339</a>
          </div>
          <div data-reveal="1" data-reveal-delay="110" style={S("display:flex;flex-direction:column;gap:10px")}>
            <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Email us</span>
            <a href="mailto:hello@creatorstouch.in" style={S("font-size:22px;font-weight:400;letter-spacing:-0.035em")}>hello@creatorstouch.in</a>
          </div>
          <div data-reveal="1" data-reveal-delay="220" style={S("display:flex;flex-direction:column;gap:10px")}>
            <span style={S(MONO + "font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.42)")}>Visit us</span>
            <span style={S("font-size:22px;font-weight:400;letter-spacing:-0.035em;color:rgba(244,243,241,0.75)")}>Vijayawada, Andhra&nbsp;Pradesh</span>
          </div>
        </div>
        <ContactForm />
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
          <RollLink href="#work" label="Work" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="#services" label="Services" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
          <RollLink href="#contact" label="Contact" h={14} dim="rgba(244,243,241,0.42)" hi="#F4F3F1" />
        </div>
      </footer>
    </div>
  );
}
