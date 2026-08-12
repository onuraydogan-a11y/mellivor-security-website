import { Handshake, Boxes, Briefcase } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { technologyCategories } from "@/lib/technology-partners";
import { buildMetadata } from "@/lib/seo";

type TechCategoryTemplateProps = {
  categoryName: string;
};

export const CATEGORY_SLUGS: Record<string, string> = {
  "Cloud & Infrastructure": "cloud-infrastructure",
  "Identity & Access": "identity-access",
  "Detection & Response": "detection-response",
  "Network & Perimeter": "network-perimeter",
};

/** Metadata for a Technology Partners category page, generated from its existing technologyCategories entry. */
export function getTechCategoryMetadata(categoryName: string) {
  const category = technologyCategories.find((c) => c.name === categoryName);
  return buildMetadata({
    title: categoryName,
    description: category?.description,
    path: `/technology-partners/${CATEGORY_SLUGS[categoryName]}`,
  });
}

/**
 * Shared structure for every Technology Partners category page.
 * Category metadata and vendor lists both come from
 * technologyCategories — no vendors are invented if the category's
 * list is still empty, matching the honest empty state already used
 * on the main Technology Partners page.
 */
export function TechCategoryTemplate({ categoryName }: TechCategoryTemplateProps) {
  const category = technologyCategories.find((c) => c.name === categoryName);
  const otherCategories = technologyCategories.filter((c) => c.name !== categoryName);

  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title={categoryName}
        description={category?.description}
        secondaryCta={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Partners" title={`${categoryName} technologies`} />
            {category && category.vendors.length > 0 ? (
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {category.vendors.map((vendor) => (
                  <Card
                    key={vendor.slug}
                    icon={category.icon}
                    logo={vendor.logo}
                    logoOnDark={vendor.logoOnDark}
                    title={vendor.name}
                    description={vendor.summary}
                    href={`/technology-partners/${vendor.slug}`}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-14">
                <EmptyState
                  icon={Handshake}
                  title={`No ${categoryName} partners yet`}
                  description="Featured technology partners will appear here as partnerships are confirmed. In the meantime, reach out if you'd like to bring your technology into the Mellivor ecosystem."
                  action={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
                />
              </div>
            )}
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Other Categories" title="Browse the rest of the portfolio" />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherCategories.map((c) => (
                <Card
                  key={c.name}
                  icon={c.icon}
                  title={c.name}
                  description={c.description}
                  href={`/technology-partners/${CATEGORY_SLUGS[c.name]}`}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

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
      />

      <FinalCta
        title="See the ecosystem inside Mellivor One"
        description="Request a demo to see how Mellivor connects to the technologies you already run."
      />
    </>
  );
}
