import { LayoutGrid, Radar, Wrench, Boxes } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { MellivorOneVisual } from "@/components/ui/ProductVisuals";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mellivor One",
  description: "Mellivor ekosistemi için birleşik kontrol düzlemi.",
  path: "/tr/platform/mellivor-one",
});

export default function MellivorOnePageTR() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Mellivor One"
        description="Mellivor ekosistemi için birleşik kontrol düzlemi."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
        size="md"
      />

      <FeatureSection
        icon={LayoutGrid}
        logo="/brand/logo-transparent.svg"
        eyebrow="Mellivor One"
        title="Her şey için Mellivor kontrol düzlemi"
        description="Mellivor One, güvenlik programınız için birleşik komuta merkezidir — platform verilerini, iş akışlarını ve raporlamayı ekibinizin gerçekten kullanmak isteyeceği tek bir yerde toplar."
        features={[
          "Tespit, müdahale ve risk verisi genelinde birleşik pano",
          "Behind24 ve Mellivor AI Kernel bulguları için tek bir görünüm",
          "SOC analistleri, BT ve yöneticiler için role özel görünümler",
          "Merkezi vaka yönetimi ve denetim izi",
        ]}
        visual={<MellivorOneVisual />}
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
        title="Mellivor One'ı uygulamada görün"
        description="Bu ürüne ve ortamınıza özel bir demo talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
