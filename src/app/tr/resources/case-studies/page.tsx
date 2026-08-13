import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Vaka Analizleri", "tr");

export default function CaseStudiesPageTR() {
  return <ResourceCategoryTemplate label="Vaka Analizleri" locale="tr" />;
}
