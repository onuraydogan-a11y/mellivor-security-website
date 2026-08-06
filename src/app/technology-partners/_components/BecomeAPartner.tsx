import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BecomeAPartner() {
  return (
    <Section>
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Become a Partner"
            title="Bring your technology into the Mellivor ecosystem"
            description="If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio. Tell us about your technology and where it fits."
          />
          <div className="mt-8">
            <Button href="/technology-partners/become-a-partner" variant="primary" size="lg">
              Apply to Partner
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
