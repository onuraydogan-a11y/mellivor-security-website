import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type FeatureSectionProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
  className?: string;
};

/**
 * Alternating icon/copy + checklist block used for product deep-dives
 * (Platform's Mellivor One/Behind24/AI Platform today). Reusable
 * anywhere a "here's what this thing does" block is needed.
 */
export function FeatureSection({
  icon: Icon,
  eyebrow,
  title,
  description,
  features,
  reverse,
  className,
}: FeatureSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className={reverse ? "lg:order-2" : "lg:order-1"}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon aria-hidden className="h-6 w-6" />
              </span>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">
                {eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-7 text-muted-foreground">{description}</p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-border bg-surface p-8",
                reverse ? "lg:order-1" : "lg:order-2"
              )}
            >
              <BulletList items={features} />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
