import { Check } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell border-b bg-background/75">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="A career shaped by delivery and support."
          description="Hands-on roles across business software, backend delivery, healthcare IT, and product development."
        />

        <ol className="relative mt-12 border-t" aria-label="Professional experience timeline">
          {experience.map((entry, index) => (
            <li key={`${entry.company}-${entry.period}`} className="border-b">
              <MotionReveal
                className="grid gap-6 py-8 md:grid-cols-[12rem_1fr] md:gap-10 lg:grid-cols-[15rem_1fr] lg:py-10"
                delay={(index % 2) * 0.06}
              >
                <div>
                  <p className="font-mono text-[0.7rem] font-semibold tracking-[0.08em] text-brand uppercase">
                    {entry.period}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{entry.location}</p>
                  <span className="mt-5 inline-flex size-8 items-center justify-center rounded-full border bg-card font-display text-sm italic text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <article className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
                      {entry.role}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-brand">{entry.company}</p>
                    <p className="mt-4 leading-7 text-muted-foreground">{entry.summary}</p>
                  </div>
                  <ul className="grid content-start gap-3">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-7 text-muted-foreground">
                        <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-brand/35 text-brand">
                          <Check className="size-3" strokeWidth={2} aria-hidden="true" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
