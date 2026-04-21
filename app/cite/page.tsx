import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cite This Site — Citation Formats for Os Lamia and lilitu.org",
  description:
    "Ready-to-paste citation formats for Os Lamia's work and lilitu.org: Wikipedia (cite web / cite book), APA, MLA, Chicago, Harvard, BibTeX. For Wikipedia editors, journalists, academics, and students.",
  alternates: { canonical: "/cite" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/cite`,
    title: "Cite This Site — lilitu.org",
    description: "Ready-to-paste Wikipedia, APA, MLA, Chicago, BibTeX citations.",
  },
};

interface Source {
  id: string;
  title: string;
  author: string;
  type: "essay" | "book" | "tool" | "page";
  url: string;
  date: string;
  publisher: string;
  shortTitle?: string;
}

const SOURCES: Source[] = [
  {
    id: "mirror-doctrine",
    title: "The Mirror Doctrine: On Lilith as the Antipodal Face of the Unbegotten Father",
    shortTitle: "The Mirror Doctrine",
    author: "Os Lamia",
    type: "essay",
    url: "https://lilitu.org/writings/the-mirror-doctrine",
    date: "2026-04-20",
    publisher: "Lilitu",
  },
  {
    id: "liber-lilith",
    title: "Liber Lilith — Liber Umbrarum Tomus Primus",
    shortTitle: "Liber Lilith",
    author: "Os Lamia",
    type: "book",
    url: "https://lilitu.org/liber-lilith",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "lilitu-page",
    title: "Lilitu — Meaning, History, and the Living Priesthood",
    shortTitle: "Lilitu (reference)",
    author: "Os Lamia",
    type: "page",
    url: "https://lilitu.org/lilitu",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "lilith-page",
    title: "Lilith — The Complete Guide from the Seat of the Priesthood",
    shortTitle: "Lilith (reference)",
    author: "Os Lamia",
    type: "page",
    url: "https://lilitu.org/lilith",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "lattice",
    title: "The Lattice — Gematria of the Plenum",
    shortTitle: "The Lattice",
    author: "Os Lamia",
    type: "tool",
    url: "https://lilitu.org/lattice",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "why-lilith-left",
    title: "Why Lilith Left the Garden",
    author: "Os Lamia",
    type: "essay",
    url: "https://lilitu.org/writings/why-lilith-left-the-garden",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "red-tent",
    title: "The Red Tent in the Age of Apps",
    author: "Os Lamia",
    type: "essay",
    url: "https://lilitu.org/writings/red-tent-in-the-age-of-apps",
    date: "2026",
    publisher: "Lilitu",
  },
  {
    id: "ophiuchus",
    title: "Ophiuchus and the Serpent of Lilith",
    author: "Os Lamia",
    type: "essay",
    url: "https://lilitu.org/writings/ophiuchus-and-the-serpent-of-lilith",
    date: "2026",
    publisher: "Lilitu",
  },
];

const ACCESS_DATE = "2026-04-21";

function wikipediaTemplate(s: Source): string {
  const tag = s.type === "book" ? "cite book" : "cite web";
  if (s.type === "book") {
    return `{{${tag}
 |last=Lamia |first=Os
 |title=${s.title}
 |publisher=${s.publisher}
 |year=${s.date.slice(0, 4)}
 |location=Washington, D.C.
 |url=${s.url}
}}`;
  }
  return `{{${tag}
 |last=Lamia |first=Os
 |title=${s.title}
 |website=lilitu.org
 |publisher=${s.publisher}
 |date=${s.date}
 |url=${s.url}
 |access-date=${ACCESS_DATE}
}}`;
}

function apa7(s: Source): string {
  if (s.type === "book") {
    return `Lamia, O. (${s.date.slice(0, 4)}). *${s.title}*. ${s.publisher}. ${s.url}`;
  }
  return `Lamia, O. (${s.date.slice(0, 4)}). *${s.title}*. ${s.publisher}. ${s.url}`;
}

function mla9(s: Source): string {
  if (s.type === "book") {
    return `Lamia, Os. *${s.title}*. ${s.publisher}, ${s.date.slice(0, 4)}, ${s.url.replace("https://", "")}.`;
  }
  return `Lamia, Os. "${s.title}." *${s.publisher}*, ${s.date}, ${s.url.replace("https://", "")}.`;
}

function chicago17(s: Source): string {
  if (s.type === "book") {
    return `Os Lamia, *${s.title}* (Washington, D.C.: ${s.publisher}, ${s.date.slice(0, 4)}), ${s.url}.`;
  }
  return `Os Lamia, "${s.title}," ${s.publisher}, ${s.date}, ${s.url}.`;
}

function bibtex(s: Source): string {
  const type = s.type === "book" ? "book" : "online";
  return `@${type}{lamia${s.id.replace(/-/g, "")}${s.date.slice(0, 4)},
  author    = {Os Lamia},
  title     = {${s.title}},
  year      = {${s.date.slice(0, 4)}},
  publisher = {${s.publisher}},
  url       = {${s.url}},
  urldate   = {${ACCESS_DATE}}${s.type === "book" ? "" : ","}
}`;
}

export default function CitePage() {
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Cite", url: `${SITE_URL}/cite` },
  ]);
  return (
    <>
      <JsonLd data={[crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ Cite ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}
              >
                Cite This Work
              </span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl font-serif text-base italic text-[#ebdcc4]/65 md:text-lg">
              Ready-to-paste citation formats for the writings, the grimoire, the Lattice tool, and
              the site itself. For Wikipedia editors, journalists, academics, students, and anyone
              else carrying the work into other contexts.
            </p>
          </header>

          <section className="mt-12 rounded-2xl border p-6 md:p-7" style={{ borderColor: "rgba(200,151,122,0.3)", background: "rgba(74,16,32,0.12)" }}>
            <h2 className="font-caps text-xs uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ◐ A Note for Wikipedia Editors ◐
            </h2>
            <div className="mt-4 space-y-3 font-serif text-sm leading-relaxed text-[#ebdcc4]/80 md:text-base">
              <p>
                Wikipedia&rsquo;s sourcing policy requires <strong>secondary sources independent of
                the subject</strong>. lilitu.org is self-published; it therefore cannot be cited on
                Wikipedia as a source <em>about Lilith generally</em>. It can, however, be cited as
                a primary source within sections specifically describing contemporary Luciferian
                movements, modern Lilith priesthoods, or the work of Os Lamia, where primary
                sources are appropriate alongside independent coverage.
              </p>
              <p>
                The cleanest approach: locate at least one independent reliable source (academic
                article, journalistic profile, podcast write-up with editorial oversight) covering
                Os Lamia or this priesthood, and cite that source for the existence of the
                tradition; then cite lilitu.org alongside for the doctrinal specifics. The
                templates below are formatted to drop into either context cleanly.
              </p>
            </div>
          </section>

          <div className="mt-14 space-y-12">
            {SOURCES.map((s) => (
              <SourceBlock key={s.id} source={s} />
            ))}
          </div>

          <section className="mt-20 border-t pt-12" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
            <h2 className="font-caps text-xs uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ◐ Citing the priesthood as an entity ◐
            </h2>
            <p className="mt-4 font-serif text-base leading-relaxed text-[#ebdcc4]/80">
              When the citation is to the lineage or the order itself rather than to a specific
              text:
            </p>
            <pre className="mt-5 overflow-x-auto rounded-lg border border-red-950/40 bg-black/60 p-5 font-mono text-xs text-[#ebdcc4]/90">
{`{{cite web
 |author=Lilitu (priesthood)
 |title=About — High Priest of Lilith
 |website=lilitu.org
 |url=https://lilitu.org/
 |access-date=${ACCESS_DATE}
}}`}
            </pre>
          </section>

          <div className="mt-16 text-center">
            <p className="font-caps text-[10px] uppercase tracking-[0.45em]" style={{ color: "#c8977a" }}>
              ☾ Where to next ☾
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/lilith"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                The Lilith reference →
              </Link>
              <Link
                href="/writings/the-mirror-doctrine"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                The Mirror Doctrine →
              </Link>
              <Link
                href="/lineage"
                className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition"
                style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}
              >
                The Lineage →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SourceBlock({ source }: { source: Source }) {
  return (
    <article className="rounded-2xl border p-6 md:p-7" style={{ borderColor: "rgba(200,151,122,0.35)", background: "rgba(13,7,9,0.5)" }}>
      <header className="border-b pb-4" style={{ borderColor: "rgba(200,151,122,0.2)" }}>
        <p className="font-caps text-[10px] uppercase tracking-[0.4em]" style={{ color: "#c8977a" }}>
          {source.type === "book" ? "Book" : source.type === "tool" ? "Software / Tool" : source.type === "essay" ? "Essay" : "Reference Page"}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-[#ebdcc4]">{source.title}</h3>
        <p className="mt-1 font-serif text-sm italic text-[#ebdcc4]/60">
          Os Lamia · {source.publisher} · {source.date}
        </p>
      </header>

      <CitationFormat label="Wikipedia (cite web / cite book)" code={wikipediaTemplate(source)} />
      <CitationFormat label="APA 7th" code={apa7(source)} />
      <CitationFormat label="MLA 9th" code={mla9(source)} />
      <CitationFormat label="Chicago 17th (notes)" code={chicago17(source)} />
      <CitationFormat label="BibTeX" code={bibtex(source)} />
    </article>
  );
}

function CitationFormat({ label, code }: { label: string; code: string }) {
  return (
    <div className="mt-5">
      <p className="font-caps text-[10px] uppercase tracking-[0.35em]" style={{ color: "#c8977a" }}>
        {label}
      </p>
      <pre className="mt-2 overflow-x-auto rounded-lg border border-red-950/40 bg-black/60 p-4 font-mono text-xs leading-relaxed text-[#ebdcc4]/90 whitespace-pre-wrap">
{code}
      </pre>
    </div>
  );
}
