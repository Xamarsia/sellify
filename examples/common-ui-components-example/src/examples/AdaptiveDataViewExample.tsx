"use client";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";
import type { Cell } from "@sellify/common-ui-components/types";

type ProductRow = {
  id: number;
  title: string;
  price: number;
  date: string;
};

const cellPrototypes: ReadonlyArray<Cell<ProductRow>> = [
  { title: "ID", viewBuilder: ({ id }) => <IdTableItem id={id} /> },
  { title: "Product", viewBuilder: ({ title }) => <p>{title}</p> },
  {
    title: "Price",
    viewBuilder: ({ price }) => <CurrencyTableItem amount={price} />,
  },
  {
    title: "Date",
    viewBuilder: ({ date }) => <DateTableItem date={date} />,
  },
];

const data: ReadonlyArray<ProductRow> = [
  { id: 1001, title: "Product Title 1", price: 29.99, date: "2026-03-01" },
  { id: 1002, title: "Product Title 2", price: 89.99, date: "2026-03-10" },
  { id: 1003, title: "Product Title 3", price: 120.0, date: "2026-03-15" },
];

export default function AdaptiveDataViewExample() {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={data} />;
}
