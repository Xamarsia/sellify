import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";

import { ProductPreview } from "../types";

type ProductPreviewViewProps = {
  content: Array<ProductPreview>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<ProductPreview>> = [
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
];

export default function ProductPreviewView({
  content,
}: ProductPreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
