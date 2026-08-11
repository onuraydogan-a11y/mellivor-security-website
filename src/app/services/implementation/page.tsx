import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Implementation");

export default function ImplementationPage() {
  return <ServiceTemplate label="Implementation" />;
}
