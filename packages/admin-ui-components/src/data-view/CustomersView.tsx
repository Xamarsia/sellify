import { ReactNode, useMemo } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";

import { Customer } from "../types";
import CustomerStatusComponent from "../statuses/CustomerStatusComponent";
import LinkTableItem from "../table-items/LinkTableItem";
import IdTableItem from "../table-items/IdTableItem";

type Props = {
  content: Array<Customer>;
};

export default function CustomersView({ content }: Props) {
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
      <p>{"$" + customer.totalExpenses}</p>,
      <CustomerStatusComponent status={customer.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
