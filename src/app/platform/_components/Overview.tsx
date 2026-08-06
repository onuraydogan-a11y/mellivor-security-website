import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Overview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="One platform, three pillars"
            description="Mellivor One, Behind24, and the Mellivor AI Platform are built as one system — not three products stapled together after the fact. Each pillar strengthens the others."
          />
        </Reveal>
      </Container>
    </Section>
  );
}
