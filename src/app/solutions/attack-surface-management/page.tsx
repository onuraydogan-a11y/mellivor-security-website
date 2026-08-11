import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("attack-surface-management");

export default function AttackSurfaceManagementPage() {
  return <SolutionTemplate content={solutionContent['attack-surface-management']} />;
}
