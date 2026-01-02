"use client";

import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";

import { getOrders } from "common/actions/order-actions";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between">
        <CardWithChard label="Revenue" value="$7,823" trendValue={10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={-10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={0} />
      </div>
      <OrdersView content={getOrders()} />
    </>
  );
}
