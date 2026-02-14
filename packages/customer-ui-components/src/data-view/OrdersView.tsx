"use client";

import { ReactNode, useMemo, useState } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatusComponent";
import LinkIdTableItem from "@sellify/common-ui-components/table-items/LinkIdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";

import { OrderPreview } from "../types";

type OrdersViewProps = {
  content: Array<OrderPreview>;
};

export default function OrdersView({ content }: OrdersViewProps) {
  const [page, setPage] = useState<number>(1);

  const tableHeader = useMemo<Array<string>>(() => {
    const header: Array<string> = ["Order Number", "Status", "Date", "Total"];
    return header;
  }, []);

  const contentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((order) => [
      <LinkIdTableItem href={`/order/${order.orderId}`} text={order.orderId} />,
      <OrderStatusComponent status={order.status} />,
      <DateTableItem date={order.date} />,
      <CurrencyTableItem amount={order.total} />,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={contentArray}
      currentPage={page}
      onPageChanged={setPage}
      pagesAmount={10}
    />
  );
}
