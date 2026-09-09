export interface ServiceData {
  slug: string;
  title: string;
  color: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  keywords: string[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  tagline: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "website-development",
    title: "Website Development",
    color: "#29A8DC",
    shortDesc: "Custom websites built to attract customers and drive real enquiries.",
    longDesc:
      "We design and develop fast, responsive, mobile-first websites that look premium and convert visitors into paying customers. Every site is hand-crafted with clean code, optimised for speed, and built to rank on Google from day one.",
    benefits: [
      "Custom designs tailored to your brand and audience",
      "Mobile-first, fully responsive on every device",
      "Lightning-fast load times and Core Web Vitals optimised",
      "SEO-ready structure with clean, semantic code",
      "Easy-to-manage CMS so you can update content yourself",
      "Secure hosting setup with SSL and daily backups",
    ],
    keywords: ["website development", "web design", "custom website", "responsive website", "business website"],
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    color: "#cc0066",
    shortDesc: "Rank higher on Google and drive organic traffic that keeps growing.",
    longDesc:
      "We optimise your website to appear at the top of Google search results for the keywords your customers are actually searching. From technical SEO and on-page optimisation to content strategy and local SEO, we build a system that compounds month after month.",
    benefits: [
      "Comprehensive keyword research for your industry and location",
      "On-page SEO with optimised titles, meta tags, and content",
      "Technical SEO audit and fixes for crawlability and indexing",
      "Local SEO setup with Google Business Profile optimisation",
      "Monthly performance reports with actionable insights",
      "Content strategy aligned with search intent",
    ],
    keywords: ["SEO services", "digital marketing", "Google ranking", "local SEO", "search engine optimisation"],
  },
  {
    slug: "google-meta-advertising",
    title: "Google & Meta Advertising",
    color: "#96BF48",
    shortDesc: "Targeted ad campaigns that bring paying customers straight to your door.",
    longDesc:
      "We run high-performance ad campaigns on Google Search, Google Display, Facebook, and Instagram to reach the right audience at the right time. Every rupee is tracked, every ad is tested, and every campaign is optimised for maximum return on ad spend.",
    benefits: [
      "Google Search Ads targeting high-intent buyer keywords",
      "Facebook and Instagram ads with precise audience targeting",
      "Retargeting campaigns to convert warm leads",
      "A/B tested ad creatives for maximum click-through rates",
      "Conversion tracking setup with Google Analytics and Meta Pixel",
      "Monthly ROI reports with transparent spend breakdowns",
    ],
    keywords: ["Google Ads", "Facebook Ads", "Meta advertising", "PPC", "paid advertising", "Instagram Ads"],
  },
  {
    slug: "content-social-media",
    title: "Content & Social Media",
    color: "#c9a227",
    shortDesc: "Consistent, scroll-stopping content that builds your brand every day.",
    longDesc:
      "Your audience is scrolling every day — we make sure they stop for you. From strategy and content calendars to post design, Reels, and community management, we handle everything so your brand stays visible, consistent, and engaging across every platform.",
    benefits: [
      "Custom content strategy aligned with your brand voice",
      "Monthly content calendars with planned posts and themes",
      "Professional post design and Reels editing",
      "Community engagement and audience growth tactics",
      "Hashtag research and platform-specific optimisation",
      "Performance analytics and monthly growth reports",
    ],
    keywords: ["social media management", "content marketing", "Instagram management", "social media agency", "content creation"],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    color: "#0977a8",
    shortDesc: "Online stores built to look like your brand and sell like a machine.",
    longDesc:
      "From your first product to your thousandth order — we build e-commerce stores on Shopify and WooCommerce that make buying simple, fast, and trustworthy. Product catalogues, secure checkout, payment gateway integration, and inventory management — all set up so you can focus on your products.",
    benefits: [
      "Shopify and WooCommerce store design and setup",
      "Product catalogue with professional photography guidelines",
      "UPI, card, and COD payment gateway integration",
      "Inventory tracking with low-stock alerts",
      "Secure checkout flow optimised for conversions",
      "Order management and shipping integration",
    ],
    keywords: ["ecommerce development", "Shopify store", "WooCommerce", "online store", "ecommerce website"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    color: "#8B5CF6",
    shortDesc: "Interfaces that feel effortless and drive the actions that matter.",
    longDesc:
      "Great design is invisible — it just works. We design user interfaces for web and mobile apps that feel intuitive, look polished, and guide users naturally towards conversions. From wireframes and prototypes to usability testing, we put your users at the centre of every design decision.",
    benefits: [
      "User research and persona development",
      "Wireframing and interactive prototyping",
      "Clean, modern UI design with consistent design systems",
      "Usability testing with real users",
      "Responsive designs for web, iOS, and Android",
      "Handoff-ready files with developer documentation",
    ],
    keywords: ["UI UX design", "app design", "user experience", "interface design", "prototyping"],
  },
  {
    slug: "video-motion-graphics",
    title: "Video & Motion Graphics",
    color: "#E85D2A",
    shortDesc: "Videos and animations that grab attention and drive action.",
    longDesc:
      "A 30-second video says what a full page of text cannot. We create promotional videos, explainer animations, ad creatives, and product videos that capture attention in the first frame and drive viewers to take action.",
    benefits: [
      "Promotional and brand videos",
      "Explainer and product demo animations",
      "Ad creatives for Meta, YouTube, and Google Display",
      "Professional video editing and post-production",
      "Motion graphics and kinetic typography",
      "Optimised exports for every platform and format",
    ],
    keywords: ["video production", "motion graphics", "explainer video", "ad creative", "video editing"],
  },
  {
    slug: "whatsapp-crm-automation",
    title: "WhatsApp & CRM Automation",
    color: "#25D366",
    shortDesc: "Automated systems that respond, follow up, and close sales for you.",
    longDesc:
      "Your customers send a message — what happens next? We build automated systems using WhatsApp Business API and CRM tools that respond instantly, follow up on leads, send order confirmations, and nurture prospects — so no enquiry ever falls through the cracks.",
    benefits: [
      "WhatsApp Business API setup and integration",
      "Automated order confirmations and delivery updates",
      "Appointment reminders that reduce no-shows",
      "Lead pipeline setup with automatic follow-up sequences",
      "CRM setup and configuration for your sales team",
      "Multi-channel automation across WhatsApp, email, and SMS",
    ],
    keywords: ["WhatsApp automation", "CRM setup", "business automation", "WhatsApp API", "lead management"],
  },
  {
    slug: "ai-assistance",
    title: "AI Assistance",
    color: "#00C9A7",
    shortDesc: "Custom AI solutions that save you hours every day.",
    longDesc:
      "We build AI-powered tools tailored to your business — from chatbots that handle customer queries 24/7 to smart lead follow-ups and workflow automation. Our custom AI models are trained on your business context to deliver accurate, brand-consistent responses.",
    benefits: [
      "AI chatbots for instant customer support",
      "Smart lead qualification and follow-up automation",
      "Workflow automation that eliminates repetitive tasks",
      "AI-powered analytics and business insights",
      "Custom AI models trained on your business data",
      "Integration with your existing tools and platforms",
    ],
    keywords: ["AI chatbot", "artificial intelligence", "business automation", "AI solutions", "workflow automation"],
  },
  {
    slug: "brand-logo-design",
    title: "Brand & Logo Design",
    color: "#FF3D8F",
    shortDesc: "Iconic identities that hold their shape from a card to a billboard.",
    longDesc:
      "A logo is a mark — a brand is the feeling people get when they hear your name. We craft complete brand identities including logo design, colour systems, typography, brand guidelines, and visual assets that make your business instantly recognisable and professionally consistent.",
    benefits: [
      "Custom logo design with multiple concept explorations",
      "Complete colour palette and typography system",
      "Brand guidelines document for consistent usage",
      "Business card, letterhead, and stationery design",
      "Social media brand kit with templates",
      "Packaging design and print-ready files",
    ],
    keywords: ["logo design", "brand identity", "branding agency", "brand guidelines", "visual identity"],
  },
  {
    slug: "consulting-strategy",
    title: "Consulting & Strategy",
    color: "#A855F7",
    shortDesc: "Strategy first, execution second — positioning that makes you the obvious choice.",
    longDesc:
      "Before we touch a pixel, we understand your market, your competitors, and the one positioning angle that makes you the obvious choice. We provide digital audits, competitor analysis, growth roadmaps, and revenue strategies that give your business a clear direction.",
    benefits: [
      "In-depth competitor analysis and market research",
      "Digital audit of your current online presence",
      "Growth roadmap with prioritised action items",
      "Business positioning and messaging strategy",
      "Revenue strategy aligned with your goals and budget",
      "Quarterly strategy reviews and performance tracking",
    ],
    keywords: ["digital consulting", "business strategy", "competitor analysis", "growth strategy", "digital audit"],
  },
];

export const CITIES: CityData[] = [
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", tagline: "the commercial capital of Andhra Pradesh" },
  { slug: "guntur", name: "Guntur", state: "Andhra Pradesh", tagline: "one of the fastest-growing cities in AP" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", tagline: "India's tech and business hub" },
  { slug: "amaravati", name: "Amaravati", state: "Andhra Pradesh", tagline: "the rising capital of Andhra Pradesh" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", tagline: "the City of Destiny on the east coast" },
  { slug: "tirupati", name: "Tirupati", state: "Andhra Pradesh", tagline: "a city of heritage and growing enterprise" },
  { slug: "rajahmundry", name: "Rajahmundry", state: "Andhra Pradesh", tagline: "the cultural capital of Andhra Pradesh" },
];

export function getAllServiceCitySlugs() {
  const slugs: string[] = [];
  for (const service of SERVICES) {
    for (const city of CITIES) {
      slugs.push(`${service.slug}-in-${city.slug}`);
    }
  }
  return slugs;
}

export function parseSlug(slug: string): { service: ServiceData; city: CityData } | null {
  for (const service of SERVICES) {
    for (const city of CITIES) {
      if (slug === `${service.slug}-in-${city.slug}`) {
        return { service, city };
      }
    }
  }
  return null;
}
