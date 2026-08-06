import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { RESOURCE_ICONS } from "@/lib/site-content";

export function Categories() {
  const resources = mainNav.find((item) => item.label === "Resources");
  const links = resources?.columns?.[0]?.links ?? [];

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Resources" title="Browse by category" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <Card
                key={link.href}
                icon={RESOURCE_ICONS[link.label]}
                title={link.label}
                href={link.href}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
