import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudy, CASE_STUDIES } from "@/app/_data/case-studies";
import CaseStudyPage from "@/app/_components/CaseStudyPage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — Case Study · Creators Touch Global`,
    description: cs.summary,
    alternates: { canonical: `https://creatorstouchglobal.com/work/${slug}` },
    openGraph: {
      title: `${cs.client} — Case Study`,
      description: cs.tagline,
      url: `https://creatorstouchglobal.com/work/${slug}`,
      siteName: "Creators Touch Global",
      type: "article",
      images: [{ url: `https://creatorstouchglobal.com${cs.images.hero}`, alt: cs.client }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.client} — Case Study · Creators Touch Global`,
      description: cs.tagline,
      images: [`https://creatorstouchglobal.com${cs.images.hero}`],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  return <CaseStudyPage cs={cs} />;
}
