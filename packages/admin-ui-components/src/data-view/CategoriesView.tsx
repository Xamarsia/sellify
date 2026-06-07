import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Category } from "../types";

type CategoriesViewProps = {
  content: Array<Category>;
};

const cellPrototypes: ReadonlyArray<Cell<Category>> = [
  {
    title: "Category",
    viewBuilder: ({ categoryId, title }) => (
      <LinkTableItem href={`/category/${categoryId}`} text={title} />
    ),
  },
  {
    title: "Category ID",
    viewBuilder: ({ categoryId }) => <IdTableItem id={categoryId} />,
  },
  {
    title: "Related Products Amount",
    viewBuilder: ({ relatedProductsCount }) => <p>{relatedProductsCount}</p>,
  },
];

export default function CategoriesView({ content }: CategoriesViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
