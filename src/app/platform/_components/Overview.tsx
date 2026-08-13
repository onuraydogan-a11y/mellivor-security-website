import { BrainCircuit, Radar, LayoutGrid, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Overview",
    title: "One platform, three pillars",
    description: "Mellivor One, Behind24, and the Mellivor AI Kernel are built as one system — not three products stapled together after the fact. Each pillar strengthens the others.",
    footer: "The Mellivor AI Kernel prioritizes signal for Behind24 to act on, and Behind24's findings surface in Mellivor One — one continuous loop instead of three separate tools.",
  },
  tr: {
    eyebrow: "Genel Bakış",
    title: "Tek platform, üç sütun",
    description: "Mellivor One, Behind24 ve Mellivor AI Kernel; sonradan bir araya getirilmiş üç ürün değil, tek bir sistem olarak inşa edildi. Her sütun diğerlerini güçlendirir.",
    footer: "Mellivor AI Kernel, Behind24'ün harekete geçeceği sinyali önceliklendirir ve Behind24'ün bulguları Mellivor One'da ortaya çıkar — üç ayrı araç yerine tek bir sürekli döngü.",
  },
};

function DiagramNode({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-7 py-6 text-center shadow-sm">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}

function DiagramArrow() {
  return (
    <>
      <ArrowRight aria-hidden className="hidden h-5 w-5 flex-shrink-0 text-primary/40 sm:block" />
      <ArrowDown aria-hidden className="h-5 w-5 flex-shrink-0 text-primary/40 sm:hidden" />
    </>
  );
}

export function Overview({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
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
          <div className="relative mt-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(50% 60% at 50% 50%, var(--color-primary) 0%, transparent 70%)",
                opacity: 0.06,
              }}
            />
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <DiagramNode icon={BrainCircuit} label="Mellivor AI Kernel" />
              <DiagramArrow />
              <DiagramNode icon={Radar} label="Behind24" />
              <DiagramArrow />
              <DiagramNode icon={LayoutGrid} label="Mellivor One" />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {strings.footer}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
