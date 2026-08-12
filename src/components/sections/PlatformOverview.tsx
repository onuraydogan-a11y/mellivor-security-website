import Link from "next/link";
import { ArrowRight, LayoutGrid, Radar, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/cn";

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  "Mellivor One": LayoutGrid,
  Behind24: Radar,
  "AI Platform": BrainCircuit,
};

/**
 * Deliberately not another centered-heading + equal-card-grid section
 * (see WhyMellivor, SolutionsOverview, etc. for that pattern already
 * covered elsewhere) — this one leads with a single spotlight product
 * and lists the rest alongside it, so the page has more than one
 * visual rhythm.
 */
export function PlatformOverview() {
  const platform = mainNav.find((item) => item.label === "Platform");
  const products = platform?.columns?.find((c) => c.heading === "Products")?.links ?? [];
  const essentials =
    platform?.columns?.find((c) => c.heading === "Platform Essentials")?.links ?? [];

  const [featured, ...rest] = products;
  const FeaturedIcon = featured ? PRODUCT_ICONS[featured.label] : undefined;

  return (
    <Section className="bg-muted/40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Platform"
              title="The Mellivor technology ecosystem"
              description="One proprietary platform, built to run as a unified whole rather than a collection of point products."
              align="left"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {essentials.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/platform" variant="outline" size="md">
                Explore the platform
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-4">
            {featured && (
              <Link
                href={featured.href}
                className="group rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  {FeaturedIcon && (
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FeaturedIcon aria-hidden className="h-6 w-6" />
                    </span>
                  )}
                  <ArrowRight
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{featured.label}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  {featured.description}
                </p>
              </Link>
            )}

            <div className={cn("grid gap-4", rest.length > 1 && "sm:grid-cols-2")}>
              {rest.map((product) => {
                const Icon = PRODUCT_ICONS[product.label];
                return (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      {Icon && (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon aria-hidden className="h-4 w-4" />
                        </span>
                      )}
                      <ArrowRight
                        aria-hidden
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{product.label}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {product.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
