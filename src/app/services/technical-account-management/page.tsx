import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Technical Account Management");

export default function TechnicalAccountManagementPage() {
  return <ServiceTemplate label="Technical Account Management" />;
}
