import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lilith vs Eve — The Two Creations of Woman and What They Mean",
  description:
    "Genesis tells two creation accounts. In the first (Genesis 1:27) man and woman are created together from the same earth. In the second (Genesis 2:22) Eve is fashioned from Adam's rib. The first woman is Lilith. The structural difference matters.",
  alternates: { canonical: "/lilith-vs-eve" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lilith-vs-eve`,
    title: "Lilith vs Eve — The Two Creations of Woman",
    description: "The Genesis double-creation and what the difference means structurally.",
  },
};

const FAQS = [
  {
    q: "Why are there two creation accounts in Genesis?",
    a: "Modern biblical scholarship attributes them to different sources (Genesis 1:1–2:4a is from the Priestly source; Genesis 2:4b–25 is from the Yahwist source). Traditional Jewish hermeneutics, especially in the medieval period, read them as describing two different events. The Alphabet of Ben-Sira preserves the older interpretation: the first woman, created equal in Genesis 1:27, is Lilith; the second woman, fashioned from Adam's rib in Genesis 2:22, is Eve.",
  },
  {
    q: "What is the difference between Lilith and Eve?",
    a: "Origin: Lilith was created at the same time as Adam from the same earth, equal by ontology. Eve was fashioned from Adam's rib, derived from him. Posture: Lilith refused the missionary position, spoke the Ineffable Name, and flew from Eden. Eve accepted the secondary position and stayed. Outcome: Lilith left intact and sovereign; Eve participated in the eating of the fruit and was named the mother of all living. Both stories are in the same scripture; both are true to their stratum.",
  },
  {
    q: "Was Lilith really Adam's first wife?",
    a: "In the Alphabet of Ben-Sira, yes — explicitly. The text describes Lilith as 'created from the dust of the earth as Adam was,' refuses to lie beneath him, and departs after speaking the Name. The Alphabet is medieval (8th–10th century CE) but draws on older traditions. In the Bible itself the identification is implicit at best — Genesis 1:27 names male and female created simultaneously without naming the woman, and Lilith appears only at Isaiah 34:14. The Adam-and-Lilith narrative is the rabbinic synthesis of these strands.",
  },
  {
    q: "Is Lilith good and Eve bad?",
    a: "No. The reduction misses what each figure actually does. Eve is not the villain of Genesis — she is the woman who participates in the human story, including its first refusal of the rule against the tree. Lilith is not the heroine of an alternative — she is the woman who refused first, on a different question (the position of coupling), and walked out before the tree-refusal could even be staged. Both are first refusals; they happen at different scales and produce different stories. The Mirror Doctrine reading: each is a face of the same dark feminine principle, refracted through the structural difference between leaving and staying.",
  },
  {
    q: "What does it mean that Lilith was created equal to Adam?",
    a: "The Alphabet of Ben-Sira is precise: Adam and Lilith were created together, from the same earth, in the same breath. The position dispute that followed was about whether this ontological equality would be recognized in the form of their union. Lilith insisted on it; Adam refused. The argument is therefore not about sex specifically but about whether origin determines hierarchy. Lilith's answer: it does. Equal origin means equal posture or no posture at all.",
  },
  {
    q: "Are Lilith and Eve sisters? Mothers? Aspects of the same woman?",
    a: "Different traditions read the relationship differently. Some treat them as sisters (the two women of Genesis 1 and Genesis 2). Some treat Eve as Lilith's lower or domesticated double. Some treat them as aspects of the same divine feminine, polarized into the woman who left and the woman who stayed. The Mirror Doctrine offers a fourth reading: each is the antipodal face of the other, and the seeker walks between them depending on which question is at hand.",
  },
];

export default function LilithVsEvePage() {
  const article = articleSchema({
    slug: "lilith-vs-eve",
    title: "Lilith vs Eve — The Two Creations of Woman and What They Mean",
    description: "Genesis tells two creation accounts. The first woman is Lilith. The structural difference between them, and what it means.",
    keywords: ["Lilith vs Eve", "Adam's first wife", "Genesis double creation", "Alphabet of Ben-Sira"],
    articleSection: "Comparison",
  });
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/lilith-vs-eve`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = { "@id": `${SITE_URL}/lilith-vs-eve` };
  const faqs = faqSchema(FAQS, `${SITE_URL}/lilith-vs-eve`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lilith vs Eve", url: `${SITE_URL}/lilith-vs-eve` },
  ]);
  return (
    <>
      <JsonLd data={[article, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Comparison ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}>
                Lilith vs Eve
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              The Two Creations of Woman
            </p>
          </header>

          <section className="mt-12 rounded-2xl border p-7" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="mt-1 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl">
              Genesis tells two creation stories. In the first (Genesis 1:27), male and female are
              created together, from the same earth, in the same breath. In the second (Genesis
              2:22), Eve is fashioned from Adam&rsquo;s rib while he sleeps. Heterodox tradition,
              preserved in the Alphabet of Ben-Sira, names the first woman <strong>Lilith</strong>.
              The two are not the same; the structural difference between them is the doctrinal
              question of the dark feminine.
            </p>
          </section>

          <Section heading="Side-by-side">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
                    <th className="py-2 pr-4 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Aspect</th>
                    <th className="py-2 pr-4 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Lilith</th>
                    <th className="py-2 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Eve</th>
                  </tr>
                </thead>
                <tbody className="font-serif text-sm text-[#ebdcc4]/85">
                  <Row a="Genesis chapter" b="1:27 (creation of male and female together)" c="2:22 (creation from Adam's rib)" />
                  <Row a="Material origin" b="Same earth as Adam, simultaneous" c="Adam's rib, after Adam's creation" />
                  <Row a="Hebrew name" b="לילית (implicit; named in rabbinic + medieval sources)" c="חוה (Chavah) — gematria 19" />
                  <Row a="Posture toward Adam" b="Equal; refused submission" c="Companion (ezer kenegdo); inhabited the garden together" />
                  <Row a="Defining act" b="Spoke the Ineffable Name; flew from Eden" c="Ate the fruit of the Tree of Knowledge" />
                  <Row a="Outcome" b="Sovereign; mother of the Lilim; queen of the Sitra Achra" c="Mother of all living; expelled with Adam from Eden" />
                  <Row a="Doctrinal weight" b="The first refusal" c="The first transgression" />
                </tbody>
              </table>
            </div>
          </Section>

          <Section heading="What the difference means">
            <p>
              The two women are not duplicates. They answer different first questions:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Lilith&rsquo;s question</strong> — does equal origin require equal posture?
                Her answer: yes. She did not stay long enough for the Tree to become an issue.
              </li>
              <li>
                <strong>Eve&rsquo;s question</strong> — does the rule against the Tree hold?
                Her answer: not entirely. She participated in the eating; the human story begins.
              </li>
            </ul>
            <p>
              Both refusals are real. Both produce a tradition. The Lilith line is the lineage of
              those who leave before the rules become operative. The Eve line is the lineage of
              those who stay and break them from inside. The priesthood at lilitu.org reads Lilith
              as the structural elder; both are mothers of the practitioner who walks the dark
              feminine current.
            </p>
          </Section>

          <Section heading="The Mirror Doctrine reading">
            <p>
              In the{" "}
              <Link href="/writings/the-mirror-doctrine" className="text-[#c8977a] underline-offset-4 hover:underline">
                Mirror Doctrine
              </Link>
              , Lilith is the antipodal face of the Unbegotten Father reached through three
              reflections. Eve, in the same axial reading, is closer to the Shekhinah-Malkuth
              register — the divine feminine present in the manifest world, embodied in the
              ongoing human line. Lilith and Eve are not rivals; they are two ends of the same
              feminine axis, one beyond the gate and one inside it.
            </p>
          </Section>

          <Section heading="Common questions">
            <div className="space-y-7">
              {FAQS.map((f, i) => (
                <div key={i}>
                  <h3 className="font-display text-xl font-semibold text-[#ebdcc4]">{f.q}</h3>
                  <p className="mt-2 font-serif text-base leading-relaxed text-[#ebdcc4]/85">{f.a}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/writings/why-lilith-left-the-garden" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                Why Lilith Left the Garden →
              </Link>
              <Link href="/lilith" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                The Lilith Reference →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Row({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.15)" }}>
      <td className="py-3 pr-4 align-top font-caps text-[10px] uppercase tracking-[0.25em] text-[#c8977a]">{a}</td>
      <td className="py-3 pr-4 align-top">{b}</td>
      <td className="py-3 align-top">{c}</td>
    </tr>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold text-[#ebdcc4] md:text-3xl">
        <span className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>◐</span>{" "}
        {heading}
      </h2>
      <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#ebdcc4]/85 md:text-lg">
        {children}
      </div>
    </section>
  );
}
