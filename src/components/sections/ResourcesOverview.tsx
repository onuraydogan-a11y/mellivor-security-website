import { BookOpen, FlaskConical, FileText, Quote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/navigation";

const FEATURED_LABELS = ["Blog", "Research", "Whitepapers", "Case Studies"];

const RESOURCE_ICONS: Record<string, LucideIcon> = {
  Blog: BookOpen,
  Research: FlaskConical,
  Whitepapers: FileText,
  "Case Studies": Quote,
};

export function ResourcesOverview() {
  const resources = mainNav.find((item) => item.label === "Resources");
  const links = resources?.columns?.[0]?.links ?? [];
  const featured = FEATURED_LABELS.map((label) => links.find((l) => l.label === label)).filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  );

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Research, guidance, and proof it works"
        />

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
      </Container>
    </Section>
  );
}
