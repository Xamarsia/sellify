import { ReactNode, useMemo } from "react";

import TableView from "@sellify/common-ui-components/view/TableView";

import CustomerStatusComponent from "../statuses/CustomerStatusComponent";
import { Customer } from "../types";

type Props = {
  content: Array<Customer>;
};

export default function CustomersTable({ content }: Props) {
  const tableHeader: Array<string> = [
    "Customer ID",
    "Customer name",
    "Orders",
    "Total expenses",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((customer) => [
      <h4>{"#" + customer.customerId}</h4>,
      <p>{customer.name}</p>,
      <p>
        {customer.ordersCount +
          `${customer.ordersCount > 1 ? " orders" : " order"}`}
      </p>,
      <p>{"$" + customer.totalExpenses}</p>,
      <CustomerStatusComponent status={customer.status} />,
    ]);
  }, [content]);

  return <TableView head={tableHeader} content={getContentArray} />;
}
