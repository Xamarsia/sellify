"use client";

import ChevronDown from "@sellify/common-icons/chevron-down";
import Button from "@sellify/common-ui-components/buttons/Button";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";

import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";

import PageTitle from "components/PageTitle";
import { getOrdersPreview } from "common/actions/order-actions";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle />
        {/* TODO: Replace this button with a calendar component */}
        <Button variant="outline" size="small">
          Jan 01 - Jan 28 <ChevronDown style="size-6" />
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <CardWithChard label="Revenue" value="$7,823" trendValue={10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={-10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={0} />
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-between items-center">
          <h2>Latest Orders</h2>
          <LinkButton href="/orders">
            More <ArrowLongRightIcon style="size-6" />
          </LinkButton>
        </div>
        <OrdersView content={getOrdersPreview()} />
      </div>
    </>
  );
}
