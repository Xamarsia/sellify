import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import LinkIdTableItem from "@sellify/common-ui-components/table-items/LinkIdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";
import ColumnHeaderItem from "@sellify/common-ui-components/view/ColumnHeaderItem";
import SortableColumnHeaderItem from "@sellify/common-ui-components/view/SortableColumnHeaderItem";

import { OrderPreview } from "../types";

type Props = {
  content: Array<OrderPreview>;
};

export default function OrdersView({ content }: Props) {
  const tableHeader = useMemo<Array<ReactNode>>(() => {
    const header: Array<ReactNode> = [
      <ColumnHeaderItem label={"Order ID"} />,
      <SortableColumnHeaderItem label={"Date"} />,
      <SortableColumnHeaderItem label={"Customer"} />,
      <SortableColumnHeaderItem label={"Total"} />,
      <ColumnHeaderItem label={"Status"} />
    ];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((order) => [
      <LinkIdTableItem href={`/order/${order.orderId}`} text={order.orderId} />,
      <DateTableItem date={order.date} />,
      <LinkTableItem
        href={`/customer/${order.customerId}`}
        text={order.customerName}
      />,
      <CurrencyTableItem amount={order.total} />,
      <OrderStatusComponent status={order.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={contentArray} />;
}
