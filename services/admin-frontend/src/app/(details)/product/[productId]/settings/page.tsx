import "server-only";

import { ProductDetails } from "@sellify/admin-ui-components/types";

import { getProductById } from "actions/product-actions";
import ProductSettings from "setting-sections/product-settings";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductSettingsPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: ProductDetails = getProductById(productId);

  return (
    <>
      <h1 className="py-4">{`Product Settings: ${product.productId}`}</h1>
      <ProductSettings productId={productId} />
    </>
  );
}
