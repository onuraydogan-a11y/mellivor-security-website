import { Hero } from "@/components/sections/Hero";
import { WhyMellivor } from "@/components/sections/WhyMellivor";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { TechnologyPartners } from "@/components/sections/TechnologyPartners";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { ResourcesOverview } from "@/components/sections/ResourcesOverview";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata, SITE_NAME } from "@/lib/seo";

// The root page shares its route segment with the root layout, so the
// layout's title template (which every other page picks up automatically)
// doesn't apply here — the full, branded title is set explicitly instead.
export const metadata = {
  ...buildMetadata({
    title: "Security infrastructure for the modern enterprise",
    description:
      "Mellivor unifies detection, response, and risk management on one platform — backed by the people who know how to run it.",
    path: "/",
  }),
  title: {
    absolute: `Security infrastructure for the modern enterprise | ${SITE_NAME}`,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyMellivor />
      <PlatformOverview />
      <SolutionsOverview />
      <TechnologyPartners />
      <IndustriesWeServe />
      <ProfessionalServices />
      <ResourcesOverview />
      <FinalCta />
    </>
  );
}
