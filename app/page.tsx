import CreatorsTouchHome from "./_components/CreatorsTouchHome";

export const metadata = {
  title: "Creators Touch Global — Web Design, Development & SEO, Vijayawada",
  description:
    "Creators Touch Global is a digital studio in Vijayawada, India. Since 2008: web design, development, ecommerce, SEO and online marketing for 100+ brands across retail, education, automotive, media and government.",
  alternates: { canonical: "https://creatorstouchglobal.com" },
  openGraph: {
    title: "Creators Touch Global — Digital Studio, Vijayawada",
    description: "Strategy, branding, content, web design and development under one roof since 2008.",
    url: "https://creatorstouchglobal.com",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/creator_touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Creators Touch Global — Digital Studio, Vijayawada",
    description: "Strategy, branding, content, web design and development under one roof since 2008.",
    images: ["https://creatorstouchglobal.com/assets/images/creator_touch.png"],
  },
};

export default function Page() {
  return <CreatorsTouchHome />;
}
