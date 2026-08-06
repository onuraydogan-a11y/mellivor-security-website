import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MellivorOneVisual } from "@/components/ui/ProductVisuals";

export function Hero() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Solutions · Services"
        title="Security infrastructure for the modern enterprise"
        description="Mellivor unifies detection, response, and risk management on one platform — backed by the people who know how to run it."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />

      <Container className="-mt-12 pb-20 sm:-mt-20 sm:pb-28">
        <Reveal delay={150}>
          <div className="relative mx-auto max-w-3xl">
            <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/5 blur-2xl" />
            <MellivorOneVisual />
          </div>
        </Reveal>
      </Container>
    </>
  );
}
