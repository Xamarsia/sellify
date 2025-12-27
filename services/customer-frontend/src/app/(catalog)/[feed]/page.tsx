import "server-only";

import { notFound } from "next/navigation";

import { getFeedLabels } from "common/actions/product-actions";
import ProductFeedContent from "components/ProductFeedContent";

type Props = {
  params: Promise<{ feed: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const productLabel: string = (await params).feed;

  if (!getFeedLabels().includes(productLabel)) {
    notFound();
  }

  return (
    <>
      {/* TODO: Add Banner here */}
      <div className="flex grow w-full justify-center relative flex-shrink-0 mt-20 px-8 pb-16 max-w-7xl">
        <ProductFeedContent productLabel={productLabel} />
      </div>
    </>
  );
}
