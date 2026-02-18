"use client";

import { useState } from "react";

import ChevronDownIcon from "@sellify/common-icons/chevron-down";
import { Size } from "@sellify/common-icons/enums";
import Button from "@sellify/common-ui-components/buttons/Button";

import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import { OrderPreview } from "@sellify/admin-ui-components/types";

import { getOrdersPreview } from "actions/order-actions";
import { OrdersFilterSections } from "filter-sections/orders-filter";
import Filter from "components/Filter";
import PageTitle from "components/PageTitle";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";

export default function OrdersPage() {
  const [page, setPage] = useState<number>(1);
  const oderHistory: Array<OrderPreview> = getOrdersPreview();
  const [orders, setOrders] = useState<Array<OrderPreview>>(oderHistory);

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        {/* TODO: Replace this button with a calendar component */}
        <Button variant="outline" size="small">
          Jan 01 - Jan 28 <ChevronDownIcon size={Size.lg} />
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <CardWithChard
          label="Total Sales Revenue"
          value="$7,823"
          trendValue={10}
        />
        <CardWithChard
          label="Total Orders Amount"
          value="345"
          trendValue={-10}
        />
        <CardWithChard label="Average Order Value" value="$54" trendValue={0} />
      </div>

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
