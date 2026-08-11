import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Research");

export default function ResearchPage() {
  return <ResourceCategoryTemplate label="Research" />;
}
