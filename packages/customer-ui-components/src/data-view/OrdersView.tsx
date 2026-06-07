"use client";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";
import LinkIdTableItem from "@sellify/common-ui-components/table-items/LinkIdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { OrderPreview } from "../types";

type OrdersViewProps = {
  content: Array<OrderPreview>;
};

const cellPrototypes: ReadonlyArray<Cell<OrderPreview>> = [
  {
    title: "Order Number",
    viewBuilder: ({ orderId }) => (
      <LinkIdTableItem href={`/order/${orderId}`} id={orderId} />
    ),
  },
  {
    title: "Status",
    viewBuilder: ({ status }) => <OrderStatusComponent status={status} />,
  },
  {
    title: "Date",
    viewBuilder: ({ date }) => <DateTableItem date={date} />,
  },
  {
    title: "Total",
    viewBuilder: ({ total }) => <CurrencyTableItem amount={total} />,
  },
];

export default function OrdersView({ content }: OrdersViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
