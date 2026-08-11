import { BrainCircuit, Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { AIPlatformVisual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";

export default function AIPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="AI Platform"
        description="The intelligence layer behind every Mellivor product."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={BrainCircuit}
        eyebrow="AI Platform"
        title="The intelligence layer behind every product"
        description="The Mellivor AI Platform prioritizes signal, reduces noise, and gives analysts context — so time goes to real risk, not investigation busywork."
        features={[
          "Machine learning models trained on real detection data",
          "Automated triage and alert prioritization",
          "Natural-language summaries for faster investigation",
          "Continuously retrained as new threats emerge",
        ]}
        visual={<AIPlatformVisual />}
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
        title="See the AI Platform in action"
        description="Request a demo scoped to this product and your environment."
      />
    </>
  );
}
