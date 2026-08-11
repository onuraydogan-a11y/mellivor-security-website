import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("News");

export default function NewsPage() {
  return <ResourceCategoryTemplate label="News" />;
}
