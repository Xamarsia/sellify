import "server-only";

import { ProductDetails } from "@sellify/admin-ui-components/types";

import { getProductById } from "actions/product-actions";
import EditProductForm from "components/forms/EditProductForm";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function EditProductPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: ProductDetails = getProductById(productId);

  return (
    <>
      <h1 className="py-4">{`Edit Product: ${product.productId}`}</h1>
      <EditProductForm product={product} />
    </>
  );
}
