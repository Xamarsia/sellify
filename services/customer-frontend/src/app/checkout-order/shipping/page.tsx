"use client";

import { useCallback } from "react";

import ContactInfoForm from "@sellify/customer-ui-components/forms/ContactInfoForm";
import DeliveryAddressForm from "@sellify/customer-ui-components/forms/DeliveryAddressForm";
import FormSection from "@sellify/customer-ui-components/forms/FormSection";

import {
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";

export default function ProfilePage() {
  const onContactInfoFormSubmit = useCallback(
    (contactInfo: ContactInfo): void => { },
    [],
  );

  const onDeliveryAddressFormSubmit = useCallback(
    (address: DeliveryAddress): void => { },
    [],
  );

  return (
    <>
      <FormSection title="Contact Information">
        <ContactInfoForm onSubmit={onContactInfoFormSubmit} />
      </FormSection>

      <FormSection title="Delivery address">
        <DeliveryAddressForm onSubmit={onDeliveryAddressFormSubmit} />
      </FormSection>
    </>
  );
}
