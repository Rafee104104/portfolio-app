"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCode,
  faDownload,
  faEnvelope,
  faLocationDot,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { heroStats, personalData } from "@/lib/portfolio-data";
import { useTypewriter } from "@/hooks/use-typewriter";

const socialLinks = [
  { label: "GitHub", href: personalData.githubUrl, icon: faGithub },
  { label: "LinkedIn", href: personalData.linkedinUrl, icon: faLinkedin },
  { label: "YouTube", href: personalData.youtubeUrl, icon: faYoutube },
  { label: "Email", href: `mailto:${personalData.email}`, icon: faEnvelope },
];

const stackPreview = ["Next.js", "Tailwind", "Node.js", "Express", "React", "MongoDB"];

export function HeroSection() {
  const { displayText, isTyping } = useTypewriter(personalData.roles);

  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-3xl animate-hero-copy">
          <p className="section-eyebrow inline-flex items-center gap-2">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="h-4 w-4" />
            Portfolio built with Next.js, Tailwind, and motion
          </p>

          <h1 className="mt-5 text-4xl font-black leading-[0.98] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            {personalData.name}
          </h1>

          <p className="mt-6 min-h-12 max-w-2xl text-xl font-bold text-[var(--accent)] sm:text-2xl">
            <span className={isTyping ? "typewriter-cursor" : ""}>{displayText}</span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I build responsive web experiences, backend-ready workflows, and practical software systems with a focus
            on clean implementation and fast iteration.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </a>
            <a href={personalData.githubUrl} target="_blank" rel="noopener noreferrer" className="secondary-button">
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="social-button"
                aria-label={link.label}
                title={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="stat-tile" style={{ "--tile-delay": `${index * 90}ms` } as CSSProperties}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 animate-hero-visual">
          <div className="hero-portrait-shell">
            <Image
              src={personalData.imagePath}
              alt={personalData.name}
              width={720}
              height={720}
              priority
              className="hero-portrait"
            />
            <div className="hero-badge top-5 left-5">
              <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
              {personalData.location}
            </div>
            <div className="hero-badge bottom-5 right-5">
              <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
              MERN Ready
            </div>
          </div>

          <div className="code-panel mt-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
                <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
                <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">stack.ts</span>
            </div>
            <pre className="font-mono text-sm leading-7 text-[var(--text-secondary)]">
              <code>{`const portfolio = {
  frontend: "Next.js + Tailwind",
  backend: "Node.js + Express",
  database: "MongoDB-ready",
  motion: "scroll reveals"
};`}</code>
            </pre>
            <div className="mt-4 flex flex-wrap gap-2">
              {stackPreview.map((item) => (
                <span key={item} className="mini-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <a href={`mailto:${personalData.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">
            <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
            Contact for CV
          </a>
        </div>
      </div>
    </section>
  );
}
