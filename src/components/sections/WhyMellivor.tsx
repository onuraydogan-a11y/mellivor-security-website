import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { valueProps } from "@/lib/site-content";

export function WhyMellivor() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Why Mellivor"
          title="Security that keeps up with the enterprise"
          description="Mellivor is built around one platform, one intelligence layer, and a services team that stands behind both."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <Card
              key={prop.title}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
