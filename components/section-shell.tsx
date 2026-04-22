import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, subtitle, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`section-band py-16 sm:py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
