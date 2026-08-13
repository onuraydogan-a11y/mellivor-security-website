import { Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { Behind24Visual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Behind24",
  description: "Sürekli izleme, tespit ve müdahale.",
  path: "/tr/platform/behind24",
});

export default function Behind24PageTR() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Behind24"
        description="Sürekli izleme, tespit ve müdahale."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={Radar}
        logo="/products/behind24-logo.png"
        eyebrow="Behind24"
        title="Sürekli izleme, tespit ve müdahale"
        description="Behind24, nokta araçların kaçırdığını yakalamak için uç noktalar, ağ, bulut ve kimlik genelindeki sinyali ilişkilendirerek ortamınızı sürekli izler."
        features={[
          "Teknoloji yığınınız genelinde 7/24 izleme",
          "İzole uyarılar değil, ilişkilendirilmiş tespitler",
          "Yönlendirilen ve otomatikleştirilen müdahale playbook'ları",
          "Mellivor'un yönetilen güvenlik ekibi tarafından destekleniyor",
        ]}
        visual={<Behind24Visual />}
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
        title="Behind24'ü uygulamada görün"
        description="Bu ürüne ve ortamınıza özel bir demo talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
