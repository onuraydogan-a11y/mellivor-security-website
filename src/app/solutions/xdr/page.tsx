import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function XdrPage() {
  return <SolutionTemplate content={solutionContent['xdr']} />;
}
