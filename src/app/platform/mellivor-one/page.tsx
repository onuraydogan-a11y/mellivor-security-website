import { LayoutGrid, Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { MellivorOneVisual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";

export default function MellivorOnePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Mellivor One"
        description="The unified control plane for the Mellivor ecosystem."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={LayoutGrid}
        eyebrow="Mellivor One"
        title="The control plane for everything Mellivor"
        description="Mellivor One is the unified command center for your security program — bringing platform data, workflows, and reporting into a single place your team actually wants to use."
        features={[
          "Unified dashboard across detection, response, and risk data",
          "Single pane of glass for Behind24 and AI Platform findings",
          "Role-based views for SOC analysts, IT, and executives",
          "Centralized case management and audit trail",
        ]}
        visual={<MellivorOneVisual />}
      />

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
        title="See Mellivor One in action"
        description="Request a demo scoped to this product and your environment."
      />
    </>
  );
}
