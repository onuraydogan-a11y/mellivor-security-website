import { LayoutGrid, Radar, BrainCircuit } from "lucide-react";
import { FeatureSection } from "@/components/ui/FeatureSection";
import { MellivorOneVisual, Behind24Visual, AIPlatformVisual } from "@/components/ui/ProductVisuals";

export function Products() {
  return (
    <>
      <FeatureSection
        icon={LayoutGrid}
        eyebrow="Mellivor One"
        title="The control plane for everything Mellivor"
        description="Mellivor One is the unified command center for your security program — bringing platform data, workflows, and reporting into a single place your team actually wants to use."
        features={[
          "Unified dashboard across detection, response, and risk data",
          "Single pane of glass for Behind24 and AI Platform findings",
          "Role-based views for SOC analysts, IT, and executives",
          "Centralized case management and audit trail",
        ]}
        visual={<MellivorOneVisual />}
        className="bg-muted/40"
      />

      <FeatureSection
        icon={Radar}
        eyebrow="Behind24"
        title="Always-on monitoring, detection, and response"
        description="Behind24 watches your environment continuously, correlating signal across endpoints, network, cloud, and identity to catch what point tools miss."
        features={[
          "24/7 monitoring across your technology stack",
          "Correlated detections, not isolated alerts",
          "Guided and automated response playbooks",
          "Backed by Mellivor's managed security team",
        ]}
        visual={<Behind24Visual />}
        reverse
      />

      <FeatureSection
        icon={BrainCircuit}
        eyebrow="AI Platform"
        title="The intelligence layer behind every product"
        description="The Mellivor AI Platform prioritizes signal, reduces noise, and gives analysts context — so time goes to real risk, not investigation busywork."
        features={[
          "Machine learning models trained on real detection data",
          "Automated triage and alert prioritization",
          "Natural-language summaries for faster investigation",
          "Continuously retrained as new threats emerge",
        ]}
        visual={<AIPlatformVisual />}
        className="bg-muted/40"
      />
    </>
  );
}
