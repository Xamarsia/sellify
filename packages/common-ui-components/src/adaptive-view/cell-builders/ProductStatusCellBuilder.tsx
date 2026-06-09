import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import ProductStatus, {
  type ProductStatusVariant,
} from "../../statuses/ProductStatus";

type ProductStatusCellBuilderProps = {
  status: ProductStatusVariant;
};

/**
 * Displays a product-status badge in a data-view cell.
 *
 * @param status - Product status variant to display
 */
export const ProductStatusCellBuilder = {
  buildView({ status }: ProductStatusCellBuilderProps): ReactNode {
    return <ProductStatus status={status} />;
  },
} satisfies CellBuilder<ProductStatusCellBuilderProps>;
