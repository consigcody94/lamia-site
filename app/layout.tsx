import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph, profilePageSchema, allServicesSchema } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-caps",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lilitu.org"),
  title: {
    default: "Lilitu · Os Lamia · High Priest of Lilith · Washington DMV",
    template: "%s · Lilitu · Os Lamia",
  },
  description:
    "Lilitu — the Sumerian name behind Lilith, the living current of the Dark Mother. Teachings, the Liber Lilith grimoire, the Lattice gematria engine, and the lineage held by Os Lamia, High Priest of Lilith, initiated in the founding circle of the Greater Church of Lucifer. Washington DMV area.",
  keywords: [
    "Lilitu",
    "Lilith",
    "High Priest of Lilith",
    "Os Lamia",
    "Liber Lilith",
    "Liber Umbrarum",
    "Black Water current",
    "Luciferian",
    "Qabalah",
    "Qliphoth",
    "Sitra Achra",
    "Mirror Doctrine",
    "Greater Church of Lucifer",
    "Assembly of Light Bearers",
    "Dark Mother",
    "Sumerian Lilītu",
    "Ardat-Lilī",
    "Hebrew aleph-bet",
    "gematria",
    "L480",
    "Plenum",
  ],
  authors: [{ name: "Os Lamia", url: "https://lilitu.org" }],
  creator: "Os Lamia",
  publisher: "Os Lamia · Lilitu",
  category: "Religion & Spirituality",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Lilitu · Os Lamia · Writings RSS" }],
    },
  },
  openGraph: {
    type: "website",
    url: "https://lilitu.org",
    siteName: "Lilitu · Os Lamia · High Priest of Lilith",
    title: "Lilitu · Os Lamia · High Priest of Lilith",
    description:
      "Lilitu — the living current of the Dark Mother. Teachings, the Liber Lilith grimoire, the Lattice gematria engine, and the lineage. Held by Os Lamia, initiated in the founding circle of the Greater Church of Lucifer.",
    locale: "en_US",
    images: [
      {
        url: "/os-lamia-portrait.png",
        width: 1024,
        height: 1536,
        alt: "Os Lamia, High Priest of Lilith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lilitu · Os Lamia · High Priest of Lilith",
    description: "The living current of the Dark Mother. Teachings, grimoire, gematria, lineage.",
    images: ["/os-lamia-portrait.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  // Verification tokens — claim each property and paste the verification string
  // here, then deploy. Comments mark which value goes where.
  verification: {
    // Google Search Console: paste content from <meta name="google-site-verification" content="...">
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // Bing Webmaster Tools: paste content from <meta name="msvalidate.01" content="...">
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0d0709] text-[#ebdcc4]">
        <JsonLd data={[siteGraph(), profilePageSchema(), allServicesSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
