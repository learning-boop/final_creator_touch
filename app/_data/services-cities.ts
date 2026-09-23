export interface ServiceData {
  slug: string;
  title: string;
  color: string;
  shortDesc: string;
  longDesc: string;
  tagline: string;
  aboutUs: string;
  benefits: string[];
  keywords: string[];
  relatedSlugs: string[];
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  tagline: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "website-design",
    title: "Website Design",
    color: "#FF3D8F",
    shortDesc: "Custom website designs that look premium and convert visitors into customers.",
    tagline: "Beautiful Websites That Work as Hard as You Do",
    aboutUs: "Creators Touch Global has been designing websites since 2008 — for hospitals, clinics, schools, jewellers, malls, and restaurants across India, the UK, UAE, Singapore, and the USA. Every site we design is hand-crafted, conversion-focused, and built to impress. No templates. No shortcuts. Just designs that work.",
    longDesc:
      "We design stunning, mobile-first websites that capture your brand's personality and guide every visitor towards action. Every design is hand-crafted with clean layouts optimised for speed, readability, and conversion.",
    benefits: [
      "Custom designs tailored to your brand and audience",
      "Mobile-first, fully responsive on every device",
      "Conversion-focused layouts that turn visitors into enquiries",
      "SEO-ready structure with clean, semantic code",
      "Fast load times with optimised images and assets",
      "Easy-to-manage CMS so you can update content yourself",
    ],
    keywords: ["website design", "web design", "custom website design", "responsive website design", "business website design"],
    relatedSlugs: ["threadlift", "rma", "meditron-cdc", "fillers-skin", "kensley-aesthetics", "trust-hospital", "anjaneya-jewellery"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    color: "#29A8DC",
    shortDesc: "Custom-coded websites built for speed, security, and scalability.",
    tagline: "Hand-Coded Websites That Perform — No Templates, No Limits",
    aboutUs: "Creators Touch Global builds websites from the ground up. We don't use generic templates or page builders. Our development team writes clean, semantic code that loads fast, ranks well, and scales with your business. From hospital portals to e-commerce platforms — we've built it all.",
    longDesc:
      "We develop fast, secure, and scalable websites using modern technologies — React, Next.js, Node.js, and more. Every line of code is hand-written, performance-optimised, and built to handle your business growth without breaking.",
    benefits: [
      "Custom development with React, Next.js, and modern frameworks",
      "Lightning-fast performance with Core Web Vitals optimised",
      "Secure architecture with SSL, firewalls, and daily backups",
      "API integrations with payment gateways, CRMs, and third-party tools",
      "Scalable codebase that grows with your business",
      "Clean, semantic code that search engines love",
    ],
    keywords: ["web development", "website development", "custom website", "responsive website", "business website"],
    relatedSlugs: ["meditron-cdc", "trust-hospital", "jobyatra-india", "aayush-hospitals"],
  },
  {
    slug: "ecommerce-website-design",
    title: "E-commerce Website Design",
    color: "#0977a8",
    shortDesc: "Online stores built to look like your brand and sell like a machine.",
    tagline: "The Best E-commerce Websites We Can Build — Stores That Sell While You Sleep",
    aboutUs: "Creators Touch Global builds e-commerce stores that look premium and convert. From Anjaneya Jewellery's heritage catalogue to modern Shopify stores for UK clinics — we have built online stores across every industry. UPI, cards, COD — we set up every payment method your customers expect.",
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
    keywords: ["ecommerce website design", "ecommerce development", "Shopify store", "WooCommerce", "online store"],
    relatedSlugs: ["anjaneya-jewellery", "threadlift", "fillers-skin"],
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    color: "#21759B",
    shortDesc: "Professional WordPress websites that are easy to manage and built to perform.",
    tagline: "WordPress Websites Built Right — Fast, Secure, and Easy to Manage",
    aboutUs: "Creators Touch Global has built hundreds of WordPress websites since 2008. We don't just install a theme and call it done — we build custom themes, optimise every plugin, and set up security so your site is fast, safe, and easy to manage. Schools, hospitals, restaurants, NGOs — we've done it all on WordPress.",
    longDesc:
      "We build custom WordPress websites with clean themes, optimised plugins, and a CMS setup that lets you update content without touching code. From business websites to blogs and directories — WordPress done right, without the bloat.",
    benefits: [
      "Custom WordPress theme design — no generic templates",
      "Plugin selection and optimisation for speed and security",
      "SEO-ready setup with Yoast/RankMath configuration",
      "Content management training so you can update your site yourself",
      "WooCommerce integration for selling products online",
      "Security hardening with firewall, malware scanning, and backups",
    ],
    keywords: ["wordpress development", "wordpress website", "wordpress developer", "custom wordpress", "wordpress agency"],
    relatedSlugs: ["trust-hospital", "st-pauls-school", "change-ngo", "anjaneya-jewellery"],
  },
  {
    slug: "seo",
    title: "SEO",
    color: "#cc0066",
    shortDesc: "Rank higher on Google and drive organic traffic that keeps growing.",
    tagline: "Dominate Google Search Results — We Make Sure Your Customers Find You First",
    aboutUs: "With 17+ years of experience, Creators Touch Global has helped over 2000 businesses rank on the first page of Google. We built Meditron CDC's website to rank for 40+ keywords on Google's first page. We know what works — because we have done it hundreds of times, for businesses just like yours.",
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
    keywords: ["SEO services", "search engine optimisation", "Google ranking", "local SEO", "SEO agency"],
    relatedSlugs: ["meditron-cdc", "threadlift", "kensley-aesthetics", "trust-hospital"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    color: "#96BF48",
    shortDesc: "Targeted ad campaigns and full-service digital marketing that brings paying customers.",
    tagline: "Every Rupee Tracked, Every Ad Tested — Digital Marketing That Actually Pays for Itself",
    aboutUs: "Creators Touch Global is a Google Certified Partner and Meta Business Partner. We run high-performance ad campaigns and full-service digital marketing for clinics, e-commerce brands, and service businesses. We combine deep platform expertise with creative strategy to deliver measurable ROI on every campaign.",
    longDesc:
      "We run complete digital marketing campaigns — Google Ads, Facebook Ads, Instagram marketing, content strategy, and email automation — all designed to bring paying customers to your business. Every campaign is tracked, tested, and optimised for maximum return on ad spend.",
    benefits: [
      "Google Search Ads targeting high-intent buyer keywords",
      "Facebook and Instagram ads with precise audience targeting",
      "Content marketing and social media management",
      "Retargeting campaigns to convert warm leads",
      "Conversion tracking setup with Google Analytics and Meta Pixel",
      "Monthly ROI reports with transparent spend breakdowns",
    ],
    keywords: ["digital marketing", "Google Ads", "Facebook Ads", "social media marketing", "online marketing"],
    relatedSlugs: ["fillers-skin", "botox", "prp-treatment", "aptos-uk", "kensley-aesthetics"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    color: "#E85D2A",
    shortDesc: "Keep your website fast, secure, and up-to-date — without lifting a finger.",
    tagline: "Your Website Runs 24/7 — So Should Its Support",
    aboutUs: "Creators Touch Global maintains websites for businesses across India and the UK — hospitals, schools, e-commerce stores, and corporate sites. We've seen what happens when websites are neglected: slow speeds, security breaches, broken pages. Our maintenance plans prevent all of that, with proactive monitoring and rapid response times.",
    longDesc:
      "We handle everything — security updates, plugin patches, performance monitoring, content updates, backups, and uptime monitoring — so your website stays fast, secure, and working perfectly while you focus on running your business.",
    benefits: [
      "Regular security updates and vulnerability patching",
      "Daily automated backups with one-click restore",
      "Performance monitoring and speed optimisation",
      "Content updates — text, images, and new pages",
      "Uptime monitoring with instant downtime alerts",
      "Monthly health reports with recommendations",
    ],
    keywords: ["website maintenance", "website support", "website management", "website care plan", "website updates"],
    relatedSlugs: ["trust-hospital", "meditron-cdc", "st-pauls-school", "aayush-hospitals"],
  },
  {
    slug: "content-social-media",
    title: "Content & Social Media",
    color: "#c9a227",
    shortDesc: "Consistent, scroll-stopping content that builds your brand every day.",
    tagline: "Content That Stops the Scroll and Starts the Conversation",
    aboutUs: "From hospital social media to luxury aesthetics branding — Creators Touch Global creates content that connects with your audience and converts followers into customers. Our in-house team of designers, writers, and strategists handles everything from planning to posting.",
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
    relatedSlugs: ["kensley-aesthetics", "change-ngo", "anjaneya-jewellery", "dr-matla"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    color: "#8B5CF6",
    shortDesc: "Interfaces that feel effortless and drive the actions that matter.",
    tagline: "Design So Intuitive Your Users Never Have to Think — They Just Act",
    aboutUs: "Every website and app we build at Creators Touch Global starts with user experience. We have designed booking flows for aesthetics clinics, admissions portals for schools, and appointment systems for hospitals — all tested against real user behaviour and optimised for conversions.",
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
    relatedSlugs: ["rma", "threadlift", "botox", "buttock-lift", "meditron-cdc"],
  },
  {
    slug: "video-motion-graphics",
    title: "Video & Motion Graphics",
    color: "#E85D2A",
    shortDesc: "Videos and animations that grab attention and drive action.",
    tagline: "30 Seconds to Say What a Full Page Cannot — Videos That Move People to Act",
    aboutUs: "Creators Touch Global produces promotional videos, explainer animations, and ad creatives for brands across healthcare, aesthetics, education, and retail. Our in-house motion team creates content optimised for every platform — from Instagram Reels to YouTube pre-rolls.",
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
    relatedSlugs: ["kensley-aesthetics", "change-ngo", "fillers-skin"],
  },
  {
    slug: "whatsapp-crm-automation",
    title: "WhatsApp & CRM Automation",
    color: "#25D366",
    shortDesc: "Automated systems that respond, follow up, and close sales for you.",
    tagline: "Never Lose a Lead Again — Automation That Responds, Follows Up, and Closes",
    aboutUs: "Creators Touch Global builds WhatsApp automation and CRM systems for clinics, hospitals, and service businesses that handle hundreds of enquiries daily. We have set up automated booking confirmations, lead nurture sequences, and appointment reminders that save hours every day.",
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
    relatedSlugs: ["meditron-cdc", "trust-hospital", "kensley-aesthetics", "rma"],
  },
  {
    slug: "ai-assistance",
    title: "AI Assistance",
    color: "#00C9A7",
    shortDesc: "Custom AI solutions that save you hours every day.",
    tagline: "AI That Knows Your Business — Chatbots, Automation, and Intelligence Built for You",
    aboutUs: "Creators Touch Global integrates AI into real businesses — not just as a buzzword, but as a tool that saves time and makes money. We built an AI chatbot for Kensley Aesthetics that handles over 40% of patient queries automatically. We bring the same results-first AI approach to every client.",
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
    relatedSlugs: ["kensley-aesthetics", "meditron-cdc", "trust-hospital"],
  },
  {
    slug: "brand-logo-design",
    title: "Brand & Logo Design",
    color: "#FF3D8F",
    shortDesc: "Iconic identities that hold their shape from a card to a billboard.",
    tagline: "A Logo Is a Mark — A Brand Is a Feeling. We Build Both.",
    aboutUs: "Since 2008 Creators Touch Global has designed brand identities for hospitals, jewellers, schools, NGOs, and aesthetics clinics across five countries. From Anjaneya Jewellery's heritage-inspired identity to the premium positioning of Fillers Skin — every brand we build is designed to be remembered.",
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
    relatedSlugs: ["fillers-skin", "anjaneya-jewellery", "change-ngo", "threadlift", "botox", "dr-matla"],
  },
  {
    slug: "consulting-strategy",
    title: "Consulting & Strategy",
    color: "#A855F7",
    shortDesc: "Strategy first, execution second — positioning that makes you the obvious choice.",
    tagline: "Before We Touch a Pixel, We Understand Your Market — Strategy That Wins",
    aboutUs: "Creators Touch Global does not just build — we think first. We have consulted for healthcare groups expanding across cities, aesthetics clinics entering the UK market, and retail brands going online for the first time. Our strategies are grounded in data, tested by experience, and built for measurable growth.",
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
    relatedSlugs: ["meditron-cdc", "kensley-aesthetics", "trust-hospital", "st-pauls-school"],
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
      slugs.push(`${service.slug}-${city.slug}`);
    }
  }
  return slugs;
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function parseSlug(slug: string): { service: ServiceData; city: CityData } | null {
  for (const service of SERVICES) {
    for (const city of CITIES) {
      if (slug === `${service.slug}-${city.slug}`) {
        return { service, city };
      }
    }
  }
  return null;
}
