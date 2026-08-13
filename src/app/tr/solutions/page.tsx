import { Sparkles, Radar, Activity, Database, ClipboardCheck, LayoutGrid, Boxes, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { trSolutionContent } from "@/lib/i18n/tr-solutions-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çözümler",
  description:
    "Mellivor çözümleri, satın almanız gereken ürüne göre değil, çözdüğünüz riske göre organize edilmiştir.",
  path: "/tr/solutions",
});

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "AI ve Uygulama Riski": Sparkles,
  "Tehdit ve Maruziyet": Radar,
  "Tespit ve Müdahale": Activity,
  "Altyapı ve Veri": Database,
  "Risk ve Uyumluluk": ClipboardCheck,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function SolutionsPageTR() {
  const solutions = trMainNav.find((item) => item.label === "Çözümler");
  const categories = solutions?.columns ?? [];

  return (
    <>
      <PageHero
        eyebrow="Çözümler"
        title="Gerçekte sahip olduğunuz sorunlar etrafında kurgulandı"
        description="Mellivor çözümleri, satın almanız gereken ürüne göre değil, çözdüğünüz riske göre organize edilmiştir."
        size="md"
      />

      {categories.map((category, index) => {
        const heading = category.heading ?? "Çözümler";

        return (
          <Section key={heading} id={slugify(heading)} className={index % 2 === 1 ? "bg-muted/40" : undefined}>
            <Container>
              <Reveal>
                <SectionHeading eyebrow="Çözümler" title={heading} align="left" />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.links.map((link) => {
                    const slug = link.href.replace("/tr/solutions/", "");
                    const description = trSolutionContent[slug]?.summary ?? link.description;

                    return (
                      <Card
                        key={link.href}
                        icon={CATEGORY_ICONS[heading]}
                        title={link.label}
                        description={description}
                        href={link.href}
                      />
                    );
                  })}
                </div>
              </Reveal>
            </Container>
          </Section>
        );
      })}

      <RelatedContent
        title="Mellivor'u daha yakından tanıyın"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "Bu çözümlerin üzerine inşa edildiği teknoloji.",
            href: "/tr/platform",
          },
          {
            icon: Boxes,
            title: "Teknoloji Ortakları",
            description: "Bu çözümlerin entegre olduğu ekosistem.",
            href: "/tr/technology-partners",
          },
          {
            icon: Wrench,
            title: "Hizmetler",
            description: "Bunları devreye almanıza ve işletmenize yardımcı olan ekipler.",
            href: "/tr/services",
          },
        ]}
        locale="tr"
        className="bg-muted/40"
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
