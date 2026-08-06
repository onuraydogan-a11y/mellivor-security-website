import { Sparkles, Radar, Activity, Database, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "AI & Application Risk": Sparkles,
  "Threat & Exposure": Radar,
  "Detection & Response": Activity,
  "Infrastructure & Data": Database,
  "Risk & Compliance": ClipboardCheck,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function SolutionsOverview() {
  const solutions = mainNav.find((item) => item.label === "Solutions");
  const categories = solutions?.columns ?? [];

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="Built around the problems you actually have"
            description="Mellivor solutions are organized by the risk you're solving for, not the product you'd have to buy."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const heading = category.heading ?? "Solutions";
              const preview = category.links
                .slice(0, 3)
                .map((link) => link.label)
                .join(", ");

              return (
                <Card
                  key={heading}
                  icon={CATEGORY_ICONS[heading]}
                  title={heading}
                  description={`${preview}, and more.`}
                  href={`/solutions#${slugify(heading)}`}
                />
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/solutions" variant="outline" size="md">
              View all solutions
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
