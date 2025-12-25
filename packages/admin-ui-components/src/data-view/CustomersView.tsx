
import { ReactNode, useMemo } from "react";

import { Customer } from "../types";
import CustomerStatusComponent from "../statuses/CustomerStatusComponent";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";

type Props = {
  content: Array<Customer>;
};

export default function CustomersView({ content }: Props) {
  const tableHeader: Array<string> = [
    "Customer name",
    "Customer ID",
    "Orders",
    "Total expenses",
    "Status",
  ];

  const getContentArray = useMemo<Array<Array<ReactNode>>>(() => {
    return content.map((customer) => [
      <LinkButton>
        <p className="line-clamp-3 break-all min-w-20 max-w-96 not-sm:pl-14">
          {customer.name}
        </p>
      </LinkButton>,
      <p>{"#" + customer.customerId}</p>,
      <p>
        {customer.ordersCount +
          `${customer.ordersCount > 1 ? " orders" : " order"}`}
      </p>,
      <p>{"$" + customer.totalExpenses}</p>,
      <CustomerStatusComponent status={customer.status} />,
    ]);
  }, [content]);

  return <AdaptiveDataView head={tableHeader} content={getContentArray} />;
}
