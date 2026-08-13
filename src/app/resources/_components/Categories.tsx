import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { RESOURCE_ICONS } from "@/lib/site-content";
import { TR_RESOURCE_ICONS } from "@/lib/i18n/tr-site-content";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: { eyebrow: "Resources", title: "Browse by category" },
  tr: { eyebrow: "Kaynaklar", title: "Kategoriye göre göz atın" },
};

export function Categories({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const nav = locale === "tr" ? trMainNav : mainNav;
  const icons = locale === "tr" ? TR_RESOURCE_ICONS : RESOURCE_ICONS;
  const resourcesLabel = locale === "tr" ? "Kaynaklar" : "Resources";
  const resources = nav.find((item) => item.label === resourcesLabel);
  const links = resources?.columns?.[0]?.links ?? [];

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={strings.eyebrow} title={strings.title} />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <Card
                key={link.href}
                icon={icons[link.label]}
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
