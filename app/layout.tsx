import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Os Lamia · High Priest of Lilith · Washington DMV",
  description:
    "Teachings of the Dark Mother. Private counsel, ritual facilitation, and initiatory work in the current of Lilith — the first sovereign, the First Rebellion, the Night Mother. Washington DMV area.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${garamond.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0606] text-[#f5ecd7]">{children}</body>
    </html>
  );
}
