import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Eğitim", "tr");

export default function TrainingPageTR() {
  return <ServiceTemplate label="Eğitim" locale="tr" requestDemoHref="/tr/request-demo" />;
}
