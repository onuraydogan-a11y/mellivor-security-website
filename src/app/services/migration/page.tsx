import { ServiceTemplate, getServiceMetadata } from "@/components/templates/ServiceTemplate";

export const metadata = getServiceMetadata("Migration");

export default function MigrationPage() {
  return <ServiceTemplate label="Migration" />;
}
