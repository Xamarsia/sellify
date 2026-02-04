"use client";

import { useState } from "react";

import ChevronDown from "@sellify/common-icons/chevron-down";
import Button from "@sellify/common-ui-components/buttons/Button";

import { Customer } from "@sellify/admin-ui-components/types";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import CustomersView from "@sellify/admin-ui-components/data-view/CustomersView";

import PageTitle from "components/PageTitle";
import { getCustomers } from "actions/customer-actions";
import { CustomersFilterSections } from "filter-sections/customers-filter";
import Filter from "components/Filter";

export default function CustomersPage() {
  const defaultCustomers: Array<Customer> = getCustomers();
  const [page, setPage] = useState<number>(1);
  const [customers, setCustomers] = useState<Array<Customer>>(defaultCustomers);

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
        <CardWithChard label="New Customers" value="823" trendValue={0} />
        <CardWithChard
          label="Average Purchase Value"
          value="$7,823"
          trendValue={10}
        />
        <CardWithChard
          label="Average Order Frequency"
          value="2"
          trendValue={-10}
        />
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={CustomersFilterSections} />
        </div>
        <CustomersView
          content={customers}
          currentPage={page}
          onPageChanged={setPage}
          pagesAmount={10}
        />
      </div>
    </>
  );
}
