import { LayoutGrid, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";
import { RequestDemoFormTR } from "./RequestDemoFormTR";

export const metadata = buildMetadata({
  title: "Demo Talep Edin",
  description:
    "Platformunuz, çözümleriniz ve dağıtım modeliniz hakkında bize bilgi verin — gerçekte değerlendirdiğiniz şeye göre bir demo planlayalım.",
  path: "/tr/request-demo",
});

export default function RequestDemoPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Demo Talep Edin"
        title="Mellivor'u kendi ortamınızda görün"
        description="Platformunuz, çözümleriniz ve dağıtım modeliniz hakkında bize bilgi verin — gerçekte değerlendirdiğiniz şeye göre bir demo planlayalım."
        size="md"
      />

      <Section>
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <RequestDemoFormTR />
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Mellivor'u daha yakından tanıyın"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "Gerçekte ne devreye alacağınızı görün.",
            href: "/tr/platform",
          },
          {
            icon: Radar,
            title: "Çözümler",
            description: "Mellivor'un platformunun çözdüğü iş problemleri.",
            href: "/tr/solutions/ai-security",
          },
          {
            icon: Handshake,
            title: "İletişim",
            description: "Doğrudan belirli bir ekibe ulaşın.",
            href: "/tr/contact",
          },
        ]}
        locale="tr"
        className="bg-muted/40"
      />
    </>
  );
}
