import { Gauge, PiggyBank, Eye, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const BENEFITS = {
  en: [
    { icon: Gauge, title: "Faster time to detection", description: "Correlated signal across the platform shortens the path from event to answer." },
    { icon: PiggyBank, title: "Lower total cost of ownership", description: "One platform to run instead of a growing pile of disconnected point tools." },
    { icon: Eye, title: "One source of truth", description: "A single view of risk, instead of reconciling reports across separate consoles." },
    { icon: TrendingUp, title: "Scales with your environment", description: "Grows from a single business unit to a global enterprise footprint." },
  ],
  tr: [
    { icon: Gauge, title: "Daha hızlı tespit süresi", description: "Platform genelinde ilişkilendirilmiş sinyal, olaydan yanıta giden yolu kısaltır." },
    { icon: PiggyBank, title: "Daha düşük toplam sahip olma maliyeti", description: "Büyüyen, birbirinden kopuk nokta araçları yığını yerine tek bir platform." },
    { icon: Eye, title: "Tek bir doğruluk kaynağı", description: "Ayrı konsollar genelinde raporları uzlaştırmak yerine tek bir risk görünümü." },
    { icon: TrendingUp, title: "Ortamınızla birlikte ölçeklenir", description: "Tek bir iş biriminden küresel bir kurumsal ayak izine kadar büyür." },
  ],
};

const HEADING = {
  en: { eyebrow: "Platform Benefits", title: "Why teams standardize on Mellivor" },
  tr: { eyebrow: "Platform Avantajları", title: "Ekipler neden Mellivor'da standartlaşıyor" },
};

export function PlatformBenefits({ locale = "en" }: { locale?: Locale }) {
  const heading = HEADING[locale];
  const benefits = BENEFITS[locale];
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={heading.eyebrow} title={heading.title} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
