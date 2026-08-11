import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Deployment");

export default function DeploymentPage() {
  return <ServiceTemplate label="Deployment" />;
}
