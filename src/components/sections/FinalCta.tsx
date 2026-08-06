import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type FinalCtaProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function FinalCta({
  title = "See Mellivor on your own environment",
  description = "Talk to our team about a demo tailored to your platform, solutions, and deployment model.",
  ctaLabel = "Request Demo",
  ctaHref = "/request-demo",
}: FinalCtaProps) {
  return (
    <Section className="bg-primary">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-7 text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8">
            <Button
              href={ctaHref}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
