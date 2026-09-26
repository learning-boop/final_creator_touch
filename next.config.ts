import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      // Core pages from old site
      { source: "/about-us.html", destination: "/about", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/career.html", destination: "/careers", permanent: true },
      { source: "/our-works.html", destination: "/work", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/reviews.html", destination: "/", permanent: true },
      { source: "/blogs.html", destination: "/blog", permanent: true },
      { source: "/enquiry.php", destination: "/contact", permanent: true },

      // Service pages
      { source: "/web-designing.html", destination: "/services", permanent: true },
      { source: "/web-development.html", destination: "/services", permanent: true },
      { source: "/corporate-identity.html", destination: "/services", permanent: true },
      { source: "/online-marketing.html", destination: "/services", permanent: true },

      // Regional SEO landing pages
      { source: "/web-designing-companies-in-vijayawada.html", destination: "/services", permanent: true },
      { source: "/web-designing-in-visakhapatnam.html", destination: "/services", permanent: true },
      { source: "/web-designing-in-kurnool.html", destination: "/services", permanent: true },

      // Misc pages
      { source: "/our-network.html", destination: "/about", permanent: true },
      { source: "/list-of-domains-inworld.html", destination: "/", permanent: true },
      { source: "/whats-going-on.html", destination: "/blog", permanent: true },

      // Catch-all for any other .html or .php pages not listed above
      { source: "/:path*.html", destination: "/", permanent: true },
      { source: "/:path*.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
