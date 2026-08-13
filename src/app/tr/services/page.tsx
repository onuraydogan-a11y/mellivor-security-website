import {
  Lightbulb,
  PenTool,
  Wrench,
  Rocket,
  Plug,
  ArrowRightLeft,
  GraduationCap,
  Headphones,
  Siren,
  UserCog,
  LayoutGrid,
  Radar,
  Boxes,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { ServiceGroup } from "@/app/services/_components/ServiceGroup";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hizmetler",
  description: "Mellivor'un platformu, onu sizinle birlikte tasarlayan, devreye alan ve işleten ekipler tarafından destekleniyor.",
  path: "/tr/services",
});

const PROFESSIONAL_SERVICES_ICONS = {
  "Danışmanlık": Lightbulb,
  "Mimari Tasarım": PenTool,
  "Uygulama": Wrench,
  "Dağıtım": Rocket,
  "Entegrasyon": Plug,
  "Geçiş": ArrowRightLeft,
  "Eğitim": GraduationCap,
  "Destek": Headphones,
};

const MANAGED_SERVICES_ICONS = {
  "Olay Müdahale": Siren,
  "Teknik Hesap Yönetimi": UserCog,
};

export default function ServicesPageTR() {
  const services = trMainNav.find((item) => item.label === "Hizmetler");
  const professional =
    services?.columns?.find((c) => c.heading === "Profesyonel Hizmetler")?.links ?? [];
  const managed =
    services?.columns?.find((c) => c.heading === "Yönetilen Güvenlik Hizmetleri")?.links ?? [];

  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Baştan sona uzman hizmet"
        description="Mellivor'un platformu, onu sizinle birlikte tasarlayan, devreye alan ve işleten ekipler tarafından destekleniyor."
        primaryCta={{ label: "Demo Talep Edin", href: "/tr/request-demo" }}
      />

      <Section>
        <Container>
          <Reveal>
            <p className="max-w-3xl text-lg leading-7 text-muted-foreground">
              Bu bir ek hizmet menüsü değil — danışmanlık uygulamamızın gerçekte nasıl çalıştığıdır. Mimarinizi tasarlamanıza yardımcı olan ekip, uygulama sürecinde de sürecin içinde kalır ve ortamınızı günlük olarak yöneten kişiler, bir sorun çıktığında karşınıza çıkan kişilerle aynıdır.
            </p>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Hizmet Süreci"
        title="Tek seferlik bir proje değil, tutarlı bir hizmet modeli"
        steps={[
          {
            number: "01",
            title: "Keşif",
            description: "Herhangi bir öneride bulunmadan önce ortamınızı, risk önceliklerinizi ve mevcut yatırımlarınızı anlarız.",
          },
          {
            number: "02",
            title: "Tasarım",
            description: "Uyumluluk, bütçe ve ekip kapasitesi dahil olmak üzere kısıtlarınıza uygun bir çözüm tasarlarız.",
          },
          {
            number: "03",
            title: "Uygulama",
            description: "Yaklaşımı tasarlayan ekiple birlikte devreye alır, entegre eder ve doğrularız.",
          },
          {
            number: "04",
            title: "İşletim",
            description: "Yönetilen hizmetler, eğitim ve sürekli teknik hesap yönetimi ile süreçte yer almaya devam ederiz.",
          },
        ]}
        className="bg-muted/40"
      />

      <ServiceGroup
        eyebrow="Profesyonel Hizmetler"
        title="Uzman destekle tasarlayın, inşa edin ve devreye alın"
        links={professional}
        icons={PROFESSIONAL_SERVICES_ICONS}
        locale="tr"
      />

      <ServiceGroup
        eyebrow="Yönetilen Güvenlik Hizmetleri"
        title="Sürekli operasyonlar, elinizin altında"
        links={managed}
        icons={MANAGED_SERVICES_ICONS}
        className="bg-muted/40"
        locale="tr"
      />

      <RelatedContent
        title="Mellivor'u daha yakından tanıyın"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "Bu hizmetlerin işletmek üzere tasarlandığı ürünleri görün.",
            href: "/tr/platform",
          },
          {
            icon: Radar,
            title: "Çözümler",
            description: "Mellivor'un platformunun ve hizmetlerinin çözdüğü iş sorunları.",
            href: "/tr/solutions/ai-security",
          },
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Entegrasyon hizmetlerimizin bağlandığı ekosistem.",
            href: "/tr/technology-partners",
          },
        ]}
        locale="tr"
      />

      <FinalCta
        title="Hizmetler ekibimizle konuşun"
        description="Ne yapmaya çalıştığınızı bize anlatın, doğru katılım kapsamını birlikte belirleyelim."
        ctaLabel="Demo Talep Edin"
        ctaHref="/tr/request-demo"
      />
    </>
  );
}
