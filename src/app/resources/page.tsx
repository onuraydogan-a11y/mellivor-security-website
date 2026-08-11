import { LayoutGrid, Radar, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Categories } from "./_components/Categories";
import { FaqSection } from "./_components/FaqSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Everything Mellivor publishes to help security and risk teams make better decisions, in one place.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Research, guidance, and proof it works"
        description="Everything Mellivor publishes to help security and risk teams make better decisions, in one place."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <Categories />
      <FaqSection />

      <RelatedContent
        title="Explore more of Mellivor"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "The products behind everything Mellivor publishes.",
            href: "/platform",
          },
          {
            icon: Radar,
            title: "Solutions",
            description: "See how Mellivor approaches specific business risks.",
            href: "/solutions/ai-security",
          },
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The ecosystem Mellivor's research and integrations cover.",
            href: "/technology-partners",
          },
        ]}
      />

      <FinalCta
        title="Get research and updates from Mellivor"
        description="Request a demo, and we'll show you what's most relevant to your environment."
      />
    </>
  );
}
