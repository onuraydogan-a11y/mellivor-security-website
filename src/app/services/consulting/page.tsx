import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Consulting");

export default function ConsultingPage() {
  return <ServiceTemplate label="Consulting" />;
}
