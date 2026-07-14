import {
  Building2,
  Camera,
  Fingerprint,
  HeartPulse,
  NotebookPen,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AnimatedLink } from "@/components/ui/skiper-ui/skiper40";
import { projects, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const projectIcons: readonly LucideIcon[] = [
  Fingerprint,
  Building2,
  HeartPulse,
  NotebookPen,
  Camera,
  UserRound,
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[index] ?? UserRound;
  const featured = index < 2;

  return (
    <MotionReveal
      className={cn(
        "h-full",
        index === 0 && "lg:col-span-7",
        index === 1 && "lg:col-span-5",
        index > 1 && "lg:col-span-4",
      )}
      delay={(index % 3) * 0.07}
    >
      <Card className="group relative h-full gap-0 overflow-hidden rounded-lg border bg-card py-0 shadow-[0_18px_50px_rgb(var(--shadow-color)/0.06)] ring-0 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_24px_65px_rgb(var(--shadow-color)/0.11)] motion-reduce:transform-none">
        <div className="relative min-h-32 overflow-hidden border-b bg-secondary/45 p-5" aria-hidden="true">
          <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:28px_28px]" />
          <span className="absolute top-4 right-5 font-display text-5xl italic text-gold/35 transition-colors group-hover:text-gold/55">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="relative flex size-12 items-center justify-center rounded-md border bg-card text-brand shadow-sm">
            <Icon className="size-5" strokeWidth={1.5} />
          </div>
          <div className="absolute right-5 bottom-5 left-5 flex items-center gap-2">
            <span className="h-px flex-1 bg-border" />
            <span className="size-1.5 rounded-full border border-brand bg-card" />
            <span className="h-px w-8 bg-brand/60" />
          </div>
        </div>

        <CardHeader className="gap-0 px-5 pt-6 sm:px-6">
          <p className="section-kicker">{project.category}</p>
          <h3
            className={cn(
              "mt-3 font-display font-bold tracking-[-0.025em] text-foreground",
              featured ? "text-2xl sm:text-3xl" : "text-2xl",
            )}
          >
            {project.title}
          </h3>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col px-5 pt-4 pb-6 sm:px-6">
          <p className="leading-7 text-muted-foreground">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="h-auto rounded-sm border-border/80 bg-background/45 px-2 py-1 font-mono text-[0.62rem] font-medium text-muted-foreground"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-x-5 gap-y-2 rounded-none border-t bg-muted/35 px-5 py-4 sm:px-6">
          {project.links.map((link) => (
            <AnimatedLink
              key={link.href}
              href={link.href}
              target="_blank"
              className="font-mono text-[0.68rem] font-semibold tracking-[0.06em] text-foreground uppercase"
            >
              {link.label}
            </AnimatedLink>
          ))}
        </CardFooter>
      </Card>
    </MotionReveal>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-shell border-b bg-background/70" aria-labelledby="work-heading">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Software built around real operational needs."
          description="A curated set of web, desktop, and data-integration projects. Each entry reflects verified work from the professional CV."
        />
        <div id="work-heading" className="sr-only">Selected projects</div>
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
