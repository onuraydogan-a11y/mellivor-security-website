import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("zero-trust");

export default function ZeroTrustPage() {
  return <SolutionTemplate content={solutionContent['zero-trust']} />;
}
