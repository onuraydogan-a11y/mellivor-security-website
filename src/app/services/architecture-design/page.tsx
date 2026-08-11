import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Architecture Design");

export default function ArchitectureDesignPage() {
  return <ServiceTemplate label="Architecture Design" />;
}
