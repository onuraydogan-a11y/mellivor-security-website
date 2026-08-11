import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("managed-security-services");

export default function ManagedSecurityServicesPage() {
  return <SolutionTemplate content={solutionContent['managed-security-services']} />;
}
