import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("İndirilebilir İçerikler", "tr");

export default function DownloadsPageTR() {
  return <ResourceCategoryTemplate label="İndirilebilir İçerikler" locale="tr" />;
}
