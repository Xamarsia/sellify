"use client";

import { PaymentProvider } from "@sellify/common-ui-components/constants";
import {
  PaymentMethodInfo,
  PaymentProvider as PaymentProviderType,
} from "@sellify/common-ui-components/types";

import FormSection from "@sellify/customer-ui-components/forms/FormSection";
import ShippingInfo from "@sellify/customer-ui-components/order-details/ShippingInfo";
import OrderProductsTableFinal from "@sellify/customer-ui-components/table/OrderProductsTableFinal";
import {
  CartItem,
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";

import { getPaymentProviders } from "common/actions/order-actions";
import { getCartItems } from "common/actions/cart-actions";

export default function ReviewPage() {
  const cartItems: Array<CartItem> = getCartItems();
  const paymentMethods: Map<PaymentProviderType, PaymentMethodInfo> =
    getPaymentProviders();

  const paymentMethodInfo: PaymentMethodInfo | undefined = paymentMethods.get(
    PaymentProvider.Balance,
  );

  const contactInfo: ContactInfo = {
    firstName: "Robert",
    lastName: "Fox",
    email: "robertfox@example.com",
    phoneNumber: "+1 (416) 555-0123",
  };

  const deliveryAddress: DeliveryAddress = {
    address: "123 Maple Street, Toronto, ON, M5A 1A1",
    country: "Canada",
  };

  return (
    <>
      <FormSection title="Shipping Info">
        <ShippingInfo
          contactInfo={contactInfo}
          deliveryAddress={deliveryAddress}
        />
      </FormSection>
      {paymentMethodInfo && (
        <FormSection title="Payment Method">
          <p> {paymentMethodInfo.title} </p>
        </FormSection>
      )}
      <FormSection title="Products">
        <OrderProductsTableFinal content={cartItems} />
      </FormSection>
    </>
  );
}
