import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Support");

export default function SupportPage() {
  return <ServiceTemplate label="Support" />;
}
