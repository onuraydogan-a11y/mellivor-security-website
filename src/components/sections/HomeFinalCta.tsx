import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage-only dark closing section. Deliberately not the shared
 * FinalCta component (used elsewhere as a single-button blue band) —
 * building this separately avoids touching that component's behavior
 * on every other page that renders it.
 */
export function HomeFinalCta() {
  return (
    <Section className="dark bg-background">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to strengthen your security posture?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-7 text-muted-foreground">
            Talk to our team about a demo tailored to your platform, solutions, and deployment
            model.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/request-demo" variant="primary" size="lg">
              Request Demo
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to an Expert
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
