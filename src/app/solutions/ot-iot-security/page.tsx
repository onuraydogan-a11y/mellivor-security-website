import { SolutionTemplate, getSolutionMetadata } from "@/components/templates/SolutionTemplate";
import { solutionContent } from "@/lib/solutions-content";

export const metadata = getSolutionMetadata("ot-iot-security");

export default function OtIotSecurityPage() {
  return <SolutionTemplate content={solutionContent['ot-iot-security']} />;
}
