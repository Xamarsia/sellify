import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";

import { Category } from "../types";

type CategoriesViewProps = {
  content: Array<Category>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Category>> = [
  createCellPrototype(
    "Category",
    LinkTextCellBuilder,
    ({ categoryId, title }) => ({
      href: `/category/${categoryId}`,
      text: title,
    }),
  ),
  createCellPrototype("Category ID", IdCellBuilder, ({ categoryId }) => ({
    id: categoryId,
  })),
  createCellPrototype(
    "Related Products Amount",
    NumberCellBuilder,
    ({ relatedProductsCount }) => ({ value: relatedProductsCount }),
  ),
];

export default function CategoriesView({ content }: CategoriesViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
