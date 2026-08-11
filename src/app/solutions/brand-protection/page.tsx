import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("brand-protection");

export default function BrandProtectionPage() {
  return <SolutionTemplate content={solutionContent['brand-protection']} />;
}
