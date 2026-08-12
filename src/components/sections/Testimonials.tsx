import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site-content";

export function Testimonials() {
  return (
    <Section className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Customer Stories"
            title="Trusted by security teams that can't afford blind spots"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.company} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm">
                <Quote aria-hidden className="h-5 w-5 text-primary/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-6 text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
