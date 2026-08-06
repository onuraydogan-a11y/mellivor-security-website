import { SolutionTemplate } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export default function FraudPreventionPage() {
  return <SolutionTemplate content={solutionContent['fraud-prevention']} />;
}
