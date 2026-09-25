"use client";

import "../css/home.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PATHS = [
  {
    path: "A",
    label: "Web & Technology",
    cards: [
      {
        num: "01",
        title: "Website Development",
        color: "#29A8DC",
        img: "/assets/images/web-technology/website-development-500x500.png",
        desc: "We build websites designed to attract more customers — fast, clear, and engineered to turn every visitor into a real enquiry for your business.",
        items: ["Custom Website Design", "Responsive Development", "E-commerce Stores", "Landing Pages", "Speed & Performance"],
      },
      {
        num: "02",
        title: "E-commerce Solutions",
        color: "#0977a8",
        img: "/assets/images/web-technology/ecommerce-solutions-500x500.png",
        desc: "From your first product to your thousandth order — online stores built to look like your brand and sell like a machine. We set up everything so you can focus on your products.",
        items: ["Shopify & WooCommerce", "Product Catalogues", "Payment Integration", "Inventory Setup", "Secure Checkout", "Order Management"],
      },
      {
        num: "03",
        title: "UI/UX Design",
        color: "#8B5CF6",
        img: "/assets/images/web-technology/ui-ux-design-500x500.png",
        desc: "Great design is invisible — it just works. We design interfaces that feel effortless for your users and drive the actions that matter most to your business.",
        items: ["App Design", "Wireframing", "Prototyping", "User Research", "Interaction Design", "Usability Testing"],
      },
      {
        num: "04",
        title: "WhatsApp & CRM Automation",
        color: "#25D366",
        img: "/assets/images/web-technology/whatsapp-crm-automation-500x500.png",
        desc: "Your customers send a message — what happens next? We build systems that respond, follow up, and close sales automatically so no one falls through the cracks.",
        items: ["WhatsApp Business API", "Order Confirmations", "Appointment Reminders", "Lead Pipelines", "CRM Setup", "Auto Follow-ups"],
      },
      {
        num: "05",
        title: "AI Assistance",
        color: "#00C9A7",
        img: "/assets/images/web-technology/ai-assistance-500x500.png",
        desc: "We have our own AI model built to work for your business — from automated customer replies and smart lead follow-ups to workflow automation that saves you hours every day.",
        items: ["AI Chatbots", "Smart Lead Follow-ups", "Workflow Automation", "AI-Powered Analytics", "Custom AI Solutions"],
      },
    ],
  },
  {
    path: "B",
    label: "Digital Marketing & Branding",
    cards: [
      {
        num: "01",
        title: "SEO & Digital Marketing",
        color: "#cc0066",
        img: "/assets/images/digital-marketing-branding/seo-digital-marketing-500x500.png",
        desc: "Show up where your customers are already searching. We optimise your website to rank higher on Google and drive organic traffic that keeps growing month after month.",
        items: ["On-Page SEO", "Technical SEO", "Keyword Research", "Local SEO", "Content Strategy", "Google Analytics"],
      },
      {
        num: "02",
        title: "Google & Meta Advertising",
        color: "#96BF48",
        img: "/assets/images/digital-marketing-branding/google-meta-advertising-500x500.png",
        desc: "Reach the right audience at the right time. We run targeted ad campaigns on Google Search, Google Display, Meta (Facebook & Instagram) to bring paying customers straight to your door.",
        items: ["Google Search Ads", "Google Display Ads", "Facebook Ads", "Instagram Ads", "Retargeting Campaigns", "Ad Performance Tracking"],
      },
      {
        num: "03",
        title: "Content & Social Media",
        color: "#c9a227",
        img: "/assets/images/digital-marketing-branding/content-social-media-500x500.png",
        desc: "Your audience is scrolling every day — we make sure they stop for you. We handle everything from strategy to posting so your brand stays consistent and visible.",
        items: ["Social Media Management", "Content Calendars", "Reels & Video Editing", "Post Design", "Community Engagement", "Influencer Outreach"],
      },
      {
        num: "04",
        title: "Video & Motion Graphics",
        color: "#E85D2A",
        img: "/assets/images/digital-marketing-branding/video-motion-graphics-500x500.png",
        desc: "A 30-second video says what a full page of text cannot. We create promo videos, animations, and ad creatives that grab attention and drive action.",
        items: ["Promo Videos", "Explainer Animations", "Ad Creatives", "Product Videos", "Motion Graphics", "Video Editing"],
      },
      {
        num: "05",
        title: "Brand & Logo Design",
        color: "#FF3D8F",
        img: "/assets/images/digital-marketing-branding/brand-logo-design-500x500.png",
        desc: "A logo is a mark — a brand is the feeling people get when they hear your name. We craft iconic identities that hold their shape from a business card to a billboard.",
        items: ["Logo & Identity", "Brand Guidelines", "Social Media Visuals", "Copywriting", "Packaging Design"],
      },
      {
        num: "06",
        title: "Consulting & Strategy",
        color: "#A855F7",
        img: "/assets/images/digital-marketing-branding/consulting-strategy-500x500.png",
        desc: "Before we touch a pixel, we understand your market, your competitors, and the one positioning angle that makes you the obvious choice. Strategy first — execution second.",
        items: ["Competitor Analysis", "Growth Roadmaps", "Digital Audits", "Market Research", "Business Positioning", "Revenue Strategy"],
      },
    ],
  },
];

const ALL_CARDS = PATHS.flatMap(p => p.cards);

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      document.querySelectorAll(".svc-path-group").forEach((group) => {
        const cards = gsap.utils.toArray(".svc-stack-card", group);

        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) return;

          gsap.fromTo(card,
            { scale: 1, filter: "brightness(1)", y: 0 },
            {
              scale: 0.95,
              filter: "brightness(0.4)",
              y: -10,
              scrollTrigger: {
                trigger: nextCard,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative z-[1] bg-ct-bg px-4 pt-20 pb-[120px] min-[851px]:px-6 min-[851px]:pt-[110px] min-[851px]:pb-20 border-b border-ct-fg/10">
      <div className="w-full max-w-[1200px] mx-auto mb-[54px] min-[851px]:mb-20">
        <div className="flex flex-wrap gap-2.5 mb-6">
          {ALL_CARDS.map(card => (
            <span key={card.title} className="inline-block px-3.5 py-1.5 border rounded-full font-mono text-[11px] tracking-[0.12em] uppercase font-medium"
              style={{ borderColor: card.color + "44", color: card.color }}>
              {card.title}
            </span>
          ))}
        </div>
        <span className="inline-block mb-[18px] font-mono text-[11px] tracking-[0.16em] uppercase text-ct-fg/42">02 &mdash; Our Services</span>
        <h2 className="m-0 max-w-[850px] text-[clamp(40px,13vw,68px)] min-[541px]:text-[clamp(48px,8vw,112px)] leading-[0.88] tracking-[-0.06em] font-normal text-ct-fg">
          What We
          <br />
          <em className="font-serif italic font-normal text-ct-fg/45">Serve.</em>
        </h2>
        <p className="max-w-[560px] mt-[30px] text-[17px] leading-[1.65] text-ct-fg/50">
          We build websites designed to attract more customers, craft iconic brand identities, and power your business with AI &mdash; everything you need under one roof.
        </p>
      </div>

      {PATHS.map((pathGroup) => (
        <div key={pathGroup.path} className="svc-path-group relative w-full max-w-[1200px] mx-auto">
          {/* Path header */}
          <div className={`flex items-center gap-4 mb-10 ${pathGroup.path === "B" ? "mt-24 min-[851px]:mt-32 pt-16 border-t border-ct-fg/8" : "mt-0"}`}>
            <span className="font-mono text-[12px] tracking-[0.18em] uppercase font-medium px-4 py-2 rounded-full border border-ct-fg/16 text-ct-fg/70 bg-ct-fg/4">
              Path {pathGroup.path}
            </span>
            <h3 className="m-0 text-[clamp(26px,5vw,44px)] tracking-[-0.04em] font-normal text-ct-fg">
              {pathGroup.label}
            </h3>
            <div className="flex-1 h-px bg-ct-fg/10 hidden min-[541px]:block" />
          </div>

          {pathGroup.cards.map((card, index) => (
            <article
              key={card.num + pathGroup.path}
              className="svc-stack-card sticky overflow-hidden rounded-[20px] min-[851px]:rounded-[32px] bg-[#0C0D10] shadow-[0_24px_80px_rgba(0,0,0,0.45)] origin-top will-change-[transform,filter] border border-ct-fg/8 mb-[200px] min-[851px]:mb-[300px] last:mb-0"
              style={{
                top: `calc(var(--svc-top-base) + var(--svc-top-step) * ${index})`,
                zIndex: index + 1,
              }}
            >
              <div className="relative p-7 min-[851px]:p-[clamp(32px,5vw,64px)] flex flex-col min-[851px]:flex-row gap-5 min-[851px]:gap-10">
                <div className="flex flex-col gap-5 min-[851px]:gap-7 flex-1 min-w-0">
                  <div className="flex items-baseline gap-[18px]">
                    <span className="font-mono text-[13px] tracking-[0.15em] shrink-0" style={{ color: card.color }}>
                      {card.num}
                    </span>
                    <h3 className="m-0 text-[34px] min-[541px]:text-[clamp(32px,4vw,64px)] leading-[0.95] tracking-[-0.04em] font-normal text-ct-fg">{card.title}</h3>
                  </div>
                  <p className="max-w-[680px] m-0 text-ct-fg/60 text-[15px] min-[541px]:text-base leading-[1.65]">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map(item => (
                      <span
                        key={item}
                        className="font-mono text-[9px] tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full border bg-ct-fg/3"
                        style={{ borderColor: card.color + "44", color: card.color }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 flex items-center justify-center min-[851px]:w-[220px] min-[1024px]:w-[280px]">
                  <img
                    src={card.img}
                    alt={card.title}
                    width={280}
                    height={280}
                    className="w-[180px] min-[851px]:w-full h-auto object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-60" style={{ background: card.color }} />
              </div>
            </article>
          ))}
        </div>
      ))}
    </section>
  );
}
