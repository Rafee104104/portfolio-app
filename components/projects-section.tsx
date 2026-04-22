import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "@/components/reveal";
import { SectionShell } from "@/components/section-shell";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected Work"
      title="Projects with practical product thinking."
      subtitle="Each card links to real code or a project route and keeps the stack visible at a glance."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const isGitHubProject = project.link.includes("github.com");

          return (
            <Reveal key={project.title} delay={index * 70} className="h-full">
              <article className="project-card h-full">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[var(--text-primary)]">{project.title}</h3>
                  <p className="mt-4 leading-7 text-[var(--text-secondary)]">{project.desc}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="mini-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link mt-7">
                  <FontAwesomeIcon icon={isGitHubProject ? faGithub : faArrowUpRightFromSquare} className="h-4 w-4" />
                  {project.linkLabel ?? (isGitHubProject ? "View Code" : "View Project")}
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
