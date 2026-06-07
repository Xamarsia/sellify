"use client";

import { useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

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
  const cellPrototypes = useMemo<ReadonlyArray<Cell<CartItem>>>(
    () => [
      {
        title: "",
        viewBuilder: ({ product }) => (
          <ProductImageTableItem src={product.image} size="large" />
        ),
      },
      {
        title: "Product",
        viewBuilder: ({ product }) => (
          <LinkTableItem
            href={`/product/${product.productId}`}
            text={product.title}
          />
        ),
      },
      {
        title: "Quantity",
        viewBuilder: (item) => (
          <CartItemQuantitySelector
            cartItem={item}
            getProductMaxQuantity={getProductMaxQuantity}
            onCartItemQuantityChanged={onCartItemQuantityChanged}
          />
        ),
      },
      {
        title: "Price",
        viewBuilder: ({ product }) => (
          <CurrencyTableItem amount={product.price} />
        ),
      },
      {
        title: "Subtotal",
        viewBuilder: ({ amount, product }) => (
          <CurrencyTableItem amount={product.price * amount} />
        ),
      },
      {
        title: "",
        viewBuilder: ({ cartItemId }) => (
          <div className="flex w-full justify-end sm:justify-center">
            <CartItemRemoveButton
              cartItemId={cartItemId}
              onCartItemRemove={onItemRemove}
            />
          </div>
        ),
      },
    ],
    [getProductMaxQuantity, onCartItemQuantityChanged, onItemRemove],
  );

  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
