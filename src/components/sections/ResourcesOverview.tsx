import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { FEATURED_RESOURCE_LABELS, RESOURCE_ICONS } from "@/lib/site-content";

export function ResourcesOverview() {
  const resources = mainNav.find((item) => item.label === "Resources");
  const links = resources?.columns?.[0]?.links ?? [];
  const featured = FEATURED_RESOURCE_LABELS.map((label) => links.find((l) => l.label === label)).filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  );

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Research, guidance, and proof it works"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((link) => (
              <Card
                key={link.href}
                icon={RESOURCE_ICONS[link.label]}
                title={link.label}
                href={link.href}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/resources" variant="outline" size="md">
              View all resources
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
