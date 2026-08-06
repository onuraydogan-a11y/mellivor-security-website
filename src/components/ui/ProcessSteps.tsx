import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
};

/** Numbered engagement/process steps — reusable anywhere a "how we work" walkthrough fits. */
export function ProcessSteps({ eyebrow, title, description, steps, className }: ProcessStepsProps) {
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-semibold text-primary">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
