import { personalData } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-[var(--text-muted)] sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <a href={personalData.githubUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--accent)]">
          github.com/{personalData.githubHandle}
        </a>
      </div>
    </footer>
  );
}
