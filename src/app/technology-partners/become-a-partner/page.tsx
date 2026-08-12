import { Rocket, ShieldCheck, Users2, Wrench, Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { BecomeAPartnerForm } from "./BecomeAPartnerForm";

export const metadata = buildMetadata({
  title: "Become a Partner",
  description:
    "If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio.",
  path: "/technology-partners/become-a-partner",
});

const BENEFITS = [
  {
    icon: Rocket,
    title: "Reach enterprise customers",
    description: "Get in front of the security teams already running Mellivor's platform.",
  },
  {
    icon: ShieldCheck,
    title: "Deep platform integration",
    description: "Connect your technology directly into Mellivor One and Behind24, not a bolt-on connector.",
  },
  {
    icon: Users2,
    title: "Co-marketing opportunities",
    description: "Joint content, launch announcements, and visibility across Mellivor's channels.",
  },
  {
    icon: Wrench,
    title: "Dedicated technical support",
    description: "A named point of contact on Mellivor's side throughout integration and beyond.",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a Partner"
        title="Bring your technology into the Mellivor ecosystem"
        description="If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio."
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Partner Program" title="How the technology partnership works" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Mellivor integrates, distributes, and supports vendor technologies across every
                layer of the stack — organized by category, not locked to a single vendor. The
                technology partner program is for the companies behind those technologies.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                Rather than a generic marketplace listing, partnership means real integration
                work: your technology connects into Mellivor One and Behind24, and shows up
                wherever your category already appears in the Mellivor ecosystem.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="What partners get" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit) => (
                <Card
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Partnership Process"
        title="From application to integration"
        steps={[
          {
            number: "01",
            title: "Apply",
            description: "Tell us about your technology and where it fits in the Mellivor ecosystem.",
          },
          {
            number: "02",
            title: "Technical Review",
            description: "Mellivor's team evaluates fit, overlap, and integration requirements.",
          },
          {
            number: "03",
            title: "Integration",
            description: "Build and validate the connection into Mellivor One and Behind24.",
          },
          {
            number: "04",
            title: "Go Live",
            description: "Your technology appears in the Mellivor ecosystem, ready for customers.",
          },
        ]}
      />

      <Section className="bg-muted/40">
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <BecomeAPartnerForm />
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Related partnership paths"
        links={[
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "Browse the ecosystem this program feeds into.",
            href: "/technology-partners",
          },
          {
            icon: Briefcase,
            title: "Partners",
            description: "For resellers and MSPs, not technology vendors.",
            href: "/partners",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach the right team for your question.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
