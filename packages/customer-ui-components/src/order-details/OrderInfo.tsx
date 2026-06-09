import { OrderDetails } from "../types";

import OrderStatus from "@sellify/common-ui-components/statuses/OrderStatus";

type OrderInfoProps = {
  order: OrderDetails;
};

export default function OrderInfo({ order }: OrderInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>Status:</p>
        <OrderStatus status={order.status} />
      </div>
      <p>Purchase date: {order.purchaseDate}</p>
    </>
  );
}
