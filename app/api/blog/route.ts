import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthorized } from "@/lib/admin-auth";

// GET — list published blog posts (public)
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
  const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get("limit") || "20")));

  // Admin can see drafts too
  const isAdmin = isAdminAuthorized(req);
  const where = isAdmin ? {} : { published: true };

  const [posts, total] = await Promise.all([
    prisma.blogPost.findMany({
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
        coverImage: true,
        coverColor: true,
        readTime: true,
        published: true,
        publishedAt: true,
        createdAt: true,
      },
    }),
    prisma.blogPost.count({ where }),
  ]);

  return NextResponse.json({ posts, total, page, limit });
}

// POST — create a blog post (admin only)
export async function POST(req: NextRequest) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { slug, title, excerpt, category, body: postBody, coverColor, readTime, published } = body;

    if (!slug || !title || !excerpt || !category || !postBody) {
      return NextResponse.json(
        { error: "slug, title, excerpt, category, and body are required" },
        { status: 400 }
      );
    }

    const { coverImage } = body;

    // Check slug uniqueness
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }

    const post = await prisma.blogPost.create({
      data: {
        slug,
        title,
        excerpt,
        category,
        body: postBody,
        coverImage: coverImage || null,
        coverColor: coverColor || "#FF3D8F",
        readTime: readTime || "4 min",
        published: published ?? false,
        publishedAt: published ? new Date() : null,
      },
    });

    return NextResponse.json({ message: "Post created", post }, { status: 201 });
  } catch (err) {
    console.error("[Blog POST]", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
