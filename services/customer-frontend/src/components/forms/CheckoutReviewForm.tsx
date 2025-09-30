"use client";

import FormSection from "@sellify/common-ui-components/FormSection";
import { PaymentProvider } from "@sellify/common-ui-components/types";

import ShippingInfo from "@sellify/customer-ui-components/order-details/ShippingInfo";
import OrderProductsTableFinal from "@sellify/customer-ui-components/table/OrderProductsTableFinal";
import { CartItem, ContactInfo, DeliveryAddress } from "@sellify/customer-ui-components/types";

import { getPaymentMethodInfo } from "common/actions/order-actions";

type ContactInfoProps = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
  paymentProvider: PaymentProvider;
  cartItems: Array<CartItem>;
};

export default function CheckoutReviewForm({
  contactInfo,
  deliveryAddress,
  paymentProvider,
  cartItems
}: ContactInfoProps) {

  return (
    <>
      <FormSection title="Shipping Info">
        <ShippingInfo
          contactInfo={contactInfo}
          deliveryAddress={deliveryAddress}
        />
      </FormSection>

      <FormSection title="Payment Method">
        <p> {getPaymentMethodInfo(paymentProvider)?.title} </p>
      </FormSection>

      <FormSection title="Products">
        <OrderProductsTableFinal content={cartItems} />
      </FormSection>
    </>
  );
}
