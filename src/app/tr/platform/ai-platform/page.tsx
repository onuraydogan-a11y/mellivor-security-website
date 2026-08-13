import { BrainCircuit, Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { AIPlatformVisual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mellivor AI Kernel",
  description: "Her Mellivor ürününün arkasındaki zeka katmanı.",
  path: "/tr/platform/ai-platform",
});

export default function AIPlatformPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Mellivor AI Kernel"
        description="Her Mellivor ürününün arkasındaki zeka katmanı."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={BrainCircuit}
        logo="/brand/logo-transparent.svg"
        eyebrow="Mellivor AI Kernel"
        title="Her ürünün arkasındaki zeka katmanı"
        description="Mellivor AI Kernel, sinyali önceliklendirir, gürültüyü azaltır ve analistlere bağlam sağlar — böylece zaman, araştırma angaryasına değil gerçek riske gider."
        features={[
          "Gerçek tespit verisiyle eğitilmiş makine öğrenimi modelleri",
          "Otomatik triyaj ve uyarı önceliklendirmesi",
          "Daha hızlı soruşturma için doğal dil özetleri",
          "Yeni tehditler ortaya çıktıkça sürekli olarak yeniden eğitiliyor",
        ]}
        visual={<AIPlatformVisual />}
      />

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
        title="Mellivor AI Kernel'i uygulamada görün"
        description="Bu ürüne ve ortamınıza özel bir demo talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
