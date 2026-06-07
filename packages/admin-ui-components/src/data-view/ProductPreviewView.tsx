import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import ProductImageTableItem from "@sellify/common-ui-components/table-items/ProductImageTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { ProductPreview } from "../types";

type ProductPreviewViewProps = {
  content: Array<ProductPreview>;
};

const cellPrototypes: ReadonlyArray<Cell<ProductPreview>> = [
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
];

export default function ProductPreviewView({
  content,
}: ProductPreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
