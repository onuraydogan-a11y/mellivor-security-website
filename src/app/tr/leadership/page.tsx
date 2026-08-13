import { Briefcase, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Yönetim Ekibi",
  description:
    "Yönetim ekibi profilleri bu site için hazırlanıyor. Bu arada ekibin nasıl yapılandırıldığı burada.",
  path: "/tr/leadership",
});

const LEADERSHIP_ROLES = [
  "Genel Müdür (CEO)",
  "Teknoloji Direktörü (CTO)",
  "Gelir Direktörü (CRO)",
  "Bilgi Güvenliği Direktörü (CISO)",
];

export default function LeadershipPageTR() {
  return (
    <>
      <PageHero
        eyebrow="Yönetim Ekibi"
        title="Platformun arkasındaki ekip"
        description="Yönetim ekibi profilleri bu site için hazırlanıyor. Bu arada ekibin nasıl yapılandırıldığı burada."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Yönetim Ekibi" title="Üst düzey yönetici rolleri" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERSHIP_ROLES.map((role) => (
                <div
                  key={role}
                  className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                    {role
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{role}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Profil yakında</p>
                </div>
              ))}
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
            description: "Bu ekibin inşa ettiği platformun arkasındaki hikaye.",
            href: "/tr/about",
          },
          {
            icon: Radar,
            title: "Kariyer",
            description: "Kurum genelindeki açık pozisyonlar.",
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
