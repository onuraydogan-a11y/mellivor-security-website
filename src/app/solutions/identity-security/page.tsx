import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("identity-security");

export default function IdentitySecurityPage() {
  return <SolutionTemplate content={solutionContent['identity-security']} />;
}
