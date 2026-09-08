import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const dynamic = "force-dynamic";

// GET /api/blog — list published blog posts
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const all = searchParams.get("all") === "true"; // admin: show unpublished too

    const where = {
      ...(all ? {} : { published: true }),
      ...(category ? { category } : {}),
    };

    const [posts, total] = await Promise.all([
      getDb().blogPost.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          category: true,
          coverColor: true,
          readTime: true,
          published: true,
          publishedAt: true,
        },
      }),
      getDb().blogPost.count({ where }),
    ]);

    return NextResponse.json({ posts, total, page, limit });
  } catch (err) {
    console.error("Blog list error:", err);
    return NextResponse.json({ error: "Failed to fetch posts." }, { status: 500 });
  }
}

// POST /api/blog — create a new blog post (admin)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, title, excerpt, category, body: content, coverColor, readTime, published } = body;

    if (!slug || !title || !content) {
      return NextResponse.json({ error: "slug, title, and body are required." }, { status: 400 });
    }

    const post = await getDb().blogPost.create({
      data: {
        slug,
        title,
        excerpt: excerpt || "",
        category: category || "General",
        body: content,
        coverColor: coverColor || "#FF3D8F",
        readTime: readTime || "4 min",
        published: published ?? false,
        publishedAt: published ? new Date() : null,
      },
    });

    return NextResponse.json({ success: true, id: post.id, slug: post.slug }, { status: 201 });
  } catch (err) {
    console.error("Blog create error:", err);
    return NextResponse.json({ error: "Failed to create post." }, { status: 500 });
  }
}
