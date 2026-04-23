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
      <div className="mx-auto grid max-w-6xl items-stretch gap-5 md:grid-cols-2" id="certificates">
        {research.map((publication, index) => (
          <Reveal key={publication.title} delay={index * 90} className="h-full">
            <article className="feature-panel flex h-full flex-col p-6 sm:p-8">
              <span className="icon-disc">
                <FontAwesomeIcon icon={faFlask} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-black leading-tight text-[var(--text-primary)] sm:text-2xl">
                {publication.title}
              </h3>
              <p className="mt-4 italic leading-7 text-[var(--text-muted)]">{publication.authors}</p>
            </article>
          </Reveal>
        ))}

        {certificates.map((certificate, index) => (
          <Reveal
            key={certificate.title}
            delay={(research.length + index) * 90}
            variant={index % 2 === 0 ? "up" : "right"}
            className="h-full"
          >
            <article className="motion-card flex h-full flex-col p-6 sm:p-7">
              <span className="icon-disc">
                <FontAwesomeIcon icon={faCertificate} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-black leading-tight text-[var(--text-primary)]">{certificate.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-[var(--text-secondary)]">{certificate.description}</p>
              {certificate.link ? (
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="card-link mt-6 self-start">
                  Verify
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
