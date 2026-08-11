import { Share2, Users, Wrench, Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partners",
  description:
    "The Mellivor Partner Program is for organizations that want to bring Mellivor's platform and services to their own customers.",
  path: "/partners",
});

const PARTNER_TIERS = [
  {
    icon: Share2,
    title: "Referral Partner",
    description: "Introduce Mellivor to your network and earn for qualified opportunities.",
  },
  {
    icon: Users,
    title: "Reseller Partner",
    description: "Sell Mellivor's platform and services directly as part of your own offering.",
  },
  {
    icon: Wrench,
    title: "Managed Service Provider",
    description: "Deliver Mellivor-powered security services under your own brand.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Grow with Mellivor"
        description="The Mellivor Partner Program is for organizations that want to bring Mellivor's platform and services to their own customers."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Partner Tracks" title="Ways to partner with Mellivor" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PARTNER_TIERS.map((tier) => (
                <Card
                  key={tier.title}
                  icon={tier.icon}
                  title={tier.title}
                  description={tier.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Related partnership paths"
        links={[
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "For vendors, not resellers — bring your technology into the platform.",
            href: "/technology-partners",
          },
          {
            icon: Briefcase,
            title: "About",
            description: "What Mellivor does and why the partner program exists.",
            href: "/about",
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
        title="Apply to the Partner Program"
        description="Tell us about your business and how you'd like to work with Mellivor."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
