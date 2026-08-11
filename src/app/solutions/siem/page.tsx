import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("siem");

export default function SiemPage() {
  return <SolutionTemplate content={solutionContent['siem']} />;
}
