"use client"

import type { ReactNode } from "react"
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Transition,
} from "motion/react"

type RevealDirection = "up" | "down" | "left" | "right" | "none"

type MotionRevealProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "children" | "initial" | "variants" | "whileInView"
> & {
  children: ReactNode
  /** Delay in seconds, matching Motion's transition API. */
  delay?: number
  direction?: RevealDirection
  distance?: number
  duration?: number
  once?: boolean
}

function getRevealOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "down":
      return { x: 0, y: -distance }
    case "left":
      return { x: -distance, y: 0 }
    case "right":
      return { x: distance, y: 0 }
    case "none":
      return { x: 0, y: 0 }
    case "up":
    default:
      return { x: 0, y: distance }
  }
}

function MotionReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 18,
  duration = 0.45,
  once = true,
  transition,
  viewport,
  ...props
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const resolvedTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : (transition ?? {
        delay,
        duration,
        ease: "easeOut",
      })

  return (
    <motion.div
      initial={false}
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: [0.72, 1],
              x: [getRevealOffset(direction, distance).x, 0],
              y: [getRevealOffset(direction, distance).y, 0],
            }
      }
      transition={resolvedTransition}
      viewport={
        viewport ?? {
          amount: 0.2,
          margin: "0px 0px -10% 0px",
          once,
        }
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { MotionReveal, type MotionRevealProps, type RevealDirection }
