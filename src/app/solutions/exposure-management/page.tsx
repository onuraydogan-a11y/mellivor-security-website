import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function ExposureManagementPage() {
  return <SolutionTemplate content={solutionContent['exposure-management']} />;
}
