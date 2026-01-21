import "server-only";

import { ProductDetails } from "@sellify/admin-ui-components/types";

import { getProductById } from "common/actions/product-actions";
import ProductDetailsPage from "components/pages/ProductDetailsPage";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: ProductDetails = getProductById(productId);

  return <ProductDetailsPage product={product} />;
}
