import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";

export function TechnologyPartners() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology Partners"
            title="A technology ecosystem built to grow"
            description="Mellivor integrates, distributes, and supports leading cybersecurity technologies across every layer of the stack — organized by category, not locked to a single vendor."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyCategories.map((category) => (
              <Card
                key={category.name}
                icon={category.icon}
                title={category.name}
                description={category.description}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              Don&apos;t see your technology? The Mellivor ecosystem is built to
              keep adding vendors.
            </p>
            <div className="flex flex-shrink-0 gap-3">
              <Button href="/technology-partners" variant="outline" size="md">
                Explore Technology Partners
              </Button>
              <Button href="/technology-partners/become-a-partner" variant="primary" size="md">
                Become a Partner
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
