import { Users, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { valuePillars } from "@/lib/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Mellivor exists because enterprise security teams were tired of stitching together a dozen disconnected tools and calling it a program.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Security built as a platform, not assembled from parts"
        description="Mellivor exists because enterprise security teams were tired of stitching together a dozen disconnected tools and calling it a program."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="Why Mellivor exists" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Most security programs grow the same way: a tool for detection, another for
                response, another for risk, each from a different vendor, each with its own
                console. Mellivor was built to be the exception — one platform, built by one
                team, designed to work as a single system from the start.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                That platform — Mellivor One, Behind24, and the Mellivor AI Platform — is
                backed by professional and managed services teams, and extended by a
                technology partner ecosystem, so customers get a coherent program instead of
                a pile of point solutions.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What We Believe" title="The principles behind the platform" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {valuePillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Get to know Mellivor"
        links={[
          {
            icon: Users,
            title: "Leadership",
            description: "The team responsible for where Mellivor is headed.",
            href: "/leadership",
          },
          {
            icon: Radar,
            title: "Careers",
            description: "Open roles and what it's like to build here.",
            href: "/careers",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach the right team for your question.",
            href: "/contact",
          },
        ]}
      />

      <FinalCta />
    </>
  );
}
