import { sanityClient } from "./sanity";

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string | null;
  coverColor: string;
  readTime: string;
  body: string;
  published: boolean;
  publishedAt: string | null;
};

export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      "coverImage": coverImage.asset->url,
      coverColor,
      readTime,
      "body": pt::text(body),
      published,
      publishedAt
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      "coverImage": coverImage.asset->url,
      coverColor,
      readTime,
      "body": pt::text(body),
      published,
      publishedAt
    }`,
    { slug }
  );
}

export async function getAllPostSlugs(): Promise<string[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && published == true].slug.current`
  );
}
