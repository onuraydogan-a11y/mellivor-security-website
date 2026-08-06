import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "../_content";

export function FaqSection() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
