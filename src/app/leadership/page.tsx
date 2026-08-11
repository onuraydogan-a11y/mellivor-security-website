import { Briefcase, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership",
  description:
    "Leadership profiles are being finalized for this site. Here's how the team is structured in the meantime.",
  path: "/leadership",
});

const LEADERSHIP_ROLES = [
  "Chief Executive Officer",
  "Chief Technology Officer",
  "Chief Revenue Officer",
  "Chief Information Security Officer",
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The team behind the platform"
        description="Leadership profiles are being finalized for this site. Here's how the team is structured in the meantime."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Leadership Team" title="Executive roles" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERSHIP_ROLES.map((role) => (
                <div
                  key={role}
                  className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                    {role
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{role}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Profile coming soon</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="More about Mellivor"
        links={[
          {
            icon: Briefcase,
            title: "About",
            description: "The story behind the platform this team built.",
            href: "/about",
          },
          {
            icon: Radar,
            title: "Careers",
            description: "Open roles across the organization.",
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
