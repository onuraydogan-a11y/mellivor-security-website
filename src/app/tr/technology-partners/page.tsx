import { PageHero } from "@/components/ui/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Overview } from "@/app/technology-partners/_components/Overview";
import { Categories } from "@/app/technology-partners/_components/Categories";
import { FeaturedVendors } from "@/app/technology-partners/_components/FeaturedVendors";
import { IntegrationEcosystem } from "@/app/technology-partners/_components/IntegrationEcosystem";
import { BecomeAPartner } from "@/app/technology-partners/_components/BecomeAPartner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teknoloji Ortakları",
  description:
    "Mellivor, yığının her katmanında önde gelen siber güvenlik teknolojilerini entegre eder, dağıtır ve destekler — tek bir tedarikçiye bağlı kalmadan, kategoriye göre düzenlenmiş olarak.",
  path: "/tr/technology-partners",
});

export default function TechnologyPartnersPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Teknoloji Ortakları"
        title="Büyümek üzere kurulmuş bir teknoloji ekosistemi"
        description="Mellivor, yığının her katmanında önde gelen siber güvenlik teknolojilerini entegre eder, dağıtır ve destekler — tek bir tedarikçiye bağlı kalmadan, kategoriye göre düzenlenmiş olarak."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
        secondaryCta={{ label: "Ortak Olun", href: "/tr/technology-partners/become-a-partner" }}
      />
      <Overview locale="tr" />
      <Categories locale="tr" />
      <FeaturedVendors locale="tr" />
      <IntegrationEcosystem locale="tr" />
      <BecomeAPartner locale="tr" />
      <FinalCta
        title="Ekosistemi Mellivor One içinde görün"
        description="Mellivor'un halihazırda kullandığınız teknolojilere nasıl bağlandığını görmek için demo talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
