"use client";

import { AppWindow, Database, PanelsTopLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const layers = [
  { label: "Interface", detail: "Next.js / React", icon: PanelsTopLeft },
  { label: "Application", detail: ".NET / C#", icon: AppWindow },
  { label: "Data", detail: "Oracle / SQL", icon: Database },
] as const;

export function SystemMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="paper-surface relative overflow-hidden rounded-lg border p-3.5 sm:p-[1.125rem]"
      role="img"
      aria-label="Engineering stack spanning interface, application, and data layers"
    >
      <div
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="relative mb-4 flex items-center justify-between">
        <span className="font-mono text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Working system
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.62rem] text-brand">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          Connected
        </span>
      </div>

      <div className="relative grid gap-2.5 sm:grid-cols-3 sm:gap-4">
        <div
          className="absolute top-[1.9rem] right-[12%] left-[12%] hidden h-px bg-border sm:block"
          aria-hidden="true"
        >
          <motion.span
            className="absolute -top-1 block size-2 rounded-full bg-brand shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand)_15%,transparent)]"
            initial={{ left: "0%" }}
            animate={reduceMotion ? { left: "50%" } : { left: ["0%", "100%", "0%"] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </div>

        {layers.map((layer, index) => {
          const Icon = layer.icon;

          return (
            <motion.div
              key={layer.label}
              className="relative z-10 flex items-center gap-3 rounded-md border bg-card/95 p-2.5 sm:block sm:text-center"
              initial={false}
              whileInView={
                reduceMotion ? undefined : { opacity: [0.72, 1], y: [8, 0] }
              }
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-brand sm:mx-auto sm:mb-3">
                <Icon className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-[0.92rem] font-bold text-foreground">
                  {layer.label}
                </p>
                <p className="mt-0.5 font-mono text-[0.58rem] text-muted-foreground">
                  {layer.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
