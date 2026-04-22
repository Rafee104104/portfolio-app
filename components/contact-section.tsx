import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { personalData, references } from "@/lib/portfolio-data";

const contacts = [
  { label: "Email", value: personalData.email, href: `mailto:${personalData.email}`, icon: faEnvelope },
  { label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}`, icon: faPhone },
  { label: "Address", value: personalData.fullAddress, href: undefined, icon: faLocationDot },
  { label: "GitHub", value: personalData.githubHandle, href: personalData.githubUrl, icon: faGithub },
  { label: "LinkedIn", value: "Tasnim Munawar Rafee", href: personalData.linkedinUrl, icon: faLinkedin },
  { label: "YouTube", value: "Tasnim Munawar Rafee", href: personalData.youtubeUrl, icon: faYoutube },
];

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Ready for a practical build conversation."
      subtitle="Direct contact links and references are kept visible for fast handoff."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="feature-panel p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="icon-disc">
              <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">Get in touch</p>
              <h3 className="text-2xl font-black text-[var(--text-primary)]">Contact Details</h3>
            </div>
          </div>

          <div className="mt-7 grid gap-4">
            {contacts.map((contact) => {
              const content = (
                <>
                  <FontAwesomeIcon icon={contact.icon} className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {contact.label}
                    </span>
                    <span className="block break-words text-sm font-bold text-[var(--text-primary)]">{contact.value}</span>
                  </span>
                </>
              );

              return contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-row"
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label} className="contact-row">
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal variant="right" delay={140} className="feature-panel p-6 sm:p-8">
          <h3 className="text-2xl font-black text-[var(--text-primary)]">References</h3>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {references.map((reference) => (
              <article key={reference.name} className="reference-card">
                <h4 className="text-lg font-black text-[var(--text-primary)]">{reference.name}</h4>
                <p className="mt-2 text-sm font-bold text-[var(--accent)]">{reference.title}</p>
                <p className="mt-3 break-words text-sm leading-6 text-[var(--text-muted)]">{reference.contact}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
