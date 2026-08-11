import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Incident Response");

export default function IncidentResponsePage() {
  return <ServiceTemplate label="Incident Response" />;
}
