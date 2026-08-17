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
    nextSlug: "mark",
  },
  {
    slug: "mark",
    client: "Mark",
    url: "#",
    year: "2025",
    category: "Brand · Web · Marketing",
    tagline: "From a name to a brand people remember.",
    summary:
      "A complete brand build — from the first logo mark to a full marketing system — delivered for a growing business that needed to look the part before it could grow into the part.",
    challenge:
      "Starting from zero with a name and a vision. No logo, no brand voice, no digital presence. The business was real, the ambition was there — but without a visual identity that commanded respect, every sales conversation started at a disadvantage.",
    approach: [
      "Brand strategy: We defined the brand's core positioning, tone of voice, and the single idea that every piece of communication would be built around.",
      "Logo & identity design: A mark that works at 16px on a mobile screen and 3 metres wide on a hoarding. Designed with longevity, not trends, in mind.",
      "Website design & development: A site built to convert — fast, purposeful, and built around the questions a new customer actually asks.",
      "Marketing system: Brand templates, social media presence, email design, and a content strategy built to compound over time.",
    ],
    outcome:
      "A brand that walks into the room before the person does. From nothing to a complete, professional identity that gives the business the credibility it always deserved.",
    services: ["Brand Strategy", "Logo Design", "Identity System", "Website Development", "Digital Marketing", "Content Strategy"],
    results: [
      { label: "Deliverables", value: "Brand system, website, marketing kit" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Platforms", value: "Web, social, print" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/mark/hero.jpg",
      screens: [
        "/assets/images/projects/mark/screen-1.jpg",
        "/assets/images/projects/mark/screen-2.jpg",
        "/assets/images/projects/mark/screen-3.jpg",
      ],
    },
    color: "#08090A",
    accentColor: "#FF3D8F",
    nextSlug: "kinsale",
  },
  {
    slug: "kinsale",
    client: "Kinsale",
    url: "#",
    year: "2025",
    category: "Web · Brand",
    tagline: "A website that earns trust before a word is spoken.",
    summary:
      "Kinsale needed a digital presence that matched the quality of the experience they deliver — premium, considered, and impossible to ignore.",
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
    nextSlug: "dr-matla",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
