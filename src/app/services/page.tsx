import {
  Lightbulb,
  PenTool,
  Wrench,
  Rocket,
  Plug,
  ArrowRightLeft,
  GraduationCap,
  Headphones,
  Siren,
  UserCog,
  LayoutGrid,
  Radar,
  Boxes,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceGroup } from "./_components/ServiceGroup";
import { mainNav } from "@/lib/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description: "Mellivor's platform is backed by teams who design, deploy, and run it alongside you.",
  path: "/services",
});

const PROFESSIONAL_SERVICES_ICONS = {
  Consulting: Lightbulb,
  "Architecture Design": PenTool,
  Implementation: Wrench,
  Deployment: Rocket,
  Integration: Plug,
  Migration: ArrowRightLeft,
  Training: GraduationCap,
  Support: Headphones,
};

const MANAGED_SERVICES_ICONS = {
  "Incident Response": Siren,
  "Technical Account Management": UserCog,
};

export default function ServicesPage() {
  const services = mainNav.find((item) => item.label === "Services");
  const professional =
    services?.columns?.find((c) => c.heading === "Professional Services")?.links ?? [];
  const managed =
    services?.columns?.find((c) => c.heading === "Managed Security Services")?.links ?? [];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Expert delivery, start to finish"
        description="Mellivor's platform is backed by teams who design, deploy, and run it alongside you."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
      />

      <Section>
        <Container>
          <Reveal>
            <p className="max-w-3xl text-lg leading-7 text-muted-foreground">
              This isn&apos;t a menu of add-ons — it&apos;s how our consulting practice actually
              engages. The same team that helps you design your architecture stays involved
              through implementation, and the people running your environment day-to-day are
              the same ones who show up when something goes wrong.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="How We Work"
        title="A consistent engagement model, not a one-off project"
        steps={[
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
        ]}
        className="bg-muted/40"
      />

      <ServiceGroup
        eyebrow="Professional Services"
        title="Design, build, and roll out with expert support"
        links={professional}
        icons={PROFESSIONAL_SERVICES_ICONS}
      />

      <ServiceGroup
        eyebrow="Managed Security Services"
        title="Ongoing operations, handled"
        links={managed}
        icons={MANAGED_SERVICES_ICONS}
        className="bg-muted/40"
      />

      <RelatedContent
        title="Explore more of Mellivor"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "See the products these services are built to run.",
            href: "/platform",
          },
          {
            icon: Radar,
            title: "Solutions",
            description: "The business problems Mellivor's platform and services solve.",
            href: "/solutions/ai-security",
          },
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The ecosystem our integration services connect to.",
            href: "/technology-partners",
          },
        ]}
      />

      <FinalCta
        title="Talk to our services team"
        description="Tell us what you're trying to accomplish, and we'll help you scope the right engagement."
      />
    </>
  );
}
