import { OrderDetails } from "../types";

import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";

type OrderInfoProps = {
  order: OrderDetails;
};

export default function OrderInfo({ order }: OrderInfoProps) {
  return (
    <>
      <div className="flex w-full gap-4">
        <p>Status:</p>
        <OrderStatusComponent status={order.status} />
      </div>
      <p>Purchase date: {order.purchaseDate}</p>
    </>
  );
}
