import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("xdr");

export default function XdrPage() {
  return <SolutionTemplate content={solutionContent['xdr']} />;
}
