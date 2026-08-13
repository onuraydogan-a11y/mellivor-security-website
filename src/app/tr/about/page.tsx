import { Users, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { trValuePillars } from "@/lib/i18n/tr-site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "Mellivor, kurumsal güvenlik ekiplerinin bir düzine birbirinden kopuk aracı bir araya getirip buna bir güvenlik programı demekten yorulmasıyla ortaya çıktı.",
  path: "/tr/about",
});

export default function AboutPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Parçalardan bir araya getirilmeden, bir platform olarak inşa edilmiş güvenlik uygulaması"
        description="Mellivor, kurumsal güvenlik ekiplerinin bir düzine birbirinden kopuk aracı bir araya getirip buna bir güvenlik programı demekten yorulmasıyla ortaya çıktı."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Hikayemiz" title="Mellivor neden var" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Çoğu güvenlik programı aynı şekilde büyür: tespit için bir araç, müdahale için başka bir araç, risk yönetimi için bir başkası; her biri farklı bir tedarikçiden, her birinin kendi konsolu. Mellivor, bu modele alternatif olmak üzere tasarlandı — en başından itibaren tek bir sistem olarak çalışacak şekilde, tek bir ekip tarafından geliştirilen tek bir platform.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                Bu platform; Mellivor One, Behind24 ve Mellivor AI Kernel&apos;den oluşuyor. Profesyonel ve yönetilen hizmet ekipleri tarafından destekleniyor, teknoloji ortağı ekosistemiyle genişletiliyor. Böylece müşteriler, birbiriyle bağlantısız nokta çözümlerinden oluşan bir yığın yerine, tutarlı ve bütünleşik bir güvenlik programına sahip oluyor.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="İnandıklarımız" title="Platformun arkasındaki ilkeler" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trValuePillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Mellivor'u yakından tanıyın"
        links={[
          {
            icon: Users,
            title: "Yönetim Ekibi",
            description: "Mellivor'un yönünden sorumlu ekip.",
            href: "/tr/leadership",
          },
          {
            icon: Radar,
            title: "Kariyer",
            description: "Açık pozisyonlar ve burada inşa etmenin nasıl bir şey olduğu.",
            href: "/tr/careers",
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
        title="Mellivor'u kendi ortamınızda görün"
        description="Platformunuza, çözümlerinize ve dağıtım modelinize özel bir demo hakkında ekibimizle konuşun."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
