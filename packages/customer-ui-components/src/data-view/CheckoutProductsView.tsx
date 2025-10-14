import { ReactNode, useMemo } from "react";

import TableView from "@sellify/common-ui-components/view/TableView";

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
  const tableHeader: Array<string> = [
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
    "Actions",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((item) => [
      <div className="flex gap-4 items-center">
        <ProductImagePreview src={item.product.image} />
        <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3 min-w-20 max-w-96">
          {item.product.title}
        </h4>
      </div>,
      <p>{"$" + item.product.price}</p>,
      <CartItemQuantitySelector
        cartItem={item}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />,
      <p>{"$" + item.product.price * item.amount}</p>,
      <CartItemRemoveButton
        cartItemId={item.cartItemId}
        onCartItemRemove={onItemRemove}
      />,
    ]);
  }, [content]);

  return <TableView head={tableHeader} content={getContentArray} />;
}
