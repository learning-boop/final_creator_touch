import type { MetadataRoute } from "next";
import { getAllIndividualServiceSlugs } from "@/app/_data/individual-services";
import { CASE_STUDIES } from "@/app/_data/case-studies";

const BASE = "https://creatorstouchglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/all`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Individual service pages (57)
  const individualServices: MetadataRoute.Sitemap = getAllIndividualServiceSlugs().map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Case study / portfolio pages
  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((cs) => ({
    url: `${BASE}/work/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...individualServices, ...caseStudyPages];
}
