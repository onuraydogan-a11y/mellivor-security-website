import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function SiemPage() {
  return <SolutionTemplate content={solutionContent['siem']} />;
}
