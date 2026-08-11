import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("email-security");

export default function EmailSecurityPage() {
  return <SolutionTemplate content={solutionContent['email-security']} />;
}
