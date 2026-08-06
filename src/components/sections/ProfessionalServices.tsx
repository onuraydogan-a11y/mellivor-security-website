import { Compass, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";

const GROUP_ICONS: Record<string, LucideIcon> = {
  "Professional Services": Compass,
  "Managed Security Services": LifeBuoy,
};

export function ProfessionalServices() {
  const services = mainNav.find((item) => item.label === "Services");
  const groups = services?.columns ?? [];

  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Expert delivery, start to finish"
            description="Mellivor's platform is backed by teams who design, deploy, and run it alongside you."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {groups.map((group) => {
              const heading = group.heading ?? "Services";
              const Icon = GROUP_ICONS[heading];

              return (
                <div key={heading} className="rounded-2xl border border-border bg-surface p-6">
                  {Icon && (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-4 text-base font-semibold text-foreground">{heading}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.links.map((link) => (
                      <li
                        key={link.href}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {link.label}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="outline" size="md">
              Explore services
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
