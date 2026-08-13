import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Geçiş", "tr");

export default function MigrationPageTR() {
  return <ServiceTemplate label="Geçiş" locale="tr" requestDemoHref="/tr/request-demo" />;
}
