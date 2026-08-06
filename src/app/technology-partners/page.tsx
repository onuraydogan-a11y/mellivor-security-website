import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Overview } from "./_components/Overview";
import { Categories } from "./_components/Categories";
import { FeaturedVendors } from "./_components/FeaturedVendors";
import { IntegrationEcosystem } from "./_components/IntegrationEcosystem";
import { BecomeAPartner } from "./_components/BecomeAPartner";

export default function TechnologyPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title="A technology ecosystem built to grow"
        description="Mellivor integrates, distributes, and supports leading cybersecurity technologies across every layer of the stack — organized by category, not locked to a single vendor."
        primaryCta={{ label: "Request Demo", href: "/request-demo" }}
        secondaryCta={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
      />
      <Overview />
      <Categories />
      <FeaturedVendors />
      <IntegrationEcosystem />
      <BecomeAPartner />
      <FinalCta
        title="See the ecosystem inside Mellivor One"
        description="Request a demo to see how Mellivor connects to the technologies you already run."
      />
    </>
  );
}
