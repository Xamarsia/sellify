"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { ContactInfo } from "../types";
import Button from "@sellify/common-ui-components/buttons/Button";
import Input from "@sellify/common-ui-components/input/Input";

type ContactInfoProps = {
  contactInfo?: ContactInfo;
  onSubmit: (contactInfo: ContactInfo) => void;
};

export default function ContactInfoForm({
  contactInfo,
  onSubmit,
}: ContactInfoProps) {
  const [firstName, setFirstName] = useState<string>(
    contactInfo ? contactInfo.firstName : "",
  );
  const [lastName, setLastName] = useState<string>(
    contactInfo ? contactInfo.lastName : "",
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    contactInfo ? contactInfo.phoneNumber : "",
  );
  const [email, setEmail] = useState<string>(
    contactInfo ? contactInfo.email : "",
  );

  const onFirstNameChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setFirstName(e.target.value);
    },
    [setFirstName],
  );

  const onLastNameChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setLastName(e.target.value);
    },
    [setLastName],
  );

  const onPhoneNumberChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setPhoneNumber(e.target.value);
    },
    [email],
  );

  const onEmailChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setEmail(e.target.value);
    },
    [setEmail],
  );

  const onContactInfoFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const contactInfo: ContactInfo = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
      };
      onSubmit(contactInfo);
    },
    [firstName, lastName, phoneNumber, email, onSubmit],
  );

  return (
    <form
      onSubmit={onContactInfoFormSubmit}
      className="flex flex-col w-full gap-5"
    >
      <Input
        value={firstName}
        title="first name"
        required
        onChange={onFirstNameChangeHandler}
      />
      <Input
        value={lastName}
        title="last name"
        required
        onChange={onLastNameChangeHandler}
      />
      <Input
        value={phoneNumber}
        title="phone number"
        required
        onChange={onPhoneNumberChangeHandler}
      />
      <Input
        value={email}
        title="email address"
        required
        onChange={onEmailChangeHandler}
      />
      <div className="pt-5">
        <Button type="submit" disabled>
          Save Changes
        </Button>
      </div>
    </form>
  );
}
