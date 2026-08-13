import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Dokümantasyon", "tr");

export default function DocumentationPageTR() {
  return <ResourceCategoryTemplate label="Dokümantasyon" locale="tr" />;
}
