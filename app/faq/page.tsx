import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Plain answers to the questions seekers actually ask. Who Os Lamia is, what the Lilith priesthood does, what dedication involves, what counsel costs, what happens at a ritual, and the difference between this current and adjacent traditions.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/faq`,
    title: "FAQ — Lilitu · Os Lamia",
    description: "Plain answers about the priesthood, the practice, and how to engage.",
  },
};

interface FAQGroup {
  heading: string;
  items: { q: string; a: string }[];
}

const FAQ_GROUPS: FAQGroup[] = [
  {
    heading: "About the priesthood",
    items: [
      {
        q: "Who is Os Lamia?",
        a: "Os Lamia is the High Priest of Lilith. He was initiated in the founding circle of the Greater Church of Lucifer (GCOL) in Old Town Spring, Texas, at age 18, alongside Michael W. Ford, Hope Marie Ford, Jeremy Crow, and Jacob McKelvy (Jacob No). He runs the priesthood from the Washington DMV area in the Black Water current of the Dark Mother. He authors Liber Lilith — Liber Umbrarum Tomus Primus.",
      },
      {
        q: "Is the High Priest of Lilith a real title?",
        a: "It is a held seat, not a denominational title. Os Lamia holds it through GCOL initiation lineage and ongoing operational work — running NOL (Novus Ordo Luciferi) and LRS (Luciferian Research Society), authoring Liber Lilith, teaching, and providing counsel. There is no central body in the Luciferian or Lilith traditions that confers the title; the seat is recognized by lineage and by work.",
      },
      {
        q: "What is the Greater Church of Lucifer?",
        a: "GCOL was the first public Luciferian temple in the United States, opened October 30, 2015 in Old Town Spring (a suburb of Houston, Texas), founded by Michael W. Ford. The temple operated until 2016, when it was forced to close. The order continued under the new name Assembly of Light Bearers. Os Lamia was initiated in the founding circle.",
      },
      {
        q: "What is the Black Water current?",
        a: "Black Water names the lineage current Os Lamia teaches. The image is baptismal: descent into deep black water, where the Night Mother's voice is heard for the first time. Operationally it is the Lilith working tradition transmitted through (1) the 22-letter aleph-bet structure of the Liber Umbrarum, (2) the L480 gematria of the Plenum, and (3) the red current of threshold work.",
      },
    ],
  },
  {
    heading: "About working with Os Lamia",
    items: [
      {
        q: "What kinds of services does Os Lamia offer?",
        a: "Four formal offerings: (1) Private Counsel — 60 or 90 minutes, video or in-person DMV. (2) Ritual Facilitation — design and holding of rites of passage, custom-built. (3) Chart and Timing Work — sidereal 13-sign birth chart with Lilith emphasis, or planetary hour election. (4) Formal Dedication to Lilith — multi-week initiatory process culminating in private consecration; by invitation only after initial counsel.",
      },
      {
        q: "How do I begin?",
        a: "Email os@lilitu.org with a brief note about why you are reaching out. Private Counsel is the door for most seekers — it determines fit, scope, and direction. Dedication is never the first step. The Threshold section of the homepage is where formal inquiry begins.",
      },
      {
        q: "Do I have to be in the DMV area?",
        a: "No. Counsel and chart work are available worldwide via video. Ritual facilitation strongly prefers in-person DMV; some rites can be held remotely with the right preparation. Dedication is case-by-case.",
      },
      {
        q: "Is there a cost?",
        a: "Yes. Counsel is paid; rates are quoted at the inquiry stage based on the format (60 or 90 minutes) and what the seeker is bringing. Dedication has no fixed price and is not transactional in the same way; it is discussed once invitation is extended.",
      },
      {
        q: "Will what I share stay private?",
        a: "Absolutely. Private counsel is held under a strict confidentiality posture. Ritual work is private by default. Names, situations, and disclosures are not shared with anyone, including other members of the priesthood, unless the seeker explicitly authorizes it.",
      },
    ],
  },
  {
    heading: "About the tradition",
    items: [
      {
        q: "Is this Satanism?",
        a: "No. The Lilith priesthood is in the Gnostic Luciferian current — closer to the Sethian Gnostic and Kabbalistic traditions than to LaVeyan or Theistic Satanism. The differences are doctrinal: Gnostic Luciferianism is concerned with the Unbegotten Father, the pleroma, the Sitra Achra as supernal counterpart, and the path of return through the dark mirror. Read the Mirror Doctrine for the full theology.",
      },
      {
        q: "Is this dangerous?",
        a: "Initiatory work moves things. Done with structure, lineage, and a held container, it produces what it is supposed to produce — the practitioner sheds what is no longer hers, encounters what she has not yet encountered, and returns. Done without structure, it can produce instability. The role of the priest is to hold the container so the descent is possible without the practitioner being lost in it.",
      },
      {
        q: "What books should I read first?",
        a: "Start with Wisdom of Eosphoros by Michael W. Ford for the philosophy. Then Bible of the Adversary for the system. Then Lilith: Dark Feminine Archetype edited by Asenath Mason for multi-voiced practitioner perspectives. The full reading map with annotations is at lilitu.org/lineage.",
      },
      {
        q: "Can I work with Lilith on my own?",
        a: "Yes. Many practitioners do, and the priesthood does not gatekeep contact. The argument for working with a priest is not that contact requires mediation — it does not. The argument is that the path goes faster, deeper, and safer with a held container than without one. Solo work is honorable; it is also slower and lonelier.",
      },
      {
        q: "What is the Mirror Doctrine?",
        a: "It is the doctrinal teaching held by Os Lamia: Lilith is not a fragment of Samael but his mirror. Through three reflections (Father → Barbelo → Samael → Lilith), and by the Lurianic axiom that all opposites unite at their root, Lilith is the antipodal face of the Unbegotten Father — the form in which the supernal can be approached by souls in flesh. The full essay is at lilitu.org/writings/the-mirror-doctrine.",
      },
    ],
  },
  {
    heading: "About the site",
    items: [
      {
        q: "What is the Lattice?",
        a: "The Lattice is the gematria engine of the priesthood, free to use at lilitu.org/lattice. It computes Hebrew (standard, sofit, ordinal), Greek isopsephy, and English Qaballa values; reverse-looks-up numbers against a curated corpus of names; shows prime factorization and the Weavings of the L480 Plenum; and lets you browse the 22 letter stations of the aleph-bet. It is built for working priests and serious students; it is also useful for the merely curious.",
      },
      {
        q: "What is the Liber Lilith on this site?",
        a: "Liber Lilith — Liber Umbrarum Tomus Primus is Os Lamia's grimoire, structured as the Hebrew aleph-bet (22 chapters, one per letter). It is distinct from Donald Tyson's 1995 Liber Lilith, which is a Gnostic mythography rather than a working grimoire. The Liber Umbrarum is what the priesthood reads from.",
      },
      {
        q: "How is lilitu.org related to NOL and LRS?",
        a: "Os Lamia runs Novus Ordo Luciferi (NOL) and Luciferian Research Society (LRS) as separate but allied operations. NOL focuses on order-work and the planetary hours tooling; LRS focuses on textual research. lilitu.org is his personal seat of the priesthood. Links to all three are in the footer.",
      },
    ],
  },
];

const FLAT_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

export default function FaqPage() {
  const faqs = faqSchema(FLAT_FAQS, `${SITE_URL}/faq`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ]);
  return (
    <>
      <JsonLd data={[faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ The Threshold ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                Frequently Asked Questions
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic text-[#ebdcc4]/65 md:text-lg">
              Plain answers to the questions seekers actually ask, before they ask.
            </p>
          </header>

          <div className="mt-14 space-y-14">
            {FAQ_GROUPS.map((g) => (
              <section key={g.heading}>
                <h2 className="font-caps text-xs uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
                  ◐ {g.heading} ◐
                </h2>
                <div className="mt-6 space-y-7">
                  {g.items.map((it, i) => (
                    <div key={i}>
                      <h3 className="font-display text-xl font-semibold text-[#ebdcc4]">{it.q}</h3>
                      <p className="mt-2 font-serif text-base leading-relaxed text-[#ebdcc4]/85">{it.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t pt-10 text-center" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ☾ Still have a question? ☾
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                Seek Counsel
              </Link>
              <Link
                href="/lilitu"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                What is Lilitu? →
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
