import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { NavLink } from "@/lib/navigation";

type ServiceGroupProps = {
  eyebrow: string;
  title: string;
  description?: string;
  links: NavLink[];
  icons: Record<string, LucideIcon>;
  className?: string;
};

export function ServiceGroup({
  eyebrow,
  title,
  description,
  links,
  icons,
  className,
}: ServiceGroupProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <Card
                key={link.href}
                icon={icons[link.label]}
                title={link.label}
                description={link.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
