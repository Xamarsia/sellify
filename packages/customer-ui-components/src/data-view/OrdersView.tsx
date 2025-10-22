import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";

import { OrderPreview } from "../types";

type Props = {
  content: Array<OrderPreview>;
};

export default function OrdersView({ content }: Props) {
  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = ["Order Number", "Status", "Date", "Total"];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((order) => [
      <h4 key={"orderid" + order.orderId}>{"#" + order.orderId}</h4>,
      <OrderStatusComponent status={order.status} />,
      <p>{order.date}</p>,
      <h3>{"$" + order.total}</h3>,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
