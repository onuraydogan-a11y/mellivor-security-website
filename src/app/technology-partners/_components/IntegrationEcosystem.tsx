import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";

export function IntegrationEcosystem() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Integration Ecosystem"
            title="How Mellivor connects to what you run"
            align="left"
          />
          <div className="mt-6 max-w-2xl">
            <BulletList
              items={[
                "Native, pre-built connectors for common technology categories",
                "Open APIs for connecting technologies outside the pre-built catalog",
                "Behind24 correlation across every connected data source",
                "Professional Services support for complex or custom integrations",
              ]}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
