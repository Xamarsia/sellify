"use client";

import Button from "@sellify/common-ui-components/buttons/Button";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
import ContactInfoForm from "@sellify/customer-ui-components/forms/ContactInfoForm";
import DeliveryAddressForm from "@sellify/customer-ui-components/forms/DeliveryAddressForm";

import FormSection from "@sellify/customer-ui-components/forms/FormSection";
import {
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";
import CheckoutProgressBar from "components/CheckoutProgressBar";
import { useCallback } from "react";

export default function ProfilePage() {
  const onContactInfoFormSubmit = useCallback(
    (contactInfo: ContactInfo): void => {},
    [],
  );

  const onDeliveryAddressFormSubmit = useCallback(
    (address: DeliveryAddress): void => {},
    [],
  );

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>Shipping Address</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <div className="flex w-full flex-col gap-12 xl:gap-24">
          <CheckoutProgressBar currentPathname={"/"} />

          <div className="flex w-full flex-col divide-y divide-stroke gap-6">
            <FormSection title="Contact Information">
              <ContactInfoForm onSubmit={onContactInfoFormSubmit} />
            </FormSection>

            <FormSection title="Delivery address">
              <DeliveryAddressForm onSubmit={onDeliveryAddressFormSubmit} />
            </FormSection>
          </div>
        </div>
        <div className="xl:w-min">
          <OrderSubtotal itemsSubtotal={32} deliveryCharge={5}>
            <Button fill="parent">Proceed to Checkout</Button>
          </OrderSubtotal>
        </div>
      </div>
    </div>
  );
}
