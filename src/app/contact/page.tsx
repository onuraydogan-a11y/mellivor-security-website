import { LifeBuoy, Handshake, Newspaper, LayoutGrid, Wrench, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Reach the right team directly, or request a demo scoped to what you're evaluating.",
  path: "/contact",
});

const CONTACT_PATHS = [
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Get help with an existing Mellivor deployment.",
    href: "mailto:support@mellivorsecurity.com",
    email: "support@mellivorsecurity.com",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Channel, reseller, and technology partner inquiries.",
    href: "mailto:partners@mellivorsecurity.com",
    email: "partners@mellivorsecurity.com",
  },
  {
    icon: Newspaper,
    title: "Press",
    description: "Media inquiries and press requests.",
    href: "mailto:press@mellivorsecurity.com",
    email: "press@mellivorsecurity.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Mellivor"
        description="Reach the right team directly, or request a demo scoped to what you're evaluating."
      />

      <Section>
        <Container>
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-sm sm:p-10">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Sales
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    See Mellivor on your own environment
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                    Tell us about your platform, solutions, and deployment model — we&apos;ll
                    scope a demo around what you&apos;re actually evaluating.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/request-demo" variant="primary" size="lg">
                    Request Demo
                  </Button>
                </div>
              </div>

              <div className="divide-y divide-border rounded-2xl border border-border bg-surface shadow-sm">
                {CONTACT_PATHS.map((path) => (
                  <a
                    key={path.title}
                    href={path.href}
                    className="group flex items-start gap-4 p-6 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <path.icon aria-hidden className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        {path.title}
                        <ArrowRight
                          aria-hidden
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {path.description}
                      </span>
                      <span className="mt-1.5 block text-sm font-medium text-primary">
                        {path.email}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Explore more of Mellivor"
        links={[
          {
            icon: LayoutGrid,
            title: "Platform",
            description: "See what you'd actually be deploying.",
            href: "/platform",
          },
          {
            icon: Wrench,
            title: "Services",
            description: "How Mellivor's teams support your deployment.",
            href: "/services",
          },
          {
            icon: Handshake,
            title: "Technology Partners",
            description: "The ecosystem Mellivor integrates with.",
            href: "/technology-partners",
          },
        ]}
        className="bg-muted/40"
      />
    </>
  );
}
