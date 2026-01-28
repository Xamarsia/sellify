import { ReactNode, useMemo, useState } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";

import { Customer } from "../types";
import CustomerStatusComponent from "../statuses/CustomerStatusComponent";

type Props = {
  content: Array<Customer>;
  pagesAmount: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export default function CustomersView({
  content,
  pagesAmount,
  currentPage,
  onPageChanged,
}: Props) {
  const tableHeader: Array<string> = [
    "Customer name",
    "Customer ID",
    "Orders Amount",
    "Total expenses",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((customer) => [
      <LinkTableItem
        href={`/customer/${customer.customerId}`}
        text={customer.name}
      />,
      <IdTableItem id={customer.customerId} />,
      <p>{customer.ordersCount}</p>,
      <CurrencyTableItem amount={customer.totalExpenses} />,
      <CustomerStatusComponent status={customer.status} />,
    ]);
  }, [content]);

  return (
    <AdaptiveDataView
      head={tableHeader}
      content={getContentArray}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pagesAmount={pagesAmount}
    />
  );
}
