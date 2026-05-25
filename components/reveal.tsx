"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] = useState<"visible" | "hidden" | "shown">("hidden");

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      const frameId = window.requestAnimationFrame(() => setRevealState("shown"));
      return () => window.cancelAnimationFrame(frameId);
    }

    let frameId = 0;
    let nextFrameId = 0;
    let wasIntersecting = false;

    const playReveal = () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(nextFrameId);
      setRevealState("hidden");

      frameId = window.requestAnimationFrame(() => {
        nextFrameId = window.requestAnimationFrame(() => setRevealState("shown"));
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!wasIntersecting) {
            playReveal();
          }

          wasIntersecting = true;
          return;
        }

        wasIntersecting = false;
        setRevealState("hidden");
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(nextFrameId);
      observer?.disconnect();
    };
  }, []);

  const isArmed = revealState !== "visible";
  const isVisible = revealState !== "hidden";

  return (
    <div
      ref={ref}
      className={`reveal ${isArmed ? "is-armed" : ""} reveal-${variant} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
