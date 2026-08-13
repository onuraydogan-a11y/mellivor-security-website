import { Cloud, Server, Shuffle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/i18n/locale";

const DEPLOYMENT_MODELS = {
  en: [
    { icon: Cloud, name: "Cloud", description: "Fully managed in Mellivor's cloud, live in days rather than months." },
    { icon: Server, name: "On-Premises", description: "Deployed inside your own infrastructure for data residency or compliance needs." },
    { icon: Shuffle, name: "Hybrid", description: "A mix of cloud and on-premises components, matched to how your environment is actually built." },
  ],
  tr: [
    { icon: Cloud, name: "Bulut", description: "Mellivor'un bulutunda tamamen yönetilir, aylar değil günler içinde canlıya geçer." },
    { icon: Server, name: "Şirket İçi", description: "Veri yerelliği veya uyumluluk ihtiyaçları için kendi altyapınızda devreye alınır." },
    { icon: Shuffle, name: "Hibrit", description: "Ortamınızın gerçekte nasıl inşa edildiğine uygun, bulut ve şirket içi bileşenlerin bir karışımı." },
  ],
};

const HEADING = {
  en: { eyebrow: "Deployment Models", title: "Deploys the way your environment requires" },
  tr: { eyebrow: "Dağıtım Modelleri", title: "Ortamınızın gerektirdiği şekilde devreye alınır" },
};

export function DeploymentModels({ locale = "en" }: { locale?: Locale }) {
  const heading = HEADING[locale];
  const models = DEPLOYMENT_MODELS[locale];
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={heading.eyebrow}
            title={heading.title}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {models.map((model) => (
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
