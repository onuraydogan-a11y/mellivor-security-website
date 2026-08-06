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
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceGroup } from "./_components/ServiceGroup";
import { mainNav } from "@/lib/navigation";

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

      <FinalCta
        title="Talk to our services team"
        description="Tell us what you're trying to accomplish, and we'll help you scope the right engagement."
      />
    </>
  );
}
