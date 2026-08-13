import { notFound } from "next/navigation";
import { VendorTemplate } from "@/components/templates/VendorTemplate";
import { getTrVendorBySlug } from "@/lib/i18n/tr-technology-partners";

export default async function VendorPageTR({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const { vendor: slug } = await params;
  const result = getTrVendorBySlug(slug);

  if (!result) notFound();

  return (
    <VendorTemplate
      vendor={result.vendor}
      category={result.category}
      locale="tr"
      requestDemoHref="/tr/request-demo"
    />
  );
}
