/**
 * Seed script: migrates hardcoded blog posts into the database.
 *
 * Run with:  npx tsx lib/seed-blogs.ts
 *
 * Requires DATABASE_URL in .env or .env.local
 */

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const POSTS = [
  {
    slug: "why-your-business-needs-a-brand-not-just-a-logo",
    coverImage: "/assets/images/blog-cover-images/01-brand-not-just-logo.png",
    title: "Why Your Business Needs a Brand, Not Just a Logo",
    excerpt: "A logo is a mark. A brand is the feeling people get when they hear your name. Here\u2019s why the difference matters for your bottom line.",
    category: "Branding",
    coverColor: "#FF3D8F",
    readTime: "4 min",
    publishedAt: new Date("2026-08-01"),
    body: [
      "Most business owners start with a logo. They pay someone to design a mark, pick a colour palette, maybe choose a font \u2014 and they call it done. But a logo is not a brand. A logo is a symbol. A brand is what people feel when they see that symbol.",
      "Think about the businesses you trust the most. You don\u2019t trust them because of their logo. You trust them because of how they made you feel \u2014 the consistency of their message, the quality of their work, the way they communicate. That is brand.",
      "A strong brand does three things for your business. First, it builds recognition. When your brand is consistent across every touchpoint \u2014 your website, your social media, your packaging, your invoices \u2014 people start to remember you. Recognition is the first step to trust.",
      "Second, it commands a premium. Businesses with strong brands can charge more. Not because their product is necessarily better, but because the perceived value is higher. A \u20b9500 t-shirt with a strong brand behind it feels different from a \u20b9500 t-shirt from a shop with no identity.",
      "Third, it makes marketing easier. When your brand has a clear voice, a clear look, and a clear message, every piece of marketing you create starts from a position of strength. You are not starting from scratch every time \u2014 you are building on something people already recognise.",
      "The businesses that invest in brand \u2014 not just a logo, but a real brand system \u2014 are the ones that grow faster, charge more, and keep customers longer. If you are still operating with just a logo and no brand strategy, you are leaving money on the table.",
      "At Creators Touch, we build brands from the ground up \u2014 strategy, identity, voice, and visual system. Because a logo is a starting point. A brand is a competitive advantage.",
    ].join("\n\n"),
  },
  {
    slug: "5-signs-your-website-is-costing-you-customers",
    coverImage: "/assets/images/blog-cover-images/02-website-costing-customers.png",
    title: "5 Signs Your Website Is Costing You Customers",
    excerpt: "Most business owners don\u2019t realise their website is quietly turning people away. Here are the five most common culprits \u2014 and how to fix them.",
    category: "Digital",
    coverColor: "#29A8DC",
    readTime: "5 min",
    publishedAt: new Date("2026-07-15"),
    body: [
      "Your website is not a brochure. It is your best salesperson \u2014 working 24 hours a day, 7 days a week. But if it is poorly built, it is not selling. It is actively turning people away. Here are five signs your website is costing you customers.",
      "1. It takes more than 3 seconds to load. Research consistently shows that 53% of mobile visitors leave a page that takes longer than 3 seconds to load. Every second of delay costs you real customers. If your website is slow, you are bleeding money \u2014 and you probably don\u2019t even know it.",
      "2. It doesn\u2019t work properly on mobile. More than 70% of Indian internet users browse on their phones. If your website is not mobile-first \u2014 if buttons are too small, text is unreadable, or layouts break on smaller screens \u2014 you are invisible to the majority of your potential customers.",
      "3. There is no clear call to action. Visitors land on your homepage and then\u2026 what? If there is no clear next step \u2014 no prominent button, no contact form, no booking flow \u2014 people will leave. Every page on your website should guide the visitor toward a single, clear action.",
      "4. The design looks outdated. Fair or not, people judge your business by how your website looks. An outdated design signals an outdated business. If your website looks like it was built in 2015, visitors will assume your service is stuck there too.",
      "5. You can\u2019t find it on Google. The most beautiful website in the world is useless if nobody can find it. If your website is not showing up for the searches your customers are making, you have an SEO problem \u2014 and it is costing you every single day.",
      "The good news? Every one of these problems is fixable. At Creators Touch, we audit websites for exactly these issues and rebuild them to convert \u2014 fast, mobile-first, and optimised for the searches that matter to your business.",
    ].join("\n\n"),
  },
  {
    slug: "whatsapp-automation-the-secret-weapon-for-local-businesses",
    coverImage: "/assets/images/blog-cover-images/03-whatsapp-automation-local-business.png",
    title: "WhatsApp Automation: The Secret Weapon for Local Businesses",
    excerpt: "Customers who message you expect a fast reply. Automated responses can follow up, qualify and convert leads while you sleep.",
    category: "Automation",
    coverColor: "#25D366",
    readTime: "3 min",
    publishedAt: new Date("2026-07-01"),
    body: [
      "Here is a reality most local business owners face every day: a customer sends a WhatsApp message at 9 PM. You are with your family, or you are asleep, or you are at another job. By the time you reply the next morning, they have already messaged three of your competitors \u2014 and one of them replied instantly.",
      "That is the problem WhatsApp automation solves. It is not about replacing you. It is about making sure your business responds instantly, every time, even when you are not available.",
      "How does it work? When a customer messages your WhatsApp Business number, an automated system sends them an immediate, personalised response. It can answer common questions, share your menu or price list, book an appointment, or collect their details so you can follow up later.",
      "The best part? It works while you sleep. Appointment reminders go out automatically. Order confirmations are sent instantly. Follow-up messages are triggered based on what the customer did \u2014 all without you lifting a finger.",
      "Local businesses that set up WhatsApp automation see three immediate benefits. First, faster response times \u2014 which directly increases the chance of converting an enquiry into a sale. Second, fewer missed leads \u2014 because every message gets a reply, not just the ones you happen to see. Third, more time \u2014 because the system handles the repetitive conversations so you can focus on delivering your actual service.",
      "At Creators Touch, we set up WhatsApp automation systems for local businesses across India. From a single-person clinic to a multi-location retail chain \u2014 the setup is simple, the results are immediate, and the cost is a fraction of hiring another person to reply to messages.",
    ].join("\n\n"),
  },
  {
    slug: "seo-vs-paid-ads-whats-right-for-your-business",
    coverImage: "/assets/images/blog-cover-images/04-seo-vs-paid-ads.png",
    title: "SEO vs. Paid Ads: What\u2019s Right for Your Business?",
    excerpt: "Both work. But they work differently. Understanding the tradeoff is the first step to spending your marketing budget wisely.",
    category: "Marketing",
    coverColor: "#cc0066",
    readTime: "6 min",
    publishedAt: new Date("2026-06-15"),
    body: [
      "Every business owner eventually asks the same question: should I invest in SEO or paid ads? The honest answer is that both work \u2014 but they work on different timelines, with different strengths, and for different situations.",
      "Paid ads (Google Ads, Meta Ads, Instagram Ads) are like turning on a tap. You pay, and traffic flows. The moment you stop paying, the traffic stops. Paid ads are ideal when you need results quickly \u2014 a product launch, a seasonal sale, a new location opening. You can target exactly who you want, control your budget down to the rupee, and see results within days.",
      "SEO (Search Engine Optimisation) is like planting a tree. It takes time to grow, but once it does, it keeps giving you fruit \u2014 for free. SEO is the practice of making your website show up in Google\u2019s organic results. It takes 3\u20136 months to see meaningful results, but once you rank, you get a steady stream of visitors without paying for each click.",
      "The tradeoff is simple: paid ads give you speed, SEO gives you sustainability. The smartest businesses do both \u2014 using paid ads for immediate needs while building SEO as a long-term asset.",
      "Here is a rule of thumb we use with our clients: if you need leads this week, run ads. If you want to reduce your ad spend over time, invest in SEO. If you can afford to do both, do both \u2014 because the combination is more powerful than either one alone.",
      "The biggest mistake we see? Businesses that spend \u20b950,000 a month on ads indefinitely without ever investing in SEO. They are renting their traffic instead of owning it. The day they stop paying, they go back to zero.",
      "At Creators Touch, we help businesses build a balanced digital marketing strategy \u2014 paid ads for immediate impact, SEO for compounding growth. Because the best marketing strategy is the one that works today and keeps working tomorrow.",
    ].join("\n\n"),
  },
  {
    slug: "how-to-measure-if-your-digital-marketing-is-working",
    coverImage: "/assets/images/blog-cover-images/05-measure-digital-marketing.png",
    title: "How to Measure If Your Digital Marketing Is Working",
    excerpt: "Likes and visits don\u2019t pay the bills. Here\u2019s what to actually track to know if your marketing spend is earning its keep.",
    category: "Analytics",
    coverColor: "#c9a227",
    readTime: "5 min",
    publishedAt: new Date("2026-06-01"),
    body: [
      "You are spending money on digital marketing. Your agency sends you a report every month with impressive numbers \u2014 impressions, clicks, reach, engagement rate. But here is the question nobody asks often enough: is any of this actually making you money?",
      "Vanity metrics are the biggest trap in digital marketing. Likes, follows, and impressions feel good, but they do not pay salaries. The metrics that actually matter are the ones that connect directly to revenue.",
      "Here are the four metrics every business owner should track. First, cost per lead (CPL). How much are you paying to get one genuine enquiry? If you are spending \u20b920,000 a month on ads and getting 40 enquiries, your CPL is \u20b9500. That number should decrease over time as your campaigns optimise.",
      "Second, conversion rate. Of every 100 people who visit your website, how many take the action you want \u2014 fill a form, make a call, place an order? A good conversion rate for most Indian businesses is between 2% and 5%. If yours is below 1%, your website has a problem.",
      "Third, customer acquisition cost (CAC). This is the total cost of acquiring one paying customer \u2014 not just the ad spend, but the agency fees, the content creation, everything. Compare this to how much that customer is worth to you over time. If you spend \u20b92,000 to acquire a customer who spends \u20b950,000 with you over a year, that is excellent.",
      "Fourth, return on ad spend (ROAS). For every \u20b91 you spend on ads, how much revenue comes back? A ROAS of 3x means you are making \u20b93 for every \u20b91 spent. Anything below 2x for most businesses means you are not spending efficiently.",
      "At Creators Touch, we set up tracking and reporting from day one \u2014 so you always know exactly what your marketing spend is producing. No vanity metrics. No fluff. Just the numbers that matter to your bottom line.",
    ].join("\n\n"),
  },
  {
    slug: "the-real-cost-of-a-badly-designed-website",
    coverImage: "/assets/images/blog-cover-images/06-cost-of-bad-website-design.png",
    title: "The Real Cost of a Badly Designed Website",
    excerpt: "Bad design isn\u2019t just ugly \u2014 it actively costs you customers, rankings and credibility. Here\u2019s what to look for and how to fix it.",
    category: "Design",
    coverColor: "#96BF48",
    readTime: "4 min",
    publishedAt: new Date("2026-05-15"),
    body: [
      "A badly designed website is not just an aesthetic problem. It is a business problem. Every day your website is poorly designed, you are losing customers, losing search rankings, and losing credibility \u2014 and you probably have no idea how much it is costing you.",
      "Let us start with trust. Studies show that 75% of users judge a company\u2019s credibility based on its website design. Not its product. Not its service. Its website. If your website looks amateur, visitors assume your business is amateur \u2014 and they leave.",
      "Then there is the Google problem. Google\u2019s algorithm considers user experience as a ranking factor. If visitors land on your site and immediately leave (a high bounce rate), Google notices. It pushes your site lower in search results. Bad design does not just cost you the visitors who see it \u2014 it costs you the visitors who never find you in the first place.",
      "The financial cost is real and measurable. Let us say your website gets 1,000 visitors a month. A well-designed site converts 3% of them \u2014 30 customers. A poorly designed site converts 0.5% \u2014 just 5 customers. That is 25 customers a month you are losing. Multiply that by your average customer value and you will see the true cost of bad design.",
      "Common design problems we see every day: cluttered layouts with no visual hierarchy, fonts that are hard to read, images that are blurry or stretched, no clear call to action, inconsistent branding, and pages that take too long to load because nobody optimised the images.",
      "The fix is not a redesign for the sake of looking pretty. It is a redesign with purpose \u2014 every element placed to guide the visitor toward the action you want them to take. Clean layout. Clear hierarchy. Fast loading. Mobile-first. Conversion-focused.",
      "At Creators Touch, we design websites that look outstanding and work even harder. Because the best design is the one that makes your business money.",
    ].join("\n\n"),
  },
];

async function main() {
  console.log("Seeding blog posts...");

  for (const post of POSTS) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        body: post.body,
        coverImage: post.coverImage,
        coverColor: post.coverColor,
        readTime: post.readTime,
        publishedAt: post.publishedAt,
        published: true,
      },
      create: {
        ...post,
        published: true,
      },
    });
    console.log(`  -> ${post.slug}`);
  }

  console.log("Done! Seeded", POSTS.length, "posts.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
