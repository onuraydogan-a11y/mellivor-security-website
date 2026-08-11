import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Training");

export default function TrainingPage() {
  return <ServiceTemplate label="Training" />;
}
