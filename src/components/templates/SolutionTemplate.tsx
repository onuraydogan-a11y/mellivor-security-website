import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { BulletList } from "@/components/ui/BulletList";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProfessionalServices } from "@/components/sections/ProfessionalServices";
import { FinalCta } from "@/components/sections/FinalCta";
import { mainNav } from "@/lib/navigation";
import { technologyCategories } from "@/lib/technology-partners";
import { FEATURED_RESOURCE_LABELS, RESOURCE_ICONS } from "@/lib/site-content";
import { solutionContent, type SolutionPageContent } from "@/lib/solutions-content";
import { buildMetadata } from "@/lib/seo";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

/** Metadata for a solution page, generated from its existing solutionContent entry. */
export function getSolutionMetadata(slug: string) {
  const content = solutionContent[slug];
  return buildMetadata({
    title: content.title,
    description: content.summary,
    path: `/solutions/${slug}`,
  });
}

/**
 * Shared structure for every solution page: Hero, Overview, Business
 * Challenge, Why It Matters, How Mellivor Solves It, Recommended
 * Technologies, Professional Services, Related Resources, Request
 * Demo. A new solution page is a new SolutionPageContent entry plus a
 * route file that renders this component — never a new layout.
 */
type SolutionTemplateProps = {
  content: SolutionPageContent;
  locale?: Locale;
  requestDemoHref?: string;
  resourcesHref?: string;
};

export function SolutionTemplate({
  content,
  locale = "en",
  requestDemoHref = "/request-demo",
  resourcesHref = "/resources",
}: SolutionTemplateProps) {
  const strings = t(locale).solutionTemplate;
  const resources = mainNav.find((item) => item.label === "Resources");
  const resourceLinks = resources?.columns?.[0]?.links ?? [];
  const featuredResources = FEATURED_RESOURCE_LABELS.map((label) =>
    resourceLinks.find((l) => l.label === label)
  ).filter((link): link is NonNullable<typeof link> => Boolean(link));

  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.summary}
        primaryCta={{ label: t(locale).header.requestDemo, href: requestDemoHref }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.overviewEyebrow} title={strings.overviewTitle} align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              {content.overview.map((paragraph) => (
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
            <SectionHeading eyebrow={strings.challengeEyebrow} title={strings.challengeTitle} align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={content.challenge} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.whyItMattersEyebrow} title={strings.whyItMattersTitle} align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              {content.whyItMatters.map((paragraph) => (
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
            <SectionHeading eyebrow={strings.approachEyebrow} title={strings.approachTitle} align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={content.approach} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={strings.technologiesEyebrow}
              title={strings.technologiesTitle}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {technologyCategories.map((category) => (
                <Card
                  key={category.name}
                  icon={category.icon}
                  title={category.name}
                  description={category.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProfessionalServices locale={locale} />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow={strings.resourcesEyebrow} title={strings.resourcesTitle} />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredResources.map((link) => (
                <Card
                  key={link.href}
                  icon={RESOURCE_ICONS[link.label]}
                  title={link.label}
                  href={locale === "tr" ? `/tr${link.href}` : link.href}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button href={resourcesHref} variant="outline" size="md">
                {strings.viewAllResources}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <FinalCta
        title={strings.finalCtaTitle(content.title)}
        description={strings.finalCtaDescription}
        ctaLabel={t(locale).header.requestDemo}
        ctaHref={requestDemoHref}
      />
    </>
  );
}
