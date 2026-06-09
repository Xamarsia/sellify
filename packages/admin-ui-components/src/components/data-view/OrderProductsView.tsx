import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";

import { CartItem } from "../../types";

type OrderProductsViewProps = {
  content: Array<CartItem>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<CartItem>> = [
  createCellPrototype("", ImageCellBuilder, ({ product }) => ({
    src: product.image,
  })),
  createCellPrototype("Product", LinkTextCellBuilder, ({ product }) => ({
    href: `/product/${product.productId}`,
    text: product.title,
  })),
  createCellPrototype("Quantity", NumberCellBuilder, ({ amount }) => ({
    value: amount,
  })),
  createCellPrototype("Price", CurrencyCellBuilder, ({ product }) => ({
    amount: product.price,
  })),
  createCellPrototype(
    "Subtotal",
    CurrencyCellBuilder,
    ({ amount, product }) => ({
      amount: product.price * amount,
    }),
  ),
];

export default function OrderProductsView({ content }: OrderProductsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
