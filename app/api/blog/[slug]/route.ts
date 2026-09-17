import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthorized } from "@/lib/admin-auth";

// GET — single blog post by slug (public if published)
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isAdmin = isAdminAuthorized(req);

  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || (!post.published && !isAdmin)) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json({ post });
}

// PUT — update a blog post (admin only)
export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (!existing) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  try {
    const body = await req.json();
    const { title, excerpt, category, body: postBody, coverImage, coverColor, readTime, published, slug: newSlug } = body;

    // If publishing for the first time, set publishedAt
    const isNewlyPublished = published && !existing.published;

    const post = await prisma.blogPost.update({
      where: { slug },
      data: {
        ...(newSlug && newSlug !== slug ? { slug: newSlug } : {}),
        ...(title !== undefined ? { title } : {}),
        ...(excerpt !== undefined ? { excerpt } : {}),
        ...(category !== undefined ? { category } : {}),
        ...(postBody !== undefined ? { body: postBody } : {}),
        ...(coverImage !== undefined ? { coverImage } : {}),
        ...(coverColor !== undefined ? { coverColor } : {}),
        ...(readTime !== undefined ? { readTime } : {}),
        ...(published !== undefined ? { published } : {}),
        ...(isNewlyPublished ? { publishedAt: new Date() } : {}),
      },
    });

    return NextResponse.json({ message: "Post updated", post });
  } catch (err) {
    console.error("[Blog PUT]", err);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// DELETE — delete a blog post (admin only)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;

  const existing = await prisma.blogPost.findUnique({ where: { slug } });
  if (!existing) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await prisma.blogPost.delete({ where: { slug } });

  return NextResponse.json({ message: "Post deleted" });
}
