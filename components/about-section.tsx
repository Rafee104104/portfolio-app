import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGlobe, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { SectionShell } from "@/components/section-shell";
import { Reveal } from "@/components/reveal";
import { languages, personalData, personalDetails, qualities } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Profile"
      title="Focused on practical engineering outcomes."
      subtitle="A compact profile summary, personal details, and the qualities that shape daily work."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="feature-panel p-6 sm:p-8">
          <p className="text-lg leading-9 text-[var(--text-secondary)]">{personalData.profileSummary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {personalDetails.map((detail) => (
              <div key={detail.label} className="detail-tile">
                <FontAwesomeIcon icon={faIdCard} className="h-4 w-4 text-[var(--accent)]" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{detail.label}</p>
                <strong className="text-sm text-[var(--text-primary)]">{detail.value}</strong>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="feature-panel p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="icon-disc">
              <FontAwesomeIcon icon={faGlobe} className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Languages</p>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">Communication</h3>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {languages.map((language) => (
              <span key={language} className="soft-chip">
                {language}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            {qualities.slice(0, 5).map((quality) => (
              <div key={quality} className="flex items-center gap-3 text-sm font-semibold text-[var(--text-secondary)]">
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-[var(--accent)]" />
                {quality}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={180} className="mt-6 flex flex-wrap justify-center gap-3">
        {qualities.slice(5).map((quality) => (
          <span key={quality} className="soft-chip">
            {quality}
          </span>
        ))}
      </Reveal>
    </SectionShell>
  );
}
