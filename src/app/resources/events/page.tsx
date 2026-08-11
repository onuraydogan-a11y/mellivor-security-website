import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Events");

export default function EventsPage() {
  return <ResourceCategoryTemplate label="Events" />;
}
