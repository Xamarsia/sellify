import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import LinkTableItem from "@sellify/common-ui-components/table-items/LinkTableItem";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

import { Customer } from "../types";
import CustomerStatusComponent from "../statuses/CustomerStatusComponent";

type CustomersViewProps = {
  content: Array<Customer>;
};

const cellPrototypes: ReadonlyArray<Cell<Customer>> = [
  {
    title: "Customer name",
    viewBuilder: ({ customerId, name }) => (
      <LinkTableItem href={`/customer/${customerId}`} text={name} />
    ),
  },
  {
    title: "Customer ID",
    viewBuilder: ({ customerId }) => <IdTableItem id={customerId} />,
  },
  {
    title: "Orders Amount",
    viewBuilder: ({ ordersCount }) => <p>{ordersCount}</p>,
  },
  {
    title: "Total expenses",
    viewBuilder: ({ totalExpenses }) => (
      <CurrencyTableItem amount={totalExpenses} />
    ),
  },
  {
    title: "Status",
    viewBuilder: ({ status }) => <CustomerStatusComponent status={status} />,
  },
];

export default function CustomersView({ content }: CustomersViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
