import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("exposure-management");

export default function ExposureManagementPage() {
  return <SolutionTemplate content={solutionContent['exposure-management']} />;
}
