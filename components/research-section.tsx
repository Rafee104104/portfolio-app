import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faFlask } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { certificates, research } from "@/lib/portfolio-data";

export function ResearchSection() {
  return (
    <SectionShell
      id="research"
      eyebrow="Research & Certificates"
      title="Academic work and verified learning."
      subtitle="Research and certificate links are grouped together to keep this portfolio compact."
    >
      <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5">
          {research.map((publication, index) => (
            <Reveal key={publication.title} delay={index * 90}>
              <article className="feature-panel p-6 sm:p-8">
                <span className="icon-disc">
                  <FontAwesomeIcon icon={faFlask} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-black text-[var(--text-primary)]">{publication.title}</h3>
                <p className="mt-4 italic leading-7 text-[var(--text-muted)]">{publication.authors}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="certificates" className="grid gap-5">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.title} delay={index * 110} variant="right">
              <article className="motion-card p-6">
                <span className="icon-disc">
                  <FontAwesomeIcon icon={faCertificate} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-black text-[var(--text-primary)]">{certificate.title}</h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">{certificate.description}</p>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="card-link mt-6">
                  Verify
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
