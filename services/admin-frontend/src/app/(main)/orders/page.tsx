"use client";

import { useState } from "react";

import ChevronDown from "@sellify/common-icons/chevron-down";
import Button from "@sellify/common-ui-components/buttons/Button";

import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import { OrderPreview } from "@sellify/admin-ui-components/types";

import { getOrdersPreview } from "actions/order-actions";
import { OrdersFilterSections } from "filter-sections/orders-filter";
import Filter from "components/Filter";
import PageTitle from "components/PageTitle";

export default function OrdersPage() {
  const [page, setPage] = useState<number>(1);
  const oderHistory: Array<OrderPreview> = getOrdersPreview();
  const [orders, setOrders] = useState<Array<OrderPreview>>(oderHistory);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={OrdersFilterSections} />
        </div>
        <OrdersView
          content={orders}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </div>
    </>
  );
}
