import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { FEATURED_RESOURCE_LABELS, RESOURCE_ICONS } from "@/lib/site-content";
import { TR_FEATURED_RESOURCE_LABELS, TR_RESOURCE_ICONS } from "@/lib/i18n/tr-site-content";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

export function ResourcesOverview({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).resourcesOverview;
  const nav = locale === "tr" ? trMainNav : mainNav;
  const resourcesLabel = locale === "tr" ? "Kaynaklar" : "Resources";
  const featuredLabels = locale === "tr" ? TR_FEATURED_RESOURCE_LABELS : FEATURED_RESOURCE_LABELS;
  const icons = locale === "tr" ? TR_RESOURCE_ICONS : RESOURCE_ICONS;
  const resourcesHref = locale === "tr" ? "/tr/resources" : "/resources";

  const resources = nav.find((item) => item.label === resourcesLabel);
  const links = resources?.columns?.[0]?.links ?? [];
  const featured = featuredLabels.map((label) => links.find((l) => l.label === label)).filter(
    (link): link is NonNullable<typeof link> => Boolean(link)
  );

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={resourcesLabel}
            title={strings.title}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((link) => (
              <Card
                key={link.href}
                icon={icons[link.label]}
                title={link.label}
                href={link.href}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href={resourcesHref} variant="outline" size="md">
              {strings.viewAll}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
