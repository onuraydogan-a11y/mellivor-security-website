import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Dağıtım", "tr");

export default function DeploymentPageTR() {
  return <ServiceTemplate label="Dağıtım" locale="tr" requestDemoHref="/tr/request-demo" />;
}
