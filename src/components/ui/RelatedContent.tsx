import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

type RelatedLink = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  href: string;
};

type RelatedContentProps = {
  title?: string;
  links: RelatedLink[];
  className?: string;
};

/**
 * Generic cross-page link grid — satisfies the "every page should
 * feel connected" requirement without every page inventing its own
 * related-links layout.
 */
export function RelatedContent({ title = "Where to go next", links, className }: RelatedContentProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Related" title={title} />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Card
                key={link.href}
                icon={link.icon}
                title={link.title}
                description={link.description}
                href={link.href}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
