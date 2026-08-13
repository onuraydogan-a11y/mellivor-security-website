import Link from "next/link";
import { ArrowRight, LayoutGrid, Radar, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  "Mellivor One": LayoutGrid,
  Behind24: Radar,
  "Mellivor AI Kernel": BrainCircuit,
};

const PRODUCT_LOGOS: Record<string, string> = {
  "Mellivor One": "/brand/logo-transparent.svg",
  Behind24: "/products/behind24-logo.png",
  "Mellivor AI Kernel": "/brand/logo-transparent.svg",
};

/**
 * Deliberately not another centered-heading + equal-card-grid section
 * (see WhyMellivor, SolutionsOverview, etc. for that pattern already
 * covered elsewhere) — this one leads with a single spotlight product
 * and lists the rest alongside it, so the page has more than one
 * visual rhythm.
 */
export function PlatformOverview({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).platformOverview;
  const nav = locale === "tr" ? trMainNav : mainNav;
  const platformLabel = locale === "tr" ? "Platform" : "Platform";
  const platform = nav.find((item) => item.label === platformLabel);
  const productsHeading = locale === "tr" ? "Ürünler" : "Products";
  const essentialsHeading = locale === "tr" ? "Platform Bileşenleri" : "Platform Essentials";
  const products = platform?.columns?.find((c) => c.heading === productsHeading)?.links ?? [];
  const essentials =
    platform?.columns?.find((c) => c.heading === essentialsHeading)?.links ?? [];
  const platformHref = locale === "tr" ? "/tr/platform" : "/platform";

  const [featured, ...rest] = products;
  const FeaturedIcon = featured ? PRODUCT_ICONS[featured.label] : undefined;
  const featuredLogo = featured ? PRODUCT_LOGOS[featured.label] : undefined;

  return (
    <Section className="bg-muted/40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={strings.eyebrow}
              title={strings.title}
              description={strings.description}
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
              <Button href={platformHref} variant="outline" size="md">
                {strings.explorePlatform}
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
                  {featuredLogo ? (
                    <span className="inline-flex h-11 items-center rounded-xl border border-border bg-background px-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={featuredLogo}
                        alt={`${featured.label} logo`}
                        className="h-6 max-w-[160px] object-contain"
                      />
                    </span>
                  ) : (
                    FeaturedIcon && (
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FeaturedIcon aria-hidden className="h-6 w-6" />
                      </span>
                    )
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
                const logo = PRODUCT_LOGOS[product.label];
                return (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      {logo ? (
                        <span className="inline-flex h-9 items-center rounded-lg border border-border bg-background px-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={logo}
                            alt={`${product.label} logo`}
                            className="h-5 max-w-[110px] object-contain"
                          />
                        </span>
                      ) : (
                        Icon && (
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon aria-hidden className="h-4 w-4" />
                          </span>
                        )
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
