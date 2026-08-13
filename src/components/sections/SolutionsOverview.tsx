"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Radar, Activity, Database, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/navigation";
import { trMainNav } from "@/lib/i18n/tr-navigation";
import { solutionContent } from "@/lib/solutions-content";
import { trSolutionContent } from "@/lib/i18n/tr-solutions-content";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "AI & Application Risk": Sparkles,
  "Threat & Exposure": Radar,
  "Detection & Response": Activity,
  "Infrastructure & Data": Database,
  "Risk & Compliance": ClipboardCheck,
  "AI ve Uygulama Riski": Sparkles,
  "Tehdit ve Maruziyet": Radar,
  "Tespit ve Müdahale": Activity,
  "Altyapı ve Veri": Database,
  "Risk ve Uyumluluk": ClipboardCheck,
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function SolutionsOverview({ locale = "en" }: { locale?: Locale }) {
  const strings = t(locale).solutionsOverview;
  const nav = locale === "tr" ? trMainNav : mainNav;
  const content = locale === "tr" ? trSolutionContent : solutionContent;
  const prefix = locale === "tr" ? "/tr" : "";
  const solutionsLabel = locale === "tr" ? "Çözümler" : "Solutions";
  const solutions = nav.find((item) => item.label === solutionsLabel);
  const categories = solutions?.columns ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];
  const ActiveIcon = active ? CATEGORY_ICONS[active.heading ?? ""] : undefined;

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={strings.eyebrow}
            title={strings.title}
            description={strings.description}
            align="left"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
            <div className="flex flex-col border-t border-border sm:border-t-0 sm:border-l sm:border-border">
              {categories.map((category, index) => {
                const heading = category.heading ?? solutionsLabel;
                const Icon = CATEGORY_ICONS[heading];
                const isActive = index === activeIndex;
                return (
                  <button
                    key={heading}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex items-center gap-3 border-b border-border px-4 py-4 text-left transition-colors first:border-t-0 sm:border-b-0 sm:border-l-2 sm:-ml-px",
                      isActive
                        ? "border-primary text-primary sm:border-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground sm:border-transparent"
                    )}
                  >
                    {Icon && <Icon aria-hidden className="h-5 w-5 flex-shrink-0" />}
                    <span className="text-base font-medium">{heading}</span>
                  </button>
                );
              })}
            </div>

            {active && (
              <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  {ActiveIcon && (
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ActiveIcon aria-hidden className="h-6 w-6" />
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{active.heading}</h3>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {active.links.map((link) => {
                    const slug = link.href.replace(`${prefix}/solutions/`, "");
                    const summary = content[slug]?.summary;
                    return (
                      <Link key={link.href} href={link.href} className="group block">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary">
                          {link.label}
                        </h4>
                        {summary && (
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{summary}</p>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Button href={`${prefix}/solutions#${slugify(active.heading ?? "")}`} variant="outline" size="md">
                    {strings.exploreCategory(active.heading ?? "")}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href={`${prefix}/solutions`} variant="outline" size="md">
              {strings.viewAll}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
