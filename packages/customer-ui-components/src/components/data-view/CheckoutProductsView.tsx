"use client";

import { useMemo } from "react";

import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";

import { CartItem } from "../../types";
import { CartItemQuantityCellBuilder } from "../cell-builders/CartItemQuantityCellBuilder";
import { CartItemRemoveCellBuilder } from "../cell-builders/CartItemRemoveCellBuilder";

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
  const cellPrototypes = useMemo<ReadonlyArray<CellPrototype<CartItem>>>(
    () => [
      createCellPrototype("", ImageCellBuilder, ({ product }) => ({
        src: product.image,
        size: "large" as const,
      })),
      createCellPrototype("Product", LinkTextCellBuilder, ({ product }) => ({
        href: `/product/${product.productId}`,
        text: product.title,
      })),
      createCellPrototype("Quantity", CartItemQuantityCellBuilder, (item) => ({
        cartItem: item,
        getProductMaxQuantity,
        onCartItemQuantityChanged,
      })),
      createCellPrototype("Price", CurrencyCellBuilder, ({ product }) => ({
        amount: product.price,
      })),
      createCellPrototype(
        "Subtotal",
        CurrencyCellBuilder,
        ({ amount, product }) => ({ amount: product.price * amount }),
      ),
      createCellPrototype("", CartItemRemoveCellBuilder, ({ cartItemId }) => ({
        cartItemId,
        onCartItemRemove: onItemRemove,
      })),
    ],
    [getProductMaxQuantity, onCartItemQuantityChanged, onItemRemove],
  );

  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
