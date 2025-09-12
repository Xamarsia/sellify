import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";

import { Order } from "../types";

type Props = {
  content: Array<Order>;
};

export default function OrdersTable({ content }: Props) {
  const tableHeader: Array<string> = [
    "Order Number",
    "Status",
    "Date",
    "Total",
  ];

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
    return content.map((order) => [
      <h4 key={"orderid" + order.orderId}>{"#" + order.orderId}</h4>,
      <OrderStatusComponent status={order.status} />,
      <p>{order.date}</p>,
      <h3>{"$" + order.total}</h3>,
    ]);
  }, [content]);

  return <Table head={tableHeader} content={getContentArray} />;
}
