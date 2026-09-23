import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Creators Touch Global collects, uses, and protects your personal information.",
  alternates: { canonical: "https://creatorstouchglobal.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy — Creators Touch Global",
    description: "How Creators Touch Global collects, uses, and protects your personal information.",
    url: "https://creatorstouchglobal.com/privacy-policy",
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
    body: `Creators Touch Global ("Company", "we", "us", or "our") is committed to protecting the privacy of individuals who visit our website at creatorstouchglobal.com ("Site") and those who engage our services.\n\nThis Privacy Policy explains how we collect, use, store, disclose, and protect your personal information. By using our Site or services, you consent to the practices described in this policy.\n\nWe are headquartered in Vijayawada, Andhra Pradesh, India and serve clients across India, the United Kingdom, UAE, Singapore, and the USA.`,
  },
  {
    heading: "2. Information We Collect",
    body: `We collect information in the following ways:\n\nInformation you provide directly:\n• Name, email address, phone number, and business name when you fill out our contact or enquiry forms\n• Project requirements, briefs, and business information shared during consultations\n• Payment and billing information required for invoicing\n• Content, images, brand assets, and login credentials provided for project execution\n• Communication records including emails, WhatsApp messages, and call notes\n\nInformation collected automatically:\n• IP address, browser type, device type, and operating system\n• Pages visited, time spent on pages, and referring URLs\n• Cookies and similar tracking technologies (see Section 7)\n\nInformation from third parties:\n• Analytics data from Google Analytics and Google Tag Manager\n• Advertising data from Meta (Facebook) Pixel\n• Publicly available business information relevant to your project`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use the information we collect for the following purposes:\n\n• To respond to your enquiries and provide consultations\n• To deliver our services — design, development, marketing, and other project work\n• To process payments and manage billing\n• To communicate with you about project progress, deliverables, and support\n• To send you relevant updates, offers, or newsletters (only with your consent)\n• To improve our website, services, and user experience\n• To analyse website traffic and user behaviour using analytics tools\n• To run and optimise advertising campaigns on Google and Meta platforms\n• To comply with legal obligations and protect our rights\n\nWe do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    heading: "4. Data Sharing and Disclosure",
    body: `We may share your information with the following categories of recipients:\n\n• Team members: Our in-house team accesses client information only as necessary to deliver project work.\n• Service providers: We use third-party tools and platforms for hosting, email, analytics, payment processing, and project management. These providers are bound by their own privacy policies.\n• Advertising platforms: We use Google Ads and Meta (Facebook/Instagram) advertising platforms that may receive anonymised or aggregated data for campaign optimisation.\n• Legal requirements: We may disclose your information if required by law, court order, or government regulation, or to protect our rights, safety, or property.\n\nWe do not share your personal information with third parties for purposes unrelated to our services without your explicit consent.`,
  },
  {
    heading: "5. Data Retention",
    body: `We retain your personal information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Specifically:\n\n• Client project data: Retained for the duration of the engagement and for a period of 3 years after project completion for reference and support purposes.\n• Contact and enquiry data: Retained for up to 2 years after your last interaction with us.\n• Financial and billing records: Retained for 7 years as required by Indian tax and accounting regulations.\n• Analytics data: Retained as per the default retention settings of the analytics platforms we use (typically 14 months for Google Analytics).\n\nYou may request deletion of your personal data at any time by contacting us (see Section 11). We will comply with such requests unless we are legally required to retain the data.`,
  },
  {
    heading: "6. Data Security",
    body: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. These measures include:\n\n• SSL/TLS encryption on our website\n• Secure password-protected access to internal systems and client files\n• Access controls limiting data access to authorised team members only\n• Regular backups of client project data\n• Use of reputable and secure third-party hosting and cloud services\n\nWhile we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but will promptly notify affected parties in the event of a data breach as required by applicable law.`,
  },
  {
    heading: "7. Cookies and Tracking Technologies",
    body: `Our Site uses cookies and similar tracking technologies to improve your browsing experience and analyse site usage.\n\nTypes of cookies we use:\n\n• Essential cookies: Required for the basic functioning of the Site (e.g., session management).\n• Analytics cookies: Used by Google Analytics and Google Tag Manager to collect anonymised data about how visitors use our Site — pages visited, time spent, traffic sources.\n• Advertising cookies: Used by Meta (Facebook) Pixel and Google Ads to track conversions from our advertising campaigns and to enable retargeting.\n\nYou can manage or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of our Site.\n\nThird-party cookies are governed by the respective privacy policies of Google and Meta.`,
  },
  {
    heading: "8. Third-Party Links and Services",
    body: `Our Site may contain links to third-party websites, tools, or platforms (including but not limited to Google, Meta, Shopify, WordPress, and various hosting and payment providers).\n\nWe are not responsible for the privacy practices, content, or security of these third-party services. We encourage you to review the privacy policies of any third-party sites or services you interact with through our Site.`,
  },
  {
    heading: "9. Your Rights",
    body: `Depending on your location and applicable laws, you may have the following rights regarding your personal information:\n\n• Right to access: Request a copy of the personal data we hold about you.\n• Right to correction: Request correction of inaccurate or incomplete personal data.\n• Right to deletion: Request deletion of your personal data, subject to legal retention requirements.\n• Right to restrict processing: Request that we limit how we use your data.\n• Right to data portability: Request your data in a structured, commonly used format.\n• Right to withdraw consent: Withdraw consent for marketing communications at any time.\n• Right to object: Object to the processing of your data for certain purposes.\n\nTo exercise any of these rights, please contact us using the details in Section 11. We will respond to your request within 30 days.`,
  },
  {
    heading: "10. Children's Privacy",
    body: `Our Site and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child under 18 without parental consent, we will take steps to delete that information promptly.\n\nIf you believe we have inadvertently collected information from a minor, please contact us immediately.`,
  },
  {
    heading: "11. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:\n\nCreators Touch Global\nVijayawada, Andhra Pradesh, India\nEmail: hello@creatorstouchglobal.com\nPhone: +91-98859-33339\nWebsite: creatorstouchglobal.com`,
  },
  {
    heading: "12. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any changes will be posted on this page with an updated "Last updated" date.\n\nWe encourage you to review this page periodically. Your continued use of our Site and services after any changes constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p style={S(`${SERIF};font-size:clamp(17px,2.2vw,24px);line-height:1.5;color:rgba(244,243,241,0.6);max-width:560px;margin:0`)}>
            How we collect, use, and protect your personal information — explained in plain language.
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
              Questions about your data?
            </h2>
            <p style={S("margin:0;font-size:15px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:380px")}>
              We take your privacy seriously. If you have any concerns, we&apos;re happy to help.
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
