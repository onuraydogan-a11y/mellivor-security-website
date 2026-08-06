import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";

export function Integrations() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Integrations"
            title="Connects to what you already run"
            description="The platform is built vendor-neutral from the ground up, integrating with the technology categories your team already relies on."
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

          <div className="mt-10 flex justify-center">
            <Button href="/technology-partners" variant="outline" size="md">
              Explore Technology Partners
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
