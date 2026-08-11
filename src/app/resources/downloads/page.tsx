import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Downloads");

export default function DownloadsPage() {
  return <ResourceCategoryTemplate label="Downloads" />;
}
