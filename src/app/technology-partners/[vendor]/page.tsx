import { notFound } from "next/navigation";
import { VendorTemplate } from "@/components/templates/VendorTemplate";
import { getVendorBySlug } from "@/lib/technology-partners";

export default async function VendorPage({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const { vendor: slug } = await params;
  const result = getVendorBySlug(slug);

  if (!result) notFound();

  return <VendorTemplate vendor={result.vendor} category={result.category} />;
}
