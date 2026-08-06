import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function ApiSecurityPage() {
  return <SolutionTemplate content={solutionContent['api-security']} />;
}
