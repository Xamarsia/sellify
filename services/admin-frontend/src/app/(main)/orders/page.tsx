"use client";

import { ChangeEvent, useCallback, useContext, useState } from "react";

import ChevronDown from "@sellify/common-icons/chevron-down";
import Button from "@sellify/common-ui-components/buttons/Button";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";
import FilterButton from "@sellify/common-ui-components/filter/FilterButton";

import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import { OrderPreview } from "@sellify/admin-ui-components/types";

import PageTitle from "components/PageTitle";
import {
  filterOrdersHistory,
  getOrdersPreview,
} from "common/actions/order-actions";
import { OrdersFilterSections } from "filter-sections/orders-filter";
import { FilterPanelContext } from "common/contexts/common-context";
import { FilterPanelController } from "types";

export default function OrdersPage() {
  const oderHistory: Array<OrderPreview> = getOrdersPreview();
  const { openFilterPanel } =
    useContext<FilterPanelController>(FilterPanelContext);

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

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setQuery(query);
      setOrders(query ? filterOrdersHistory(query) : oderHistory);
    },
    [],
  );

  const openFilter = useCallback((): void => {
    openFilterPanel(OrdersFilterSections);
  }, [openFilterPanel]);

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        {/* TODO: Replace this button with a calendar component */}
        <Button variant="outline" size="small">
          Jan 01 - Jan 28 <ChevronDown style="size-6" />
        </Button>
      </div>

      <div className="flex flex-col w-full gap-4">
        <FilterButton onClick={openFilter} />
        <div className="relative flex w-full justify-between items-start gap-4">
          <SearchInput value={query} onChange={onSearchChanged} />
          <Dropdown
            title={"sort by"}
            items={comboboxSortItems}
            selectedKey={sortByKey}
            onKeySelected={setSortByKey}
          />
        </div>
        <OrdersView content={orders} />
      </div>
    </>
  );
}
