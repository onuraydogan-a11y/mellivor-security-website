import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("soar");

export default function SoarPage() {
  return <SolutionTemplate content={solutionContent['soar']} />;
}
