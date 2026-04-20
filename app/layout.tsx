import type { Metadata } from "next";
import { Cormorant_Garamond, Pinyon_Script, Cinzel } from "next/font/google";
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
  title: "Os Lamia · High Priest of Lilith · Washington DMV",
  description:
    "Teachings of the Dark Mother. Private counsel, ritual facilitation, and initiatory work in the current of Lilith: the First Sovereign, the First Rebellion, the Night Mother. Washington DMV area.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0d0709] text-[#ebdcc4]">{children}</body>
    </html>
  );
}
