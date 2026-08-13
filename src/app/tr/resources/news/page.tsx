import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Haberler", "tr");

export default function NewsPageTR() {
  return <ResourceCategoryTemplate label="Haberler" locale="tr" />;
}
