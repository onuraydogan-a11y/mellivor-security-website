import Link from "next/link";
import { LayoutGrid, Radar, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  "Mellivor One": LayoutGrid,
  Behind24: Radar,
  "AI Platform": BrainCircuit,
};

export function PlatformOverview() {
  const platform = mainNav.find((item) => item.label === "Platform");
  const products = platform?.columns?.find((c) => c.heading === "Products")?.links ?? [];
  const essentials =
    platform?.columns?.find((c) => c.heading === "Platform Essentials")?.links ?? [];

  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Platform"
            title="The Mellivor technology ecosystem"
            description="One proprietary platform, built to run as a unified whole rather than a collection of point products."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {products.map((product) => (
              <Card
                key={product.href}
                icon={PRODUCT_ICONS[product.label]}
                title={product.label}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {essentials.map((link, index) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {link.label}
                </Link>
                {index < essentials.length - 1 && (
                  <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
                )}
              </span>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/platform" variant="outline" size="md">
              Explore the platform
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
