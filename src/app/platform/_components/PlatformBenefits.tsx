import { Gauge, PiggyBank, Eye, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const BENEFITS = [
  {
    icon: Gauge,
    title: "Faster time to detection",
    description: "Correlated signal across the platform shortens the path from event to answer.",
  },
  {
    icon: PiggyBank,
    title: "Lower total cost of ownership",
    description: "One platform to run instead of a growing pile of disconnected point tools.",
  },
  {
    icon: Eye,
    title: "One source of truth",
    description: "A single view of risk, instead of reconciling reports across separate consoles.",
  },
  {
    icon: TrendingUp,
    title: "Scales with your environment",
    description: "Grows from a single business unit to a global enterprise footprint.",
  },
];

export function PlatformBenefits() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Platform Benefits" title="Why teams standardize on Mellivor" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <Card
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
