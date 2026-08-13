import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Uygulama", "tr");

export default function ImplementationPageTR() {
  return <ServiceTemplate label="Uygulama" locale="tr" requestDemoHref="/tr/request-demo" />;
}
