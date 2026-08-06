import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function MdrPage() {
  return <SolutionTemplate content={solutionContent['mdr']} />;
}
