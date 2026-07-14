"use client"

import type { ComponentPropsWithoutRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

type ScrollProgressProps = Omit<ComponentPropsWithoutRef<"div">, "children"> & {
  indicatorClassName?: string
  position?: "top" | "bottom"
}

function ScrollProgress({
  className,
  indicatorClassName,
  position = "bottom",
  ...props
}: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    mass: 0.2,
    stiffness: 180,
  })
  const scaleX = shouldReduceMotion ? scrollYProgress : smoothProgress

  return (
    <div
      {...props}
      aria-hidden="true"
      data-slot="scroll-progress"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-50 h-0.5 overflow-hidden bg-primary/10",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
    >
      <motion.div
        className={cn("h-full origin-left bg-primary", indicatorClassName)}
        style={{ scaleX }}
      />
    </div>
  )
}

export { ScrollProgress, type ScrollProgressProps }
