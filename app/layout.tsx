import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script, Cinzel } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Os Lamia · High Priest of Lilith · Washington DMV",
    template: "%s · Os Lamia · lilitu.org",
  },
  description:
    "Teachings of the Dark Mother. Private counsel, ritual facilitation, and initiatory work in the current of Lilith: the First Sovereign, the First Rebellion, the Night Mother. Washington DMV area.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://lilitu.org",
    siteName: "Os Lamia · High Priest of Lilith",
    title: "Os Lamia · High Priest of Lilith",
    description:
      "Teachings of the Dark Mother. Servant of the Night Mother, keeper of the Red Current. Washington DMV.",
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
    title: "Os Lamia · High Priest of Lilith",
    description: "Teachings of the Dark Mother. Washington DMV.",
    images: ["/os-lamia-portrait.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0d0709] text-[#ebdcc4]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
