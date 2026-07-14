import Image from "next/image";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SystemMap } from "@/components/system-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedLink } from "@/components/ui/skiper-ui/skiper40";
import { personal } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[42%] border-l bg-card/35 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-24 -right-20 -z-10 size-80 rounded-full border border-gold/30 opacity-60"
        aria-hidden="true"
      />

      <div className="container-shell grid min-h-[calc(100svh-4.5rem)] min-w-0 items-center gap-14 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20 lg:py-20">
        <MotionReveal className="min-w-0 max-w-3xl" distance={22}>
          <Badge
            variant="outline"
            className="mb-7 h-auto max-w-full whitespace-normal rounded-sm border-brand/35 bg-card/70 px-3 py-1.5 text-left font-mono text-[0.64rem] leading-5 tracking-[0.12em] text-brand uppercase"
          >
            <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {personal.currentPosition}
          </Badge>

          <p className="section-kicker mb-4">Portfolio / 2026</p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3rem,8vw,6.7rem)] leading-[0.98] tracking-[-0.06em] text-foreground"
          >
            <span className="block sm:inline">Tasnim</span>{" "}
            <span className="block sm:inline">Munawar</span>
            <span className="mt-1 block italic text-brand">Rafee.</span>
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-y py-4">
            <p className="font-display text-lg font-bold text-foreground sm:text-xl">
              {personal.title}
            </p>
            <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5 text-brand" strokeWidth={1.7} aria-hidden="true" />
              {personal.location}
            </p>
          </div>

          <p className="body-copy mt-7 max-w-2xl">{personal.summary}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              className="h-12 rounded-md bg-brand px-6 text-brand-foreground hover:bg-brand/90"
            >
              <a href="#work">
                View selected work
                <ArrowDownRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-md px-6">
              <a href={personal.emailHref}>
                <Mail data-icon="inline-start" />
                Email Tasnim
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <AnimatedLink
              href={personal.githubUrl}
              target="_blank"
              className="font-medium text-foreground"
            >
              <GitBranch className="size-4" aria-hidden="true" />
              GitHub
            </AnimatedLink>
            <AnimatedLink
              href={personal.linkedinUrl}
              target="_blank"
              className="font-medium text-foreground"
            >
              <BriefcaseBusiness className="size-4" aria-hidden="true" />
              LinkedIn
            </AnimatedLink>
          </div>
        </MotionReveal>

        <MotionReveal direction="left" delay={0.12} distance={24}>
          <div className="mx-auto w-full max-w-[24.5rem] lg:max-w-[26rem]">
            <div className="classic-corners paper-surface relative border p-2.5 sm:p-3.5">
              <div className="relative aspect-[4/4.15] overflow-hidden border bg-secondary">
                <Image
                  src={personal.portraitPath}
                  alt="Portrait of Tasnim Munawar Rafee"
                  fill
                  priority
                  sizes="(max-width: 1024px) 78vw, 360px"
                  className="object-cover object-top saturate-[0.82] contrast-[1.04]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(17,29,49,0.22),transparent_45%)]"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-end justify-between gap-3 px-1 pt-3.5">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] text-brand uppercase">
                    Professional profile
                  </p>
                  <p className="mt-1 font-display text-[1.05rem] font-bold text-foreground sm:text-lg">
                    Engineering with practical range.
                  </p>
                </div>
                <span className="font-display text-2xl italic text-gold sm:text-[2.5rem]" aria-hidden="true">
                  TMR
                </span>
              </div>
            </div>
            <div className="relative z-10 -mt-px sm:mx-4 lg:mx-5">
              <SystemMap />
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
