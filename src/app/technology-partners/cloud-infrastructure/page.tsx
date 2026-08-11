import { TechCategoryTemplate, getTechCategoryMetadata } from "@/components/templates/TechCategoryTemplate";

export const metadata = getTechCategoryMetadata("Cloud & Infrastructure");

export default function CloudInfrastructurePage() {
  return <TechCategoryTemplate categoryName="Cloud & Infrastructure" />;
}
