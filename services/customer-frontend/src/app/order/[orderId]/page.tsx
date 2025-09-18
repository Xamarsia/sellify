import "server-only";

import { Order } from "@sellify/customer-ui-components/types";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";

import { getOrder } from "common/actions/order-actions";
import OrderContentSections from "components/OrderContentSections";

type Props = {
  params: Promise<{ orderId: number }>;
};

export default async function OrderPage({ params }: Props) {
  const orderId: number = (await params).orderId;
  const order: Order = getOrder(orderId);

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>{`Order #${order.orderId}`}</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <div className="flex w-full flex-col divide-y divide-stroke gap-6">
          <OrderContentSections order={order} />
        </div>

        <div className="xl:w-min">
          <OrderSubtotal
            itemsSubtotal={order.itemsSubtotal}
            deliveryCharge={order.deliveryCharge}
            grandTotal={order.grandTotal}
          />
        </div>
      </div>
    </div>
  );
}
