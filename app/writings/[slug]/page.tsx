import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WRITINGS } from "@/lib/data";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ArticleReader } from "@/components/ArticleReader";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WRITINGS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const w = WRITINGS.find((x) => x.slug === slug);
  if (!w) return { title: "Not found" };
  return {
    title: `${w.title} · Os Lamia`,
    description: w.excerpt,
    alternates: { canonical: `/writings/${slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/writings/${slug}`,
      title: w.title,
      description: w.excerpt,
      authors: ["Os Lamia"],
    },
  };
}

function wordCountFor(slug: string): number {
  const w = WRITINGS.find((x) => x.slug === slug);
  if (!w) return 0;
  const text = [w.intro, ...w.sections.flatMap((s) => s.paragraphs)].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export default async function WritingPage({ params }: Params) {
  const { slug } = await params;
  const writing = WRITINGS.find((x) => x.slug === slug);
  if (!writing) return notFound();

  const article = articleSchema({
    slug: writing.slug,
    title: writing.title,
    description: writing.excerpt,
    wordCount: wordCountFor(writing.slug),
    keywords: [writing.tag, "Lilith", "Lilitu", "Os Lamia", "Luciferian"],
    articleSection: writing.tag,
  });
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Writings", url: `${SITE_URL}/#writings` },
    { name: writing.title, url: `${SITE_URL}/writings/${writing.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[article, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <ArticleReader writing={writing} />
      </main>
      <Footer />
    </>
  );
}
