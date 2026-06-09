"use client";

import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { DateCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/DateCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkCellBuilder";
import { OrderStatusCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/OrderStatusCellBuilder";

import { OrderPreview } from "../../types";

type OrdersViewProps = {
  content: Array<OrderPreview>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<OrderPreview>> = [
  createCellPrototype("Order Number", LinkCellBuilder, ({ orderId }) => ({
    href: `/order/${orderId}`,
    children: IdCellBuilder.buildView({ id: orderId }),
  })),
  createCellPrototype("Status", OrderStatusCellBuilder, ({ status }) => ({
    status,
  })),
  createCellPrototype("Date", DateCellBuilder, ({ date }) => ({ date })),
  createCellPrototype("Total", CurrencyCellBuilder, ({ total }) => ({
    amount: total,
  })),
];

export default function OrdersView({ content }: OrdersViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
