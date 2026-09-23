import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Creators Touch Global's website and services.",
  alternates: { canonical: "https://creatorstouchglobal.com/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions — Creators Touch Global",
    description: "Terms and conditions governing the use of Creators Touch Global's website and services.",
    url: "https://creatorstouchglobal.com/terms-and-conditions",
    siteName: "Creators Touch Global",
    type: "website",
  },
};

const MONO = "font-family:'Geist Mono',monospace";
const SERIF = "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400";
const HAIR = "1px solid rgba(244,243,241,0.10)";

function S(css: string): React.CSSProperties {
  const o: Record<string, string> = {};
  css.split(";").forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim();
    const v = d.slice(i + 1).trim();
    if (k) o[k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = v;
  });
  return o as React.CSSProperties;
}

const SECTIONS = [
  {
    heading: "1. Introduction",
    body: `Welcome to Creators Touch Global ("Company", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website located at creatorstouchglobal.com ("Site") and any services, products, or engagements provided by Creators Touch Global.\n\nBy accessing or using our Site and services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Site or services.`,
  },
  {
    heading: "2. About Us",
    body: `Creators Touch Global is a digital studio headquartered in Vijayawada, Andhra Pradesh, India, operating since 2008. We provide web design, web development, e-commerce solutions, SEO, digital marketing, branding, content creation, mobile application development, WhatsApp automation, CRM integration, and AI-powered solutions to businesses across India, the United Kingdom, UAE, Singapore, and the USA.\n\nRegistered Address: Vijayawada, Andhra Pradesh, India\nEmail: hello@creatorstouchglobal.com\nPhone: +91-98859-33339`,
  },
  {
    heading: "3. Services",
    body: `We offer digital services including but not limited to:\n\n• Website design and development (corporate, e-commerce, landing pages, CMS, portals)\n• Brand identity and logo design\n• Search engine optimisation (SEO) and digital marketing\n• Google Ads and Meta (Facebook/Instagram) advertising\n• Social media management and content creation\n• Mobile application development (Android, iOS, Flutter, React Native)\n• WhatsApp Business automation and CRM integration\n• AI chatbot development and integration\n• Video production and motion graphics\n• Consulting and digital strategy\n\nAll services are subject to individual agreements, proposals, or statements of work agreed upon between the Company and the client prior to commencement.`,
  },
  {
    heading: "4. Intellectual Property",
    body: `All content on this Site — including text, graphics, logos, images, videos, icons, software, and design — is the property of Creators Touch Global or its content suppliers and is protected by applicable intellectual property laws.\n\nYou may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this Site without our prior written consent.\n\nFor client projects: ownership of deliverables transfers to the client only upon full and final payment, unless otherwise specified in the project agreement. Until full payment is received, all work remains the intellectual property of Creators Touch Global.`,
  },
  {
    heading: "5. Client Responsibilities",
    body: `When engaging our services, you agree to:\n\n• Provide accurate and complete information required for the project\n• Supply necessary content, images, branding assets, and access credentials in a timely manner\n• Review and provide feedback on deliverables within agreed timelines\n• Make payments as per the agreed schedule\n• Ensure that all materials provided to us do not infringe on any third-party intellectual property rights\n\nDelays caused by the client in providing materials, feedback, or approvals may result in extended timelines and are not the responsibility of Creators Touch Global.`,
  },
  {
    heading: "6. Payments and Billing",
    body: `• All project fees, payment schedules, and terms are outlined in the project proposal or agreement shared with the client before work begins.\n• We typically require an advance payment before commencing work, with the balance due upon completion or as per the agreed milestone schedule.\n• Payments can be made via bank transfer, UPI, or other methods specified in the invoice.\n• Late payments may attract interest at 1.5% per month on the outstanding amount.\n• We reserve the right to pause or suspend work on any project where payments are overdue by more than 15 days.`,
  },
  {
    heading: "7. Revisions and Scope Changes",
    body: `• Each project includes a defined number of revision rounds as specified in the project proposal.\n• Additional revisions beyond the agreed scope will be billed at our standard hourly rate or as a separate quote.\n• Changes to the project scope, requirements, or deliverables after the project has commenced may result in revised timelines and additional charges.\n• Scope changes must be agreed upon in writing by both parties before implementation.`,
  },
  {
    heading: "8. Warranties and Disclaimers",
    body: `• We warrant that our services will be performed with reasonable skill and care consistent with industry standards.\n• We do not guarantee specific business outcomes such as search engine rankings, traffic volumes, conversion rates, or revenue increases. Results depend on multiple factors beyond our control.\n• Our Site and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.\n• We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    heading: "9. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law:\n\n• Creators Touch Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our Site or services.\n• Our total liability for any claim arising from or related to our services shall not exceed the total fees paid by you to us for the specific project giving rise to the claim.\n• We shall not be liable for any loss of data, revenue, profits, or business opportunities arising from the use of our services or any third-party platforms, tools, or services integrated into your project.`,
  },
  {
    heading: "10. Confidentiality",
    body: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, customer data, financial information, login credentials, and any unpublished creative work.\n\nThis obligation of confidentiality survives the termination of the engagement and remains in effect indefinitely unless the information becomes publicly available through no fault of the receiving party.`,
  },
  {
    heading: "11. Termination",
    body: `• Either party may terminate a project engagement by providing written notice as specified in the project agreement.\n• Upon termination, the client is liable to pay for all work completed up to the date of termination.\n• Any advance payments made are non-refundable unless otherwise agreed in writing.\n• Upon termination, we will provide the client with all completed deliverables for which payment has been received.`,
  },
  {
    heading: "12. Third-Party Services",
    body: `Our services may involve the use of third-party platforms, tools, APIs, or services (including but not limited to Google, Meta, Shopify, WordPress, WhatsApp Business API, hosting providers, and payment gateways).\n\nWe are not responsible for the terms, policies, availability, or performance of these third-party services. Your use of such services is governed by their respective terms and conditions.`,
  },
  {
    heading: "13. Website Usage",
    body: `By using this Site, you agree not to:\n\n• Use the Site for any unlawful purpose or in violation of any applicable laws\n• Attempt to gain unauthorised access to any part of the Site or its servers\n• Use automated tools, bots, or scrapers to extract content from the Site\n• Transmit any viruses, malware, or harmful code through the Site\n• Reproduce, duplicate, or exploit any part of the Site for commercial purposes without our permission`,
  },
  {
    heading: "14. Links to Other Websites",
    body: `Our Site may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party sites you visit.`,
  },
  {
    heading: "15. Governing Law and Jurisdiction",
    body: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Vijayawada, Andhra Pradesh, India.`,
  },
  {
    heading: "16. Changes to These Terms",
    body: `We reserve the right to modify or update these Terms at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of the Site and services after any changes constitutes your acceptance of the revised Terms.\n\nWe recommend reviewing this page periodically to stay informed of any updates.`,
  },
  {
    heading: "17. Contact Us",
    body: `If you have any questions about these Terms and Conditions, please contact us:\n\nCreators Touch Global\nVijayawada, Andhra Pradesh, India\nEmail: hello@creatorstouchglobal.com\nPhone: +91-98859-33339\nWebsite: creatorstouchglobal.com`,
  },
];

export default function TermsPage() {
  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <style dangerouslySetInnerHTML={{ __html: `
        .legal-hero{padding:72px 20px 56px}
        @media(min-width:768px){.legal-hero{padding:96px 28px 80px}}
        .legal-body{max-width:760px;margin:0 auto;padding:0 20px 80px}
        @media(min-width:768px){.legal-body{padding:0 28px 96px}}
        .legal-cta{padding:56px 20px}
        @media(min-width:768px){.legal-cta{padding:80px 28px}}
        .legal-footer{padding:24px 20px}
        @media(min-width:768px){.legal-footer{padding:24px 28px}}
      `}} />

      {/* Hero */}
      <section className="legal-hero" style={S("border-bottom:" + HAIR)}>
        <div style={S("max-width:760px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            Legal
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(36px,6vw,72px);font-weight:500;line-height:0.96;letter-spacing:-0.05em")}>
            Terms &amp; Conditions
          </h1>
          <p style={S(`${SERIF};font-size:clamp(17px,2.2vw,24px);line-height:1.5;color:rgba(244,243,241,0.6);max-width:560px;margin:0`)}>
            Please read these terms carefully before using our website or engaging our services.
          </p>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.3);margin:28px 0 0`)}>
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="legal-body">
        {SECTIONS.map((section) => (
          <div key={section.heading} style={S(`padding:48px 0;border-bottom:${HAIR}`)}>
            <h2 style={S("margin:0 0 20px;font-size:clamp(20px,2.5vw,28px);font-weight:500;letter-spacing:-0.03em")}>
              {section.heading}
            </h2>
            {section.body.split("\n\n").map((para, i) => (
              <p key={i} style={S("margin:0 0 16px;font-size:15px;line-height:1.75;color:rgba(244,243,241,0.6);white-space:pre-line")}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <section className="legal-cta" style={S(`background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:760px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:32px;flex-wrap:wrap")}>
          <div>
            <h2 style={S("margin:0 0 12px;font-size:clamp(22px,3vw,36px);font-weight:500;letter-spacing:-0.04em")}>
              Have questions?
            </h2>
            <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:380px")}>
              If anything in these terms is unclear, reach out and we&apos;ll explain it in plain language.
            </p>
          </div>
          <a
            href="/contact"
            style={S("display:inline-flex;align-items:center;gap:12px;padding:16px 28px;background:#FF3D8F;border-radius:100px;font-size:14px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none")}
          >
            Contact us &rarr;
          </a>
        </div>
      </section>

    </div>
  );
}
