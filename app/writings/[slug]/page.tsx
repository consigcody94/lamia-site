import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WRITINGS } from "@/lib/data";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ArticleReader } from "@/components/ArticleReader";

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
  };
}

export default async function WritingPage({ params }: Params) {
  const { slug } = await params;
  const writing = WRITINGS.find((x) => x.slug === slug);
  if (!writing) return notFound();
  return (
    <>
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <ArticleReader writing={writing} />
      </main>
      <Footer />
    </>
  );
}
