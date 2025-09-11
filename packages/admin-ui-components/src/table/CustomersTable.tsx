import { ReactNode, useMemo } from "react";

import Table from "@sellify/common-ui-components/table/Table";

import CustomerStatusComponent from "../statuses/CustomerStatusComponent";

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

  const getContentArray = useMemo((): Array<Array<ReactNode>> => {
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

  return <Table head={tableHeader} content={getContentArray} />;
}
