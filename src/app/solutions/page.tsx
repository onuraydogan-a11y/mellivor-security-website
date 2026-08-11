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
import { mainNav } from "@/lib/navigation";
import { solutionContent } from "@/lib/solutions-content";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "AI & Application Risk": Sparkles,
  "Threat & Exposure": Radar,
  "Detection & Response": Activity,
  "Infrastructure & Data": Database,
  "Risk & Compliance": ClipboardCheck,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function SolutionsPage() {
  const solutions = mainNav.find((item) => item.label === "Solutions");
  const categories = solutions?.columns ?? [];

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built around the problems you actually have"
        description="Mellivor solutions are organized by the risk you're solving for, not the product you'd have to buy."
        size="md"
      />

      {categories.map((category, index) => {
        const heading = category.heading ?? "Solutions";

        return (
          <Section key={heading} id={slugify(heading)} className={index % 2 === 1 ? "bg-muted/40" : undefined}>
            <Container>
              <Reveal>
                <SectionHeading eyebrow="Solutions" title={heading} align="left" />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.links.map((link) => {
                    const slug = link.href.replace("/solutions/", "");
                    const description = solutionContent[slug]?.summary ?? link.description;

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
        title="Explore more of Mellivor"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "The technology these solutions are built on.",
            href: "/platform",
          },
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "The ecosystem these solutions integrate with.",
            href: "/technology-partners",
          },
          {
            icon: Wrench,
            title: "Services",
            description: "The teams who help you deploy and run them.",
            href: "/services",
          },
        ]}
        className="bg-muted/40"
      />

      <FinalCta />
    </>
  );
}
