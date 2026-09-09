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
    slug: "trust-hospital",
    client: "Trust Hospital",
    url: "https://trusthospital.com",
    year: "2023",
    category: "Healthcare · Website Design",
    tagline: "A hospital website that works as hard as the doctors inside it.",
    summary:
      "Trust Hospital is a multi-speciality hospital in Vijayawada with decades of patient trust but zero online visibility. We built a full-featured hospital website that communicates credibility, makes information easy to find, and turns visitors into booked appointments.",
    challenge:
      "Hospital websites are notoriously overwhelming — dozens of departments, hundreds of doctors, complex services. The challenge was organising all of this into a clean, intuitive experience that a worried patient or family member could navigate in seconds, not minutes.",
    approach: [
      "Information architecture: We mapped every department, specialisation, and doctor profile into a clear hierarchy — so patients could find the right specialist in two clicks.",
      "Patient-first UX: The entire site was designed around the patient journey — from symptoms to specialist to appointment. Every page answers: what do I do next?",
      "Appointment booking: A simple, mobile-optimised booking flow that lets patients select department, doctor, and time slot without needing to call.",
      "Performance: Built on Next.js with image optimisation and lazy loading — because a hospital site that loads slowly when someone is in a hurry is a failure.",
    ],
    outcome:
      "Trust Hospital saw a significant increase in online appointment bookings within the first quarter of launch. The website became the primary channel for new patient acquisition, reducing dependency on walk-in referrals.",
    services: ["Website Design", "UX Research", "Development", "SEO", "Content Strategy"],
    results: [
      { label: "Load time", value: "< 1.8s" },
      { label: "Mobile score", value: "94 / 100" },
      { label: "Online bookings", value: "+65% in 90 days" },
      { label: "Departments listed", value: "20+" },
    ],
    images: {
      hero: "/assets/images/projects/trust-hospital/screen-1.png",
      screens: [
        "/assets/images/projects/trust-hospital/screen-2.png",
        "/assets/images/projects/trust-hospital/screen-3.png",
      ],
    },
    color: "#08090A",
    accentColor: "#29A8DC",
    nextSlug: "anjaneya-jewellery",
  },
  {
    slug: "anjaneya-jewellery",
    client: "Anjaneya Jewellery",
    url: "https://anjaneyajewellery.com",
    year: "2023",
    category: "Jewellery & Luxury · E-commerce",
    tagline: "When every piece tells a story, the website should too.",
    summary:
      "Anjaneya Jewellery is a heritage jewellery brand in Vijayawada with a loyal customer base built over generations. We created a premium digital showcase and e-commerce experience that honours the brand's legacy while opening new revenue channels online.",
    challenge:
      "Luxury jewellery buyers expect an experience that feels as refined as the product itself. The website needed to balance high-end aesthetics with practical e-commerce functionality — product catalogues, custom order enquiries, certification details, and trust signals — without ever feeling cluttered.",
    approach: [
      "Brand positioning: We studied the existing brand identity and elevated it for digital — refining the colour palette, typography, and visual language to feel premium without losing the warmth of a family-run business.",
      "Product showcase: Each collection got its own curated page with high-resolution photography, detailed descriptions, weight and certification info, and a direct enquiry button.",
      "Custom order flow: A streamlined enquiry form for bespoke pieces — capturing design preferences, budget range, and occasion — so the sales team could respond with a personalised quote.",
      "Trust & security: SSL, secure payment badges, BIS hallmark certification display, and customer testimonials — all designed to reduce purchase anxiety.",
    ],
    outcome:
      "The website became Anjaneya Jewellery's most effective tool for reaching customers beyond their physical showroom. Online enquiries for custom pieces grew steadily, and the digital catalogue became a reference tool even for in-store customers.",
    services: ["Brand Identity", "E-commerce Design", "Development", "Product Photography Direction", "SEO"],
    results: [
      { label: "Collections showcased", value: "12+" },
      { label: "Custom enquiries", value: "+80% in 6 months" },
      { label: "Mobile score", value: "92 / 100" },
      { label: "Avg. session time", value: "3.2 min" },
    ],
    images: {
      hero: "/assets/images/projects/anjaneya-jewellery/screen-1.png",
      screens: [
        "/assets/images/projects/anjaneya-jewellery/screen-2.png",
      ],
    },
    color: "#08090A",
    accentColor: "#c9a227",
    nextSlug: "change-ngo",
  },
  {
    slug: "change-ngo",
    client: "Change NGO",
    url: "https://change.ngo",
    year: "2024",
    category: "Non-profit · Campaign Site",
    tagline: "Good causes deserve great websites.",
    summary:
      "Change is a grassroots non-profit working on education and community development across rural Andhra Pradesh. They needed a website that could inspire donors, recruit volunteers, and clearly communicate their impact — all on a non-profit budget.",
    challenge:
      "Non-profit websites often feel either too corporate or too basic. The challenge was building something that felt professional and trustworthy enough for institutional donors, while remaining warm and accessible enough for individual supporters and volunteers.",
    approach: [
      "Story-first design: We led with impact stories and real photographs — not stock images. Every section was built to answer the question: what difference does my donation actually make?",
      "Donation funnel: A frictionless, mobile-optimised donation flow with UPI, card, and bank transfer options — plus recurring donation setup for monthly givers.",
      "Volunteer registration: A simple sign-up flow that captures skills, availability, and location — so the team can match volunteers to the right projects.",
      "Impact reporting: A dedicated section with campaign updates, progress dashboards, and annual reports — building transparency and long-term trust.",
    ],
    outcome:
      "Within three months of launch, Change saw a measurable increase in online donations and volunteer sign-ups. The website became their primary tool for donor communication, replacing scattered WhatsApp updates with a single, credible source of truth.",
    services: ["Website Design", "Development", "Content Strategy", "Donation Integration", "SEO"],
    results: [
      { label: "Online donations", value: "+120% in 3 months" },
      { label: "Volunteer sign-ups", value: "200+ in 90 days" },
      { label: "Load time", value: "< 1.6s" },
      { label: "Mobile score", value: "96 / 100" },
    ],
    images: {
      hero: "/assets/images/projects/change-ngo/screen-1.png",
      screens: [
        "/assets/images/projects/change-ngo/screen-2.png",
        "/assets/images/projects/change-ngo/screen-3.png",
      ],
    },
    color: "#08090A",
    accentColor: "#96BF48",
    nextSlug: "dr-matla",
  },
  {
    slug: "dr-matla",
    client: "Dr. Matla",
    url: "https://drmatla.com",
    year: "2024",
    category: "Healthcare · Personal Brand",
    tagline: "When people are looking for a doctor they can trust, they search online first.",
    summary:
      "Dr. Matla is a senior specialist in Vijayawada who had the skill, the patients, and the reputation — but no digital presence to match. We built a personal brand website that communicates authority, warmth, and trust from the first second.",
    challenge:
      "Patients searching for a specialist will click away in under 8 seconds if the site doesn't feel credible. The challenge was translating 20+ years of clinical experience into a digital first impression that felt both expert and human — without turning it into a corporate brochure.",
    approach: [
      "Discovery & positioning: We interviewed Dr. Matla and three of his long-term patients to understand exactly what made people choose him over others. The answer was always the same — he listens.",
      "Brand identity: We designed a clean, confident visual identity built around calm blues and precise typography — conveying precision without coldness.",
      "Website design & build: A fast, accessible website with specialisation pages, a patient testimonial section, and a one-tap appointment booking flow optimised for mobile patients.",
      "SEO foundation: We structured every page for local search — Vijayawada + specialisation keyword clusters — so new patients could actually find him.",
    ],
    outcome:
      "Within 60 days of launch, Dr. Matla's practice reported a measurable increase in new patient enquiries from online search — patients who had never heard of him before but found him because he was simply the most credible result on the page.",
    services: ["Brand Identity", "Website Design", "Development", "SEO", "Personal Branding"],
    results: [
      { label: "Load time", value: "< 1.4s" },
      { label: "Mobile score", value: "97 / 100" },
      { label: "New patient enquiries", value: "+40% in 60 days" },
      { label: "Local search ranking", value: "Top 3" },
    ],
    images: {
      hero: "/assets/images/projects/dr-matla/screen-1.png",
      screens: [
        "/assets/images/projects/dr-matla/screen-2.png",
      ],
    },
    color: "#08090A",
    accentColor: "#29A8DC",
    nextSlug: "st-pauls-school-vja",
  },
  {
    slug: "st-pauls-school-vja",
    client: "St. Paul's School VJA",
    url: "https://stpaulsschoolvja.com",
    year: "2024",
    category: "Education · Institution Site",
    tagline: "The school parents trust — now with a website to match.",
    summary:
      "St. Paul's School is one of Vijayawada's most respected educational institutions. Despite decades of academic excellence, their online presence was outdated and incomplete. We built a modern school website that serves students, parents, and prospective families equally well.",
    challenge:
      "School websites serve multiple audiences with competing needs — parents want fee details and academic calendars, students want event updates and gallery, and prospective families want admissions information and campus tours. The challenge was designing one site that serves all three without overwhelming any of them.",
    approach: [
      "Audience mapping: We identified three primary user journeys — prospective parents evaluating the school, current parents checking updates, and students browsing events — and designed navigation around all three.",
      "Admissions portal: A clear, step-by-step admissions flow with eligibility criteria, required documents, important dates, and an online application form — reducing phone enquiries by giving parents everything they need upfront.",
      "Faculty directory: Searchable profiles for every teacher and department head — complete with qualifications, subjects, and experience — building confidence in the academic team.",
      "Event gallery & calendar: A dynamic events section with photo galleries, upcoming dates, and downloadable academic calendars — keeping the school community connected.",
    ],
    outcome:
      "The new website became the school's primary communication channel with parents. Online admission enquiries increased significantly, and the school reported a noticeable reduction in repetitive phone calls about fees, dates, and admission procedures.",
    services: ["Website Design", "Development", "Content Strategy", "SEO", "Portal Development"],
    results: [
      { label: "Admission enquiries", value: "+55% online" },
      { label: "Mobile score", value: "93 / 100" },
      { label: "Pages built", value: "35+" },
      { label: "Load time", value: "< 2.0s" },
    ],
    images: {
      hero: "/assets/images/projects/st-pauls-school-vja/screen-1.png",
      screens: [
        "/assets/images/projects/st-pauls-school-vja/screen-2.png",
      ],
    },
    color: "#08090A",
    accentColor: "#8B5CF6",
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
    nextSlug: "kensleyaesthetics",
  },
  {
    slug: "kensleyaesthetics",
    client: "Kensley Aesthetics",
    url: "https://kensleyaesthetics.com",
    year: "2025",
    category: "Aesthetics · Clinic",
    tagline: "A website that earns trust before a word is spoken.",
    summary:
      "Kensley Aesthetics is a premium aesthetics clinic in Newcastle and London. They needed a digital presence that matched the quality of the experience they deliver — premium, considered, and impossible to ignore.",
    challenge:
      "In a competitive market where customers judge quality entirely by what they see online before ever visiting, the website isn't a brochure — it is the first experience. It has to be as good as the real thing.",
    approach: [
      "Discovery: Understanding the customer journey — who they are, what they feel before they book, and what finally makes them commit.",
      "Design direction: A premium, editorial aesthetic that signals quality without shouting about it — clean space, confident typography, and photography that does the selling.",
      "Development: A fast, beautiful site with a smooth booking or enquiry flow built around the moment a visitor becomes a customer.",
      "Brand consistency: Ensuring the digital identity matches every other touchpoint the customer encounters.",
    ],
    outcome:
      "A website that turns visitors into customers — because the experience online feels as good as the experience in person.",
    services: ["Website Design", "Brand Identity", "Development", "Photography Direction"],
    results: [
      { label: "Performance score", value: "95+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Enquiry flow", value: "Optimised" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/kensley-aesthetics/screen-1.png",
      screens: [
        "/assets/images/projects/kensley-aesthetics/screen-2.png",
        "/assets/images/projects/kensley-aesthetics/screen-3.png",
      ],
    },
    color: "#08090A",
    accentColor: "#FF3D8F",
    nextSlug: "trust-hospital",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
