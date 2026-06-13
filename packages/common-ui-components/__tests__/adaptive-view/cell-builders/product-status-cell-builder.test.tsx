import type { ReactElement } from "react";

import { ProductStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ProductStatusCellBuilder";
import ProductStatus, {
  PRODUCT_STATUS,
} from "@sellify/common-ui-components/statuses/ProductStatus";

describe("ProductStatusCellBuilder", () => {
  it.each(Object.values(PRODUCT_STATUS))(
    "builds a ProductStatus with the %s status",
    (status) => {
      const view = ProductStatusCellBuilder.buildView({
        status,
      }) as ReactElement;

      expect(view.type).toBe(ProductStatus);
      expect(view.props).toEqual({ status });
    },
  );
});
