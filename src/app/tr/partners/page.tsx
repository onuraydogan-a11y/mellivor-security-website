import { Share2, Users, Wrench, Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ortaklar",
  description:
    "Mellivor Ortak Programı, Mellivor'un platformunu ve hizmetlerini kendi müşterilerine sunmak isteyen kuruluşlar içindir.",
  path: "/tr/partners",
});

const PARTNER_TIERS = [
  {
    icon: Share2,
    title: "Yönlendirme Ortağı",
    description: "Mellivor'u ağınıza tanıtın ve nitelikli fırsatlar için kazanç elde edin.",
  },
  {
    icon: Users,
    title: "Bayi Ortağı",
    description: "Mellivor'un platformunu ve hizmetlerini kendi teklifinizin bir parçası olarak doğrudan satın.",
  },
  {
    icon: Wrench,
    title: "Yönetilen Hizmet Sağlayıcı",
    description: "Mellivor destekli güvenlik hizmetlerini kendi markanız altında sunun.",
  },
];

export default function PartnersPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Ortaklar"
        title="Mellivor ile büyüyün"
        description="Mellivor Ortak Programı, Mellivor'un platformunu ve hizmetlerini kendi müşterilerine sunmak isteyen kuruluşlar içindir."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Ortaklık Kademeleri" title="Mellivor ile ortaklık kurmanın yolları" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PARTNER_TIERS.map((tier) => (
                <Card
                  key={tier.title}
                  icon={tier.icon}
                  title={tier.title}
                  description={tier.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="İlgili iş birliği yolları"
        links={[
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Bayiler için değil, tedarikçiler için — teknolojinizi platforma katın.",
            href: "/tr/technology-partners",
          },
          {
            icon: Briefcase,
            title: "Hakkımızda",
            description: "Mellivor'un ne yaptığı ve ortak programının neden var olduğu.",
            href: "/tr/about",
          },
          {
            icon: Handshake,
            title: "İletişim",
            description: "Sorunuz için doğru ekibe ulaşın.",
            href: "/tr/contact",
          },
        ]}
        locale="tr"
      />

      <FinalCta
        title="Ortak Programına Başvurun"
        description="İşletmeniz ve Mellivor ile nasıl çalışmak istediğiniz hakkında bize bilgi verin."
        ctaLabel="İletişime Geçin"
        ctaHref="/tr/contact"
      />
    </>
  );
}
