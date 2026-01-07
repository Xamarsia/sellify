import "server-only";

import FormSection from "@sellify/common-ui-components/FormSection";
import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import OrderInfo from "@sellify/admin-ui-components/details/OrderInfo";
import ShippingInfo from "@sellify/admin-ui-components/details/ShippingInfo";
import PaymentInfo from "@sellify/admin-ui-components/details/PaymentInfo";
import OrderProductsView from "@sellify/admin-ui-components/data-view/OrderProductsView";
import { OrderDetails } from "@sellify/admin-ui-components/types";

import {
  getOrderById,
  getPaymentMethodInfo,
} from "common/actions/order-actions";
import { getCustomerNameById } from "common/actions/customer-actions";
import BackButton from "components/BackButton";

type Props = {
  params: Promise<{ orderId: number }>;
};

export default async function OrderPage({ params }: Props) {
  const orderId: number = (await params).orderId;
  const order: OrderDetails = getOrderById(orderId);
  const paymentMethodInfo: PaymentMethodInfo | undefined = getPaymentMethodInfo(
    order.paymentProvider,
  );
  const customerName = getCustomerNameById(order.customerId);

  return (
    <div className="flex w-full flex-col gap-12">
      <BackButton />
      <h1 className="py-4">{`Order: #${order.customerId}`}</h1>

      <FormSection title="Order Details">
        <OrderInfo
          orderStatus={order.status}
          customerName={customerName}
          purchaseDate={order.purchaseDate}
        />
      </FormSection>

      <FormSection title="Shipping Info">
        <ShippingInfo
          contactInfo={order.contactInfo}
          deliveryAddress={order.deliveryAddress}
        />
      </FormSection>

      {paymentMethodInfo && (
        <FormSection title="Payment Method">
          <PaymentInfo paymentMethodInfo={paymentMethodInfo} />
        </FormSection>
      )}

      <FormSection title="Products">
        <OrderProductsView content={order.products} />
      </FormSection>
    </div>
  );
}
