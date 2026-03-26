"use client";

import { useCallback, useState } from "react";

import AdaptiveDataView from "@sellify/common-ui-components/view/AdaptiveDataView";
import IdTableItem from "@sellify/common-ui-components/table-items/IdTableItem";
import CurrencyTableItem from "@sellify/common-ui-components/table-items/CurrencyTableItem";
import DateTableItem from "@sellify/common-ui-components/table-items/DateTableItem";

export default function AdaptiveDataViewExample() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChanged = useCallback((page: number): void => {
    setCurrentPage(page);
  }, []);

  const head: Array<string> = ["ID", "Product", "Price", "Date"];

  const content = [
    [
      <IdTableItem id={1001} key="id-1" />,
      <p key="name-1">Product Title 1</p>,
      <CurrencyTableItem amount={29.99} key="price-1" />,
      <DateTableItem date="2026-03-01" key="date-1" />,
    ],
    [
      <IdTableItem id={1002} key="id-2" />,
      <p key="name-2">Product Title 2</p>,
      <CurrencyTableItem amount={89.99} key="price-2" />,
      <DateTableItem date="2026-03-10" key="date-2" />,
    ],
    [
      <IdTableItem id={1003} key="id-3" />,
      <p key="name-3">Product Title 3</p>,
      <CurrencyTableItem amount={120.0} key="price-3" />,
      <DateTableItem date="2026-03-15" key="date-3" />,
    ],
  ];

  return (
    <AdaptiveDataView
      head={head}
      content={content}
      pagesAmount={5}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
    />
  );
}
