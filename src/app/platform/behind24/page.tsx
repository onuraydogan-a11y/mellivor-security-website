import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { Behind24Visual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Behind24",
  description: "Always-on monitoring, detection, and response.",
  path: "/platform/behind24",
});

export default function Behind24Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Behind24"
        description="Always-on monitoring, detection, and response."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={Radar}
        logo="/products/behind24-logo.png"
        eyebrow="Behind24"
        title="Always-on monitoring, detection, and response"
        description="Behind24 watches your environment continuously, correlating signal across endpoints, network, cloud, and identity to catch what point tools miss."
        features={[
          "24/7 monitoring across your technology stack",
          "Correlated detections, not isolated alerts",
          "Guided and automated response playbooks",
          "Backed by Mellivor's managed security team",
        ]}
        visual={<Behind24Visual />}
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
        title="See Behind24 in action"
        description="Request a demo scoped to this product and your environment."
      />
    </>
  );
}
