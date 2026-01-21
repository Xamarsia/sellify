import "server-only";

import { Customer, OrderPreview } from "@sellify/admin-ui-components/types";

import { getCustomerById } from "common/actions/customer-actions";
import { getOrdersByCustomerId } from "common/actions/order-actions";
import CustomerDetailsPage from "components/pages/CustomerDetailsPage";

type Props = {
  params: Promise<{ customerId: number }>;
};

export default async function CustomerPage({ params }: Props) {
  const customerId: number = (await params).customerId;
  const customer: Customer = getCustomerById(customerId);
  const orders: Array<OrderPreview> = getOrdersByCustomerId(customerId);
  return <CustomerDetailsPage customer={customer} orders={orders} />;
}
