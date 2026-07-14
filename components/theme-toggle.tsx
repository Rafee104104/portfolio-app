"use client"

import type { ComponentProps } from "react"
import { Moon, Sun } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type ThemeToggleProps = Omit<
  ComponentProps<typeof Button>,
  "asChild" | "children" | "onClick" | "type"
> & {
  label?: string
}

function ThemeToggle({
  className,
  label = "Toggle color theme",
  size = "icon",
  variant = "ghost",
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const shouldReduceMotion = useReducedMotion()

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.div
      className="inline-flex"
      whileTap={shouldReduceMotion ? undefined : { rotate: -5, scale: 0.94 }}
      transition={{ duration: 0.15 }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            {...props}
            aria-label={label}
            className={cn("relative rounded-full", className)}
            onClick={toggleTheme}
            size={size}
            type="button"
            variant={variant}
          >
            <Sun
              aria-hidden="true"
              className="rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0 motion-reduce:transition-none"
            />
            <Moon
              aria-hidden="true"
              className="absolute rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100 motion-reduce:transition-none"
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={8}>
          {label}
        </TooltipContent>
      </Tooltip>
    </motion.div>
  )
}

export { ThemeToggle, type ThemeToggleProps }
