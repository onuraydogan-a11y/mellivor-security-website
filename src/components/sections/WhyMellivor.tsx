import { Radar, BrainCircuit, ShieldAlert, Target, Siren, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Stage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/**
 * Same connected-node diagram pattern already used on the Platform
 * page (Overview.tsx's "One platform, three pillars"), extended to
 * five stages. Descriptions are reused/paraphrased from language
 * already used elsewhere on the site (Mellivor AI Kernel, Behind24, and
 * Exposure Management copy) — no new claims introduced.
 */
const STAGES: Stage[] = [
  {
    icon: Radar,
    title: "Signals",
    description: "Telemetry from endpoint, network, cloud, and identity.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    description: "Noise reduced, signal prioritized by the Mellivor AI Kernel.",
  },
  {
    icon: ShieldAlert,
    title: "Risk",
    description: "Exposure scored against what actually matters.",
  },
  {
    icon: Target,
    title: "Decisions",
    description: "Analysts get context, not just alerts.",
  },
  {
    icon: Siren,
    title: "Response",
    description: "Guided and automated action through Behind24.",
  },
];

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

export function WhyMellivor() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Mellivor"
            title="From signal to action"
            description="Mellivor is built around one continuous loop, not a pile of disconnected tools."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center gap-6 xl:flex-row xl:justify-center xl:gap-4">
            {STAGES.map((stage, index) => (
              <div key={stage.title} className="flex flex-col items-center gap-6 xl:flex-row xl:gap-4">
                <StageNode {...stage} />
                {index < STAGES.length - 1 && <StageArrow />}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
