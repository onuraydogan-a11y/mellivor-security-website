import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Destek", "tr");

export default function SupportPageTR() {
  return <ServiceTemplate label="Destek" locale="tr" requestDemoHref="/tr/request-demo" />;
}
