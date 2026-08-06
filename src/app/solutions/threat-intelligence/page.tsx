import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function ThreatIntelligencePage() {
  return <SolutionTemplate content={solutionContent['threat-intelligence']} />;
}
