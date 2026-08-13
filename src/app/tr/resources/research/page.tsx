import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Araştırma", "tr");

export default function ResearchPageTR() {
  return <ResourceCategoryTemplate label="Araştırma" locale="tr" />;
}
