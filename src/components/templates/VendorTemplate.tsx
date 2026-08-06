import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { BulletList } from "@/components/ui/BulletList";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { FinalCta } from "@/components/sections/FinalCta";
import type { PartnerVendor, TechnologyCategory } from "@/lib/technology-partners";

type VendorTemplateProps = {
  vendor: PartnerVendor;
  category: TechnologyCategory;
};

/**
 * Renders any vendor in the technology-partners.ts catalog. Adding a
 * new partner is a data change (push a PartnerVendor into a
 * TechnologyCategory's `vendors` array) — this component and its
 * route never need to change.
 */
export function VendorTemplate({ vendor, category }: VendorTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={category.name}
        title={vendor.name}
        description={vendor.summary}
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Vendor Overview"
              title={`About ${vendor.name}`}
              align="left"
            />
            <div className="mt-6 max-w-3xl space-y-4">
              {vendor.overview.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Technology Portfolio" title="What this technology covers" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={vendor.portfolio} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Supported Solutions"
              title="Where this fits in the Mellivor ecosystem"
              align="left"
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {vendor.supportedSolutions.map((solution) => (
                <Tag key={solution}>{solution}</Tag>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Integrations" title="How it connects to Mellivor" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={vendor.integrations} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProfessionalServices />

      <FinalCta
        title={`See ${vendor.name} working inside Mellivor`}
        description="Request a demo scoped to this technology and your environment."
      />
    </>
  );
}
