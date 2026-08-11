import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Case Studies");

export default function CaseStudiesPage() {
  return <ResourceCategoryTemplate label="Case Studies" />;
}
