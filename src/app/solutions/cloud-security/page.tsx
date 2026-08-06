import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function CloudSecurityPage() {
  return <SolutionTemplate content={solutionContent['cloud-security']} />;
}
