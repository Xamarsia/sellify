import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";

import { OrderPreview } from "../types";
import LinkTableItem from "../table-items/LinkTableItem";
import LinkIdTableItem from "../table-items/LinkIdTableItem";

type Props = {
  content: Array<OrderPreview>;
};

export default function OrdersView({ content }: Props) {
  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = [
      "Order ID",
      "Date",
      "Customer",
      "Total",
      "Status",
    ];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((order) => [
      <LinkIdTableItem href={`/order/${order.orderId}`} text={order.orderId} />,
      <p>{order.date}</p>,
      <LinkTableItem
        href={`/customer/${order.customerId}`}
        text={order.customerName}
      />,
      <p>{"$" + order.total}</p>,
      <OrderStatusComponent status={order.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
