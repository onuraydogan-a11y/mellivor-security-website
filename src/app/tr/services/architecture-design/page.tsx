import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Mimari Tasarım", "tr");

export default function ArchitectureDesignPageTR() {
  return <ServiceTemplate label="Mimari Tasarım" locale="tr" requestDemoHref="/tr/request-demo" />;
}
