import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Integration Ecosystem",
    title: "How Mellivor connects to what you run",
    items: [
      "Native, pre-built connectors for common technology categories",
      "Open APIs for connecting technologies outside the pre-built catalog",
      "Behind24 correlation across every connected data source",
      "Professional Services support for complex or custom integrations",
    ],
  },
  tr: {
    eyebrow: "Entegrasyon Ekosistemi",
    title: "Mellivor, kullandığınız araçlara nasıl bağlanır",
    items: [
      "Yaygın teknoloji kategorileri için yerleşik, hazır konnektörler",
      "Hazır katalog dışındaki teknolojileri bağlamak için açık API'ler",
      "Bağlı her veri kaynağı genelinde Behind24 ilişkilendirmesi",
      "Karmaşık veya özel entegrasyonlar için Profesyonel Hizmetler desteği",
    ],
  },
};

export function IntegrationEcosystem({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            align="left"
          />
          <div className="mt-6 max-w-2xl">
            <BulletList items={strings.items} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
