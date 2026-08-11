import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("api-security");

export default function ApiSecurityPage() {
  return <SolutionTemplate content={solutionContent['api-security']} />;
}
