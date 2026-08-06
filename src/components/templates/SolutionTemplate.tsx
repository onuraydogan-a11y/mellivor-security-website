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
import type { SolutionPageContent } from "@/lib/solutions-content";

/**
 * Shared structure for every solution page: Hero, Overview, Business
 * Challenge, How Mellivor Solves It, Recommended Technologies,
 * Professional Services, Related Resources, Request Demo. A new
 * solution page is a new SolutionPageContent entry plus a route file
 * that renders this component — never a new layout.
 */
export function SolutionTemplate({ content }: { content: SolutionPageContent }) {
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
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Overview" title="Where this risk comes from" align="left" />
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
            <SectionHeading eyebrow="Business Challenge" title="What enterprises are up against" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={content.challenge} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How Mellivor Solves It" title="The Mellivor approach" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={content.approach} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Recommended Technologies"
              title="Technology categories that support this solution"
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

      <ProfessionalServices />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Related Resources" title="Go deeper" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredResources.map((link) => (
                <Card
                  key={link.href}
                  icon={RESOURCE_ICONS[link.label]}
                  title={link.label}
                  href={link.href}
                />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button href="/resources" variant="outline" size="md">
                View all resources
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <FinalCta
        title={`See ${content.title} in action`}
        description="Request a demo scoped to this solution and your environment."
      />
    </>
  );
}
