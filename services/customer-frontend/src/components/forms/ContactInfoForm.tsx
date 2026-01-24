"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import FormInputItem from "@sellify/common-ui-components/input/FormInputItem";

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

  const onFullNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setFullName(e.target.value);
    },
    [setFullName],
  );

  const onPhoneNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setPhoneNumber(e.target.value);
    },
    [setPhoneNumber],
  );

  const onUseAsDefaultChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setUseAsDefault(e.target.checked);
    },
    [setUseAsDefault],
  );

  const onContactInfoFormChange = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      const contactInfo: ContactInfo = {
        fullName: fullName,
        phoneNumber: phoneNumber,
      };
      //TODO Add Validation function here
      onChange(contactInfo, false, useAsDefault);
    },
    [fullName, phoneNumber, onChange],
  );

  return (
    <FormSection onChange={onContactInfoFormChange}>
      <FormInputItem
        value={fullName}
        title="full name"
        required
        onChange={onFullNameChange}
      />
      <FormInputItem
        value={phoneNumber}
        title="phone number"
        required
        onChange={onPhoneNumberChange}
      />
      <Checkbox
        value="use_as_default_contact_information"
        label="Use as my default contact information"
        checked={useAsDefault}
        onChange={onUseAsDefaultChange}
      />
    </FormSection>
  );
}
