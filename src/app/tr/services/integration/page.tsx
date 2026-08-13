import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Entegrasyon", "tr");

export default function IntegrationPageTR() {
  return <ServiceTemplate label="Entegrasyon" locale="tr" requestDemoHref="/tr/request-demo" />;
}
