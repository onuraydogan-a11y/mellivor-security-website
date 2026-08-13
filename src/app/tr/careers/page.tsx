import { Briefcase, Users, Handshake, Search } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BulletList } from "@/components/ui/BulletList";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kariyer",
  description:
    "Mellivor öncelikle bir ürün şirketidir — başkasının araçlarını çalıştırmak değil, gerçek bir platform inşa eden mühendisler, araştırmacılar ve analistler.",
  path: "/tr/careers",
});

export default function CareersPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Kariyer"
        title="Kurumların güvendiği platformu inşa edin"
        description="Mellivor öncelikle bir ürün şirketidir — başkasının araçlarını çalıştırmak değil, gerçek bir platform inşa eden mühendisler, araştırmacılar ve analistler."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Burada Çalışmak" title="Aradığımız özellikler" align="left" />
            <div className="mt-6 max-w-2xl">
              <BulletList
                items={[
                  "Sadece biletlere değil, sonuçlara sahip çıkma",
                  "Platform, hizmet ve ekosistem ekipleri arasında rahatça çalışabilme",
                  "Mükemmel göndermek yerine göndermeye ve iyileştirmeye eğilim",
                  "Doğrudan, saygılı iletişim — özellikle bir şeyler ters gittiğinde",
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Açık Pozisyonlar" title="Güncel ilanlar" />
            <div className="mt-14">
              <EmptyState
                icon={Search}
                title="Şu anda listelenen açık pozisyon yok"
                description="Yakında tekrar kontrol edin veya özgeçmişinizi gönderin, uygun bir pozisyon olduğunda sizinle iletişime geçelim."
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Mellivor hakkında daha fazla bilgi"
        links={[
          {
            icon: Briefcase,
            title: "Hakkımızda",
            description: "İnşa edeceğiniz platformun arkasındaki misyon.",
            href: "/tr/about",
          },
          {
            icon: Users,
            title: "Yönetim Ekibi",
            description: "Mellivor'un bir sonraki adımını yönlendiren ekip.",
            href: "/tr/leadership",
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
        title="Doğru rolü göremediniz mi?"
        description="Özgeçmişinizi careers@mellivorsecurity.com adresine gönderin, sizi aklımızda tutalım."
        ctaLabel="Kariyer Ekibine E-posta Gönderin"
        ctaHref="mailto:careers@mellivorsecurity.com"
      />
    </>
  );
}
