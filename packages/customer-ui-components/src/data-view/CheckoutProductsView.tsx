import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { CartItem } from "../types";
import ProductImagePreview from "../product-preview/ProductImagePreview";
import CartItemRemoveButton from "../cart/CartItemRemoveButton";
import CartItemQuantitySelector from "../cart/CartItemQuantitySelector";

type Props = {
  content: Array<CartItem>;
  onItemRemove: (productId: number) => void;
  getProductMaxQuantity: (productId: number) => number;
  onCartItemQuantityChanged: (cartItemId: number, quantity: number) => void;
};

export default function CheckoutProductsView({
  content,
  onItemRemove,
  getProductMaxQuantity,
  onCartItemQuantityChanged,
}: Props) {
  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = [
      "",
      "Product",
      "Quantity",
      "Price",
      "Subtotal",
      "",
    ];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <ProductImagePreview src={item.product.image} />,
      <h4 className="text-justify line-clamp-3 break-all hover:underline underline-offset-3 min-w-20 max-w-96 not-sm:pl-14">
        {item.product.title}
      </h4>,
      <CartItemQuantitySelector
        cartItem={item}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />,
      <p>{"$" + item.product.price}</p>,
      <p>{"$" + item.product.price * item.amount}</p>,
      <div className="flex w-full justify-end sm:justify-center">
        <CartItemRemoveButton
          cartItemId={item.cartItemId}
          onCartItemRemove={onItemRemove}
        />
      </div>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
