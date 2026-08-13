import { Wrench, LayoutGrid, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { SERVICE_CAPABILITIES } from "@/app/services/_content";
import { TR_SERVICE_CAPABILITIES } from "@/lib/i18n/tr-services-content";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";
import { buildMetadata } from "@/lib/seo";

/** Metadata for a service page, generated from its existing navigation.ts entry. */
export function getServiceMetadata(label: string, locale: Locale = "en") {
  const nav = locale === "tr" ? trMainNav : mainNav;
  const servicesLabel = locale === "tr" ? "Hizmetler" : "Services";
  const services = nav.find((item) => item.label === servicesLabel);
  const column = services?.columns?.find((c) => c.links.some((link) => link.label === label));
  const link = column?.links.find((l) => l.label === label);
  return buildMetadata({
    title: label,
    description: link?.description,
    path: link?.href ?? (locale === "tr" ? "/tr/services" : "/services"),
  });
}

type ServiceTemplateProps = {
  label: string;
  locale?: Locale;
  requestDemoHref?: string;
};

/**
 * Shared structure for every Professional/Managed Services detail page.
 * All content is looked up from the existing Services IA (mainNav) and
 * capability bullets (services/_content.ts) rather than duplicated per
 * page — a new service page is a nav entry plus a thin route file that
 * renders this component.
 */
export function ServiceTemplate({ label, locale = "en", requestDemoHref = "/request-demo" }: ServiceTemplateProps) {
  const strings = t(locale).serviceTemplate;
  const nav = locale === "tr" ? trMainNav : mainNav;
  const servicesLabel = locale === "tr" ? "Hizmetler" : "Services";
  const services = nav.find((item) => item.label === servicesLabel);
  const column = services?.columns?.find((c) => c.links.some((link) => link.label === label));
  const link = column?.links.find((l) => l.label === label);
  const capabilities = (locale === "tr" ? TR_SERVICE_CAPABILITIES[label] : SERVICE_CAPABILITIES[label]) ?? [];
  const platformHref = locale === "tr" ? "/tr/platform" : "/platform";
  const servicesHref = locale === "tr" ? "/tr/services" : "/services";
  const techPartnersHref = locale === "tr" ? "/tr/technology-partners" : "/technology-partners";

  return (
    <>
      <PageHero
        eyebrow={column?.heading ?? strings.overviewEyebrow}
        title={label}
        description={link?.description}
        primaryCta={{ label: t(locale).header.requestDemo, href: requestDemoHref }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.overviewEyebrow} title={strings.overviewTitle} align="left" />
            <div className="mt-6 max-w-3xl">
              <p className="text-lg leading-7 text-muted-foreground">
                {strings.overviewParagraph}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.capabilitiesEyebrow} title={strings.capabilitiesTitle(label)} align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={capabilities} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow={strings.processEyebrow}
        title={strings.processTitle}
        steps={[...strings.processSteps]}
      />

      <RelatedContent
        title={strings.relatedTitle}
        links={[
          {
            icon: Wrench,
            title: strings.relatedAllServices.title,
            description: strings.relatedAllServices.description,
            href: servicesHref,
          },
          {
            icon: LayoutGrid,
            title: strings.relatedPlatform.title,
            description: strings.relatedPlatform.description,
            href: platformHref,
          },
          {
            icon: Boxes,
            title: strings.relatedTechPartners.title,
            description: strings.relatedTechPartners.description,
            href: techPartnersHref,
          },
        ]}
        locale={locale}
        className="bg-muted/40"
      />

      <FinalCta
        title={strings.finalCtaTitle(label)}
        description={strings.finalCtaDescription}
        ctaLabel={t(locale).header.requestDemo}
        ctaHref={requestDemoHref}
      />
    </>
  );
}
