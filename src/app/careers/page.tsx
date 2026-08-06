import { Briefcase, Users, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the platform enterprises rely on"
        description="Mellivor is a product company first — engineers, researchers, and analysts building a real platform, not just running someone else's tools."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Working Here" title="What we look for" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList
                items={[
                  "Ownership over outcomes, not just tickets",
                  "Comfort working across platform, services, and ecosystem teams",
                  "A bias toward shipping and iterating over shipping perfectly",
                  "Direct, respectful communication — especially when something's wrong",
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow="Open Positions"
              title="No open roles listed right now"
              description="Check back soon, or send your resume and we'll reach out when something fits."
            />
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="More about Mellivor"
        links={[
          {
            icon: Briefcase,
            title: "About",
            description: "The mission behind the platform you'd be building.",
            href: "/about",
          },
          {
            icon: Users,
            title: "Leadership",
            description: "The team steering where Mellivor goes next.",
            href: "/leadership",
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
        title="Don't see the right role?"
        description="Send your resume to careers@mellivorsecurity.com and we'll keep you in mind."
        ctaLabel="Email Careers"
        ctaHref="mailto:careers@mellivorsecurity.com"
      />
    </>
  );
}
