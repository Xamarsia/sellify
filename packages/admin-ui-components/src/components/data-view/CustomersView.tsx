import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";
import { CustomerStatusCellBuilder } from "../cell-builders/CustomerStatusCellBuilder";

import { Customer } from "../../types";

type CustomersViewProps = {
  content: Array<Customer>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Customer>> = [
  createCellPrototype(
    "Customer name",
    LinkTextCellBuilder,
    ({ customerId, name }) => ({
      href: `/customer/${customerId}`,
      text: name,
    }),
  ),
  createCellPrototype("Customer ID", IdCellBuilder, ({ customerId }) => ({
    id: customerId,
  })),
  createCellPrototype(
    "Orders Amount",
    NumberCellBuilder,
    ({ ordersCount }) => ({
      value: ordersCount,
    }),
  ),
  createCellPrototype(
    "Total expenses",
    CurrencyCellBuilder,
    ({ totalExpenses }) => ({ amount: totalExpenses }),
  ),
  createCellPrototype("Status", CustomerStatusCellBuilder, ({ status }) => ({
    status,
  })),
];

export default function CustomersView({ content }: CustomersViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
