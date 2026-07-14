import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Mono,
  Libre_Baskerville,
  Source_Sans_3,
} from "next/font/google";

import { Providers } from "@/components/providers";

import "./globals.css";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.rafeeportfolio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tasnim Munawar Rafee | Full-Stack Software Engineer",
    template: "%s | Tasnim Munawar Rafee",
  },
  description:
    "Portfolio of Tasnim Munawar Rafee, a Dhaka-based full-stack software engineer building web, desktop, and Oracle-backed business applications.",
  keywords: [
    "Tasnim Munawar Rafee",
    "Full-Stack Software Engineer",
    "Next.js Developer Bangladesh",
    ".NET Core Developer",
    "Oracle PL/SQL Developer",
    "React Developer Dhaka",
  ],
  authors: [{ name: "Tasnim Munawar Rafee", url: siteUrl }],
  creator: "Tasnim Munawar Rafee",
  publisher: "Tasnim Munawar Rafee",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tasnim Munawar Rafee | Full-Stack Software Engineer",
    description:
      "Practical engineering across modern web products, .NET/C# systems, Oracle applications, and device integrations.",
    siteName: "Tasnim Munawar Rafee",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasnim Munawar Rafee | Full-Stack Software Engineer",
    description:
      "Web, desktop, and database-driven software engineering from Dhaka, Bangladesh.",
    images: ["/opengraph-image"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4efe5" },
    { media: "(prefers-color-scheme: dark)", color: "#151b24" },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Tasnim Munawar Rafee",
      jobTitle: "Full-Stack Software Engineer",
      url: siteUrl,
      image: `${siteUrl}/Tasnim-Munawar-Rafee.jpg`,
      email: "mailto:tasnimmunawarrafee@gmail.com",
      telephone: "+8801744127891",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: [
        "https://github.com/Rafee104104",
        "https://www.linkedin.com/in/tasnim-munawar-rafee/",
        "https://www.youtube.com/@TasnimMunawarRafee",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        ".NET Core",
        "C#",
        "Oracle PL/SQL",
        "Laravel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Tasnim Munawar Rafee",
      description: "Professional software engineering portfolio.",
      inLanguage: "en",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
