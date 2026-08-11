import { Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { IntegrationEcosystem } from "../_components/IntegrationEcosystem";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Integration Ecosystem",
  description: "How Mellivor connects to the tools you already run.",
  path: "/technology-partners/integrations",
});

export default function TechnologyPartnersIntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title="Integration Ecosystem"
        description="How Mellivor connects to the tools you already run."
        secondaryCta={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
        size="md"
      />

      <IntegrationEcosystem />

      <RelatedContent
        title="Related partnership paths"
        links={[
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The full ecosystem, organized by category.",
            href: "/technology-partners",
          },
          {
            icon: Briefcase,
            title: "Partners",
            description: "For resellers and MSPs, not technology vendors.",
            href: "/partners",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach the right team for your question.",
            href: "/contact",
          },
        ]}
        className="bg-muted/40"
      />

      <FinalCta
        title="See the ecosystem inside Mellivor One"
        description="Request a demo to see how Mellivor connects to the technologies you already run."
      />
    </>
  );
}
