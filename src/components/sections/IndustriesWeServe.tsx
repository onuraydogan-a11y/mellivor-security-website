import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/site-content";

export function IndustriesWeServe() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Security built for regulated, high-stakes environments"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Card key={industry.name} icon={industry.icon} title={industry.name} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
