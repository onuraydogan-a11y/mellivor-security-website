import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

export function TechnologyPartners({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).technologyPartnersSection;
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  const prefix = locale === "tr" ? "/tr" : "";

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

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-8 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              {strings.ctaText}
            </p>
            <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={`${prefix}/technology-partners`} variant="outline" size="md">
                {strings.exploreTechPartners}
              </Button>
              <Button href={`${prefix}/technology-partners/become-a-partner`} variant="primary" size="md">
                {strings.becomeAPartner}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
