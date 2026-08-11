import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("network-security");

export default function NetworkSecurityPage() {
  return <SolutionTemplate content={solutionContent['network-security']} />;
}
