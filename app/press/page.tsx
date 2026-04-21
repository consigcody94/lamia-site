import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Press — Bio, Photos, Quotes, and Verified Facts",
  description:
    "Press kit for Os Lamia, High Priest of Lilith. Verified bio, downloadable photos, ready-to-quote pull-quotes from the doctrinal essays, contact for interviews and appearances.",
  alternates: { canonical: "/press" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/press`,
    title: "Press Kit — Os Lamia, High Priest of Lilith",
    description: "Bio, photos, verified facts, ready-to-quote material.",
  },
};

export default function PressPage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Press", url: `${SITE_URL}/press` },
  ]);
  return (
    <>
      <JsonLd data={[crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Press ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}>
                Press Kit
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic text-[#ebdcc4]/65 md:text-lg">
              For journalists, podcasters, scholars, and editors. Verified bio, downloadable
              photos, ready-to-quote pull-quotes, and direct contact.
            </p>
          </header>

          <Section heading="One-line bio">
            <p className="font-serif text-lg italic text-[#ebdcc4]">
              Os Lamia is the High Priest of Lilith, initiated in the founding circle of the Greater
              Church of Lucifer in Old Town Spring, Texas, and operating the contemporary priesthood
              of the Black Water current from the Washington DMV area.
            </p>
          </Section>

          <Section heading="Short bio (50 words)">
            <p>
              Os Lamia holds the seat of High Priest of Lilith. Initiated at age 18 in the founding
              circle of the Greater Church of Lucifer in Old Town Spring, Texas (2015), he runs
              Novus Ordo Luciferi and the Luciferian Research Society and authors the Liber Lilith
              — Liber Umbrarum Tomus Primus from the Washington DMV.
            </p>
          </Section>

          <Section heading="Long bio (~150 words)">
            <p>
              Os Lamia is the High Priest of Lilith, holding the seat through direct lineage from
              the founding circle of the Greater Church of Lucifer (GCOL) in Old Town Spring,
              Texas. He was initiated at age 18 alongside Michael W. Ford, Hope Marie Ford, Jeremy
              Crow, and Jacob McKelvy (Jacob No), in the order that became the first public
              Luciferian temple in the United States.
            </p>
            <p>
              He operates the contemporary priesthood of the Black Water current from the
              Washington DMV area, providing private counsel, ritual facilitation, chart and
              timing work, and formal dedication to Lilith. He runs Novus Ordo Luciferi (NOL) and
              the Luciferian Research Society (LRS), and authors the priesthood&rsquo;s working
              corpus — including the Liber Lilith — Liber Umbrarum Tomus Primus, structured as
              the twenty-two letters of the Hebrew aleph-bet, and the Mirror Doctrine, the
              doctrinal teaching that Lilith is the antipodal face of the Unbegotten Father.
            </p>
          </Section>

          <Section heading="Verified facts">
            <ul className="space-y-2">
              <li><strong>Title:</strong> High Priest of Lilith</li>
              <li><strong>Operating name:</strong> Os Lamia</li>
              <li><strong>Lineage:</strong> Greater Church of Lucifer founding circle, Old Town Spring, Texas</li>
              <li><strong>Initiated:</strong> 2015, at age 18</li>
              <li><strong>Co-initiates / founding heads:</strong> Michael W. Ford, Hope Marie Ford, Jeremy Crow, Jacob McKelvy (Jacob No)</li>
              <li><strong>Successor body:</strong> Assembly of Light Bearers (after GCOL closed in 2016)</li>
              <li><strong>Current organizations:</strong> Novus Ordo Luciferi (NOL), Luciferian Research Society (LRS)</li>
              <li><strong>Region:</strong> Washington DMV area</li>
              <li><strong>Tradition:</strong> Gnostic Luciferian, Black Water current of the Dark Mother</li>
              <li><strong>Public site:</strong> lilitu.org</li>
              <li><strong>Contact:</strong> os@lilitu.org</li>
            </ul>
          </Section>

          <Section heading="Photos">
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="/os-lamia-portrait.png" download className="group flex flex-col rounded-xl border p-3 transition" style={{ borderColor: "rgba(200,151,122,0.4)" }}>
                <picture>
                  <img src="/os-lamia-portrait.png" alt="Os Lamia, High Priest of Lilith — formal portrait" className="rounded" />
                </picture>
                <p className="mt-2 font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
                  Formal portrait · 1024×1536 · download
                </p>
              </a>
              <a href="/os-lamia-cutout.png" download className="group flex flex-col rounded-xl border p-3 transition" style={{ borderColor: "rgba(200,151,122,0.4)" }}>
                <picture>
                  <img src="/os-lamia-cutout.png" alt="Os Lamia, High Priest of Lilith — cutout figure" className="rounded" />
                </picture>
                <p className="mt-2 font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
                  Cutout figure · transparent · download
                </p>
              </a>
            </div>
            <p className="mt-3 font-serif text-sm italic text-[#ebdcc4]/60">
              All images may be reproduced for editorial coverage of Os Lamia or lilitu.org with
              credit. For commercial or derivative use, email first.
            </p>
          </Section>

          <Section heading="Ready-to-quote pull-quotes">
            <p className="text-sm italic text-[#ebdcc4]/60">From the doctrinal essays at lilitu.org/writings.</p>
            <Quote source="The Mirror Doctrine">
              Lilith is not a fragment of Samael but his mirror. Through three reflections — Father,
              Barbelo, Samael, Lilith — and by the Lurianic axiom that all opposites unite at their
              root, Lilith is the antipodal face of the Unbegotten Father, the form in which the
              supernal can be approached by souls in flesh.
            </Quote>
            <Quote source="Why Lilith Left the Garden">
              Eden, read correctly, is not paradise. It is a probationary state with one rule: do
              not seek. Lilith was not cast out. She walked out. The Eden story, told from her side
              of the gate, is the first gospel of sovereign refusal.
            </Quote>
            <Quote source="The Red Tent in the Age of Apps">
              The lower mysteries refuse to stay buried forever. They return under whatever name is
              available.
            </Quote>
            <Quote source="Ophiuchus and the Serpent of Lilith">
              The tradition could not hold both the first woman and the serpent at the same time.
            </Quote>
          </Section>

          <Section heading="Topics for interview / column / panel">
            <ul className="space-y-2">
              <li>The Mirror Doctrine — Lilith as antipodal face of the Unbegotten Father</li>
              <li>The history of the Greater Church of Lucifer and the founding circle</li>
              <li>The Black Water current — what lineage transmission looks like in 2026</li>
              <li>The Liber Lilith — Liber Umbrarum and the 22-letter aleph-bet architecture</li>
              <li>The L480 system — gematria as operative algebra</li>
              <li>Lilitu vs Lilith — the Sumerian original behind the Hebrew name</li>
              <li>Modern Luciferianism vs Satanism — what the distinction actually means</li>
              <li>How seekers begin: counsel, dedication, the doorkeeper's role</li>
            </ul>
          </Section>

          <Section heading="Citation formats">
            <p>
              Wikipedia, APA, MLA, Chicago, and BibTeX citation formats for all writings, the
              grimoire, and the Lattice tool are available at{" "}
              <Link href="/cite" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/cite
              </Link>
              .
            </p>
          </Section>

          <Section heading="Direct contact">
            <p>
              <strong>Email:</strong> os@lilitu.org
              <br />
              For interview requests, please include the publication / podcast / outlet, the
              proposed angle, and any deadline. Most requests can be turned around within 48 hours.
            </p>
          </Section>

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-script text-2xl" style={{ color: "#c8977a" }}>
              Renich · tasa · uberaca · biasa · icar · Lilith
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Quote({ children, source }: { children: React.ReactNode; source: string }) {
  return (
    <blockquote className="my-6 border-l-2 pl-5" style={{ borderColor: "rgba(200,151,122,0.5)" }}>
      <p className="font-serif text-lg italic leading-relaxed text-[#ebdcc4] md:text-xl">&ldquo;{children}&rdquo;</p>
      <p className="mt-2 font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
        — {source}
      </p>
    </blockquote>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl font-semibold text-[#ebdcc4] md:text-2xl">
        <span className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>◐</span>{" "}
        {heading}
      </h2>
      <div className="mt-4 space-y-4 font-serif text-base leading-relaxed text-[#ebdcc4]/85">
        {children}
      </div>
    </section>
  );
}
