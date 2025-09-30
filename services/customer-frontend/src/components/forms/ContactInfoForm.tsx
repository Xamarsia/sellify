"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import Input from "@sellify/common-ui-components/input/Input";
import Checkbox from "@sellify/common-ui-components/input/Checkbox";

import { ContactInfo } from "@sellify/customer-ui-components/types";

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
  const [firstName, setFirstName] = useState<string>(
    contactInfo?.firstName ?? "",
  );
  const [lastName, setLastName] = useState<string>(contactInfo?.lastName ?? "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    contactInfo?.phoneNumber ?? "",
  );
  const [email, setEmail] = useState<string>(contactInfo?.email ?? "");
  const [useAsDefault, setUseAsDefault] = useState<boolean>(false);

  const onFirstNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setFirstName(e.target.value);
    },
    [setFirstName],
  );

  const onLastNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setLastName(e.target.value);
    },
    [setLastName],
  );

  const onPhoneNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setPhoneNumber(e.target.value);
    },
    [email],
  );

  const onEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setEmail(e.target.value);
    },
    [setEmail],
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
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      };
      //TODO Add Validation function here
      onChange(contactInfo, false, useAsDefault);
    },
    [firstName, lastName, phoneNumber, email, onChange],
  );

  return (
    <form
      onChange={onContactInfoFormChange}
      className="flex flex-col w-full gap-5"
    >
      <Input
        value={firstName}
        title="first name"
        required
        onChange={onFirstNameChange}
      />
      <Input
        value={lastName}
        title="last name"
        required
        onChange={onLastNameChange}
      />
      <Input
        value={phoneNumber}
        title="phone number"
        required
        onChange={onPhoneNumberChange}
      />
      <Input
        value={email}
        title="email address"
        required
        onChange={onEmailChange}
      />
      <Checkbox
        label="Use as my default contact information"
        checked={useAsDefault}
        onChange={onUseAsDefaultChange}
      />
    </form>
  );
}
