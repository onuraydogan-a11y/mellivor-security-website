import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("third-party-risk-management");

export default function ThirdPartyRiskManagementPage() {
  return <SolutionTemplate content={solutionContent['third-party-risk-management']} />;
}
