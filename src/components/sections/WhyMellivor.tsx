import { Radar, BrainCircuit, ShieldAlert, Target, Siren, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

type Stage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STAGE_ICONS: LucideIcon[] = [Radar, BrainCircuit, ShieldAlert, Target, Siren];

function StageNode({ icon: Icon, title, description }: Stage) {
  return (
    <div className="flex w-40 flex-col items-center gap-3 text-center">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function StageArrow() {
  return (
    <>
      <ArrowRight aria-hidden className="hidden h-5 w-5 flex-shrink-0 text-primary/40 xl:block" />
      <ArrowDown aria-hidden className="h-5 w-5 flex-shrink-0 text-primary/40 xl:hidden" />
    </>
  );
}

export function WhyMellivor({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).whyMellivor;
  const stages: Stage[] = strings.stages.map((stage, index) => ({
    ...stage,
    icon: STAGE_ICONS[index],
  }));

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
          <div className="mt-14 flex flex-col items-center gap-6 xl:flex-row xl:justify-center xl:gap-4">
            {stages.map((stage, index) => (
              <div key={stage.title} className="flex flex-col items-center gap-6 xl:flex-row xl:gap-4">
                <StageNode {...stage} />
                {index < stages.length - 1 && <StageArrow />}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
