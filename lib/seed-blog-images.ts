/**
 * Uploads blog cover images to Sanity and patches the existing posts.
 *
 * Run with:  npx tsx lib/seed-blog-images.ts
 */

import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import { resolve } from "path";

const client = createClient({
  projectId: "15ibs2d7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: "skciP10gJeaPJ4A7VxpHLm2TQmGs6NrZj8XPepFBMw6IQybQgZAVEoXGSS4Ub87DGcgHV00Foejj5grQflppqxClyizZEuWhYzTWtKL8WThPrEJwZIDtb2SikddfKrIaBt9uf7V8GeKdJ3InhQ3b0rfPMGafuAPU6VLyv8Im3OhLVdEERdJj",
});

const POSTS = [
  { slug: "why-your-business-needs-a-brand-not-just-a-logo", image: "01-brand-not-just-logo.png" },
  { slug: "5-signs-your-website-is-costing-you-customers", image: "02-website-costing-customers.png" },
  { slug: "whatsapp-automation-the-secret-weapon-for-local-businesses", image: "03-whatsapp-automation-local-business.png" },
  { slug: "seo-vs-paid-ads-whats-right-for-your-business", image: "04-seo-vs-paid-ads.png" },
  { slug: "how-to-measure-if-your-digital-marketing-is-working", image: "05-measure-digital-marketing.png" },
  { slug: "the-real-cost-of-a-badly-designed-website", image: "06-cost-of-bad-website-design.png" },
];

async function main() {
  console.log("Uploading blog cover images to Sanity...\n");

  for (const post of POSTS) {
    const imagePath = resolve("public/assets/images/blog-cover-images", post.image);

    // Upload image to Sanity
    const asset = await client.assets.upload("image", createReadStream(imagePath), {
      filename: post.image,
    });
    console.log(`  [uploaded] ${post.image} -> ${asset._id}`);

    // Find the blog post
    const doc = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]._id`,
      { slug: post.slug }
    );

    if (!doc) {
      console.log(`  [skip] Post not found: ${post.slug}`);
      continue;
    }

    // Patch the post with the image reference
    await client.patch(doc).set({
      coverImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    }).commit();

    console.log(`  [patched] ${post.slug}\n`);
  }

  console.log("Done! All images uploaded and linked.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
