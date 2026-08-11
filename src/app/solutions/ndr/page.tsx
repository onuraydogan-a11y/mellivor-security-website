import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("ndr");

export default function NdrPage() {
  return <SolutionTemplate content={solutionContent['ndr']} />;
}
