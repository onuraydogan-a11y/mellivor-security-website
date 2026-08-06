import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function EdrPage() {
  return <SolutionTemplate content={solutionContent['edr']} />;
}
