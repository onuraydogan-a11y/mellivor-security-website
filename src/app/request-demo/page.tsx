import { LayoutGrid, Radar, Handshake } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/ui/RelatedContent";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request Demo",
  description:
    "Tell us about your platform, solutions, and deployment model — we'll scope a demo around what you're actually evaluating.",
  path: "/request-demo",
});

const LABEL_CLASSES = "text-sm font-medium text-foreground";

const FIELD_CLASSES =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Request Demo"
        title="See Mellivor on your own environment"
        description="Tell us about your platform, solutions, and deployment model — we'll scope a demo around what you're actually evaluating."
        size="md"
      />

      <Section>
        <Container className="flex justify-center">
          <Reveal className="w-full max-w-2xl">
            <form className="rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL_CLASSES}>
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Cooper"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={LABEL_CLASSES}>
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={LABEL_CLASSES}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Company name"
                    className={FIELD_CLASSES}
                  />
                </div>

                <div>
                  <label htmlFor="companySize" className={LABEL_CLASSES}>
                    Company size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>1–200 employees</option>
                    <option>201–1,000 employees</option>
                    <option>1,001–5,000 employees</option>
                    <option>5,000+ employees</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="interest" className={LABEL_CLASSES}>
                    What are you evaluating?
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className={FIELD_CLASSES}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Mellivor One</option>
                    <option>Behind24</option>
                    <option>Mellivor AI Platform</option>
                    <option>The full platform</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="details" className={LABEL_CLASSES}>
                    Anything else we should know?
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Deployment model, timeline, current tools you'd want to connect..."
                    className={FIELD_CLASSES}
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </div>
            </form>
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
            icon: Radar,
            title: "Solutions",
            description: "The business problems Mellivor's platform solves.",
            href: "/solutions/ai-security",
          },
          {
            icon: Handshake,
            title: "Contact",
            description: "Reach a specific team directly instead.",
            href: "/contact",
          },
        ]}
        className="bg-muted/40"
      />
    </>
  );
}
