import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

/**
 * Homepage-only dark closing section. Deliberately not the shared
 * FinalCta component (used elsewhere as a single-button blue band) —
 * building this separately avoids touching that component's behavior
 * on every other page that renders it.
 */
export function HomeFinalCta({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).homeFinalCta;
  const prefix = locale === "tr" ? "/tr" : "";
  return (
    <Section className="dark bg-background">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {strings.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-7 text-muted-foreground">
            {strings.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`${prefix}/request-demo`} variant="primary" size="lg">
              {t(locale).header.requestDemo}
            </Button>
            <Button href={`${prefix}/contact`} variant="outline" size="lg">
              {strings.talkToExpert}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
