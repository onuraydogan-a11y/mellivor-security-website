import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Documentation");

export default function DocumentationPage() {
  return <ResourceCategoryTemplate label="Documentation" />;
}
