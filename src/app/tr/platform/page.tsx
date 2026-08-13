import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Overview } from "@/app/platform/_components/Overview";
import { Products } from "@/app/platform/_components/Products";
import { Integrations } from "@/app/platform/_components/Integrations";
import { DeploymentModels } from "@/app/platform/_components/DeploymentModels";
import { PlatformBenefits } from "@/app/platform/_components/PlatformBenefits";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform",
  description:
    "Tek bir noktasal ürün koleksiyonu yerine birleşik bir bütün olarak çalışacak şekilde inşa edilmiş, özel bir platform.",
  path: "/tr/platform",
});

export default function PlatformPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Mellivor teknoloji ekosistemi"
        description="Tek bir noktasal ürün koleksiyonu yerine birleşik bir bütün olarak çalışacak şekilde inşa edilmiş, özel bir platform."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
        secondaryCta={{ label: "Satışla Görüşün", href: "/tr/contact" }}
      />
      <Overview locale="tr" />
      <Products locale="tr" />
      <Integrations locale="tr" />
      <DeploymentModels locale="tr" />
      <PlatformBenefits locale="tr" />

      <RelatedContent
        title="Platformu bağlamı içinde görün"
        links={[
          {
            icon: Radar,
            title: "Çözümler",
            description: "Bu platformun çözmek üzere tasarlandığı iş sorunları.",
            href: "/tr/solutions/ai-security",
          },
          {
            icon: Wrench,
            title: "Hizmetler",
            description: "Platformu sizinle birlikte tasarlayan, devreye alan ve işleten ekipler.",
            href: "/tr/services",
          },
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Platformun entegre olduğu ekosistem.",
            href: "/tr/technology-partners",
          },
        ]}
        locale="tr"
      />

      <FinalCta
        title="Mellivor platformunu uygulamada görün"
        description="Ortamınıza ve teknoloji yığınınıza özel bir tanıtım talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
