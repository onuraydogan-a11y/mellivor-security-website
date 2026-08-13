import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { t } from "@/lib/i18n/ui-strings";
import type { Locale } from "@/lib/i18n/locale";

type RelatedLink = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  href: string;
};

type RelatedContentProps = {
  title?: string;
  links: RelatedLink[];
  className?: string;
  locale?: Locale;
};

/**
 * Generic cross-page link grid — satisfies the "every page should
 * feel connected" requirement without every page inventing its own
 * related-links layout.
 */
export function RelatedContent({ title, links, className, locale = "en" }: RelatedContentProps) {
  const strings = t(locale).relatedContent;
  return (
    <Section className={className}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={strings.eyebrow} title={title ?? strings.defaultTitle} />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Card
                key={link.href}
                icon={link.icon}
                title={link.title}
                description={link.description}
                href={link.href}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
