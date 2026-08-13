import { HeroTR } from "@/components/sections/HeroTR";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyMellivor } from "@/components/sections/WhyMellivor";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { TechnologyPartners } from "@/components/sections/TechnologyPartners";
import { IndustriesWeServe } from "@/components/sections/IndustriesWeServe";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { ResourcesOverview } from "@/components/sections/ResourcesOverview";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { buildMetadata, SITE_NAME } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Modern kurumlar için güvenlik altyapısı",
    description:
      "Mellivor; tespit, müdahale ve risk yönetimini tek bir platformda birleştirir — bunu nasıl işleteceğini bilen ekibin desteğiyle.",
    path: "/tr",
  }),
  title: {
    absolute: `Modern kurumlar için güvenlik altyapısı | ${SITE_NAME}`,
  },
};

export default function HomeTR() {
  return (
    <>
      <HeroTR />
      <TrustBar locale="tr" />
      <WhyMellivor locale="tr" />
      <PlatformOverview locale="tr" />
      <SolutionsOverview locale="tr" />
      <TechnologyPartners locale="tr" />
      <IndustriesWeServe locale="tr" />
      <ProfessionalServices locale="tr" />
      <ResourcesOverview locale="tr" />
      <HomeFinalCta locale="tr" />
    </>
  );
}
