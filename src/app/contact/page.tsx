import { Briefcase, LifeBuoy, Handshake, Newspaper, LayoutGrid, Wrench } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

const CONTACT_PATHS = [
  {
    icon: Briefcase,
    title: "Sales",
    description: "Talk to our team about a demo or a new engagement.",
    href: "mailto:sales@mellivorsecurity.com",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Get help with an existing Mellivor deployment.",
    href: "mailto:support@mellivorsecurity.com",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Channel, reseller, and technology partner inquiries.",
    href: "mailto:partners@mellivorsecurity.com",
  },
  {
    icon: Newspaper,
    title: "Press",
    description: "Media inquiries and press requests.",
    href: "mailto:press@mellivorsecurity.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Mellivor"
        description="Reach the right team directly, or request a demo scoped to what you're evaluating."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Get in Touch" title="Choose where to start" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CONTACT_PATHS.map((path) => (
                <Card
                  key={path.title}
                  icon={path.icon}
                  title={path.title}
                  description={path.description}
                  href={path.href}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Explore more of Mellivor"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "See what you'd actually be deploying.",
            href: "/platform",
          },
          {
            icon: Wrench,
            title: "Services",
            description: "How Mellivor's teams support your deployment.",
            href: "/services",
          },
          {
            icon: Handshake,
            title: "Technology Partners",
            description: "The ecosystem Mellivor integrates with.",
            href: "/technology-partners",
          },
        ]}
        className="bg-muted/40"
      />

      <FinalCta />
    </>
  );
}
