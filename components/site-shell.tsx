"use client";

import { ReactNode, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return <div className={`${theme} min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]`}>{children}</div>;
}
