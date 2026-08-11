import { ResourceCategoryTemplate, getResourceMetadata } from "@/components/templates/ResourceCategoryTemplate";

export const metadata = getResourceMetadata("Whitepapers");

export default function WhitepapersPage() {
  return <ResourceCategoryTemplate label="Whitepapers" />;
}
