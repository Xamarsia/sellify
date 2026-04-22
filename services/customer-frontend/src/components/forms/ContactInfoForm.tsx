"use client";

import { useCallback, useState } from "react";

import FormItem from "@sellify/common-ui-components/form/FormItem";
import Input from "@sellify/common-ui-components/input/Input";
import LabeledCheckbox from "@sellify/common-ui-components/form/LabeledCheckbox";

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
      <FormItem title={"Full Name"} required>
        <Input value={fullName} required onChange={setFullName} />
      </FormItem>
      <FormItem title={"Phone Number"} required>
        <Input value={phoneNumber} required onChange={setPhoneNumber} />
      </FormItem>
      <LabeledCheckbox
        value="use_as_default_contact_information"
        label="Use as my default contact information"
        checked={useAsDefault}
        onChange={setUseAsDefault}
      />
    </FormSection>
  );
}
