import { LayoutGrid, Radar, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { RESOURCE_ICONS } from "@/lib/site-content";

type ResourceCategoryTemplateProps = {
  label: string;
};

/**
 * Shared structure for every Resources category page. No resource
 * items (posts, whitepapers, case studies, etc.) exist in the
 * repository yet, so every category renders the same honest empty
 * state already used elsewhere on the site (Careers, Press, Featured
 * Vendors) rather than inventing content.
 */
export function ResourceCategoryTemplate({ label }: ResourceCategoryTemplateProps) {
  const Icon = RESOURCE_ICONS[label];

  return (
    <>
      <PageHero eyebrow="Resources" title={label} size="md" />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Resources" title={label} />
            <div className="mt-14">
              <EmptyState
                icon={Icon}
                title={`No ${label.toLowerCase()} published yet`}
                description={`${label} will appear here as Mellivor publishes them. In the meantime, browse other resource categories or talk to our team directly.`}
                action={{ label: "Request Demo", href: "/request-demo" }}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

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
        className="bg-muted/40"
      />

      <FinalCta
        title="Get research and updates from Mellivor"
        description="Request a demo, and we'll show you what's most relevant to your environment."
      />
    </>
  );
}
