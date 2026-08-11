import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("deception-technology");

export default function DeceptionTechnologyPage() {
  return <SolutionTemplate content={solutionContent['deception-technology']} />;
}
