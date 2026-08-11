import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("web-application-security");

export default function WebApplicationSecurityPage() {
  return <SolutionTemplate content={solutionContent['web-application-security']} />;
}
