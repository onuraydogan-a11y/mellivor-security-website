import { PageHero } from "@/components/ui/PageHero";
import { HomeHeroVisual } from "@/components/ui/ProductVisuals";

export function Hero() {
  return (
    <PageHero
      eyebrow="Platform · Solutions · Services"
      title="Security infrastructure for the modern enterprise"
      description="Mellivor unifies detection, response, and risk management on one platform — backed by the people who know how to run it."
      primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      visual={<HomeHeroVisual />}
    />
  );
}
