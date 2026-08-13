import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Etkinlikler", "tr");

export default function EventsPageTR() {
  return <ResourceCategoryTemplate label="Etkinlikler" locale="tr" />;
}
