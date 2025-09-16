import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";

import { CartItem } from "../types";
import ProductTableImage from "./ProductTableImage";
import CounterButtonTableItem from "./CounterButtonTableItem";

type Props = {
  content: Array<CartItem>;
  getProductMaxQuantity: (productId: number) => number;
  onCartItemQuantityChanged: (cartItemId: number, quantity: number) => void;
};

export default function OrderProductsTable({ content, getProductMaxQuantity, onCartItemQuantityChanged }: Props) {

  const tableHeader: Array<string> = [
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
  ];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((item) => [
      <div className="flex gap-4 items-center shrink-0">
        <ProductTableImage src={item.product.image} />
        <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3 min-w-40">
          {item.product.title}
        </h4>
      </div>,
      <p>{"$" + item.product.price}</p>,
      <CounterButtonTableItem
        cartItem={item}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />,
      <p>{"$" + item.product.price * item.amount}</p>
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />
}
