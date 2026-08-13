import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Overview } from "@/app/platform/_components/Overview";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform Genel Bakış",
  description:
    "Mellivor One, Behind24 ve Mellivor AI Kernel; sonradan bir araya getirilmiş üç ürün değil, tek bir sistem olarak inşa edildi.",
  path: "/tr/platform/overview",
});

export default function PlatformOverviewPageTR() {
  return (
    <>
      <PageHero eyebrow="Platform" title="Platform Genel Bakış" size="md" />

      <Overview locale="tr" />

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
