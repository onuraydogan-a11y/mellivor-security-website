import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("fraud-prevention");

export default function FraudPreventionPage() {
  return <SolutionTemplate content={solutionContent['fraud-prevention']} />;
}
