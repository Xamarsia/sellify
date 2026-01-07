import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";
import FormSection from "@sellify/common-ui-components/FormSection";

import Card from "@sellify/admin-ui-components/card/Card";
import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import { Customer, OrderPreview } from "@sellify/admin-ui-components/types";
import CustomerInfo from "@sellify/admin-ui-components/details/CustomerInfo";

import BackButton from "components/BackButton";
import { getCustomerById } from "common/actions/customer-actions";
import { getOrdersByCustomerId } from "common/actions/order-actions";

type Props = {
  params: Promise<{ customerId: number }>;
};

export default async function CustomerDetailsPage({ params }: Props) {
  const customerId: number = (await params).customerId;
  const customer: Customer = getCustomerById(customerId);
  const orders: Array<OrderPreview> = getOrdersByCustomerId(customerId);

  return (
    <>
      <BackButton />
      <h1 className="py-4">{`Customer: ${customer.name} #${customer.customerId}`}</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <Card label="Orders" value="7" />
        <Card label="Balance" value="$7,823" />
        <Card label="Amount Spent" value="$3,3456" />
      </div>

      <FormSection title="Customer Details">
        <CustomerInfo customer={customer} />
      </FormSection>

      <FormSection title="Delivery address">
        <div className="flex w-full justify-between">
          {`${customer.deliveryAddress.address}, ${customer.deliveryAddress.country}`}
          <Button variant="outline" size="small">
            Change shipping address
          </Button>
        </div>
      </FormSection>

      <div className="flex flex-col w-full gap-6">
        <h2>{`Orders`}</h2>
        <OrdersView content={orders} />
      </div>
      <Button variant="destructive">Archive Customer</Button>
    </>
  );
}
