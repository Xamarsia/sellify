"use client";

import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { CurrencyCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/CurrencyCellBuilder";
import { DateCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/DateCellBuilder";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { TextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/TextCellBuilder";

type ProductRow = {
  id: number;
  title: string;
  price: number;
  date: string;
};

const cellPrototypes: ReadonlyArray<CellPrototype<ProductRow>> = [
  createCellPrototype("ID", IdCellBuilder, ({ id }) => ({ id })),
  createCellPrototype("Product", TextCellBuilder, ({ title }) => ({
    text: title,
  })),
  createCellPrototype("Price", CurrencyCellBuilder, ({ price }) => ({
    amount: price,
  })),
  createCellPrototype("Date", DateCellBuilder, ({ date }) => ({ date })),
];

const data: ReadonlyArray<ProductRow> = [
  { id: 1001, title: "Product Title 1", price: 29.99, date: "2026-03-01" },
  { id: 1002, title: "Product Title 2", price: 89.99, date: "2026-03-10" },
  { id: 1003, title: "Product Title 3", price: 120.0, date: "2026-03-15" },
];

export default function AdaptiveDataViewExample() {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={data} />;
}
