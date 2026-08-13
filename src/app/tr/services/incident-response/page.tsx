import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Olay Müdahale", "tr");

export default function IncidentResponsePageTR() {
  return <ServiceTemplate label="Olay Müdahale" locale="tr" requestDemoHref="/tr/request-demo" />;
}
