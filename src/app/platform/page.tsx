import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Overview } from "./_components/Overview";
import { Products } from "./_components/Products";
import { Integrations } from "./_components/Integrations";
import { DeploymentModels } from "./_components/DeploymentModels";
import { PlatformBenefits } from "./_components/PlatformBenefits";

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The Mellivor technology ecosystem"
        description="One proprietary platform, built to run as a unified whole rather than a collection of point products."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
      <Overview />
      <Products />
      <Integrations />
      <DeploymentModels />
      <PlatformBenefits />
      <FinalCta
        title="See the Mellivor platform in action"
        description="Request a walkthrough tailored to your environment and technology stack."
      />
    </>
  );
}
