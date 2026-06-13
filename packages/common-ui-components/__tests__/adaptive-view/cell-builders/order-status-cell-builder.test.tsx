import type { ReactElement } from "react";

import { OrderStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/OrderStatusCellBuilder";
import OrderStatus, {
  ORDER_STATUS,
} from "@sellify/common-ui-components/statuses/OrderStatus";

describe("OrderStatusCellBuilder", () => {
  it.each(Object.values(ORDER_STATUS))(
    "builds an OrderStatus with the %s status",
    (status) => {
      const view = OrderStatusCellBuilder.buildView({ status }) as ReactElement;

      expect(view.type).toBe(OrderStatus);
      expect(view.props).toEqual({ status });
    },
  );
});
