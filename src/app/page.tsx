import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyMellivor } from "@/components/sections/WhyMellivor";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { TechnologyPartners } from "@/components/sections/TechnologyPartners";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { ResourcesOverview } from "@/components/sections/ResourcesOverview";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
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
