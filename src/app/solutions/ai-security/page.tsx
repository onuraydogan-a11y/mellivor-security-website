import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("ai-security");

export default function AISecurityPage() {
  return <SolutionTemplate content={solutionContent["ai-security"]} />;
}
