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
  visual?: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

/**
 * Alternating icon/copy + visual block used for product deep-dives
 * (Platform's Mellivor One/Behind24/AI Platform). Reusable anywhere a
 * "here's what this thing does" block is needed.
 *
 * When `visual` is provided, it takes the opposite column and the
 * checklist moves inline under the copy (so the visual side is free
 * for a dashboard mockup / diagram). Without it, the checklist keeps
 * its own bordered panel on the opposite side, as before.
 */
export function FeatureSection({
  icon: Icon,
  eyebrow,
  title,
  description,
  features,
  visual,
  reverse,
  className,
}: FeatureSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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

              {visual && (
                <div className="mt-6">
                  <BulletList items={features} />
                </div>
              )}
            </div>

            {visual ? (
              <div className={reverse ? "lg:order-1" : "lg:order-2"}>{visual}</div>
            ) : (
              <div
                className={cn(
                  "rounded-2xl border border-border bg-surface p-8 shadow-sm",
                  reverse ? "lg:order-1" : "lg:order-2"
                )}
              >
                <BulletList items={features} />
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
