import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "../_content";
import { trFaqs } from "@/lib/i18n/tr-resources-content";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: { eyebrow: "FAQ", title: "Common questions" },
  tr: { eyebrow: "SSS", title: "Sık sorulan sorular" },
};

export function FaqSection({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const items = locale === "tr" ? trFaqs : faqs;
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={strings.eyebrow} title={strings.title} />
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {items.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
