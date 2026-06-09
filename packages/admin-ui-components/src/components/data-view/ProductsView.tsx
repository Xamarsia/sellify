import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";
import { ProductStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ProductStatusCellBuilder";

import { Product } from "../../types";

type ProductsViewProps = {
  content: Array<Product>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Product>> = [
  createCellPrototype("", ImageCellBuilder, ({ image }) => ({ src: image })),
  createCellPrototype(
    "Product",
    LinkTextCellBuilder,
    ({ productId, title }) => ({
      href: `/product/${productId}`,
      text: title,
    }),
  ),
  createCellPrototype("Product ID", IdCellBuilder, ({ productId }) => ({
    id: productId,
  })),
  createCellPrototype("Category", LinkTextCellBuilder, ({ category }) => ({
    href: `/category/${category.categoryId}`,
    text: category.title,
  })),
  createCellPrototype("Price", CurrencyCellBuilder, ({ price }) => ({
    amount: price,
  })),
  createCellPrototype("Inventory", NumberCellBuilder, ({ quantity }) => ({
    value: quantity,
  })),
  createCellPrototype("Status", ProductStatusCellBuilder, ({ status }) => ({
    status,
  })),
];

export default function ProductsView({ content }: ProductsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
