import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Integration");

export default function IntegrationPage() {
  return <ServiceTemplate label="Integration" />;
}
