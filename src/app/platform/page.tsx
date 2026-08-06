import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
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

      <RelatedContent
        title="See the platform in context"
        links={[
          {
            icon: Radar,
            title: "Solutions",
            description: "The business problems this platform is built to solve.",
            href: "/solutions/ai-security",
          },
          {
            icon: Wrench,
            title: "Services",
            description: "The teams who design, deploy, and run the platform with you.",
            href: "/services",
          },
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The ecosystem the platform integrates with.",
            href: "/technology-partners",
          },
        ]}
      />

      <FinalCta
        title="See the Mellivor platform in action"
        description="Request a walkthrough tailored to your environment and technology stack."
      />
    </>
  );
}
