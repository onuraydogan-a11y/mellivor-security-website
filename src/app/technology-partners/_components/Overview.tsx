import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Overview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="Three ways Mellivor shows up in your stack"
            align="left"
          />
          <div className="mt-6 max-w-3xl space-y-4">
            <p className="text-lg leading-7 text-muted-foreground">
              Mellivor develops its own platform, delivers the professional and managed
              services to run it, and distributes, integrates, and supports the vendor
              technologies already in your environment. Technology Partners is that third
              pillar — the ecosystem layer that keeps Mellivor vendor-neutral by design.
            </p>
            <p className="text-lg leading-7 text-muted-foreground">
              Rather than asking you to replace what already works, Mellivor connects to it —
              organized by category so the portfolio can grow to any number of vendors without
              changing how it&apos;s presented.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
