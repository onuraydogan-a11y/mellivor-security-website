import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { industries } from "@/lib/site-content";

export function IndustriesWeServe() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Security built for regulated, high-stakes environments"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.name} icon={industry.icon} title={industry.name} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
