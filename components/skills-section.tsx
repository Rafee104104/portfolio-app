import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faJs, faLaravel, faNodeJs, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faGear, faLayerGroup, faServer } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { skills } from "@/lib/portfolio-data";

const skillIcons: Record<string, IconDefinition> = {
  code: faCode,
  react: faReact,
  server: faServer,
  database: faDatabase,
  layer: faLayerGroup,
  gear: faGear,
};

const marqueeItems = [
  { label: "HTML5", icon: faCode },
  { label: "JavaScript", icon: faJs },
  { label: "React", icon: faReact },
  { label: "Node.js", icon: faNodeJs },
  { label: "PHP", icon: faPhp },
  { label: "Laravel", icon: faLaravel },
  { label: "GitHub", icon: faGithub },
];

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Technical Stack"
      title="MERN-friendly skills with PHP and Laravel depth."
      subtitle="A balanced mix of frontend, backend, database, framework, and delivery tools."
    >
      <div className="skill-marquee" aria-label="Highlighted technologies">
        <div className="skill-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item.label}-${index}`} className="marquee-pill">
              <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skillGroup, index) => (
          <Reveal key={skillGroup.category} delay={index * 80} className="h-full">
            <article className="motion-card h-full p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="icon-disc">
                  <FontAwesomeIcon icon={skillIcons[skillGroup.icon]} className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">{skillGroup.category}</h3>
              <p className="mt-3 leading-7 text-[var(--text-secondary)]">{skillGroup.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.list.map((item) => (
                  <span key={item} className="mini-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
