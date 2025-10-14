"use client";

import FormSection from "@sellify/common-ui-components/FormSection";
import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import { OrderDetails } from "@sellify/customer-ui-components/types";
import ShippingInfo from "@sellify/customer-ui-components/order-details/ShippingInfo";
import DeliveryInfo from "@sellify/customer-ui-components/order-details/DeliveryInfo";
import OrderInfo from "@sellify/customer-ui-components/order-details/OrderInfo";
import PaymentInfo from "@sellify/customer-ui-components/order-details/PaymentInfo";
import FinalProductsView from "@sellify/customer-ui-components/data-view/FinalProductsView";

import { getPaymentMethodInfo } from "common/actions/order-actions";

type Props = {
  order: OrderDetails;
};

export default function OrderContentSections({ order }: Props) {
  const paymentMethodInfo: PaymentMethodInfo | undefined = getPaymentMethodInfo(
    order.paymentProvider,
  );

  return (
    <>
      <FormSection title="Order Details">
        <OrderInfo order={order} />
      </FormSection>

      <FormSection title="Shipping Info">
        <ShippingInfo
          contactInfo={order.contactInfo}
          deliveryAddress={order.deliveryAddress}
        />
      </FormSection>

      <FormSection title={`Delivery by ${order.deliveryProvider}`}>
        <DeliveryInfo order={order} />
      </FormSection>

      {paymentMethodInfo && (
        <FormSection title="Payment Method">
          <PaymentInfo paymentMethodInfo={paymentMethodInfo} />
        </FormSection>
      )}
      <FormSection title="Products">
        <FinalProductsView content={order.products} />
      </FormSection>
    </>
  );
}
