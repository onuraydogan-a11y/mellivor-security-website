import { Handshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";

/**
 * Renders real vendors as they're onboarded into technology-partners.ts.
 * Until then, shows an honest empty state rather than inventing vendor
 * names or logos to fill the section.
 */
export function FeaturedVendors() {
  const vendors = technologyCategories.flatMap((category) =>
    category.vendors.map((vendor) => ({ vendor, category }))
  );

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Featured Vendors" title="Partners in the Mellivor ecosystem" />
        </Reveal>

        <Reveal delay={100}>
          {vendors.length > 0 ? (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {vendors.map(({ vendor, category }) => (
                <Card
                  key={vendor.slug}
                  icon={category.icon}
                  title={vendor.name}
                  description={vendor.summary}
                  href={`/technology-partners/${vendor.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="mt-14">
              <EmptyState
                icon={Handshake}
                title="No featured partners yet"
                description="Featured technology partners will appear here as partnerships are confirmed. In the meantime, browse the technology categories above or reach out if you'd like to bring your technology into the Mellivor ecosystem."
                action={{ label: "Become a Partner", href: "/technology-partners/become-a-partner" }}
              />
            </div>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
