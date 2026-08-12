import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type PageHeroCta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  size?: "lg" | "md";
  className?: string;
  /**
   * Optional flagship visual (e.g. HomeHeroVisual). When present, the
   * hero switches from the centered single-column layout to a
   * left-aligned two-column layout with the visual on the right —
   * used only by the homepage so every other page keeps the plain
   * centered hero unchanged.
   */
  visual?: React.ReactNode;
};

/**
 * Generic page hero shared by the homepage and every section landing
 * page (Platform, Services, Solution/Vendor templates). "lg" is the
 * homepage's own visual weight; "md" is the more compact size used on
 * sub-pages so the homepage stays the most prominent hero on the site.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  size = "lg",
  className,
  visual,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.5,
          maskImage: "radial-gradient(55% 55% at 50% 15%, black, transparent)",
          WebkitMaskImage: "radial-gradient(55% 55% at 50% 15%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, var(--color-primary) 0%, transparent 70%)",
          opacity: 0.12,
        }}
      />

      <Container
        className={cn(
          "animate-fade-in-up",
          visual
            ? "grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.05fr]"
            : cn(
                "flex flex-col items-center text-center",
                size === "lg" ? "py-28 sm:py-36" : "py-20 sm:py-28"
              )
        )}
      >
        <div className={cn(visual && "flex flex-col items-start text-left")}>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {eyebrow}
            </span>
          )}

          <h1
            className={cn(
              "mt-6 font-semibold tracking-tight text-foreground",
              visual ? "max-w-xl" : "max-w-3xl",
              size === "lg" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"
            )}
          >
            {title}
          </h1>

          {description && (
            <p className={cn("mt-6 text-lg leading-8 text-muted-foreground", visual ? "max-w-lg" : "max-w-xl")}>
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {visual && (
          <div className="flex justify-center lg:justify-end">{visual}</div>
        )}
      </Container>
    </section>
  );
}
