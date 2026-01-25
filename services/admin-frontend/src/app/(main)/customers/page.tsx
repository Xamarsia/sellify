"use client";

import { useState } from "react";

import { Customer } from "@sellify/admin-ui-components/types";
import CustomersView from "@sellify/admin-ui-components/data-view/CustomersView";

import PageTitle from "components/PageTitle";
import { getCustomers } from "actions/customer-actions";
import { CustomersFilterSections } from "filter-sections/customers-filter";
import Filter from "components/Filter";

export default function CustomersPage() {
  const defaultCustomers: Array<Customer> = getCustomers();
  const [customers, setCustomers] = useState<Array<Customer>>(defaultCustomers);

  return (
    <>
      <PageTitle />
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full justify-end">
          <Filter filterSections={CustomersFilterSections} />
        </div>
        <CustomersView content={customers} />
      </div>
    </>
  );
}
