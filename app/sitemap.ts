import type { MetadataRoute } from "next";

const canonicalOrigin = "https://www.rafeeportfolio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalOrigin,
      lastModified: new Date("2026-07-14"),
      changeFrequency: "monthly",
      priority: 1, 
    },
  ];
}
