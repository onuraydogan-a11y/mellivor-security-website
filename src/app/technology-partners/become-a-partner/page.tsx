import { Rocket, ShieldCheck, Users2, Wrench, Boxes, Briefcase, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/lib/technology-partners";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Become a Partner",
  description:
    "If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio.",
  path: "/technology-partners/become-a-partner",
});

const BENEFITS = [
  {
    icon: Rocket,
    title: "Reach enterprise customers",
    description: "Get in front of the security teams already running Mellivor's platform.",
  },
  {
    icon: ShieldCheck,
    title: "Deep platform integration",
    description: "Connect your technology directly into Mellivor One and Behind24, not a bolt-on connector.",
  },
  {
    icon: Users2,
    title: "Co-marketing opportunities",
    description: "Joint content, launch announcements, and visibility across Mellivor's channels.",
  },
  {
    icon: Wrench,
    title: "Dedicated technical support",
    description: "A named point of contact on Mellivor's side throughout integration and beyond.",
  },
];

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a Partner"
        title="Bring your technology into the Mellivor ecosystem"
        description="If your product solves a problem enterprises care about, there's likely a place for it in the Mellivor portfolio."
        size="md"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Partner Program" title="How the technology partnership works" align="left" />
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-7 text-muted-foreground">
                Mellivor integrates, distributes, and supports vendor technologies across every
                layer of the stack — organized by category, not locked to a single vendor. The
                technology partner program is for the companies behind those technologies.
              </p>
              <p className="text-lg leading-7 text-muted-foreground">
                Rather than a generic marketplace listing, partnership means real integration
                work: your technology connects into Mellivor One and Behind24, and shows up
                wherever your category already appears in the Mellivor ecosystem.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="What partners get" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit) => (
                <Card
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="Partnership Process"
        title="From application to integration"
        steps={[
          {
            number: "01",
            title: "Apply",
            description: "Tell us about your technology and where it fits in the Mellivor ecosystem.",
          },
          {
            number: "02",
            title: "Technical Review",
            description: "Mellivor's team evaluates fit, overlap, and integration requirements.",
          },
          {
            number: "03",
            title: "Integration",
            description: "Build and validate the connection into Mellivor One and Behind24.",
          },
          {
            number: "04",
            title: "Go Live",
            description: "Your technology appears in the Mellivor ecosystem, ready for customers.",
          },
        ]}
      />

      <Section className="bg-muted/40">
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <form className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactName" className={LABEL_CLASSES}>
                    Contact name
                  </label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    placeholder="Jane Cooper"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="workEmail" className={LABEL_CLASSES}>
                    Work email
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className={LABEL_CLASSES}>
                    Company name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    placeholder="Company name"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="website" className={LABEL_CLASSES}>
                    Company website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="category" className={LABEL_CLASSES}>
                    Which category fits your technology?
                  </label>
                  <select id="category" name="category" defaultValue="" className={FIELD_CLASSES}>
                    <option value="" disabled>
                      Select an option
                    </option>
                    {technologyCategories.map((category) => (
                      <option key={category.name}>{category.name}</option>
                    ))}
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="details" className={LABEL_CLASSES}>
                    Tell us about your technology
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="What it does, who it's for, and what integration with Mellivor would look like..."
                    className={FIELD_CLASSES}
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Apply to Partner
                </Button>
              </div>
            </form>
          </Reveal>
        </Container>
      </Section>

      <RelatedContent
        title="Related partnership paths"
        links={[
          {
            icon: Boxes,
            title: "Technology Partners",
            description: "Browse the ecosystem this program feeds into.",
            href: "/technology-partners",
          },
          {
            icon: Briefcase,
            title: "Partners",
            description: "For resellers and MSPs, not technology vendors.",
            href: "/partners",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach the right team for your question.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
