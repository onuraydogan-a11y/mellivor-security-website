import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Integrations",
    title: "Connects to what you already run",
    description: "The platform is built vendor-neutral from the ground up, integrating with the technology categories your team already relies on.",
    cta: "Explore Technology Partners",
  },
  tr: {
    eyebrow: "Entegrasyonlar",
    title: "Zaten kullandığınız araçlara bağlanır",
    description: "Platform, temelden tedarikçiden bağımsız olarak inşa edilmiştir ve ekibinizin zaten güvendiği teknoloji kategorileriyle entegre olur.",
    cta: "Teknoloji Ortaklarını Görüntüle",
  },
};

export function Integrations({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  const href = locale === "tr" ? "/tr/technology-partners" : "/technology-partners";

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            description={strings.description}
          />
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

          <div className="mt-10 flex justify-center">
            <Button href={href} variant="outline" size="md">
              {strings.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
