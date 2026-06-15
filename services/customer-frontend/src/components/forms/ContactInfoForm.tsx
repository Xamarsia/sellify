"use client";

import { useCallback, useState } from "react";

import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";
import CheckboxFormItem from "@sellify/common-ui-components/form/CheckboxFormItem";

import { ContactInfo } from "@sellify/customer-ui-components/types";
import FormSection from "@sellify/customer-ui-components/FormSection";

type ContactInfoProps = {
  contactInfo?: ContactInfo;
  onChange: (
    contactInfo: ContactInfo,
    isValid: boolean,
    isSetAsDefault: boolean,
  ) => void;
};

export default function ContactInfoForm({
  contactInfo,
  onChange,
}: ContactInfoProps) {
  const [fullName, setFullName] = useState<string>(contactInfo?.fullName ?? "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    contactInfo?.phoneNumber ?? "",
  );
  const [useAsDefault, setUseAsDefault] = useState<boolean>(false);

  const onContactInfoFormChange = useCallback((): void => {
    const contactInfo: ContactInfo = {
      fullName: fullName,
      phoneNumber: phoneNumber,
    };
    //TODO Add Validation function here
    onChange(contactInfo, false, useAsDefault);
  }, [fullName, phoneNumber, onChange, useAsDefault]);

  return (
    <FormSection onChange={onContactInfoFormChange}>
      <InputFormItem
        label="Full Name"
        value={fullName}
        required
        onChange={setFullName}
      />
      <InputFormItem
        label="Phone Number"
        value={phoneNumber}
        required
        onChange={setPhoneNumber}
      />
      <CheckboxFormItem
        value="use_as_default_contact_information"
        label="Use as my default contact information"
        checked={useAsDefault}
        onChange={setUseAsDefault}
      />
    </FormSection>
  );
}
