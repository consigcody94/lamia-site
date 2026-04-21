import { WRITINGS } from "@/lib/data";

const SITE_URL = "https://lilitu.org";
const SITE_TITLE = "Lilitu · Os Lamia · High Priest of Lilith";
const SITE_DESC =
  "Teachings of the Dark Mother. Doctrinal essays, the Liber Lilith grimoire, the Lattice gematria engine, and the lineage from the seat of the priesthood.";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const buildDate = new Date().toUTCString();

  const items = WRITINGS.map((w) => {
    const url = `${SITE_URL}/writings/${w.slug}`;
    const intro = w.intro;
    return `    <item>
      <title>${escapeXml(w.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(w.excerpt)}</description>
      <content:encoded><![CDATA[<p><em>${escapeXml(w.subtitle)}</em></p><p>${escapeXml(intro)}</p>]]></content:encoded>
      <author>os@lilitu.org (Os Lamia)</author>
      <category>${escapeXml(w.tag)}</category>
      <pubDate>${buildDate}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESC)}</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js · lilitu.org</generator>
    <copyright>© ${new Date().getFullYear()} Os Lamia · Under the Mother's Mark</copyright>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
