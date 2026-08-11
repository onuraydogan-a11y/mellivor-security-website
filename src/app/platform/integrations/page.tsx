import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Integrations } from "../_components/Integrations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform Integrations",
  description:
    "The platform is built vendor-neutral from the ground up, integrating with the technology categories your team already relies on.",
  path: "/platform/integrations",
});

export default function PlatformIntegrationsPage() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Integrations" size="md" />

      <Integrations />

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
