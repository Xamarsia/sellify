import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";

import { CartItem } from "../types";
import ProductTableImage from "./ProductTableImage";
import CounterButtonTableItem from "./CounterButtonTableItem";
import RemoveFromCartButton from "./RemoveFromCartButton";

type Props = {
  content: Array<CartItem>;
  onItemRemove: (productId: number) => void;
  getProductMaxQuantity: (productId: number) => number;
  onCartItemQuantityChanged: (cartItemId: number, quantity: number) => void;
};

export default function OrderProductsTable({
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
        <ProductTableImage src={item.product.image} />
        <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3 min-w-20 max-w-96">
          {item.product.title}
        </h4>
      </div>,
      <p>{"$" + item.product.price}</p>,
      <CounterButtonTableItem
        cartItem={item}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />,
      <p>{"$" + item.product.price * item.amount}</p>,
      <RemoveFromCartButton
        cartItemId={item.cartItemId}
        onCartItemRemove={onItemRemove}
      />,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
