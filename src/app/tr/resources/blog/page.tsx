import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Blog", "tr");

export default function BlogPageTR() {
  return <ResourceCategoryTemplate label="Blog" locale="tr" />;
}
