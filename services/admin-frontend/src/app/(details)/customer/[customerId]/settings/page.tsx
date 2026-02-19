import "server-only";

import { Customer } from "@sellify/admin-ui-components/types";

import { getCustomerById } from "actions/customer-actions";
import CustomerSettings from "setting-sections/customer-settings";

type Props = {
  params: Promise<{ customerId: number }>;
};

export default async function CustomerSettingsPage({ params }: Props) {
  const customerId: number = (await params).customerId;
  const customer: Customer = getCustomerById(customerId);
  return (
    <>
      <h1 className="py-4">{`Customer Settings: ${customer.customerId}`}</h1>
      <CustomerSettings />
    </>
  );
}
