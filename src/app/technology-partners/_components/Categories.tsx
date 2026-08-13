import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: { eyebrow: "Technology Categories", title: "The portfolio, organized by category" },
  tr: { eyebrow: "Teknoloji Kategorileri", title: "Kategoriye göre düzenlenmiş portföy" },
};

export function Categories({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={strings.eyebrow} title={strings.title} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                icon={category.icon}
                title={category.name}
                description={category.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
