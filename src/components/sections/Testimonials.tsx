import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site-content";
import { trTestimonials } from "@/lib/i18n/tr-site-content";
import { t as translate } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

export function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const strings = translate(locale).testimonials;
  const items = locale === "tr" ? trTestimonials : testimonials;
  return (
    <Section className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.company} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm">
                <Quote aria-hidden className="h-5 w-5 text-primary/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-6 text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.role} · {item.company}
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
