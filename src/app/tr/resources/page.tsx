import { LayoutGrid, Radar, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { Categories } from "@/app/resources/_components/Categories";
import { FaqSection } from "@/app/resources/_components/FaqSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kaynaklar",
  description:
    "Güvenlik ve risk ekiplerinin daha iyi kararlar almasına yardımcı olmak için Mellivor'un yayınladığı her şey, tek bir yerde.",
  path: "/tr/resources",
});

export default function ResourcesPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Kaynaklar"
        title="Araştırma, rehberlik ve kanıtlanmış sonuçlar"
        description="Güvenlik ve risk ekiplerinin daha iyi kararlar almasına yardımcı olmak için Mellivor'un yayınladığı her şey, tek bir yerde."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
      />

      <Categories locale="tr" />
      <FaqSection locale="tr" />

      <RelatedContent
        title="Mellivor'u daha yakından tanıyın"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "Mellivor'un yayınladığı her şeyin arkasındaki ürünler.",
            href: "/tr/platform",
          },
          {
            icon: Radar,
            title: "Çözümler",
            description: "Mellivor'un belirli iş risklerine nasıl yaklaştığını görün.",
            href: "/tr/solutions/ai-security",
          },
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Mellivor'un araştırma ve entegrasyonlarının kapsadığı ekosistem.",
            href: "/tr/technology-partners",
          },
        ]}
        locale="tr"
      />

      <FinalCta
        title="Mellivor'dan araştırma ve güncellemeler alın"
        description="Demo talep edin, ortamınızla en alakalı olanı size gösterelim."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
