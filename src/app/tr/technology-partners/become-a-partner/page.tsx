import { Rocket, ShieldCheck, Users2, Wrench, Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { BecomeAPartnerFormTR } from "./BecomeAPartnerFormTR";

export const metadata = buildMetadata({
  title: "Ortak Olun",
  description:
    "Ürününüz kurumların önemsediği bir sorunu çözüyorsa, Mellivor portföyünde muhtemelen ona bir yer vardır.",
  path: "/tr/technology-partners/become-a-partner",
});

const BENEFITS = [
  {
    icon: Rocket,
    title: "Kurumsal müşterilere ulaşın",
    description: "Mellivor'un platformunu zaten kullanan güvenlik ekiplerinin karşısına çıkın.",
  },
  {
    icon: ShieldCheck,
    title: "Derin platform entegrasyonu",
    description: "Teknolojinizi eklenti bir konnektör değil, doğrudan Mellivor One ve Behind24'e bağlayın.",
  },
  {
    icon: Users2,
    title: "Ortak pazarlama fırsatları",
    description: "Mellivor'un kanalları genelinde ortak içerik, lansman duyuruları ve görünürlük.",
  },
  {
    icon: Wrench,
    title: "Özel teknik destek",
    description: "Entegrasyon boyunca ve sonrasında Mellivor tarafında atanmış bir teknik irtibat noktası.",
  },
];

export default function BecomeAPartnerPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Ortak Olun"
        title="Teknolojinizi Mellivor ekosistemine katın"
        description="Ürününüz kurumların önemsediği bir sorunu çözüyorsa, Mellivor portföyünde muhtemelen ona bir yer vardır."
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Ortaklık Programı" title="Teknoloji ortaklığı nasıl işler" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Mellivor, yığının her katmanında tedarikçi teknolojilerini entegre eder, dağıtır ve destekler — tek bir tedarikçiye bağlı kalmadan, kategoriye göre düzenlenmiş olarak. Teknoloji ortağı programı, bu teknolojilerin arkasındaki şirketler içindir.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                Genel bir pazar yeri listelemesi yerine, ortaklık gerçek entegrasyon işi anlamına gelir: teknolojiniz Mellivor One ve Behind24&apos;e bağlanır ve kategoriniz Mellivor ekosisteminde zaten göründüğü her yerde ortaya çıkar.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Avantajlar" title="Ortaklar neler kazanır" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit) => (
                <Card
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Ortaklık Süreci"
        title="Başvurudan entegrasyona"
        steps={[
          {
            number: "01",
            title: "Başvuru",
            description: "Teknolojinizi ve Mellivor ekosisteminde nereye oturduğunu bize anlatın.",
          },
          {
            number: "02",
            title: "Teknik İnceleme",
            description: "Mellivor'un ekibi uyumu, örtüşmeyi ve entegrasyon gereksinimlerini değerlendirir.",
          },
          {
            number: "03",
            title: "Entegrasyon",
            description: "Mellivor One ve Behind24'e bağlantıyı inşa edin ve doğrulayın.",
          },
          {
            number: "04",
            title: "Canlıya Geçiş",
            description: "Teknolojiniz, müşteriler için hazır olarak Mellivor ekosisteminde görünür.",
          },
        ]}
      />

      <Section className="bg-muted/40">
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <BecomeAPartnerFormTR />
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="İlgili iş birliği yolları"
        links={[
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Bu programın beslediği ekosisteme göz atın.",
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
      />
    </>
  );
}
