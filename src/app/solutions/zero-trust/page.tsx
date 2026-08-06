import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function ZeroTrustPage() {
  return <SolutionTemplate content={solutionContent['zero-trust']} />;
}
