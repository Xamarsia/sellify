import "server-only";

import {
  getProduct,
  getProduct2,
} from "../../../common/actions/product-actions";
import ProductDetails from "@sellify/customer-ui-components/ProductDetails";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductPage({ params }: Props) {
  const productId: number = (await params).productId;
  const product: Product = getProduct(productId);
  const product2: Product = getProduct2(productId);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
