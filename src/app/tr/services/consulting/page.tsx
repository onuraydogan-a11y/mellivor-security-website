import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Danışmanlık", "tr");

export default function ConsultingPageTR() {
  return <ServiceTemplate label="Danışmanlık" locale="tr" requestDemoHref="/tr/request-demo" />;
}
