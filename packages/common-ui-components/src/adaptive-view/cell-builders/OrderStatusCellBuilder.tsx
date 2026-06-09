import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import OrderStatus, {
  type OrderStatusVariant,
} from "../../statuses/OrderStatus";

type OrderStatusCellBuilderProps = {
  status: OrderStatusVariant;
};

/**
 * Displays an order-status badge in a data-view cell.
 *
 * @param status - Order status variant to display
 */
export const OrderStatusCellBuilder = {
  buildView({ status }: OrderStatusCellBuilderProps): ReactNode {
    return <OrderStatus status={status} />;
  },
} satisfies CellBuilder<OrderStatusCellBuilderProps>;
