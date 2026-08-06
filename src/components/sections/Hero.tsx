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
          Mellivor unifies detection, response, and risk management on one
          platform — backed by the people who know how to run it.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/request-demo" variant="primary" size="lg">
            Request Demo
          </Button>
          <Button href="/platform" variant="outline" size="lg">
            Explore Platform
          </Button>
        </div>
      </Container>
    </section>
  );
}
