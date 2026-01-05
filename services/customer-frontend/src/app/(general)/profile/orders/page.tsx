"use client";

import { ChangeEvent, useCallback, useState } from "react";

import { OrderPreview } from "@sellify/customer-ui-components/types";
import OrdersView from "@sellify/customer-ui-components/data-view/OrdersView";

import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";

import {
  filterOrdersHistory,
  getOrderHistory,
} from "common/actions/order-actions";
import Pagination from "@sellify/common-ui-components/pages/Pagination";

export default function OrdersHistoryPage() {
  const oderHistory: Array<OrderPreview> = getOrderHistory();

  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [sortByKey, setSortByKey] = useState<string>();
  const [orders, setOrders] = useState<Array<OrderPreview>>(oderHistory);

  const comboboxSortItems = new Map<string, string>([
    ["newest", "Rank by newest date"],
    ["oldest", "Rank by oldest date"],
    ["status", "Rank by status"],
    ["byLowestPrice", "Rank by lowest price"],
    ["byHighestPrice", "Rank by highest price"],
  ]);

  const onPageChanged = useCallback((newPage: number): void => {
    setPage(newPage);
  }, []);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setOrders(query ? filterOrdersHistory(query) : oderHistory);
    },
    [],
  );

  return (
    <div className="flex w-full flex-col items-end gap-6">
      <div className="relative flex w-full justify-between items-start gap-4">
        <SearchInput value={query} onChange={onSearchChanged} />
        <Dropdown
          title={"sort by"}
          items={comboboxSortItems}
          selectedKey={sortByKey}
          onKeySelected={setSortByKey}
        />
      </div>
      <div className="flex w-full max-h-fit">
        <OrdersView content={orders} />
      </div>
      <Pagination
        currentPage={page}
        pagesAmount={20}
        pagesBarLength={3}
        onPageChanged={onPageChanged}
      />
    </div>
  );
}
