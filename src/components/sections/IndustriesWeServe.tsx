import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/site-content";
import { trIndustries } from "@/lib/i18n/tr-site-content";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

export function IndustriesWeServe({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).industries;
  const items = locale === "tr" ? trIndustries : industries;
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((industry) => (
              <Card key={industry.name} icon={industry.icon} title={industry.name} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
