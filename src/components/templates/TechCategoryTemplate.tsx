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
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo";

type TechCategoryTemplateProps = {
  categoryName: string;
  locale?: Locale;
};

export const CATEGORY_SLUGS: Record<string, string> = {
  "Cloud & Infrastructure": "cloud-infrastructure",
  "Identity & Access": "identity-access",
  "Detection & Response": "detection-response",
  "Network & Perimeter": "network-perimeter",
};

export const TR_CATEGORY_SLUGS: Record<string, string> = {
  "Bulut ve Altyapı": "cloud-infrastructure",
  "Kimlik ve Erişim": "identity-access",
  "Tespit ve Müdahale": "detection-response",
  "Ağ ve Çevre Güvenliği": "network-perimeter",
};

/** Metadata for a Technology Partners category page, generated from its existing technologyCategories entry. */
export function getTechCategoryMetadata(categoryName: string, locale: Locale = "en") {
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  const slugs = locale === "tr" ? TR_CATEGORY_SLUGS : CATEGORY_SLUGS;
  const category = categories.find((c) => c.name === categoryName);
  return buildMetadata({
    title: categoryName,
    description: category?.description,
    path: `${locale === "tr" ? "/tr" : ""}/technology-partners/${slugs[categoryName]}`,
  });
}

/**
 * Shared structure for every Technology Partners category page.
 * Category metadata and vendor lists both come from
 * technologyCategories — no vendors are invented if the category's
 * list is still empty, matching the honest empty state already used
 * on the main Technology Partners page.
 */
export function TechCategoryTemplate({ categoryName, locale = "en" }: TechCategoryTemplateProps) {
  const strings = t(locale).techCategoryTemplate;
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  const slugs = locale === "tr" ? TR_CATEGORY_SLUGS : CATEGORY_SLUGS;
  const prefix = locale === "tr" ? "/tr" : "";
  const category = categories.find((c) => c.name === categoryName);
  // Only categories with a dedicated index page (a slugs entry) are
  // cross-linked here — newer categories without one yet still appear on
  // the main Technology Partners page and their own vendors' detail pages.
  const otherCategories = categories.filter(
    (c) => c.name !== categoryName && slugs[c.name]
  );
  const becomePartnerHref = `${prefix}/technology-partners/become-a-partner`;

  return (
    <>
      <PageHero
        eyebrow={locale === "tr" ? "Teknoloji Ortakları" : "Technology Partners"}
        title={categoryName}
        description={category?.description}
        secondaryCta={{ label: strings.becomeAPartner, href: becomePartnerHref }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.partnersEyebrow} title={strings.partnersTitle(categoryName)} />
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
                    href={`${prefix}/technology-partners/${vendor.slug}`}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-14">
                <EmptyState
                  icon={Handshake}
                  title={strings.emptyTitle(categoryName)}
                  description={strings.emptyDescription}
                  action={{ label: strings.becomeAPartner, href: becomePartnerHref }}
                />
              </div>
            )}
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.otherCategoriesEyebrow} title={strings.otherCategoriesTitle} />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherCategories.map((c) => (
                <Card
                  key={c.name}
                  icon={c.icon}
                  title={c.name}
                  description={c.description}
                  href={`${prefix}/technology-partners/${slugs[c.name]}`}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title={strings.relatedTitle}
        links={[
          {
            icon: Boxes,
            title: strings.relatedTechPartners.title,
            description: strings.relatedTechPartners.description,
            href: `${prefix}/technology-partners`,
          },
          {
            icon: Briefcase,
            title: strings.relatedPartners.title,
            description: strings.relatedPartners.description,
            href: `${prefix}/partners`,
          },
          {
            icon: Handshake,
            title: strings.relatedContact.title,
            description: strings.relatedContact.description,
            href: `${prefix}/contact`,
          },
        ]}
        locale={locale}
      />

      <FinalCta
        title={strings.finalCtaTitle}
        description={strings.finalCtaDescription}
        ctaLabel={t(locale).header.requestDemo}
        ctaHref={`${prefix}/request-demo`}
      />
    </>
  );
}
