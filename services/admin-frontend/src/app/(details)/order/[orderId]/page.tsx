import "server-only";

import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import { OrderDetails } from "@sellify/admin-ui-components/types";

import { getOrderById, getPaymentMethodInfo } from "actions/order-actions";
import { getCustomerNameById } from "actions/customer-actions";
import OrderDetailsPage from "components/pages/OrderDetailsPage";

type Props = {
  params: Promise<{ orderId: number }>;
};

export default async function OrderPage({ params }: Props) {
  const orderId: number = (await params).orderId;
  const order: OrderDetails = getOrderById(orderId);
  const paymentMethodInfo: PaymentMethodInfo | undefined = getPaymentMethodInfo(
    order.paymentProvider,
  );
  const customerName: string = getCustomerNameById(order.customerId);

  return (
    <OrderDetailsPage
      order={order}
      paymentMethodInfo={paymentMethodInfo}
      customerName={customerName}
    />
  );
}
