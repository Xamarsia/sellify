import "server-only";

import { Product } from "@sellify/customer-ui-components/types";

import { getProduct } from "common/actions/product-actions";
import ProductPageContent from "components/ProductPageContent";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: Product = getProduct(productId);

  return <ProductPageContent product={product} />;
}
