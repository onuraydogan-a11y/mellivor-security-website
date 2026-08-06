import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function NdrPage() {
  return <SolutionTemplate content={solutionContent['ndr']} />;
}
