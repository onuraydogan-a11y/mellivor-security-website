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
import { TR_RESOURCE_ICONS } from "@/lib/i18n/tr-site-content";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo";

type ResourceCategoryTemplateProps = {
  label: string;
  locale?: Locale;
};

/** Metadata for a resource category page, generated from its existing navigation.ts entry. */
export function getResourceMetadata(label: string, locale: Locale = "en") {
  const nav = locale === "tr" ? trMainNav : mainNav;
  const resourcesLabel = locale === "tr" ? "Kaynaklar" : "Resources";
  const resources = nav.find((item) => item.label === resourcesLabel);
  const link = resources?.columns?.[0]?.links.find((l) => l.label === label);
  const description =
    locale === "tr"
      ? `Mellivor Security'den ${label.toLowerCase()} — araştırma, rehberlik ve kanıtlanmış sonuçlar.`
      : `${label} from Mellivor Security — research, guidance, and proof it works.`;
  return buildMetadata({
    title: label,
    description,
    path: link?.href ?? (locale === "tr" ? "/tr/resources" : "/resources"),
  });
}

/**
 * Shared structure for every Resources category page. No resource
 * items (posts, whitepapers, case studies, etc.) exist in the
 * repository yet, so every category renders the same honest empty
 * state already used elsewhere on the site (Careers, Press, Featured
 * Vendors) rather than inventing content.
 */
export function ResourceCategoryTemplate({ label, locale = "en" }: ResourceCategoryTemplateProps) {
  const strings = t(locale).resourceCategoryTemplate;
  const Icon = (locale === "tr" ? TR_RESOURCE_ICONS : RESOURCE_ICONS)[label];
  const prefix = locale === "tr" ? "/tr" : "";

  return (
    <>
      <PageHero eyebrow={strings.eyebrow} title={label} size="md" />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.eyebrow} title={label} />
            <div className="mt-14">
              <EmptyState
                icon={Icon}
                title={strings.emptyTitle(label)}
                description={strings.emptyDescription(label)}
                action={{ label: strings.requestDemo, href: `${prefix}/request-demo` }}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title={strings.relatedTitle}
        links={[
          {
            icon: LayoutGrid,
            title: strings.relatedPlatform.title,
            description: strings.relatedPlatform.description,
            href: `${prefix}/platform`,
          },
          {
            icon: Radar,
            title: strings.relatedSolutions.title,
            description: strings.relatedSolutions.description,
            href: `${prefix}/solutions/ai-security`,
          },
          {
            icon: Boxes,
            title: strings.relatedTechPartners.title,
            description: strings.relatedTechPartners.description,
            href: `${prefix}/technology-partners`,
          },
        ]}
        locale={locale}
        className="bg-muted/40"
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
