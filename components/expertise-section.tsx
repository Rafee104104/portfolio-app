import { Database, GitBranch, PanelsTopLeft, ServerCog, type LucideIcon } from "lucide-react";

import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { capabilityGroups, type CapabilityGroup } from "@/lib/portfolio-data";

const capabilityIcons: Record<string, LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: ServerCog,
  "data-integration": Database,
  "delivery-foundations": GitBranch,
};

function CapabilityCard({ group, index }: { group: CapabilityGroup; index: number }) {
  const Icon = capabilityIcons[group.id] ?? GitBranch;

  return (
    <MotionReveal delay={index * 0.06} className="h-full">
      <Card className="classic-corners paper-surface h-full gap-0 rounded-lg border py-0 ring-0">
        <CardHeader className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b px-5 py-5 sm:px-6">
          <span className="flex size-11 items-center justify-center rounded-md border bg-background text-brand">
            <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-xl font-bold text-foreground">{group.title}</p>
            <p className="mt-1 font-mono text-[0.62rem] tracking-[0.1em] text-muted-foreground uppercase">
              Capability group
            </p>
          </div>
          <span className="font-display text-2xl italic text-gold/70" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </CardHeader>
        <CardContent className="px-5 py-6 sm:px-6">
          <p className="leading-7 text-muted-foreground">{group.description}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-5 border-t" aria-label={`${group.title} technologies`}>
            {group.items.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-center gap-2 border-b font-mono text-[0.7rem] text-foreground"
              >
                <span className="size-1 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </MotionReveal>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-shell border-b bg-card/35">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Expertise"
              title="A practical full-stack toolkit."
              description="Capabilities are grouped by working context rather than inflated proficiency scores."
            />
            <div className="mt-8 hidden lg:block" aria-hidden="true">
              <p className="font-display text-7xl italic text-gold/25">04</p>
              <div className="fine-rule mt-3 w-36" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {capabilityGroups.map((group, index) => (
              <CapabilityCard key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
