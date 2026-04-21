/* ═══════════════════════════════════════════════════════════════════════
   Schema.org JSON-LD builders for lilitu.org
   All entities use stable @id anchors so they form a connected graph
   that Google AI Mode and other LLMs can verify and cite.
   ══════════════════════════════════════════════════════════════════════ */

export const SITE_URL = "https://lilitu.org";

// Stable @id anchors — DO NOT change once published. Search engines and AI
// systems use these as canonical identifiers for the entities.
export const ID = {
  organization: `${SITE_URL}/#organization`,
  person: `${SITE_URL}/#os-lamia`,
  website: `${SITE_URL}/#website`,
  grimoire: `${SITE_URL}/liber-lilith#book`,
  lattice: `${SITE_URL}/lattice#tool`,
  lilituConcept: `${SITE_URL}/lilitu#concept`,
} as const;

/* ───────── Person — Os Lamia ───────── */
export function osLamiaPerson() {
  return {
    "@type": "Person",
    "@id": ID.person,
    name: "Os Lamia",
    alternateName: ["Cody", "High Priest of Lilith"],
    jobTitle: "High Priest of Lilith",
    description:
      "Initiated in the founding circle of the Greater Church of Lucifer in Old Town Spring, Texas. Holds the Black Water current of the Dark Mother. Author of Liber Lilith — Liber Umbrarum Tomus Primus.",
    url: SITE_URL,
    image: `${SITE_URL}/os-lamia-portrait.png`,
    knowsAbout: [
      "Lilith",
      "Lilitu",
      "Luciferianism",
      "Qabalah",
      "Qliphoth",
      "Sitra Achra",
      "Gnosticism",
      "Kabbalah",
      "Sumerian religion",
      "Ceremonial magic",
      "Left-Hand Path",
      "Black Water current",
      "Hebrew aleph-bet",
      "Sidereal astrology",
      "Ophiuchus",
    ],
    affiliation: [
      { "@id": ID.organization },
      {
        "@type": "Organization",
        name: "Greater Church of Lucifer",
        alternateName: "GCOL",
        url: "https://en.wikipedia.org/wiki/Greater_Church_of_Lucifer",
      },
      {
        "@type": "Organization",
        name: "Assembly of Light Bearers",
        url: "https://www.assemblyoflightbearers.org/",
      },
      { "@type": "Organization", name: "Novus Ordo Luciferi", alternateName: "NOL", url: "https://nol-site.vercel.app" },
      { "@type": "Organization", name: "Luciferian Research Society", alternateName: "LRS", url: "https://lrs-site-three.vercel.app" },
    ],
    homeLocation: {
      "@type": "Place",
      name: "Washington · DMV Area",
      address: { "@type": "PostalAddress", addressRegion: "DC", addressCountry: "US" },
    },
    sameAs: [
      "https://discord.gg/GvjsS4C",
      "https://nol-site.vercel.app",
      "https://lrs-site-three.vercel.app",
    ],
  };
}

/* ───────── Organization — the priesthood entity ───────── */
export function organization() {
  return {
    "@type": "Organization",
    "@id": ID.organization,
    name: "Lilitu",
    alternateName: ["The Priesthood of Lilith", "Black Water Current", "Os Lamia"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/os-lamia-portrait.png`,
    description:
      "The teaching, counsel, and ritual work of Os Lamia, High Priest of Lilith. Operating in the Black Water current of the Dark Mother from the Washington DMV area.",
    founder: { "@id": ID.person },
    knowsAbout: [
      "Lilith",
      "Lilitu",
      "Sumerian Lilītu",
      "Ardat-Lilī",
      "Luciferian Gnosticism",
      "Qabalah",
      "Qliphoth",
      "Mirror Doctrine",
      "Liber Lilith",
    ],
    sameAs: ["https://discord.gg/GvjsS4C"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "os@lilitu.org",
      contactType: "Counsel",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };
}

/* ───────── WebSite with SearchAction ───────── */
export function website() {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL,
    name: "Lilitu · Os Lamia · High Priest of Lilith",
    description:
      "Teachings of Lilith and Lilitu from the seat of the priesthood. Doctrinal essays, the Liber Lilith grimoire, the Lattice gematria engine, and the lineage corpus.",
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/lattice?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/* ───────── Build a complete @graph for the homepage ───────── */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organization(), osLamiaPerson(), website()],
  };
}

/* ───────── Article (writing) ───────── */
export interface ArticleSchemaInput {
  slug: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  wordCount?: number;
  keywords?: string[];
  articleSection?: string;
}

export function articleSchema(a: ArticleSchemaInput) {
  const url = `${SITE_URL}/writings/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/os-lamia-portrait.png`,
    author: { "@id": ID.person },
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    datePublished: a.datePublished ?? "2026-01-01",
    dateModified: a.dateModified ?? new Date().toISOString().slice(0, 10),
    ...(a.wordCount && { wordCount: a.wordCount }),
    ...(a.keywords && { keywords: a.keywords.join(", ") }),
    ...(a.articleSection && { articleSection: a.articleSection }),
  };
}

/* ───────── Book ───────── */
export function bookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": ID.grimoire,
    name: "Liber Lilith — Liber Umbrarum Tomus Primus",
    alternateName: ["Liber Lilith", "Liber Umbrarum"],
    description:
      "The grimoire of the Lilith priesthood, structured as the Hebrew aleph-bet — twenty-two chapters, one for each letter — compiled and bound by Os Lamia, High Priest of Lilith.",
    author: { "@id": ID.person },
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    url: `${SITE_URL}/liber-lilith`,
    image: `${SITE_URL}/os-lamia-portrait.png`,
    bookFormat: "https://schema.org/EBook",
    numberOfPages: 22,
    about: ["Lilith", "Lilitu", "Qabalah", "Hebrew aleph-bet", "Luciferian magic"],
  };
}

/* ───────── WebApplication — the Lattice tool ───────── */
export function latticeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": ID.lattice,
    name: "The Lattice — Gematria of the Plenum",
    url: `${SITE_URL}/lattice`,
    description:
      "Working tool of the priesthood. Gematria across Hebrew (standard, sofit, ordinal), Greek isopsephy, and English Qaballa. Reverse lookup against the corpus of names. Prime decomposition into the Weavings of the L480 Plenum. Browse the 22 letter stations of the Hebrew aleph-bet.",
    applicationCategory: "ReferenceApplication",
    operatingSystem: "Any (web)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    creator: { "@id": ID.person },
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    featureList: [
      "Hebrew gematria (standard / sofit / ordinal)",
      "Greek isopsephy",
      "English Qaballa (AIQ BKR)",
      "Reverse lookup by numerical value",
      "Prime factorization and Weaving decomposition (L480 system)",
      "22-letter aleph-bet station browser",
      "40 indexed sacred-number landmarks",
    ],
  };
}

/* ───────── CollectionPage — the Lineage ───────── */
export function lineageCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/lineage#collection`,
    name: "The Lineage — Books of the Tradition",
    description:
      "The line Os Lamia holds and the books that ground it. From the founding circle of the Greater Church of Lucifer through the primary Gnostic and Kabbalistic sources to the contemporary Qliphothic system-makers.",
    url: `${SITE_URL}/lineage`,
    author: { "@id": ID.person },
    publisher: { "@id": ID.organization },
    inLanguage: "en",
    isPartOf: { "@id": ID.website },
  };
}

/* ───────── FAQ schema builder ───────── */
export interface FAQItem {
  q: string;
  a: string;
}

export function faqSchema(items: FAQItem[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl && { "@id": `${pageUrl}#faq` }),
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

/* ───────── BreadcrumbList ───────── */
export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/* ───────── DefinedTerm — for Lilitu the concept ───────── */
export function lilituConceptSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": ID.lilituConcept,
    name: "Lilitu",
    alternateName: ["Lilītu", "Ardat-Lilī"],
    description:
      "Lilitu (Akkadian: lilītu) is the Sumerian and Mesopotamian feminine night-spirit class from which the Hebrew Lilith is derived — and, in the contemporary Luciferian-Gnostic tradition held by the priesthood at lilitu.org, the name designates the living current of the Dark Mother in its pre-Kabbalistic form.",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Vocabulary of the Lilith Priesthood",
      url: SITE_URL,
    },
  };
}
