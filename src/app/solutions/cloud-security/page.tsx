import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("cloud-security");

export default function CloudSecurityPage() {
  return <SolutionTemplate content={solutionContent['cloud-security']} />;
}
