import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Overview",
    title: "Three ways Mellivor shows up in your stack",
    p1: "Mellivor develops its own platform, delivers the professional and managed services to run it, and distributes, integrates, and supports the vendor technologies already in your environment. Technology Partners is that third pillar — the ecosystem layer that keeps Mellivor vendor-neutral by design.",
    p2: "Rather than asking you to replace what already works, Mellivor connects to it — organized by category so the portfolio can grow to any number of vendors without changing how it's presented.",
  },
  tr: {
    eyebrow: "Genel Bakış",
    title: "Mellivor'un yığınınızda ortaya çıktığı üç yol",
    p1: "Mellivor kendi platformunu geliştirir, onu işletmek için profesyonel ve yönetilen hizmetler sunar ve ortamınızda zaten bulunan tedarikçi teknolojilerini dağıtır, entegre eder ve destekler. Teknoloji Ortakları bu üçüncü sütundur — Mellivor'u tasarım gereği tedarikçiden bağımsız tutan ekosistem katmanı.",
    p2: "Mellivor, zaten işe yarayanı değiştirmenizi istemek yerine ona bağlanır — portföyün, sunuluş şeklini değiştirmeden herhangi bir sayıda tedarikçiye büyüyebilmesi için kategoriye göre düzenlenmiştir.",
  },
};

export function Overview({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            align="left"
          />
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-lg leading-7 text-muted-foreground">
              {strings.p1}
            </p>
            <p className="text-lg leading-7 text-muted-foreground">
              {strings.p2}
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
