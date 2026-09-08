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
