"use client";

import { Mail, Menu } from "lucide-react";

import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, personal } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/92 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <ScrollProgress indicatorClassName="bg-brand" />
      <nav
        className="container-shell flex h-[4.5rem] items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="focus-ring group flex items-center gap-3 rounded-sm"
          aria-label="Tasnim Munawar Rafee, back to top"
        >
          <span className="classic-corners flex size-10 items-center justify-center border bg-card font-display text-xs font-bold tracking-[0.12em] text-foreground transition-colors group-hover:border-brand">
            {personal.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-bold text-foreground">
              Tasnim Munawar Rafee
            </span>
            <span className="block font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
              Software Engineer
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm px-3 py-2 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className="size-11 rounded-md border bg-card hover:bg-accent"
            label="Switch light or dark theme"
          />
          <Button
            asChild
            className="hidden h-11 rounded-md bg-brand px-5 text-brand-foreground hover:bg-brand/90 sm:inline-flex"
          >
            <a href={personal.emailHref}>
              <Mail data-icon="inline-start" />
              Contact
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-md lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-[min(88vw,24rem)] border-l bg-background p-0"
              side="right"
            >
              <SheetHeader className="border-b p-6 text-left">
                <SheetTitle className="font-display text-xl font-bold">
                  {personal.name}
                </SheetTitle>
                <SheetDescription>{personal.title}</SheetDescription>
              </SheetHeader>
              <div className="grid gap-1 p-4">
                {navigation.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="focus-ring flex min-h-12 items-center justify-between rounded-md px-3 font-display text-lg text-foreground transition-colors hover:bg-accent"
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[0.65rem] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto border-t p-6">
                <Button asChild className="h-12 w-full bg-brand text-brand-foreground">
                  <a href={personal.emailHref}>
                    <Mail data-icon="inline-start" />
                    Start a conversation
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
