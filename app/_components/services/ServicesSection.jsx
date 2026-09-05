"use client";

import "../home.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    num: "01",
    title: "Get more customers",
    color: "#FF3D8F",
    desc: "Show up where your customers are already looking — and give them a strong reason to choose you over everyone else.",
    items: ["Google Search Ads", "Meta & Instagram Ads", "SEO", "Landing Pages"],
    img: "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (3).png",
  },
  {
    num: "02",
    title: "Build a better website",
    color: "#29A8DC",
    desc: "A website that works for your business around the clock — fast, clear, and built to turn visitors into real enquiries.",
    items: ["Website Design", "Website Development", "Mobile Optimisation", "Speed & Performance"],
    img: "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_16 PM (9).png",
  },
  {
    num: "03",
    title: "Build a stronger brand",
    color: "#cc0066",
    desc: "Your brand is the first impression you never get to redo. We make sure it earns the trust it deserves.",
    items: ["Logo & Identity", "Brand Guidelines", "Copywriting", "Social Media Visuals"],
    img: "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_11 PM (1).png",
  },
  {
    num: "04",
    title: "Sell your products online",
    color: "#96BF48",
    desc: "From your first product to your thousandth order — stores built to look and feel like your brand.",
    items: ["Shopify Store Design", "Product Catalogues", "Secure Checkout", "Inventory Setup"],
    img: "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_12 PM (4).png",
  },
  {
    num: "05",
    title: "Save time with automation",
    color: "#25D366",
    desc: "Never miss a customer again. Automated messages that follow up, confirm and convert — without any extra effort from you.",
    items: ["WhatsApp Automation", "Order Confirmations", "Appointment Reminders", "Lead Follow-ups"],
    img: "/assets/images/ChatGPT Image Aug 19, 2026, 04_54_13 PM (5).png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".svc-stack-card");

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="svc-section">
      <div className="svc-heading">
        <span className="svc-eyebrow">02 &mdash; How we help</span>
        <h2 className="svc-h2">
          How we help your
          <br />
          <em className="svc-h2-muted">business grow.</em>
        </h2>
        <p className="svc-lead">
          Each service is built around one goal: measurable business growth. We handle the full picture &mdash; from how people find you, to how they feel about you, to how easily they can buy from you.
        </p>
      </div>

      <div className="svc-cards-wrapper">
        {CARDS.map((card, index) => (
          <article
            key={card.num}
            className="svc-stack-card"
            style={{
              top: `${120 + index * 50}px`,
              zIndex: index + 1,
            }}
          >
            <div className="svc-card-copy">
              <span className="svc-card-num" style={{ color: card.color }}>
                {card.num}
              </span>
              <div>
                <h3 className="svc-card-title">{card.title}</h3>
                <p className="svc-card-desc">{card.desc}</p>
              </div>
              <div className="svc-card-tags">
                {card.items.map(item => (
                  <span
                    key={item}
                    className="svc-card-tag"
                    style={{ borderColor: card.color + "44", color: card.color }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="svc-card-image">
              <img src={card.img} alt={card.title} loading="lazy" />
              <div
                className="svc-card-img-overlay"
                style={{ background: `linear-gradient(90deg,rgba(8,9,10,0.68) 0%,transparent 55%)` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
