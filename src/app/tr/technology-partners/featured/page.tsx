import { Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { FinalCta } from "@/components/sections/FinalCta";
import { FeaturedVendors } from "@/app/technology-partners/_components/FeaturedVendors";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Öne Çıkan Teknolojiler",
  description: "Portföydeki öne çıkan teknolojiler.",
  path: "/tr/technology-partners/featured",
});

export default function FeaturedTechnologiesPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Teknoloji Ortakları"
        title="Öne Çıkan Teknolojiler"
        description="Portföydeki öne çıkan teknolojiler."
        secondaryCta={{ label: "Ortak Olun", href: "/tr/technology-partners/become-a-partner" }}
        size="md"
      />

      <FeaturedVendors locale="tr" />

      <RelatedContent
        title="İlgili iş birliği yolları"
        links={[
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Kategorilere göre düzenlenmiş tüm ekosistem.",
            href: "/tr/technology-partners",
          },
          {
            icon: Briefcase,
            title: "Ortaklar",
            description: "Bayiler ve MSP'ler için, teknoloji tedarikçileri için değil.",
            href: "/tr/partners",
          },
          {
            icon: Handshake,
            title: "İletişim",
            description: "Sorunuz için doğru ekibe ulaşın.",
            href: "/tr/contact",
          },
        ]}
        locale="tr"
        className="bg-muted/40"
      />

      <FinalCta
        title="Ekosistemi Mellivor One içinde görün"
        description="Mellivor'un halihazırda kullandığınız teknolojilere nasıl bağlandığını görmek için demo talep edin."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
