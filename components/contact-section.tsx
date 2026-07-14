import {
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Play,
} from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { AnimatedLink } from "@/components/ui/skiper-ui/skiper40";
import { personal } from "@/lib/portfolio-data";

const contactLinks = [
  { label: personal.email, href: personal.emailHref, icon: Mail },
  { label: personal.phone, href: personal.phoneHref, icon: Phone },
  { label: "GitHub", href: personal.githubUrl, icon: GitBranch, external: true },
  { label: "LinkedIn", href: personal.linkedinUrl, icon: BriefcaseBusiness, external: true },
  { label: "YouTube", href: personal.youtubeUrl, icon: Play, external: true },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-primary text-primary-foreground">
      <div className="container-shell">
        <MotionReveal>
          <div className="classic-corners relative overflow-hidden border border-primary-foreground/25 px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] text-gold uppercase">
                  Contact / Dhaka
                </p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Let&apos;s discuss a useful piece of software.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/72">
                  Open to conversations about junior software engineering roles, practical web delivery,
                  business systems, and database integration work.
                </p>
                <Button
                  asChild
                  className="mt-8 h-12 rounded-md bg-brand px-6 text-brand-foreground hover:bg-brand/90"
                >
                  <a href={personal.emailHref}>
                    <Mail data-icon="inline-start" />
                    Start a conversation
                  </a>
                </Button>
              </div>

              <div className="border-t border-primary-foreground/20 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <div className="grid gap-4">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <div key={link.href} className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden="true" />
                        <AnimatedLink
                          href={link.href}
                          external={"external" in link ? link.external : false}
                          target={"external" in link && link.external ? "_blank" : undefined}
                          className="text-sm text-primary-foreground focus-visible:ring-offset-primary sm:text-base"
                        >
                          {link.label}
                        </AnimatedLink>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-7 flex items-center gap-2 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/65">
                  <MapPin className="size-4 text-gold" strokeWidth={1.6} aria-hidden="true" />
                  {personal.location}
                </div>
                <p className="mt-4 text-xs leading-5 text-primary-foreground/55">
                  {personal.referencesNote}
                </p>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
