import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("supply-chain-security");

export default function SupplyChainSecurityPage() {
  return <SolutionTemplate content={solutionContent['supply-chain-security']} />;
}
