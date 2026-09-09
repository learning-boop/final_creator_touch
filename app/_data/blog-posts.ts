export type BlogPost = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  color: string;
  cover: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-your-business-needs-a-brand-not-just-a-logo",
    cat: "Branding",
    title: "Why Your Business Needs a Brand, Not Just a Logo",
    excerpt:
      "A logo is a mark. A brand is the feeling people get when they hear your name. Here's why the difference matters for your bottom line.",
    date: "Aug 2026",
    read: "4 min",
    color: "#FF3D8F",
    cover: "/assets/images/blog-cover-images/01-brand-not-just-logo.png",
    body: [
      "Most business owners start with a logo. They pay someone to design a mark, pick a colour palette, maybe choose a font — and they call it done. But a logo is not a brand. A logo is a symbol. A brand is what people feel when they see that symbol.",
      "Think about the businesses you trust the most. You don't trust them because of their logo. You trust them because of how they made you feel — the consistency of their message, the quality of their work, the way they communicate. That is brand.",
      "A strong brand does three things for your business. First, it builds recognition. When your brand is consistent across every touchpoint — your website, your social media, your packaging, your invoices — people start to remember you. Recognition is the first step to trust.",
      "Second, it commands a premium. Businesses with strong brands can charge more. Not because their product is necessarily better, but because the perceived value is higher. A ₹500 t-shirt with a strong brand behind it feels different from a ₹500 t-shirt from a shop with no identity.",
      "Third, it makes marketing easier. When your brand has a clear voice, a clear look, and a clear message, every piece of marketing you create starts from a position of strength. You are not starting from scratch every time — you are building on something people already recognise.",
      "The businesses that invest in brand — not just a logo, but a real brand system — are the ones that grow faster, charge more, and keep customers longer. If you are still operating with just a logo and no brand strategy, you are leaving money on the table.",
      "At Creators Touch, we build brands from the ground up — strategy, identity, voice, and visual system. Because a logo is a starting point. A brand is a competitive advantage.",
    ],
  },
  {
    slug: "5-signs-your-website-is-costing-you-customers",
    cat: "Digital",
    title: "5 Signs Your Website Is Costing You Customers",
    excerpt:
      "Most business owners don't realise their website is quietly turning people away. Here are the five most common culprits — and how to fix them.",
    date: "Jul 2026",
    read: "5 min",
    color: "#29A8DC",
    cover: "/assets/images/blog-cover-images/02-website-costing-customers.png",
    body: [
      "Your website is not a brochure. It is your best salesperson — working 24 hours a day, 7 days a week. But if it is poorly built, it is not selling. It is actively turning people away. Here are five signs your website is costing you customers.",
      "1. It takes more than 3 seconds to load. Research consistently shows that 53% of mobile visitors leave a page that takes longer than 3 seconds to load. Every second of delay costs you real customers. If your website is slow, you are bleeding money — and you probably don't even know it.",
      "2. It doesn't work properly on mobile. More than 70% of Indian internet users browse on their phones. If your website is not mobile-first — if buttons are too small, text is unreadable, or layouts break on smaller screens — you are invisible to the majority of your potential customers.",
      "3. There is no clear call to action. Visitors land on your homepage and then… what? If there is no clear next step — no prominent button, no contact form, no booking flow — people will leave. Every page on your website should guide the visitor toward a single, clear action.",
      "4. The design looks outdated. Fair or not, people judge your business by how your website looks. An outdated design signals an outdated business. If your website looks like it was built in 2015, visitors will assume your service is stuck there too.",
      "5. You can't find it on Google. The most beautiful website in the world is useless if nobody can find it. If your website is not showing up for the searches your customers are making, you have an SEO problem — and it is costing you every single day.",
      "The good news? Every one of these problems is fixable. At Creators Touch, we audit websites for exactly these issues and rebuild them to convert — fast, mobile-first, and optimised for the searches that matter to your business.",
    ],
  },
  {
    slug: "whatsapp-automation-the-secret-weapon-for-local-businesses",
    cat: "Automation",
    title: "WhatsApp Automation: The Secret Weapon for Local Businesses",
    excerpt:
      "Customers who message you expect a fast reply. Automated responses can follow up, qualify and convert leads while you sleep.",
    date: "Jul 2026",
    read: "3 min",
    color: "#25D366",
    cover: "/assets/images/blog-cover-images/03-whatsapp-automation-local-business.png",
    body: [
      "Here is a reality most local business owners face every day: a customer sends a WhatsApp message at 9 PM. You are with your family, or you are asleep, or you are at another job. By the time you reply the next morning, they have already messaged three of your competitors — and one of them replied instantly.",
      "That is the problem WhatsApp automation solves. It is not about replacing you. It is about making sure your business responds instantly, every time, even when you are not available.",
      "How does it work? When a customer messages your WhatsApp Business number, an automated system sends them an immediate, personalised response. It can answer common questions, share your menu or price list, book an appointment, or collect their details so you can follow up later.",
      "The best part? It works while you sleep. Appointment reminders go out automatically. Order confirmations are sent instantly. Follow-up messages are triggered based on what the customer did — all without you lifting a finger.",
      "Local businesses that set up WhatsApp automation see three immediate benefits. First, faster response times — which directly increases the chance of converting an enquiry into a sale. Second, fewer missed leads — because every message gets a reply, not just the ones you happen to see. Third, more time — because the system handles the repetitive conversations so you can focus on delivering your actual service.",
      "At Creators Touch, we set up WhatsApp automation systems for local businesses across India. From a single-person clinic to a multi-location retail chain — the setup is simple, the results are immediate, and the cost is a fraction of hiring another person to reply to messages.",
    ],
  },
  {
    slug: "seo-vs-paid-ads-whats-right-for-your-business",
    cat: "Marketing",
    title: "SEO vs. Paid Ads: What's Right for Your Business?",
    excerpt:
      "Both work. But they work differently. Understanding the tradeoff is the first step to spending your marketing budget wisely.",
    date: "Jun 2026",
    read: "6 min",
    color: "#cc0066",
    cover: "/assets/images/blog-cover-images/04-seo-vs-paid-ads.png",
    body: [
      "Every business owner eventually asks the same question: should I invest in SEO or paid ads? The honest answer is that both work — but they work on different timelines, with different strengths, and for different situations.",
      "Paid ads (Google Ads, Meta Ads, Instagram Ads) are like turning on a tap. You pay, and traffic flows. The moment you stop paying, the traffic stops. Paid ads are ideal when you need results quickly — a product launch, a seasonal sale, a new location opening. You can target exactly who you want, control your budget down to the rupee, and see results within days.",
      "SEO (Search Engine Optimisation) is like planting a tree. It takes time to grow, but once it does, it keeps giving you fruit — for free. SEO is the practice of making your website show up in Google's organic results. It takes 3–6 months to see meaningful results, but once you rank, you get a steady stream of visitors without paying for each click.",
      "The tradeoff is simple: paid ads give you speed, SEO gives you sustainability. The smartest businesses do both — using paid ads for immediate needs while building SEO as a long-term asset.",
      "Here is a rule of thumb we use with our clients: if you need leads this week, run ads. If you want to reduce your ad spend over time, invest in SEO. If you can afford to do both, do both — because the combination is more powerful than either one alone.",
      "The biggest mistake we see? Businesses that spend ₹50,000 a month on ads indefinitely without ever investing in SEO. They are renting their traffic instead of owning it. The day they stop paying, they go back to zero.",
      "At Creators Touch, we help businesses build a balanced digital marketing strategy — paid ads for immediate impact, SEO for compounding growth. Because the best marketing strategy is the one that works today and keeps working tomorrow.",
    ],
  },
  {
    slug: "how-to-measure-if-your-digital-marketing-is-working",
    cat: "Analytics",
    title: "How to Measure If Your Digital Marketing Is Working",
    excerpt:
      "Likes and visits don't pay the bills. Here's what to actually track to know if your marketing spend is earning its keep.",
    date: "Jun 2026",
    read: "5 min",
    color: "#c9a227",
    cover: "/assets/images/blog-cover-images/05-measure-digital-marketing.png",
    body: [
      "You are spending money on digital marketing. Your agency sends you a report every month with impressive numbers — impressions, clicks, reach, engagement rate. But here is the question nobody asks often enough: is any of this actually making you money?",
      "Vanity metrics are the biggest trap in digital marketing. Likes, follows, and impressions feel good, but they do not pay salaries. The metrics that actually matter are the ones that connect directly to revenue.",
      "Here are the four metrics every business owner should track. First, cost per lead (CPL). How much are you paying to get one genuine enquiry? If you are spending ₹20,000 a month on ads and getting 40 enquiries, your CPL is ₹500. That number should decrease over time as your campaigns optimise.",
      "Second, conversion rate. Of every 100 people who visit your website, how many take the action you want — fill a form, make a call, place an order? A good conversion rate for most Indian businesses is between 2% and 5%. If yours is below 1%, your website has a problem.",
      "Third, customer acquisition cost (CAC). This is the total cost of acquiring one paying customer — not just the ad spend, but the agency fees, the content creation, everything. Compare this to how much that customer is worth to you over time. If you spend ₹2,000 to acquire a customer who spends ₹50,000 with you over a year, that is excellent.",
      "Fourth, return on ad spend (ROAS). For every ₹1 you spend on ads, how much revenue comes back? A ROAS of 3x means you are making ₹3 for every ₹1 spent. Anything below 2x for most businesses means you are not spending efficiently.",
      "At Creators Touch, we set up tracking and reporting from day one — so you always know exactly what your marketing spend is producing. No vanity metrics. No fluff. Just the numbers that matter to your bottom line.",
    ],
  },
  {
    slug: "the-real-cost-of-a-badly-designed-website",
    cat: "Design",
    title: "The Real Cost of a Badly Designed Website",
    excerpt:
      "Bad design isn't just ugly — it actively costs you customers, rankings and credibility. Here's what to look for and how to fix it.",
    date: "May 2026",
    read: "4 min",
    color: "#96BF48",
    cover: "/assets/images/blog-cover-images/06-cost-of-bad-website-design.png",
    body: [
      "A badly designed website is not just an aesthetic problem. It is a business problem. Every day your website is poorly designed, you are losing customers, losing search rankings, and losing credibility — and you probably have no idea how much it is costing you.",
      "Let us start with trust. Studies show that 75% of users judge a company's credibility based on its website design. Not its product. Not its service. Its website. If your website looks amateur, visitors assume your business is amateur — and they leave.",
      "Then there is the Google problem. Google's algorithm considers user experience as a ranking factor. If visitors land on your site and immediately leave (a high bounce rate), Google notices. It pushes your site lower in search results. Bad design does not just cost you the visitors who see it — it costs you the visitors who never find you in the first place.",
      "The financial cost is real and measurable. Let us say your website gets 1,000 visitors a month. A well-designed site converts 3% of them — 30 customers. A poorly designed site converts 0.5% — just 5 customers. That is 25 customers a month you are losing. Multiply that by your average customer value and you will see the true cost of bad design.",
      "Common design problems we see every day: cluttered layouts with no visual hierarchy, fonts that are hard to read, images that are blurry or stretched, no clear call to action, inconsistent branding, and pages that take too long to load because nobody optimised the images.",
      "The fix is not a redesign for the sake of looking pretty. It is a redesign with purpose — every element placed to guide the visitor toward the action you want them to take. Clean layout. Clear hierarchy. Fast loading. Mobile-first. Conversion-focused.",
      "At Creators Touch, we design websites that look outstanding and work even harder. Because the best design is the one that makes your business money.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
