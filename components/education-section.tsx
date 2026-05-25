import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { education } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Academic foundation."
      subtitle="Formal study milestones from school through computer science and engineering."
    >
      <div className="mx-auto grid max-w-6xl auto-rows-fr gap-5 md:grid-cols-3">
        {education.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 90} className="h-full">
            <article className="motion-card flex h-full min-h-[20rem] flex-col items-center justify-center p-6 text-center">
              <span className="icon-disc mx-auto">
                <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-black text-[var(--text-primary)] sm:text-2xl">{edu.degree}</h3>
              <p className="mt-3 text-lg font-bold text-[var(--accent)]">{edu.institution}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{edu.years}</p>
              <p className="mt-3 font-bold text-[var(--text-primary)]">{edu.result}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
