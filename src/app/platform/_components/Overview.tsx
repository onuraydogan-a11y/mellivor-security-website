import { BrainCircuit, Radar, LayoutGrid, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function DiagramNode({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-5 text-center">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon aria-hidden className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}

function DiagramArrow() {
  return (
    <>
      <ArrowRight aria-hidden className="hidden h-5 w-5 flex-shrink-0 text-border sm:block" />
      <ArrowDown aria-hidden className="h-5 w-5 flex-shrink-0 text-border sm:hidden" />
    </>
  );
}

export function Overview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="One platform, three pillars"
            description="Mellivor One, Behind24, and the Mellivor AI Platform are built as one system — not three products stapled together after the fact. Each pillar strengthens the others."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <DiagramNode icon={BrainCircuit} label="AI Platform" />
            <DiagramArrow />
            <DiagramNode icon={Radar} label="Behind24" />
            <DiagramArrow />
            <DiagramNode icon={LayoutGrid} label="Mellivor One" />
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            The AI Platform prioritizes signal for Behind24 to act on, and Behind24&apos;s findings
            surface in Mellivor One — one continuous loop instead of three separate tools.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
