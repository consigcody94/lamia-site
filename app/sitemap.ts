import type { MetadataRoute } from "next";
import { WRITINGS } from "@/lib/data";
import { LETTER_TEACHINGS } from "@/lib/letter-content";

const BASE = "https://lilitu.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/lilith`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/lilitu`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/liber-lilith`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/lattice`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/lineage`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/letters`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/black-moon-lilith`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/lilith-vs-lilitu`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lilith-and-samael`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lilith-vs-eve`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/cite`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/press`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const writingRoutes: MetadataRoute.Sitemap = WRITINGS.map((w) => ({
    url: `${BASE}/writings/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const letterRoutes: MetadataRoute.Sitemap = LETTER_TEACHINGS.map((l) => ({
    url: `${BASE}/letters/${l.translit}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...writingRoutes, ...letterRoutes];
}
