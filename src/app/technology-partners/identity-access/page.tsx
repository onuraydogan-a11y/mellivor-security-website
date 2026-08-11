import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Identity & Access");

export default function IdentityAccessPage() {
  return <TechCategoryTemplate categoryName="Identity & Access" />;
}
