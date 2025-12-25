import { ReactNode, useMemo } from "react";

import { OrderPreview } from "../types";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";

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
      <p key={"orderid" + order.orderId}>{"#" + order.orderId}</p>,
      <p>{order.date}</p>,
      <LinkButton>
        <p className="line-clamp-3 min-w-20 max-w-96 not-sm:pl-14">
          {order.customerName}
        </p>
      </LinkButton>,
      <p>{"$" + order.total}</p>,
      <OrderStatusComponent status={order.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
