import { AnimatedLink } from "@/components/ui/skiper-ui/skiper40";
import { personal } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-7">
      <div className="container-shell flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. Built with care in Dhaka.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="#top" className="focus-ring rounded-sm font-medium text-foreground">
            Back to top
          </a>
          <AnimatedLink
            href="https://skiper-ui.com/v1/skiper40"
            target="_blank"
            className="text-muted-foreground"
          >
            Link motion by Skiper UI
          </AnimatedLink>
        </div>
      </div>
    </footer>
  );
}
