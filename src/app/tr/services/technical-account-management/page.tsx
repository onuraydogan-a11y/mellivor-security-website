import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Teknik Hesap Yönetimi", "tr");

export default function TechnicalAccountManagementPageTR() {
  return <ServiceTemplate label="Teknik Hesap Yönetimi" locale="tr" requestDemoHref="/tr/request-demo" />;
}
