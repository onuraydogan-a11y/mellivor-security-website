import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { valuePillars } from "@/lib/site-content";

export function WhyMellivor() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Mellivor"
            title="Security that keeps up with the enterprise"
            description="Mellivor is built around one platform, one intelligence layer, and a services and partner network that stands behind both."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar) => (
              <Card
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
