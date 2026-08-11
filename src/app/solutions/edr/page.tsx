import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("edr");

export default function EdrPage() {
  return <SolutionTemplate content={solutionContent['edr']} />;
}
