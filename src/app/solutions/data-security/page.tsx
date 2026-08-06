import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function DataSecurityPage() {
  return <SolutionTemplate content={solutionContent['data-security']} />;
}
