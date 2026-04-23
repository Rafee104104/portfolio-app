import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Fira_Code, Outfit } from "next/font/google";
import "./globals.css";

config.autoAddCss = false;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasnim Munawar Rafee | Full Stack Portfolio",
  description: "Animated full stack portfolio built with Next.js, Tailwind CSS, HTML5, and Font Awesome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
