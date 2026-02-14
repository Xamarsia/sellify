import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import LinkIdTableItem from "@sellify/common-ui-components/table-items/LinkIdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";

import { OrderPreview } from "../types";

type OrdersViewProps = {
  content: Array<OrderPreview>;
  pagesAmount: number;
  currentPage?: number;
  onPageChanged?: (page: number) => void;
};

export default function OrdersView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: OrdersViewProps) {
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
      <DateTableItem date={order.date} />,
      <LinkTableItem
        href={`/customer/${order.customerId}`}
        text={order.customerName}
      />,
      <CurrencyTableItem amount={order.total} />,
      <OrderStatusComponent status={order.status} />,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={contentArray}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pagesAmount={pagesAmount}
    />
  );
}
