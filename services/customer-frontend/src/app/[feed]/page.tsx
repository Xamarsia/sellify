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

  return <ProductFeedContent productLabel={productLabel} />;
}
