import { LayoutGrid, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { RequestDemoForm } from "./RequestDemoForm";

export const metadata = buildMetadata({
  title: "Request Demo",
  description:
    "Tell us about your platform, solutions, and deployment model — we'll scope a demo around what you're actually evaluating.",
  path: "/request-demo",
});

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Request Demo"
        title="See Mellivor on your own environment"
        description="Tell us about your platform, solutions, and deployment model — we'll scope a demo around what you're actually evaluating."
        size="md"
      />

      <Section>
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <RequestDemoForm />
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
            icon: Radar,
            title: "Solutions",
            description: "The business problems Mellivor's platform solves.",
            href: "/solutions/ai-security",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach a specific team directly instead.",
            href: "/contact",
          },
        ]}
        className="bg-muted/40"
      />
    </>
  );
}
