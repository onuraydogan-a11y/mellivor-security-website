import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function EmailSecurityPage() {
  return <SolutionTemplate content={solutionContent['email-security']} />;
}
