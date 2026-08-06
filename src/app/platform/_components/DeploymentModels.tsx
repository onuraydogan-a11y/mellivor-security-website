import { Cloud, Server, Shuffle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const DEPLOYMENT_MODELS = [
  {
    icon: Cloud,
    name: "Cloud",
    description: "Fully managed in Mellivor's cloud, live in days rather than months.",
  },
  {
    icon: Server,
    name: "On-Premises",
    description: "Deployed inside your own infrastructure for data residency or compliance needs.",
  },
  {
    icon: Shuffle,
    name: "Hybrid",
    description: "A mix of cloud and on-premises components, matched to how your environment is actually built.",
  },
];

export function DeploymentModels() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Deployment Models"
            title="Deploys the way your environment requires"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {DEPLOYMENT_MODELS.map((model) => (
              <Card
                key={model.name}
                icon={model.icon}
                title={model.name}
                description={model.description}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
