import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Teknik Raporlar", "tr");

export default function WhitepapersPageTR() {
  return <ResourceCategoryTemplate label="Teknik Raporlar" locale="tr" />;
}
