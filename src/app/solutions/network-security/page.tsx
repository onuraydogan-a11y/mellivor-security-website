import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function NetworkSecurityPage() {
  return <SolutionTemplate content={solutionContent['network-security']} />;
}
