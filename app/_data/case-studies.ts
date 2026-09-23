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
    nextSlug: "kensley-aesthetics",
  },
  {
    slug: "kensley-aesthetics",
    client: "Kensley Aesthetics",
    url: "https://kensleyaesthetics.co.uk",
    year: "2025",
    category: "Aesthetics · Medical Clinic",
    tagline: "Natural-looking results by experienced medical professionals.",
    summary:
      "Kensley Aesthetics is a consultation-led aesthetics clinic founded by Dr. Vini Matla, offering over 25 years of medical experience. We designed a warm, editorial website that balances clinical credibility with approachable luxury — driving consultations from patients who value expertise.",
    challenge:
      "Kensley needed to stand apart in a crowded UK aesthetics market. The website had to communicate decades of medical experience without feeling sterile, and attract patients who wanted natural results — not the overdone look they associated with high-street clinics.",
    approach: [
      "Editorial warmth: A navy and gold palette with refined serif typography — communicating heritage and medical authority while remaining inviting.",
      "AI chat integration: A built-in chatbot that answers treatment questions instantly — reducing bounce and qualifying leads before they even book.",
      "Treatment depth: Dedicated pages for surgical and non-surgical treatments with honest explanations of results, recovery, and suitability.",
      "Trust architecture: Dr. Matla's credentials, patient testimonials, and before/after results woven throughout every page.",
    ],
    outcome:
      "The website positioned Kensley as the trusted, experience-led choice in the region — consultation bookings increased significantly and the AI chatbot handled over 40% of initial patient queries.",
    services: ["Website Design", "Development", "Brand Identity", "SEO", "AI Chatbot"],
    results: [
      { label: "Performance score", value: "95+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Consultation bookings", value: "+80%" },
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
    accentColor: "#1B3A5C",
    nextSlug: "dr-matla",
  },
  {
    slug: "dr-matla",
    client: "Dr Matla Aesthetics",
    url: "https://drmatla.co.uk",
    year: "2025",
    category: "Aesthetics · Medical Clinic",
    tagline: "Feel confident in expert hands — Newcastle's leading aesthetics clinic.",
    summary:
      "Dr Matla Aesthetics is an advanced cosmetic practice in Newcastle led by Dr Matla (MBBS, MRCGP, DFSRH) — offering medical and aesthetic treatments rooted in genuine clinical expertise. We built a bold, dark-themed website that commands authority and drives online bookings.",
    challenge:
      "Newcastle has dozens of aesthetics clinics. Dr Matla needed a website that made his medical credentials the centrepiece — positioning him not as another beautician, but as a qualified doctor patients could trust with their face and body.",
    approach: [
      "Dark, cinematic design: A moody, high-contrast visual language that immediately sets Dr Matla apart from the pastel aesthetics market.",
      "Credential-led positioning: Medical qualifications, professional memberships, and clinical experience featured above the fold — trust first, services second.",
      "Online booking: A streamlined book-online flow integrated directly into the hero and every treatment page.",
      "Treatment education: Clear, jargon-free descriptions of each procedure with expected outcomes and recovery timelines.",
    ],
    outcome:
      "The website became the primary driver of new patient consultations, with Dr Matla's Google ranking improving for key aesthetic treatment searches across Newcastle.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Performance score", value: "94+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Enquiry flow", value: "Optimised" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/dr-matla/screen-1.png",
      screens: [
        "/assets/images/projects/dr-matla/screen-2.png",
      ],
    },
    color: "#08090A",
    accentColor: "#C9A227",
    nextSlug: "st-pauls-school",
  },
  {
    slug: "st-pauls-school",
    client: "St. Paul's School",
    url: "https://stpaulsvijayawada.com",
    year: "2024",
    category: "Education · School",
    tagline: "Wisdom is the principle knowledge — nurturing minds since inception.",
    summary:
      "St. Paul's English Medium School is a well-established school in Vijayawada offering quality education from primary through secondary levels. We designed a clean, informative website that serves parents, students, and staff — with admissions, academics, campus life, and exam information all in one place.",
    challenge:
      "School websites are notoriously cluttered — buried PDFs, outdated notices, and confusing navigation. St. Paul's needed a website that parents could navigate effortlessly, that showcased the campus and values, and that made the admissions process simple and transparent.",
    approach: [
      "Parent-first navigation: Clear menu structure — Admissions, Academics, Campus, Examinations, Gallery — so parents find what they need in one click.",
      "Campus showcase: A rich photo gallery highlighting facilities, events, and student life — giving prospective parents a virtual tour.",
      "Admissions flow: A step-by-step admissions guide with downloadable forms and key dates — reducing the number of phone calls the office receives.",
      "News & events: A regularly updated section for announcements, exam schedules, and school events — keeping the website relevant and visited.",
    ],
    outcome:
      "The website modernised St. Paul's digital presence, with admissions enquiries through the website increasing and parents citing the site as a key factor in choosing the school.",
    services: ["Website Design", "Development", "Content Strategy"],
    results: [
      { label: "Sections built", value: "8+" },
      { label: "Admissions online", value: "Yes" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/st-pauls-school-vja/screen-1.png",
      screens: [
        "/assets/images/projects/st-pauls-school-vja/screen-2.png",
      ],
    },
    color: "#08090A",
    accentColor: "#C94060",
    nextSlug: "change-ngo",
  },
  {
    slug: "change-ngo",
    client: "Change NGO",
    url: "https://changengo.org",
    year: "2024",
    category: "Non-Profit · Social Impact",
    tagline: "A small step change lots of lives — brightening a child's day, one act of kindness at a time.",
    summary:
      "Change NGO is an award-winning non-profit organisation dedicated to children's welfare and community development. We designed a bold, emotionally compelling website that drives donations, showcases impact, and recruits volunteers — turning visitors into active supporters.",
    challenge:
      "Non-profit websites often fail at one critical thing: making it easy to give. Change NGO needed a website that told their story powerfully, showed real impact with transparency, and made donating as frictionless as possible — all while working on modest hosting budgets.",
    approach: [
      "Emotional storytelling: Bold black-and-white photography with selective gold accents — creating an editorial, documentary feel that commands attention.",
      "Impact transparency: Projects, causes, and sponsors sections with clear descriptions of where funds go — building donor confidence.",
      "Donation flow: A prominent 'Donate Now' CTA on every page with a streamlined payment flow — reducing the gap between emotion and action.",
      "Volunteer & sponsor sections: Dedicated pages for corporates and individuals to get involved — expanding the supporter base beyond one-time donors.",
    ],
    outcome:
      "The website significantly increased online donations and volunteer sign-ups, and became the go-to reference for sponsors evaluating the organisation's credibility and reach.",
    services: ["Website Design", "Development", "Brand Identity", "Content Strategy"],
    results: [
      { label: "Online donations", value: "+150%" },
      { label: "Volunteer sign-ups", value: "+90%" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/change-ngo/screen-1.png",
      screens: [
        "/assets/images/projects/change-ngo/screen-2.png",
        "/assets/images/projects/change-ngo/screen-3.png",
      ],
    },
    color: "#08090A",
    accentColor: "#E5A100",
    nextSlug: "jobyatra-india",
  },
  {
    slug: "jobyatra-india",
    client: "Jobyatra India",
    url: "https://jobyatraindia.com",
    year: "2025",
    category: "Recruitment · Job Portal",
    tagline: "Your journey to success begins here.",
    summary:
      "Jobyatra India is a flagship online job mela platform connecting job seekers with recruiters across India. We built a scalable web platform that powers hiring campaigns, profile screening, and interview scheduling — making recruitment accessible at scale.",
    challenge:
      "Online job portals are dominated by giants like Naukri and Indeed. Jobyatra needed a platform that offered something different — large-scale virtual job melas where thousands of candidates and hundreds of recruiters connect in a structured, time-bound hiring event.",
    approach: [
      "Event-driven architecture: Built around scheduled job melas with registration, profile creation, and recruiter matching — not just a static job board.",
      "Candidate experience: A simple registration flow with profile screening and interview movement tracking — so candidates always know where they stand.",
      "Recruiter dashboard: Tools for recruiters to post openings, filter candidates, and schedule interviews during mela windows.",
      "Scale-ready: Designed to handle 20,000+ registrations per event with reliable performance under load.",
    ],
    outcome:
      "Jobyatra successfully conducted multiple national-level online job melas, with thousands of candidates registered and placed across industries.",
    services: ["Web Platform", "Development", "UX Design", "SEO"],
    results: [
      { label: "Registrations per event", value: "20,000+" },
      { label: "Pan-India reach", value: "Yes" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/jobyatra-india/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#1B4F8A",
    nextSlug: "aayush-hospitals",
  },
  {
    slug: "aayush-hospitals",
    client: "Aayush Hospitals",
    url: "https://www.aayushhospitals.com",
    year: "2025",
    category: "Healthcare · Multi-Speciality",
    tagline: "Where compassion meets advanced care.",
    summary:
      "Aayush Hospitals is a leading multi-speciality healthcare network in Vijayawada and Eluru, delivering advanced medical expertise across departments. We designed a comprehensive website that helps patients find doctors, book appointments, and access health resources seamlessly.",
    challenge:
      "A multi-location hospital network needs to serve diverse patient needs — from emergency cases to routine consultations — while maintaining a unified brand experience across locations. The website had to make finding the right doctor and booking an appointment effortless.",
    approach: [
      "Department-first navigation: Every speciality has a dedicated section with doctor profiles, facilities, and services — so patients land exactly where they need.",
      "Multi-location support: Location-specific pages for Vijayawada and Eluru with relevant doctors, facilities, and contact information.",
      "Appointment booking: A streamlined booking flow integrated with the hospital's scheduling system for quick, friction-free appointments.",
      "Health resources: Patient education content and facility galleries that build confidence before the first visit.",
    ],
    outcome:
      "The website became the primary digital touchpoint for Aayush Hospitals, driving a significant increase in online appointment bookings and reducing reception call volume for basic enquiries.",
    services: ["Website Design", "Development", "SEO", "Content Strategy"],
    results: [
      { label: "Departments listed", value: "25+" },
      { label: "Multi-location", value: "Vijayawada & Eluru" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/aayush-hospitals/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#00A89D",
    nextSlug: "kpetz",
  },
  {
    slug: "kpetz",
    client: "K-Petz",
    url: "https://www.kpetz.com",
    year: "2025",
    category: "Pet Care · Veterinary",
    tagline: "We love, care, treat your pets.",
    summary:
      "K-Petz is a trainer-run pet hospital and store in Vijayawada offering veterinary services, grooming, training, boarding, and adoption support. We built a warm, trust-driven website that helps pet owners find the right care for their companions.",
    challenge:
      "Pet owners are emotionally invested — they need to trust a clinic before they walk in. K-Petz needed a website that felt caring and professional, showcased their range of services, and made booking consultations and grooming appointments simple.",
    approach: [
      "Warm, approachable design: A friendly visual language with soft colours and real imagery — making pet owners feel their pets are in safe hands.",
      "Service clarity: Dedicated pages for veterinary care, grooming, training, boarding, and adoption — each with clear descriptions and booking options.",
      "Online consultancy: A built-in online consultation feature for quick veterinary advice without visiting the clinic.",
      "Review integration: Customer reviews and ratings prominently displayed to build social proof and trust.",
    ],
    outcome:
      "The website established K-Petz as Vijayawada's go-to pet care destination, with online bookings for grooming and consultations growing steadily since launch.",
    services: ["Website Design", "Development", "Brand Identity", "SEO"],
    results: [
      { label: "Services listed", value: "5+" },
      { label: "Online booking", value: "Yes" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/kpetz/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#2D2459",
    nextSlug: "mitra-hospitals",
  },
  {
    slug: "mitra-hospitals",
    client: "Mitra Hospitals",
    url: "https://www.mithrahospitals.com",
    year: "2025",
    category: "Healthcare · Multi-Speciality",
    tagline: "Empowering health. Inspiring recovery.",
    summary:
      "Mitra Multi Speciality Hospital provides comprehensive healthcare services with experienced consultants across orthopaedics, urology, paediatrics, and more. We designed a professional website that showcases their medical expertise and drives patient appointments.",
    challenge:
      "Patients choosing a hospital want to know two things: are the doctors qualified, and can I book easily? Mitra needed a website that put their specialist doctors front and centre while making the path from search to appointment as short as possible.",
    approach: [
      "Doctor-led design: Specialist profiles with qualifications, experience, and department information prominently featured — because patients choose doctors, not hospitals.",
      "Service architecture: Clear department pages covering facilities, treatments, and conditions — helping patients find the right specialist quickly.",
      "Appointment booking: A direct booking flow with department and doctor selection — minimising the steps between intent and action.",
      "Trust signals: Gallery showcasing modern facilities and equipment — building confidence in the hospital's capabilities.",
    ],
    outcome:
      "The website improved Mitra's digital visibility and became a consistent source of new patient appointments, particularly for specialist consultations.",
    services: ["Website Design", "Development", "SEO"],
    results: [
      { label: "Specialists listed", value: "10+" },
      { label: "Departments", value: "8+" },
      { label: "Mobile-first", value: "Yes" },
      { label: "Status", value: "Live" },
    ],
    images: {
      hero: "/assets/images/projects/mitra-hospitals/screen-1.png",
      screens: [],
    },
    color: "#08090A",
    accentColor: "#6B4FA0",
    nextSlug: "threadlift",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
