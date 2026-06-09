import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { DateCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/DateCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { OrderStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/OrderStatusCellBuilder";

import { OrderPreview } from "../../types";

type OrdersViewProps = {
  content: Array<OrderPreview>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<OrderPreview>> = [
  createCellPrototype("Order ID", LinkCellBuilder, ({ orderId }) => ({
    href: `/order/${orderId}`,
    children: IdCellBuilder.buildView({ id: orderId }),
  })),
  createCellPrototype("Date", DateCellBuilder, ({ date }) => ({ date })),
  createCellPrototype(
    "Customer",
    LinkTextCellBuilder,
    ({ customerId, customerName }) => ({
      href: `/customer/${customerId}`,
      text: customerName,
    }),
  ),
  createCellPrototype("Total", CurrencyCellBuilder, ({ total }) => ({
    amount: total,
  })),
  createCellPrototype("Status", OrderStatusCellBuilder, ({ status }) => ({
    status,
  })),
];

export default function OrdersView({ content }: OrdersViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
