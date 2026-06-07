import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatusComponent";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Product } from "../types";

type ProductsViewProps = {
  content: Array<Product>;
};

const cellPrototypes: ReadonlyArray<Cell<Product>> = [
  {
    title: "",
    viewBuilder: ({ image }) => <ProductImageTableItem src={image} />,
  },
  {
    title: "Product",
    viewBuilder: ({ productId, title }) => (
      <LinkTableItem href={`/product/${productId}`} text={title} />
    ),
  },
  {
    title: "Product ID",
    viewBuilder: ({ productId }) => <IdTableItem id={productId} />,
  },
  {
    title: "Category",
    viewBuilder: ({ category }) => (
      <LinkTableItem
        href={`/category/${category.categoryId}`}
        text={category.title}
      />
    ),
  },
  {
    title: "Price",
    viewBuilder: ({ price }) => <CurrencyTableItem amount={price} />,
  },
  {
    title: "Inventory",
    viewBuilder: ({ quantity }) => <p>{quantity}</p>,
  },
  {
    title: "Status",
    viewBuilder: ({ status }) => <ProductStatusComponent status={status} />,
  },
];

export default function ProductsView({ content }: ProductsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
