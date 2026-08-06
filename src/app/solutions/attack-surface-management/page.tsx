import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function AttackSurfaceManagementPage() {
  return <SolutionTemplate content={solutionContent['attack-surface-management']} />;
}
