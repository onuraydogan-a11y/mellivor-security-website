import { Compass, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

const GROUP_ICONS: Record<string, LucideIcon> = {
  "Professional Services": Compass,
  "Managed Security Services": LifeBuoy,
  "Profesyonel Hizmetler": Compass,
  "Yönetilen Güvenlik Hizmetleri": LifeBuoy,
};

export function ProfessionalServices({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).professionalServices;
  const nav = locale === "tr" ? trMainNav : mainNav;
  const services = nav.find((item) => item.label === (locale === "tr" ? "Hizmetler" : "Services"));
  const groups = services?.columns ?? [];
  const servicesHref = locale === "tr" ? "/tr/services" : "/services";

  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            description={strings.description}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {groups.map((group) => {
              const heading = group.heading ?? strings.fallbackHeading;
              const Icon = GROUP_ICONS[heading];

              return (
                <div key={heading} className="rounded-2xl border border-border bg-surface p-7 shadow-sm">
                  {Icon && (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="mt-4 text-base font-semibold text-foreground">{heading}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.links.map((link) => (
                      <Tag key={link.href}>{link.label}</Tag>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href={servicesHref} variant="outline" size="md">
              {strings.exploreServices}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
