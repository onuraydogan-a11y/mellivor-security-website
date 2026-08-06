import { Handshake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
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
            <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Handshake aria-hidden className="h-6 w-6" />
              </span>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                Featured technology partners will appear here as partnerships are confirmed.
                In the meantime, browse the technology categories above or reach out if
                you&apos;d like to bring your technology into the Mellivor ecosystem.
              </p>
              <Button href="/technology-partners/become-a-partner" variant="outline" size="md">
                Become a Partner
              </Button>
            </div>
          )}
        </Reveal>
      </Container>
    </Section>
  );
}
