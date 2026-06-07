"use client";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { CartItem } from "../types";

type FinalProductsViewProps = {
  content: Array<CartItem>;
};

const cellPrototypes: ReadonlyArray<Cell<CartItem>> = [
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
    viewBuilder: ({ amount }) => <p>{amount}</p>,
  },
  {
    title: "Price",
    viewBuilder: ({ product }) => <CurrencyTableItem amount={product.price} />,
  },
  {
    title: "Subtotal",
    viewBuilder: ({ amount, product }) => (
      <CurrencyTableItem amount={product.price * amount} />
    ),
  },
];

export default function FinalProductsView({ content }: FinalProductsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
