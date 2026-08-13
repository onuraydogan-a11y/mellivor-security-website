import { LayoutGrid, Radar, Boxes } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { BulletList } from "@/components/ui/BulletList";
import { Tag } from "@/components/ui/Tag";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";
import type { PartnerVendor, TechnologyCategory } from "@/lib/technology-partners";
import { trVendorPossessiveSuffix } from "@/lib/i18n/tr-technology-partners";

type VendorTemplateProps = {
  vendor: PartnerVendor;
  category: TechnologyCategory;
  locale?: Locale;
  requestDemoHref?: string;
};

/**
 * Renders any vendor in the technology-partners.ts catalog. Adding a
 * new partner is a data change (push a PartnerVendor into a
 * TechnologyCategory's `vendors` array) — this component and its
 * route never need to change.
 */
export function VendorTemplate({ vendor, category, locale = "en", requestDemoHref = "/request-demo" }: VendorTemplateProps) {
  const strings = t(locale).vendorTemplate;
  const platformHref = locale === "tr" ? "/tr/platform" : "/platform";
  const solutionsHref = locale === "tr" ? "/tr/solutions/ai-security" : "/solutions/ai-security";
  const techPartnersHref = locale === "tr" ? "/tr/technology-partners" : "/technology-partners";
  const finalCtaVendorName =
    locale === "tr" ? `${vendor.name}${trVendorPossessiveSuffix[vendor.name] ?? "'ın"}` : vendor.name;

  return (
    <>
      <PageHero
        eyebrow={category.name}
        title={vendor.name}
        description={vendor.summary}
        primaryCta={{ label: t(locale).header.requestDemo, href: requestDemoHref }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            {vendor.logo && (
              <span
                className={cn(
                  "mb-6 inline-flex h-12 items-center rounded-xl border border-border px-4",
                  vendor.logoOnDark ? "dark bg-background" : "bg-background"
                )}
              >
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} logo`}
                  className="h-7 max-w-[160px] object-contain"
                />
              </span>
            )}
            <SectionHeading
              eyebrow={strings.overviewEyebrow}
              title={strings.overviewTitle(vendor.name)}
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
            <SectionHeading eyebrow={strings.portfolioEyebrow} title={strings.portfolioTitle} align="left" />
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
              eyebrow={strings.solutionsEyebrow}
              title={strings.solutionsTitle}
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
            <SectionHeading eyebrow={strings.integrationsEyebrow} title={strings.integrationsTitle} align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={vendor.integrations} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProfessionalServices locale={locale} />

      <RelatedContent
        title={strings.relatedTitle}
        links={[
          {
            icon: LayoutGrid,
            title: strings.relatedPlatform.title,
            description: strings.relatedPlatform.description,
            href: platformHref,
          },
          {
            icon: Radar,
            title: strings.relatedSolutions.title,
            description: strings.relatedSolutions.description,
            href: solutionsHref,
          },
          {
            icon: Boxes,
            title: strings.relatedTechPartners.title,
            description: strings.relatedTechPartners.description,
            href: techPartnersHref,
          },
        ]}
        locale={locale}
      />

      <FinalCta
        title={strings.finalCtaTitle(finalCtaVendorName)}
        description={strings.finalCtaDescription}
        ctaLabel={t(locale).header.requestDemo}
        ctaHref={requestDemoHref}
      />
    </>
  );
}
