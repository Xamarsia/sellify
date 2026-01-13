"use client";

import { PaymentMethodInfo } from "@sellify/common-ui-components/types";

import { OrderDetails } from "@sellify/customer-ui-components/types";
import InfoSection from "@sellify/customer-ui-components/InfoSection";
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
    <div className="flex w-full flex-col items-end gap-12">
      <InfoSection title="Order Details">
        <OrderInfo order={order} />
      </InfoSection>

      <InfoSection title="Shipping Info">
        <ShippingInfo
          contactInfo={order.contactInfo}
          deliveryAddress={order.deliveryAddress}
        />
      </InfoSection>

      <InfoSection title={`Delivery by ${order.deliveryProvider}`}>
        <DeliveryInfo order={order} />
      </InfoSection>

      {paymentMethodInfo && (
        <InfoSection title="Payment Method">
          <PaymentInfo paymentMethodInfo={paymentMethodInfo} />
        </InfoSection>
      )}
      <InfoSection title="Products">
        <FinalProductsView content={order.products} />
      </InfoSection>
    </div>
  );
}
