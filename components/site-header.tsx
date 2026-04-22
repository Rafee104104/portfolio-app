"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { navLinks, personalData } from "@/lib/portfolio-data";
import { setStoredTheme, useTheme } from "@/hooks/use-theme";
import { ScrollProgress } from "@/components/scroll-progress";

export function SiteHeader() {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] shadow-sm backdrop-blur-xl">
      <ScrollProgress />
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group min-w-0 text-left" aria-label="Go to hero section">
          <span className="block truncate text-base font-black tracking-[0.18em] text-[var(--text-primary)] sm:text-lg">
            RAFEE
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:block">
            {personalData.title}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStoredTheme(isDark ? "light" : "dark")}
            className="icon-button"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="icon-button lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-[var(--border)] bg-[var(--header-bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link w-full justify-start text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
