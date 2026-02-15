"use client";

import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";

import { CartItem } from "../types";
import CartItemRemoveButton from "../cart/CartItemRemoveButton";
import CartItemQuantitySelector from "../cart/CartItemQuantitySelector";

type CheckoutProductsViewProps = {
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
}: CheckoutProductsViewProps) {
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
      <ProductImageTableItem src={item.product.image} size="large" />,
      <LinkTableItem
        href={`/product/${item.product.productId}`}
        text={item.product.title}
      />,
      <CartItemQuantitySelector
        cartItem={item}
        getProductMaxQuantity={getProductMaxQuantity}
        onCartItemQuantityChanged={onCartItemQuantityChanged}
      />,
      <CurrencyTableItem amount={item.product.price} />,
      <CurrencyTableItem amount={item.product.price * item.amount} />,
      <div className="flex w-full justify-end sm:justify-center">
        <CartItemRemoveButton
          cartItemId={item.cartItemId}
          onCartItemRemove={onItemRemove}
        />
      </div>,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={contentArray}
      pagesAmount={0}
    />
  );
}
