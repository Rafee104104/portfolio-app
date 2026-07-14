import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        <p className="section-kicker">{eyebrow}</p>
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
      </div>
      <h2 className="display-heading">{title}</h2>
      {description ? (
        <p className="body-copy mt-5 max-w-2xl">{description}</p>
      ) : null}
    </header>
  );
}
