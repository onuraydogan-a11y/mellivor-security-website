import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";
import type { NavLink } from "@/lib/navigation";
import { SERVICE_CAPABILITIES } from "../_content";

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
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = icons[link.label];
              const capabilities = SERVICE_CAPABILITIES[link.label];

              return (
                <div key={link.href} className="rounded-2xl border border-border bg-surface p-7 shadow-sm">
                  {Icon && (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-4 text-base font-semibold text-foreground">{link.label}</h3>
                  {link.description && (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {link.description}
                    </p>
                  )}
                  {capabilities && (
                    <div className="mt-4">
                      <BulletList items={capabilities} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
