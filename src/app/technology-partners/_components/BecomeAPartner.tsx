import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Become a Partner",
    title: "Bring your technology into the Mellivor ecosystem",
    description: "If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio. Tell us about your technology and where it fits.",
    cta: "Apply to Partner",
  },
  tr: {
    eyebrow: "Ortak Olun",
    title: "Teknolojinizi Mellivor ekosistemine katın",
    description: "Ürününüz kurumların önemsediği bir sorunu çözüyorsa, Mellivor portföyünde muhtemelen ona bir yer vardır. Bize teknolojinizi ve nereye oturduğunu anlatın.",
    cta: "Ortaklık Başvurusu Yapın",
  },
};

export function BecomeAPartner({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const href = locale === "tr" ? "/tr/technology-partners/become-a-partner" : "/technology-partners/become-a-partner";
  return (
    <Section>
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            description={strings.description}
          />
          <div className="mt-8">
            <Button href={href} variant="primary" size="lg">
              {strings.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
