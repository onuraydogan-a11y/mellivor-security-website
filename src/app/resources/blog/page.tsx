import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Blog");

export default function BlogPage() {
  return <ResourceCategoryTemplate label="Blog" />;
}
