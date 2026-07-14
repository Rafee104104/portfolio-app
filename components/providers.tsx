"use client"

import type { ReactNode } from "react"
import { MotionConfig } from "motion/react"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

import { TooltipProvider } from "@/components/ui/tooltip"

type ProvidersProps = Omit<ThemeProviderProps, "children"> & {
  children: ReactNode
  tooltipDelayDuration?: number
}

function Providers({
  children,
  tooltipDelayDuration = 300,
  ...themeProviderProps
}: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem={false}
      {...themeProviderProps}
    >
      <MotionConfig reducedMotion="user">
        <TooltipProvider delayDuration={tooltipDelayDuration}>
          {children}
        </TooltipProvider>
      </MotionConfig>
    </NextThemesProvider>
  )
}

export { Providers, type ProvidersProps }
