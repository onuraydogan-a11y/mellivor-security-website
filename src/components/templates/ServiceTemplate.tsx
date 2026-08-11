import { Wrench, LayoutGrid, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { mainNav } from "@/lib/navigation";
import { SERVICE_CAPABILITIES } from "@/app/services/_content";

/** Same engagement model already described on the Services overview page — not service-specific, so it's shared verbatim rather than reworded per page. */
const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your environment, risk priorities, and existing investments before recommending anything.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect a solution matched to your constraints — compliance, budget, and team capacity included.",
  },
  {
    number: "03",
    title: "Implement",
    description: "Deploy, integrate, and validate with the same team that designed the approach.",
  },
  {
    number: "04",
    title: "Operate",
    description: "Stay engaged through managed services, training, and ongoing technical account management.",
  },
];

type ServiceTemplateProps = {
  label: string;
};

/**
 * Shared structure for every Professional/Managed Services detail page.
 * All content is looked up from the existing Services IA (mainNav) and
 * capability bullets (services/_content.ts) rather than duplicated per
 * page — a new service page is a nav entry plus a thin route file that
 * renders this component.
 */
export function ServiceTemplate({ label }: ServiceTemplateProps) {
  const services = mainNav.find((item) => item.label === "Services");
  const column = services?.columns?.find((c) => c.links.some((link) => link.label === label));
  const link = column?.links.find((l) => l.label === label);
  const capabilities = SERVICE_CAPABILITIES[label] ?? [];

  return (
    <>
      <PageHero
        eyebrow={column?.heading ?? "Services"}
        title={label}
        description={link?.description}
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Overview" title="How this engagement works" align="left" />
            <div className="mt-6 max-w-3xl">
              <p className="text-lg leading-7 text-muted-foreground">
                This isn&apos;t a menu of add-ons — it&apos;s how our consulting practice actually
                engages. The same team that helps you design your architecture stays involved
                through implementation, and the people running your environment day-to-day are
                the same ones who show up when something goes wrong.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Key Capabilities" title={`What ${label} includes`} align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList items={capabilities} />
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Engagement Process"
        title="A consistent engagement model, not a one-off project"
        steps={ENGAGEMENT_STEPS}
      />

      <RelatedContent
        title="Explore more of Mellivor"
        links={[
          {
            icon: Wrench,
            title: "All Services",
            description: "Mellivor's platform is backed by teams who design, deploy, and run it alongside you.",
            href: "/services",
          },
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "See what you'd actually be deploying.",
            href: "/platform",
          },
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The ecosystem Mellivor integrates with.",
            href: "/technology-partners",
          },
        ]}
        className="bg-muted/40"
      />

      <FinalCta
        title={`See ${label} in action`}
        description="Request a demo scoped to this service and your environment."
      />
    </>
  );
}
