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
    "Mellivor, kurumsal güvenlik ekiplerinin bir düzine birbirinden kopuk aracı bir araya getirip buna program demekten yorulmasından doğdu.",
  path: "/tr/about",
});

export default function AboutPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Parçalardan bir araya getirilmiş değil, platform olarak inşa edilmiş güvenlik"
        description="Mellivor, kurumsal güvenlik ekiplerinin bir düzine birbirinden kopuk aracı bir araya getirip buna program demekten yorulmasından doğdu."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Hikayemiz" title="Mellivor neden var" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Çoğu güvenlik programı aynı şekilde büyür: tespit için bir araç, müdahale için bir başkası, risk için bir başkası; her biri farklı bir tedarikçiden, her birinin kendi konsolu. Mellivor, bu kuralın istisnası olmak üzere inşa edildi — baştan itibaren tek bir sistem olarak çalışacak şekilde, tek bir ekip tarafından inşa edilmiş tek bir platform.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                O platform — Mellivor One, Behind24 ve Mellivor AI Kernel — profesyonel ve yönetilen hizmet ekipleri tarafından destekleniyor ve bir teknoloji ortağı ekosistemiyle genişletiliyor; böylece müşteriler bir yığın nokta çözüm yerine tutarlı bir program elde ediyor.
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
