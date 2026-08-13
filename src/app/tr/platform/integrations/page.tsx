import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Integrations } from "@/app/platform/_components/Integrations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform Entegrasyonları",
  description:
    "Platform, temelden tedarikçiden bağımsız olarak inşa edilmiştir ve ekibinizin zaten güvendiği teknoloji kategorileriyle entegre olur.",
  path: "/tr/platform/integrations",
});

export default function PlatformIntegrationsPageTR() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Entegrasyonlar" size="md" />

      <Integrations locale="tr" />

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
