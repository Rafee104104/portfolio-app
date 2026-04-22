import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Professional timeline with delivery context."
      subtitle="Roles across backend development, IT support, full-stack practice, and team collaboration."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-[var(--timeline)] md:left-1/2" aria-hidden="true" />

        <div className="grid gap-8">
          {experience.map((job, index) => {
            const isRightAligned = job.side === "right";

            return (
              <div key={job.title} className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                <div className="absolute left-4 top-2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent)] shadow-lg md:left-1/2">
                  <FontAwesomeIcon icon={faBriefcase} className="h-4 w-4" />
                </div>

                <div className={isRightAligned ? "md:col-start-2" : "md:col-start-1"}>
                  <Reveal variant={isRightAligned ? "right" : "left"} delay={index * 110}>
                    <article className="timeline-card p-6">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">{job.duration}</p>
                      <h3 className="mt-3 text-2xl font-black text-[var(--text-primary)]">{job.title}</h3>
                      <p className="mt-2 text-lg font-bold text-[var(--text-secondary)]">{job.company}</p>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">{job.location}</p>
                      <p className="mt-5 leading-7 text-[var(--text-secondary)]">{job.description}</p>
                    </article>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
