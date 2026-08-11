import { Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { FeaturedVendors } from "../_components/FeaturedVendors";

export default function FeaturedTechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title="Featured Technologies"
        description="Highlighted technologies across the portfolio."
        secondaryCta={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
        size="md"
      />

      <FeaturedVendors />

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
