import { Newspaper, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Media and press"
        description="Coverage, announcements, and press contacts for Mellivor Security."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Coverage" title="Press mentions" />
            <div className="mt-14">
              <EmptyState
                icon={Newspaper}
                title="Press coverage will appear here"
                description="Mellivor doesn't have press coverage to feature yet. Check back as announcements are published."
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Media Inquiries" title="Get in touch with our media team" align="left" />
            <p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
              For interview requests, press kits, or media inquiries, reach out at{" "}
              <a href="mailto:press@mellivorsecurity.com" className="font-medium text-primary hover:text-primary-hover">
                press@mellivorsecurity.com
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="More about Mellivor"
        links={[
          {
            icon: Newspaper,
            title: "Resources",
            description: "Research, whitepapers, and news from Mellivor.",
            href: "/resources",
          },
          {
            icon: Briefcase,
            title: "About",
            description: "The story behind the platform.",
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
        title="Have a media inquiry?"
        description="Reach our media team directly and we'll get back to you."
        ctaLabel="Email Media Relations"
        ctaHref="mailto:press@mellivorsecurity.com"
      />
    </>
  );
}
