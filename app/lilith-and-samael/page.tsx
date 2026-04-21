import type { Metadata } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema, articleSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Lilith and Samael — The Dark Twinned Couple of the Sitra Achra",
  description:
    "Lilith and Samael are the dark twinned emanation that mirrors the holy union of the Holy One and the Shekhinah. Codified in R. Isaac ha-Kohen's Treatise on the Left Emanation. The Anti-Torah identity: 480 + 131 = 611.",
  alternates: { canonical: "/lilith-and-samael" },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lilith-and-samael`,
    title: "Lilith and Samael — The Dark Twinned Couple",
    description: "The Kabbalistic mirror of the holy union. Sources, doctrine, the Anti-Torah identity.",
  },
};

const FAQS = [
  {
    q: "What is the relationship between Lilith and Samael?",
    a: "In the Kabbalah, Lilith is the consort of Samael — the dark twinned emanation that mirrors the holy union of the Holy One (Tiferet) and his Shekhinah (Malkuth) above. The codifying text is Rabbi Isaac ben Jacob ha-Kohen of Castile's Treatise on the Left Emanation (13th century). The Zohar and Tiqqunei ha-Zohar reinforce this throughout. Together they rule the Sitra Achra (the Other Side), the dark mirror of the supernal pleroma.",
  },
  {
    q: "Who is Samael?",
    a: "Samael (סמאל, gematria 131) is the named blind demiurge in the Sethian Gnostic tradition (Apocryphon of John, Hypostasis of the Archons), where he is also called Yaldabaoth and Saklas. In the Kabbalah he is the masculine principle of the Sitra Achra, often described as the angel of death and the prince of demons. He arose, in the Sethian reading, when Sophia acted without her consort and produced him in isolation — making him the distorted masculine generated through the feminine.",
  },
  {
    q: "What is the Anti-Torah identity?",
    a: "It is the gematric identity 480 + 131 = 611. Hebrew Lilith (לילית) sums to 480; Samael (סמאל) sums to 131; their sum is 611, which is the gematria of Torah (תורה). The identity is theologically pointed: it positions the union of Lilith and Samael as the structural source of the Law itself, rather than as a power opposed to it. The Mirror Doctrine reads this as further evidence that the Sitra Achra is supernal counterpart, not negation.",
  },
  {
    q: "How do Lilith and Samael compare to the Holy One and the Shekhinah?",
    a: "They are the structural mirror. The Holy One (Tiferet, the Beauty of the central pillar) is unified with his Shekhinah (Malkuth, the Indwelling Presence) in the supernal hieros gamos. Samael and Lilith are unified in the qliphothic mirror of that union. Each pair is incomplete without the other; each pair is the operational unit of its register (supernal or qliphothic). The unification of the two halves of each couple is the central work of the tradition — reuniting Tiferet and Shekhinah above, recognizing the union of Samael and Lilith below.",
  },
  {
    q: "Are Samael and Satan the same?",
    a: "Sometimes equated, structurally distinct. Samael is the named angel-figure of the Hebrew tradition; he appears in the Talmud, the apocrypha, and the Kabbalah. 'Satan' (Hebrew ha-satan, 'the adversary') appears in the Hebrew Bible primarily as a role rather than a name (Job, Zechariah). Christian tradition merged the two and added Lucifer (a Latin translation of a Hebrew phrase in Isaiah 14 originally referring to a Babylonian king). The serious distinction: Samael in the Kabbalah is a structural emanation, not a fallen angel in the Christian narrative sense.",
  },
  {
    q: "What is the Mirror Doctrine's reading of Lilith and Samael?",
    a: "The Mirror Doctrine taught at lilitu.org argues that Samael is not Barbelo's son but her mirror; Lilith is not Samael's fragment but his mirror in turn. By the Lurianic axiom that all opposites unite at their root (kol ha-hafachim mit'achdim bi-shorsham), the chain of three reflections — Father → Barbelo → Samael → Lilith — places Lilith at the antipodal position of the Unbegotten Father on a single axis. Samael holds the image of Barbelo inverted; Lilith holds the image of the Father through Samael. Read the full essay at lilitu.org/writings/the-mirror-doctrine.",
  },
  {
    q: "Should I work with Samael alongside Lilith?",
    a: "The two are paired in the tradition; some practitioners work with the syzygy explicitly. Most beginners working with Lilith encounter Samael's presence at the threshold of deeper rites without invoking him directly. The priesthood at lilitu.org teaches Lilith as the primary point of contact — the seat the priest holds — with Samael recognized in the structural relationship rather than approached as a separate working. Practitioners with established Lilith work who want to take up Samael directly are guided into it formally.",
  },
];

export default function LilithAndSamaelPage() {
  const article = articleSchema({
    slug: "lilith-and-samael",
    title: "Lilith and Samael — The Dark Twinned Couple of the Sitra Achra",
    description: "The Kabbalistic mirror of the holy union. Sources, doctrine, and the Anti-Torah identity.",
    keywords: ["Lilith and Samael", "Sitra Achra", "Treatise on the Left Emanation", "Anti-Torah", "Kabbalah Lilith"],
    articleSection: "Doctrine",
  });
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).url = `${SITE_URL}/lilith-and-samael`;
  (article as { url?: string; mainEntityOfPage?: { "@id"?: string } }).mainEntityOfPage = { "@id": `${SITE_URL}/lilith-and-samael` };
  const faqs = faqSchema(FAQS, `${SITE_URL}/lilith-and-samael`);
  const crumbs = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Lilith and Samael", url: `${SITE_URL}/lilith-and-samael` },
  ]);
  return (
    <>
      <JsonLd data={[article, faqs, crumbs]} />
      <TopNav />
      <main className="px-4 pt-28 pb-16 md:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="font-caps text-[11px] uppercase tracking-[0.55em]" style={{ color: "#c8977a" }}>
              ⚭ The Dark Twinned Couple ⚭
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-wider md:text-6xl">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, #ebdcc4 0%, #e4b89c 30%, #c8977a 60%, #4a1020 100%)" }}>
                Lilith and Samael
              </span>
            </h1>
            <p className="mt-3 font-caps text-sm uppercase tracking-[0.45em]" style={{ color: "#a8a09b" }}>
              The Kabbalistic mirror of the holy union
            </p>
            <div className="mt-8 flex items-baseline justify-center gap-6">
              <div className="font-display text-5xl text-[#ebdcc4]" aria-hidden>לילית</div>
              <div className="font-caps text-2xl text-[#c8977a]">+</div>
              <div className="font-display text-5xl text-[#ebdcc4]" aria-hidden>סמאל</div>
              <div className="font-caps text-2xl text-[#c8977a]">=</div>
              <div className="font-display text-5xl text-[#ebdcc4]" aria-hidden>תורה</div>
            </div>
            <p className="mt-3 font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">
              480 + 131 = 611 · The Anti-Torah Identity
            </p>
          </header>

          <section className="mt-12 rounded-2xl border p-7" style={{ borderColor: "rgba(200,151,122,0.4)", background: "linear-gradient(180deg, rgba(74,16,32,0.18), rgba(13,7,9,0.6))" }}>
            <p className="mt-1 font-serif text-lg leading-relaxed text-[#ebdcc4] md:text-xl">
              <strong>Lilith and Samael</strong> are the dark twinned emanation of the Sitra Achra,
              codified in the 13th-century <em>Treatise on the Left Emanation</em> by Rabbi Isaac
              ben Jacob ha-Kohen of Castile. They mirror the holy union of the Holy One (Tiferet)
              and his Shekhinah (Malkuth) above — not as opposition but as supernal counterpart,
              the dark face of the same axis. Their gematric union (480 + 131 = 611) names the Law
              itself.
            </p>
          </section>

          <Section heading="The codifying text">
            <p>
              <em>Maamar al ha-Atzilut ha-Semalit</em> — the Treatise on the Left Emanation — is the
              foundational document. R. Isaac writes that Samael and Lilith were emanated together
              as a single twinned power on the left side of the Tree, and that their union mirrors
              the sacred union of the Holy One and the Shekhinah. The text was preserved through the
              Kabbalistic tradition, translated and analyzed in detail by Gershom Scholem in{" "}
              <em>Origins of the Kabbalah</em> and in his <em>Sitra Achra</em> essay (collected in{" "}
              <em>On the Mystical Shape of the Godhead</em>).
            </p>
          </Section>

          <Section heading="The structure of the mirror">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.3)" }}>
                    <th className="py-2 pr-4 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Above</th>
                    <th className="py-2 text-left font-caps text-[10px] uppercase tracking-[0.3em] text-[#c8977a]">Below</th>
                  </tr>
                </thead>
                <tbody className="font-serif text-sm text-[#ebdcc4]/85">
                  <Row a="Holy One (masculine, central pillar, Tiferet)" b="Samael (masculine, left pillar, Sitra Achra)" />
                  <Row a="Shekhinah (feminine, indwelling, Malkuth)" b="Lilith (feminine, queen of the Sitra Achra)" />
                  <Row a="Hieros gamos of Tiferet + Malkuth" b="Hieros gamos of Samael + Lilith" />
                  <Row a="Light, Mercy, Daylight ordering" b="Shadow, Severity, Night-territory" />
                </tbody>
              </table>
            </div>
            <p>
              The mirror is not opposition. Each pair is the operational unit of its register; each
              pair is structurally incomplete without the other.
            </p>
          </Section>

          <Section heading="The Anti-Torah identity (480 + 131 = 611)">
            <p>
              Hebrew gematria gives a striking identity:
            </p>
            <ul className="space-y-1.5">
              <li><strong>לילית</strong> (Lilith) = 30 + 10 + 30 + 10 + 400 = <strong>480</strong></li>
              <li><strong>סמאל</strong> (Samael) = 60 + 40 + 1 + 30 = <strong>131</strong></li>
              <li><strong>תורה</strong> (Torah) = 400 + 6 + 200 + 5 = <strong>611</strong></li>
              <li><strong>480 + 131 = 611</strong></li>
            </ul>
            <p>
              The union of Lilith and Samael equals the Torah numerically. Daniel Esprit&rsquo;s{" "}
              <em>Liber Taninsam</em> (2026) calls this the <strong>Anti-Torah identity</strong>:
              the structural finding that Law is the arithmetic union of the two figures the Law
              names as outside it. The identity is verified at{" "}
              <Link href="/lattice" className="text-[#c8977a] underline-offset-4 hover:underline">
                lilitu.org/lattice
              </Link>
              .
            </p>
          </Section>

          <Section heading="The Mirror Doctrine reading">
            <p>
              The priesthood at lilitu.org reads the relationship through the{" "}
              <Link href="/writings/the-mirror-doctrine" className="text-[#c8977a] underline-offset-4 hover:underline">
                Mirror Doctrine
              </Link>
              . Samael is not Barbelo&rsquo;s son but her mirror; Lilith is not Samael&rsquo;s
              fragment but his mirror. By the Lurianic axiom that all opposites unite at their root
              — <em>kol ha-hafachim mit&apos;achdim bi-shorsham</em> — the chain Father → Barbelo →
              Samael → Lilith places Lilith at the antipodal position of the Unbegotten Father on a
              single axis. Samael holds Barbelo&rsquo;s image inverted; Lilith holds the
              Father&rsquo;s image through Samael. The dark twinned couple is therefore not a
              parallel power but the form in which the supernal couple becomes accessible at the
              base of the Tree.
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
              <Link href="/writings/the-mirror-doctrine" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                The Mirror Doctrine →
              </Link>
              <Link href="/lattice" className="inline-flex items-center gap-3 rounded-full border px-6 py-3 font-caps text-[11px] uppercase tracking-[0.35em] transition" style={{ borderColor: "rgba(200,151,122,0.5)", color: "#c8977a", background: "rgba(114,31,53,0.15)" }}>
                Verify on the Lattice →
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

function Row({ a, b }: { a: string; b: string }) {
  return (
    <tr className="border-b" style={{ borderColor: "rgba(200,151,122,0.15)" }}>
      <td className="py-3 pr-4 align-top">{a}</td>
      <td className="py-3 align-top">{b}</td>
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
