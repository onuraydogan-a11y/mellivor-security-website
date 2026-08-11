import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("data-security");

export default function DataSecurityPage() {
  return <SolutionTemplate content={solutionContent['data-security']} />;
}
