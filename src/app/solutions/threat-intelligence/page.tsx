import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("threat-intelligence");

export default function ThreatIntelligencePage() {
  return <SolutionTemplate content={solutionContent['threat-intelligence']} />;
}
