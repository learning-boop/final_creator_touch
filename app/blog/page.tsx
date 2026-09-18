import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Creators Touch Global",
  description:
    "Practical insights on branding, web design, SEO, digital marketing and automation for Indian small businesses. Written by the Creators Touch team.",
  alternates: { canonical: "https://creatorstouchglobal.com/blog" },
  keywords: ["digital marketing blog", "web design tips", "SEO guide india", "branding advice small business", "creators touch blog"],
  openGraph: {
    title: "Blog — Creators Touch Global",
    description: "Practical insights on branding, web design, SEO, digital marketing and automation for Indian small businesses.",
    url: "https://creatorstouchglobal.com/blog",
    siteName: "Creators Touch Global",
    type: "website",
    images: [{ url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png", width: 512, height: 512, alt: "Creators Touch Global" }],
  },
  twitter: {
    card: "summary",
    title: "Blog — Creators Touch Global",
    description: "Practical insights on branding, web design, SEO and digital marketing for Indian small businesses.",
  },
};

const MONO = "font-family:'Geist Mono',monospace";
const SERIF = "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400";
const HAIR = "1px solid rgba(244,243,241,0.10)";

function S(css: string): React.CSSProperties {
  const o: Record<string, string> = {};
  css.split(";").forEach((d) => {
    const i = d.indexOf(":");
    if (i < 0) return;
    const k = d.slice(0, i).trim();
    const v = d.slice(i + 1).trim();
    if (k) o[k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())] = v;
  });
  return o as React.CSSProperties;
}

function formatDate(d: Date | null) {
  if (!d) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      category: true,
      coverImage: true,
      coverColor: true,
      readTime: true,
      publishedAt: true,
    },
  });

  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>

      {/* Nav */}
      <header style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:rgba(8,9,10,0.88);backdrop-filter:blur(18px);border-bottom:" + HAIR)}>
        <a href="/" style={S("display:flex;align-items:center;gap:10px;text-decoration:none;color:#F4F3F1")}>
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" style={S("width:32px;height:32px")} />
          <span style={S("font-size:13px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
        </a>
        <nav style={S(`display:flex;align-items:center;gap:20px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase`)}>
          <a href="/" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Home</a>
          <a href="/work" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Portfolio</a>
          <a href="/services" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Services</a>
          <a href="/about" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>About</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={S("padding:96px 28px 72px;border-bottom:" + HAIR)}>
        <div style={S("max-width:1100px;margin:0 auto")}>
          <p style={S(`${MONO};font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:rgba(244,243,241,0.35);margin:0 0 28px`)}>
            Insights &amp; Inspires
          </p>
          <h1 style={S("margin:0 0 28px;font-size:clamp(42px,7vw,96px);font-weight:500;line-height:0.94;letter-spacing:-0.05em")}>
            Blog
          </h1>
          <p style={S(`${SERIF};font-size:clamp(18px,2.2vw,26px);line-height:1.5;color:rgba(244,243,241,0.65);max-width:560px;margin:0`)}>
            Practical ideas that help your business grow &mdash; no jargon, no fluff.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <div style={S("max-width:1100px;margin:0 auto;padding:72px 28px")}>
        <div style={S("display:grid;grid-template-columns:repeat(3,1fr);gap:28px")} className="blog-grid">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={S("display:flex;flex-direction:column;border:1px solid rgba(244,243,241,0.09);border-radius:20px;overflow:hidden;background:#0E0F12;text-decoration:none;color:#F4F3F1;transition:border-color .3s ease,transform .3s ease")}
              className="blog-card"
            >
              {/* Cover image */}
              <div style={S("aspect-ratio:16/9;position:relative;overflow:hidden")}>
                {post.coverImage && <img src={post.coverImage} alt={post.title} loading="lazy" style={S("width:100%;height:100%;object-fit:cover;display:block")} />}
                <span style={{ ...S("position:absolute;top:14px;left:14px;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;padding:6px 16px;border-radius:100px;border:1px solid;backdrop-filter:blur(8px)"), color: post.coverColor ?? undefined, borderColor: (post.coverColor ?? "") + "55", background: (post.coverColor ?? "") + "18" }}>{post.category}</span>
              </div>

              {/* Content */}
              <div style={S("display:flex;flex-direction:column;gap:14px;padding:24px;flex:1")}>
                <div style={S("display:flex;align-items:center;gap:10px")}>
                  <span style={S(`${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>{formatDate(post.publishedAt)}</span>
                  <span style={S("width:2px;height:2px;border-radius:50%;background:rgba(244,243,241,0.22)")} />
                  <span style={S(`${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>{post.readTime} read</span>
                </div>
                <h2 style={S("margin:0;font-size:clamp(15px,1.5vw,18px);font-weight:400;line-height:1.35;letter-spacing:-0.02em")}>{post.title}</h2>
                <p style={S("margin:0;font-size:13px;line-height:1.65;color:rgba(244,243,241,0.5)")}>{post.excerpt}</p>
                <div style={S("margin-top:auto;padding-top:16px;border-top:1px solid rgba(244,243,241,0.07);display:flex;align-items:center;gap:8px")}>
                  <span style={{ ...S(`${MONO};font-size:9px;letter-spacing:0.14em;text-transform:uppercase`), color: post.coverColor ?? undefined }}>Read article</span>
                  <span style={{ color: post.coverColor ?? undefined }}>&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <section style={S(`padding:80px 28px;background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:960px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:40px;flex-wrap:wrap")}>
          <div>
            <h2 style={S("margin:0 0 14px;font-size:clamp(24px,3.5vw,44px);font-weight:500;letter-spacing:-0.04em")}>
              Ready to grow your business?
            </h2>
            <p style={S("margin:0;font-size:16px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:400px")}>
              Free consultation, honest advice, no obligation.
            </p>
          </div>
          <a
            href="/contact"
            style={S("display:inline-flex;align-items:center;gap:12px;padding:18px 32px;background:#FF3D8F;border-radius:100px;font-size:14px;font-weight:500;letter-spacing:-0.02em;color:#08090A;text-decoration:none")}
          >
            Get in touch &rarr;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={S(`padding:24px 28px;border-top:${HAIR};display:flex;justify-content:space-between;align-items:center`)}>
        <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.28)`)}>
          Creators Touch Global &middot; &copy; 2026
        </span>
        <a href="/" style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35);text-decoration:none`)}>
          Back to home
        </a>
      </footer>

      <style>{`
        @media(max-width:760px){
          .blog-grid{grid-template-columns:1fr !important;gap:20px !important}
        }
        .blog-card:hover{border-color:rgba(244,243,241,0.22) !important;transform:translateY(-3px)}
      `}</style>
    </div>
  );
}
