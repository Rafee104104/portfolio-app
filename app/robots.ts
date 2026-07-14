import type { MetadataRoute } from "next";

const canonicalOrigin = "https://portfolio-app-lac-seven.vercel.app/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${canonicalOrigin}/sitemap.xml`,
    host: canonicalOrigin, 
  };
}
