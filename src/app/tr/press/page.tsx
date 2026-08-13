import { Newspaper, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Basın",
  description: "Mellivor Security için haberler, duyurular ve basın iletişim bilgileri.",
  path: "/tr/press",
});

export default function PressPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Basın"
        title="Medya ve basın"
        description="Mellivor Security için haberler, duyurular ve basın iletişim bilgileri."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Haberler" title="Basında Mellivor" />
            <div className="mt-14">
              <EmptyState
                icon={Newspaper}
                title="Basın haberleri burada yer alacak"
                description="Mellivor'un henüz öne çıkaracak basın haberi yok. Duyurular yayınlandıkça tekrar kontrol edin."
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Medya Talepleri" title="Medya ekibimizle iletişime geçin" align="left" />
            <p className="mt-6 max-w-2xl text-lg leading-7 text-muted-foreground">
              Röportaj talepleri, basın kitleri veya medya soruları için{" "}
              <a href="mailto:press@mellivorsecurity.com" className="font-medium text-primary hover:text-primary-hover">
                press@mellivorsecurity.com
              </a>{" "}
              adresinden bize ulaşın.
            </p>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Mellivor hakkında daha fazla bilgi"
        links={[
          {
            icon: Newspaper,
            title: "Kaynaklar",
            description: "Mellivor'dan araştırma, teknik raporlar ve haberler.",
            href: "/tr/resources",
          },
          {
            icon: Briefcase,
            title: "Hakkımızda",
            description: "Platformun arkasındaki hikaye.",
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
        title="Bir medya sorunuz mu var?"
        description="Medya ekibimizle doğrudan iletişime geçin, size geri dönüş yapalım."
        ctaLabel="Medya İlişkilerine E-posta Gönderin"
        ctaHref="mailto:press@mellivorsecurity.com"
      />
    </>
  );
}
