export type CaseStudy = {
  slug: string;
  client: string;
  url: string;
  year: string;
  category: string;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  services: string[];
  results: { label: string; value: string }[];
  images: {
    hero: string;
    screens: string[];
  };
  color: string;
  accentColor: string;
  nextSlug: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "threadlift",
    client: "Thread Lift",
    url: "https://threadlift.uk",
    year: "2025",
    category: "Aesthetics · Thread Treatments",
    tagline: "Redefine your contours. Reveal your confidence.",
    summary:
      "Thread Lift is a specialist aesthetics clinic offering expert thread lift treatments for natural-looking, refined results. We designed and built a premium website that communicates clinical expertise, builds instant trust, and drives consultation bookings.",
    challenge:
      "Thread lift treatments are a high-consideration purchase — patients need to feel absolute confidence in the practitioner before they commit. The website had to communicate expertise, showcase real results, and make booking effortless — all while competing against dozens of clinics in the same space.",
    approach: [
      "Premium positioning: A luxury editorial design language with warm golds and clean whites — signalling quality and refinement from the first scroll.",
      "Treatment education: Dedicated pages for each thread lift type with clear explanations, expected results, and FAQs — turning anxious browsers into informed, confident leads.",
      "Results gallery: Before/after imagery and patient testimonials structured to build trust at every stage of the decision journey.",
      "Conversion flow: A frictionless consultation booking system with minimal form fields — reducing drop-off and maximising enquiries.",
    ],
    outcome:
      "The website became the clinic's primary source of new patient enquiries, with consultation bookings increasing significantly within the first quarter of launch.",
    services: ["Website Design", "Brand Identity", "Development", "SEO", "Content Strategy"],
    results: [
      { label: "Performance score", value: "96+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation bookings", value: "+70%" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/threadlift/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#c9a227",
    nextSlug: "rma",
  },
  {
    slug: "rma",
    client: "Rugby Medical Aesthetics",
    url: "https://rugbymedicalaesthetics.co.uk",
    year: "2025",
    category: "Aesthetics · Medical Clinic",
    tagline: "Medically led aesthetics delivered with clinical precision and a subtle, personalised approach.",
    summary:
      "Rugby Medical Aesthetics is a medically led aesthetic and skin treatment clinic in Rugby, Warwickshire. We built a website that reflects their clinical precision, personalised consultations, and commitment to natural-looking results.",
    challenge:
      "Medical aesthetics sits at the intersection of healthcare and beauty — the website needed to feel clinical enough to communicate safety and expertise, but warm enough that patients didn't feel like they were visiting a hospital. Balancing professionalism with approachability was the key challenge.",
    approach: [
      "Dual-tone design: A sage green and warm gold palette that bridges medical authority with welcoming approachability — instantly differentiating from competitors.",
      "Service clarity: Clear treatment pages covering medical, aesthetic, and pricing information — so patients know exactly what to expect before they enquire.",
      "Trust signals: Practitioner credentials, professional certifications, and patient testimonials positioned throughout the journey.",
      "Booking integration: A streamlined booking flow that lets patients choose treatment type and preferred time — minimising friction between interest and action.",
    ],
    outcome:
      "The new website positioned RMA as the premium choice in Rugby for medically led aesthetics, driving a measurable increase in consultation bookings and reducing phone enquiries for basic information.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Performance score", value: "95+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Enquiry flow", value: "Optimised" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/rma/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#8B956B",
    nextSlug: "meditron-cdc",
  },
  {
    slug: "meditron-cdc",
    client: "Meditron CDC",
    url: "https://meditroncdc.com",
    year: "2025",
    category: "Healthcare · Paediatric Therapy",
    tagline: "Helping parents find the right care for their child — starting with the first search.",
    summary:
      "Meditron Child Development Centre is a specialist paediatric therapy centre offering speech therapy, occupational therapy, physiotherapy, and child psychology services across multiple cities in Andhra Pradesh. We built a comprehensive, SEO-driven website that helps anxious parents find the right care quickly.",
    challenge:
      "Parents searching for child therapy services are often anxious, overwhelmed, and unsure where to start. The website needed to be informative without being clinical, reassuring without being patronising, and optimised for dozens of local search queries across multiple cities and therapy types.",
    approach: [
      "Content architecture: We mapped every therapy type and condition to dedicated pages — each written in plain language that parents can understand, not medical jargon.",
      "Local SEO at scale: We built city-specific landing pages for every therapy and condition across 7 locations — creating 90+ pages targeting hyper-local search queries like 'speech therapy Vijayawada' and 'autism treatment Guntur'.",
      "Trust building: Parent testimonials, therapist profiles with credentials, a detailed FAQ section, and a dedicated 'For Parents' guide — all designed to reduce anxiety and build confidence before the first appointment.",
      "Booking flow: A simple, mobile-first appointment booking system that lets parents choose location, therapy type, and preferred time — minimising the barrier between search and action.",
    ],
    outcome:
      "Meditron CDC's website now ranks on the first page of Google for dozens of therapy-related searches across Andhra Pradesh. Online appointment bookings became the primary source of new patient intake, and the 'For Parents' guide became a widely shared resource in local parent communities.",
    services: ["Website Design", "Development", "SEO", "Content Strategy", "Local SEO"],
    results: [
      { label: "Pages built", value: "170+" },
      { label: "Google first page", value: "40+ keywords" },
      { label: "Online bookings", value: "+90% in 4 months" },
      { label: "Mobile score", value: "95 / 100" },
    ],
    images: {
      hero: "/assets/images/projects/meditron-cdc/screen-1.png",
      screens: [
        "/assets/images/projects/meditron-cdc/screen-2.png",
        "/assets/images/projects/meditron-cdc/screen-3.png",
      ],
    },
    color: "#08090A",
    accentColor: "#00C9A7",
    nextSlug: "fillers-skin",
  },
  {
    slug: "fillers-skin",
    client: "Fillers Skin",
    url: "https://fillers.skin",
    year: "2025",
    category: "Aesthetics · Dermal Fillers",
    tagline: "The art of refined presence.",
    summary:
      "Fillers Skin is a private aesthetics practice for clients who know the difference — bespoke filler treatments delivered with surgical precision and absolute discretion. We created a luxury editorial website that mirrors the exclusivity of the service.",
    challenge:
      "This wasn't a volume clinic — it was a private, premium practice. The website had to feel exclusive without being inaccessible, and communicate expertise without resorting to clinical jargon. Every design decision had to reinforce the message: this is not for everyone, and that's the point.",
    approach: [
      "Editorial luxury design: A restrained, high-fashion aesthetic with serif typography, generous whitespace, and a muted warm palette — positioning the brand above the noise of mainstream aesthetics.",
      "Treatment storytelling: Each treatment page reads like a consultation — explaining the approach, the results, and the experience in language that feels personal, not transactional.",
      "Results & trust: A curated results gallery and practitioner credentials — building confidence without overselling.",
      "Private consultation flow: A discreet enquiry form designed for high-net-worth clients who expect privacy at every touchpoint.",
    ],
    outcome:
      "The website elevated the brand's positioning and became the primary channel for new client acquisition — attracting higher-value consultations from clients who valued discretion and quality.",
    services: ["Website Design", "Brand Identity", "Development", "Content Strategy"],
    results: [
      { label: "Performance score", value: "97+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation requests", value: "+85%" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/fillers-skin/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#8B6F47",
    nextSlug: "prp-treatment",
  },
  {
    slug: "prp-treatment",
    client: "PRP Treatment",
    url: "https://prp.skin",
    year: "2025",
    category: "Aesthetics · Skin Rejuvenation",
    tagline: "Restore radiant skin — from the inside out.",
    summary:
      "PRP Treatment is a specialist skin rejuvenation practice using platelet-rich plasma therapy to resurface, tighten, and illuminate skin at a cellular level. We built a dark, premium website that communicates the science and the results with equal confidence.",
    challenge:
      "PRP is a treatment that sounds clinical and unfamiliar to most patients. The challenge was making the science accessible and the results desirable — turning a complex medical procedure into something patients actively seek out.",
    approach: [
      "Dark premium aesthetic: A rich, dark design language with gold accents — positioning PRP as a luxury treatment, not a clinical procedure.",
      "Science made simple: Treatment pages that explain the PRP process in clear, human language — with visual diagrams and step-by-step breakdowns.",
      "Results-driven: Before/after imagery and patient stories that make the outcome tangible and desirable.",
      "Consultation booking: A warm, inviting booking flow that reduces anxiety and encourages first-time patients to take the next step.",
    ],
    outcome:
      "The website transformed PRP from an unfamiliar treatment into a sought-after service, with consultation requests growing steadily from organic search and referrals.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Performance score", value: "96+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation bookings", value: "+60%" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/prp-treatment/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#D4A843",
    nextSlug: "aptos-uk",
  },
  {
    slug: "aptos-uk",
    client: "Aptos UK",
    url: "https://aptosuk.com",
    year: "2025",
    category: "Aesthetics · Thread Lifting",
    tagline: "Lift. Define. Rejuvenate.",
    summary:
      "Aptos UK is an advanced non-surgical facial lifting practice using Aptos Excellence technology. We designed a bold, confident website that educates patients on thread lifting and drives high-quality consultation bookings.",
    challenge:
      "Aptos thread lifting is a premium, specialist treatment that most patients have never heard of. The website needed to educate, build confidence in the technology, and position the practice as the UK authority — all while competing against more established brand names.",
    approach: [
      "Bold dark design: A deep navy and gold colour palette that communicates authority and precision — standing apart from the soft pastels of most aesthetics websites.",
      "Technology showcase: Dedicated sections explaining Aptos Excellence technology with visual treatment area mapping — brow, mid-face, jawline — so patients understand exactly what's possible.",
      "Before/after results: A curated gallery with real patient outcomes — the most powerful trust signal in aesthetics.",
      "Conversion architecture: Strategic CTAs and a streamlined consultation booking flow placed at every decision point in the patient journey.",
    ],
    outcome:
      "The website established Aptos UK as a leading authority for thread lifting in the UK, driving consistent consultation bookings from high-intent organic search traffic.",
    services: ["Website Design", "Development", "Brand Identity", "SEO", "Content Strategy"],
    results: [
      { label: "Performance score", value: "95+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Enquiry flow", value: "Optimised" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/aptos-uk/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#C9A227",
    nextSlug: "botox",
  },
  {
    slug: "botox",
    client: "Botox Newcastle",
    url: "https://botoxuk.com",
    year: "2025",
    category: "Aesthetics · Anti-wrinkle",
    tagline: "Refined. Natural. Timeless.",
    summary:
      "Botox Newcastle is a doctor-led Botox practice in Jesmond, Newcastle — specialising in bespoke anti-wrinkle treatments that soften forehead lines, frown lines, and crow's feet while preserving natural expression. We built a clean, editorial website that reflects the precision of the service.",
    challenge:
      "The Botox market is saturated with cheap, high-volume clinics. The challenge was positioning this practice as the premium, doctor-led alternative — communicating that the difference between good Botox and great Botox is the person administering it.",
    approach: [
      "Clean editorial design: A warm, minimal aesthetic with confident serif typography and generous whitespace — letting the quality speak for itself.",
      "Doctor-led positioning: The doctor's profile, credentials, and approach featured prominently — because in Botox, the practitioner is the product.",
      "Treatment clarity: Dedicated pages for each treatment area (forehead, frown, crow's feet, jawline) with clear pricing, expected results, and aftercare information.",
      "Frictionless booking: A simple, elegant booking flow that matches the premium feel of the practice.",
    ],
    outcome:
      "The website positioned Botox Newcastle as Jesmond's premium choice for anti-wrinkle treatments, attracting patients who valued expertise and natural results over discounted prices.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Performance score", value: "97+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation bookings", value: "+75%" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/botox/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#8B6F47",
    nextSlug: "buttock-lift",
  },
  {
    slug: "buttock-lift",
    client: "Buttock Lift",
    url: "https://buttocklift.uk",
    year: "2025",
    category: "Aesthetics · Body Contouring",
    tagline: "Lift. Shape. Confidence.",
    summary:
      "Buttock Lift is a doctor-led non-surgical buttock enhancement practice in Jesmond, Newcastle — using collagen-stimulating Lanluma and HYAcorp body fillers for subtle, natural results. We designed a warm, confident website that builds trust and drives consultation bookings.",
    challenge:
      "Non-surgical buttock enhancement is a treatment many patients are curious about but hesitant to pursue. The website needed to normalise the conversation, communicate safety and expertise, and make patients feel comfortable enough to book — without ever feeling clinical or intimidating.",
    approach: [
      "Warm, confident design: A light, airy aesthetic with soft golds and clean typography — approachable and premium without feeling medical.",
      "Treatment education: Clear explanations of Lanluma and HYAcorp procedures, expected results, recovery timelines, and FAQs — answering every question a hesitant patient might have.",
      "Doctor-led trust: Practitioner credentials and approach featured prominently — because for this treatment, trust in the person matters more than anything.",
      "Multi-channel booking: Consultation booking via form and WhatsApp — meeting patients wherever they're most comfortable.",
    ],
    outcome:
      "The website became the primary source of new patient enquiries, with consultation bookings growing steadily as the site ranked for key body contouring search terms in the Newcastle area.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Performance score", value: "96+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation bookings", value: "+65%" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/buttock-lift/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#C9A227",
    nextSlug: "threadlift",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
