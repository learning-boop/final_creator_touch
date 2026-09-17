import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project | Creators Touch Global",
  description:
    "Get in touch with Creators Touch Global. Book a free consultation for website design, SEO, branding, e-commerce, or digital marketing. Based in Vijayawada, serving businesses across India.",
  alternates: { canonical: "https://creatorstouchglobal.com/contact" },
  keywords: ["contact creators touch", "start a project", "free consultation", "web design consultation vijayawada", "digital marketing agency contact"],
  openGraph: {
    title: "Contact Us — Start a Project | Creators Touch Global",
    description: "Book a free consultation for website design, SEO, branding, e-commerce, or digital marketing.",
    url: "https://creatorstouchglobal.com/contact",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Contact Us — Start a Project | Creators Touch Global",
    description: "Book a free consultation for website design, SEO, branding, e-commerce, or digital marketing.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
