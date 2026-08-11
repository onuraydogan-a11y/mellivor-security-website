import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("mdr");

export default function MdrPage() {
  return <SolutionTemplate content={solutionContent['mdr']} />;
}
