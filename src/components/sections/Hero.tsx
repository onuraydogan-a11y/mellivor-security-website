import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, var(--color-primary) 0%, transparent 70%)",
          opacity: 0.12,
        }}
      />

      <Container className="flex flex-col items-center py-28 text-center sm:py-36">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Trusted by security-conscious enterprises
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Security infrastructure for the modern enterprise
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Mellivor Security helps engineering and risk teams find what
          attackers would find first — before they do.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg">
            Talk to sales
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore services
          </Button>
        </div>
      </Container>
    </section>
  );
}
