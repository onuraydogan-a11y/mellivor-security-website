import { Handshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";
import { trTechnologyCategories } from "@/lib/i18n/tr-technology-partners";
import type { Locale } from "@/lib/i18n/locale";

const STRINGS = {
  en: {
    eyebrow: "Featured Vendors",
    title: "Partners in the Mellivor ecosystem",
    emptyTitle: "No featured partners yet",
    emptyDescription: "Featured technology partners will appear here as partnerships are confirmed. In the meantime, browse the technology categories above or reach out if you'd like to bring your technology into the Mellivor ecosystem.",
    becomeAPartner: "Become a Partner",
  },
  tr: {
    eyebrow: "Öne Çıkan Tedarikçiler",
    title: "Mellivor ekosistemindeki ortaklar",
    emptyTitle: "Henüz öne çıkan ortak yok",
    emptyDescription: "Öne çıkan teknoloji ortakları, iş birlikleri onaylandıkça burada yer alacak. Bu arada yukarıdaki teknoloji kategorilerine göz atabilir veya teknolojinizi Mellivor ekosistemine katmak isterseniz bizimle iletişime geçebilirsiniz.",
    becomeAPartner: "Ortak Olun",
  },
};

/**
 * Renders real vendors as they're onboarded into technology-partners.ts.
 * Until then, shows an honest empty state rather than inventing vendor
 * names or logos to fill the section.
 */
export function FeaturedVendors({ locale = "en" }: { locale?: Locale }) {
  const strings = STRINGS[locale];
  const categories = locale === "tr" ? trTechnologyCategories : technologyCategories;
  const prefix = locale === "tr" ? "/tr" : "";
  const vendors = categories.flatMap((category) =>
    category.vendors.map((vendor) => ({ vendor, category }))
  );

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={strings.eyebrow} title={strings.title} />
        </Reveal>

        <Reveal delay={100}>
          {vendors.length > 0 ? (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vendors.map(({ vendor, category }) => (
                <Card
                  key={vendor.slug}
                  icon={category.icon}
                  logo={vendor.logo}
                  logoOnDark={vendor.logoOnDark}
                  title={vendor.name}
                  description={vendor.summary}
                  href={`${prefix}/technology-partners/${vendor.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14">
              <EmptyState
                icon={Handshake}
                title={strings.emptyTitle}
                description={strings.emptyDescription}
                action={{ label: strings.becomeAPartner, href: `${prefix}/technology-partners/become-a-partner` }}
              />
            </div>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
