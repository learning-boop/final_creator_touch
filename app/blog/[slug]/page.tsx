import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || !post.published) return {};
  return {
    title: `${post.title} — Creators Touch Global`,
    description: post.excerpt,
    alternates: { canonical: `https://creatorstouchglobal.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://creatorstouchglobal.com/blog/${slug}`,
      type: "article",
      siteName: "Creators Touch Global",
      images: post.coverImage ? [{ url: `https://creatorstouchglobal.com${post.coverImage}`, alt: post.title }] : [],
    },
    twitter: {
      card: "summary",
      title: `${post.title} — Creators Touch Global`,
      description: post.excerpt,
    },
  };
}

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || !post.published) notFound();

  // Find adjacent posts for navigation
  const allPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: { slug: true, title: true },
  });
  const idx = allPosts.findIndex((p: { slug: string }) => p.slug === slug);
  const prev = idx > 0 ? allPosts[idx - 1] : null;
  const next = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;

  // Split body into paragraphs (stored as \n\n separated)
  const paragraphs = post.body.split("\n\n").filter(Boolean);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Creators Touch Global", url: "https://creatorstouchglobal.com" },
    publisher: { "@type": "Organization", name: "Creators Touch Global", logo: { "@type": "ImageObject", url: "https://creatorstouchglobal.com/assets/images/logo/creator-touch.png" } },
    url: `https://creatorstouchglobal.com/blog/${slug}`,
    mainEntityOfPage: `https://creatorstouchglobal.com/blog/${slug}`,
    articleSection: post.category,
    inLanguage: "en",
  };

  return (
    <div style={S("background:#08090A;color:#F4F3F1;font-family:Geist,Arial,sans-serif;min-height:100vh;overflow-x:hidden")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Nav */}
      <header style={S("position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:16px 28px;background:rgba(8,9,10,0.88);backdrop-filter:blur(18px);border-bottom:" + HAIR)}>
        <a href="/" style={S("display:flex;align-items:center;gap:10px;text-decoration:none;color:#F4F3F1")}>
          <img src="/assets/images/logo/creator-touch.png" alt="Creators Touch" style={S("width:32px;height:32px")} />
          <span style={S("font-size:13px;font-weight:600;letter-spacing:-0.03em")}>Creators Touch</span>
        </a>
        <nav style={S(`display:flex;align-items:center;gap:20px;${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase`)}>
          <a href="/" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Home</a>
          <a href="/blog" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>All Articles</a>
          <a href="/work" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Portfolio</a>
          <a href="/services" style={S("color:rgba(244,243,241,0.5);text-decoration:none")}>Services</a>
        </nav>
      </header>

      {/* Article hero */}
      <section style={S("padding:96px 28px 64px;border-bottom:" + HAIR)}>
        <div style={S("max-width:720px;margin:0 auto")}>
          <div style={S("display:flex;align-items:center;gap:14px;margin-bottom:32px;flex-wrap:wrap")}>
            <span style={{ ...S(`${MONO};font-size:10px;letter-spacing:0.16em;text-transform:uppercase;padding:5px 14px;border-radius:100px;border:1px solid`), color: post.coverColor, borderColor: post.coverColor + "44", background: post.coverColor + "12" }}>
              {post.category}
            </span>
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>
              {formatDate(post.publishedAt)}
            </span>
            <span style={S("width:2px;height:2px;border-radius:50%;background:rgba(244,243,241,0.22)")} />
            <span style={S(`${MONO};font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>
              {post.readTime} read
            </span>
          </div>
          <h1 style={S("margin:0 0 28px;font-size:clamp(32px,5vw,56px);font-weight:500;line-height:1.08;letter-spacing:-0.04em")}>
            {post.title}
          </h1>
          <p style={S(`${SERIF};font-size:clamp(17px,2vw,22px);line-height:1.55;color:rgba(244,243,241,0.65);margin:0`)}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div style={S("max-width:720px;margin:0 auto;padding:40px 28px 0")}>
          <img src={post.coverImage} alt={post.title} style={S("width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:16px;display:block")} />
        </div>
      )}

      {/* Article body */}
      <article style={S("max-width:720px;margin:0 auto;padding:48px 28px")}>
        {paragraphs.map((para: string, i: number) => (
          <p key={i} style={S("margin:0 0 28px;font-size:17px;line-height:1.8;color:rgba(244,243,241,0.72);letter-spacing:-0.01em")}>
            {para}
          </p>
        ))}

        {/* Author */}
        <div style={S(`margin-top:64px;padding-top:32px;border-top:${HAIR};display:flex;align-items:center;gap:16px`)}>
          <img src="/assets/images/logo/creator-touch.png" alt="" style={S("width:40px;height:40px;border-radius:50%;background:#0E0F12")} />
          <div>
            <span style={S("font-size:14px;font-weight:500;letter-spacing:-0.02em;display:block")}>Creators Touch Team</span>
            <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>Vijayawada, India</span>
          </div>
        </div>
      </article>

      {/* Prev / Next navigation */}
      <div style={S(`max-width:720px;margin:0 auto;padding:0 28px 72px;display:grid;grid-template-columns:1fr 1fr;gap:20px`)}>
        {prev ? (
          <a href={`/blog/${prev.slug}`} style={S(`display:flex;flex-direction:column;gap:8px;padding:24px;border:${HAIR};border-radius:14px;text-decoration:none;color:#F4F3F1;transition:border-color .3s ease`)} className="blog-nav-link">
            <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>
              &larr; Previous
            </span>
            <span style={S("font-size:14px;font-weight:400;letter-spacing:-0.02em;line-height:1.35")}>{prev.title}</span>
          </a>
        ) : <div />}
        {next ? (
          <a href={`/blog/${next.slug}`} style={S(`display:flex;flex-direction:column;gap:8px;padding:24px;border:${HAIR};border-radius:14px;text-decoration:none;color:#F4F3F1;text-align:right;transition:border-color .3s ease`)} className="blog-nav-link">
            <span style={S(`${MONO};font-size:9px;letter-spacing:0.16em;text-transform:uppercase;color:rgba(244,243,241,0.35)`)}>
              Next &rarr;
            </span>
            <span style={S("font-size:14px;font-weight:400;letter-spacing:-0.02em;line-height:1.35")}>{next.title}</span>
          </a>
        ) : <div />}
      </div>

      {/* CTA strip */}
      <section style={S(`padding:80px 28px;background:#0C0D10;border-top:${HAIR}`)}>
        <div style={S("max-width:720px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:24px")}>
          <h2 style={S("margin:0;font-size:clamp(24px,3.5vw,40px);font-weight:500;letter-spacing:-0.04em")}>
            Want results like these for your business?
          </h2>
          <p style={S("margin:0;font-size:16px;line-height:1.6;color:rgba(244,243,241,0.5);max-width:400px")}>
            Free consultation, honest advice, no obligation.
          </p>
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
        .blog-nav-link:hover{border-color:rgba(244,243,241,0.3) !important}
        @media(max-width:760px){
          .blog-nav-link span:last-child{font-size:13px !important}
        }
      `}</style>
    </div>
  );
}
