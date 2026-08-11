import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("digital-risk-protection");

export default function DigitalRiskProtectionPage() {
  return <SolutionTemplate content={solutionContent['digital-risk-protection']} />;
}
