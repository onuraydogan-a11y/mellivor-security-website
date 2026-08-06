import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LogoPlaceholder } from "@/components/ui/LogoPlaceholder";

const PLACEHOLDER_COUNT = 6;

export function TechnologyPartners() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeading
          eyebrow="Technology Partners"
          title="An open ecosystem, not a walled garden"
          description="Mellivor integrates with, distributes, and supports the vendor technologies already in your stack."
        />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <LogoPlaceholder key={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/technology-partners" variant="outline" size="md">
            View technology partners
          </Button>
        </div>
      </Container>
    </Section>
  );
}
