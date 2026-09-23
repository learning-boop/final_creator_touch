import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://creatorstouchglobal.com"),
  title: {
    default: "Creators Touch Global — Web Design, Development & SEO, Vijayawada",
    template: "%s — Creators Touch Global",
  },
  description:
    "Creators Touch Global is a digital studio in Vijayawada, India. Since 2008: web design, development, ecommerce, SEO and online marketing for  brands across retail, education, automotive, media and government.",
  keywords: [
    "web design vijayawada",
    "website design company vijayawada",
    "web development vijayawada",
    "ecommerce website design vijayawada",
    "SEO vijayawada",
    "digital marketing vijayawada",
    "branding agency vijayawada",
    "website designers vijayawada",
    "shopify development india",
    "best web design company vijayawada",
    "creators touch",
    "creators touch global",
  ],
  authors: [{ name: "M.S. Hari Krishna" }, { name: "Creators Touch Global", url: "https://creatorstouchglobal.com" }],
  creator: "Creators Touch Global",
  publisher: "Creators Touch Global",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://creatorstouchglobal.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creatorstouchglobal.com",
    siteName: "Creators Touch Global",
    title: "Creators Touch Global — Web Design, Development & SEO, Vijayawada",
    description:
      "Strategy, branding, content, web design and development under one roof since 2008.  brands across retail, education, healthcare, jewellery and government.",
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
    title: "Creators Touch Global — Digital Studio, Vijayawada",
    description:
      "Strategy, branding, content, web design and development under one roof since 2008.",
    images: ["https://creatorstouchglobal.com/assets/images/logo/creator-touch.png"],
  },
  verification: {
    google: undefined, // add Google Search Console verification code when available
  },
  other: {
    "alexaVerifyID": "Ga_5_V4AKQTrjs_J0zDIYN9uwYs",
    "geo.region": "IN-AP",
    "geo.placename": "Vijayawada",
    "geo.position": "16.5062;80.6480",
    "ICBM": "16.5062, 80.6480",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/images/logo/creator-touch1.png" />
        <link rel="apple-touch-icon" href="/assets/images/logo/creator-touch1.png" />
        <meta name="theme-color" content="#08090A" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M44XD37H');`,
          }}
        />

        {/* Google Analytics (UA) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-13267804-5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','UA-13267804-5');gtag('config','AW-18125818615');`,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','856513670073281');fbq('track','PageView');`,
          }}
        />

        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Creators Touch Global",
              alternateName: "Creators Touch",
              url: "https://creatorstouchglobal.com",
            }),
          }}
        />

        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Creators Touch Global",
              url: "https://creatorstouchglobal.com",
              logo: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png",
              image: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png",
              description:
                "Digital studio offering web design, development, ecommerce, SEO and online marketing since 2008.",
              telephone: "+91-98859-33339",
              email: "hello@creatorstouch.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vijayawada",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 16.5062,
                longitude: 80.648,
              },
              foundingDate: "2008",
              founder: { "@type": "Person", name: "M.S. Hari Krishna" },
              areaServed: ["Vijayawada", "Andhra Pradesh", "India", "United Kingdom", "UAE", "Singapore", "USA"],
              serviceType: [
                "Web Design",
                "Web Development",
                "E-commerce Development",
                "SEO",
                "Digital Marketing",
                "Branding",
                "WhatsApp Automation",
              ],
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                bestRating: "5",
                ratingCount: "100",
                reviewCount: "100",
              },
            }),
          }}
        />
      </head>
      <body style={{ margin: 0, background: "#08090A" }}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M44XD37H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
