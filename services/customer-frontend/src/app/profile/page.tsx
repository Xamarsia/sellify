"use client";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import { ChangeEvent, useCallback, useState } from "react";
import {
  editProfile,
  getAvailableCountries,
  getDefaultContactInfo,
  getDefaultDeliveryAddress,
} from "common/actions/profile-actions";
import {
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";
import FormSection from "@sellify/common-ui-components/FormSection";
import DeliveryAddressForm from "components/forms/DeliveryAddressForm";
import ContactInfoForm from "components/forms/ContactInfoForm";
import { EditProfileRequest } from "types";

export default function ProfilePage() {
  const [language, setLanguage] = useState<string>("english");

  const [deliveryAddress, setDeliveryAddress] = useState<
    DeliveryAddress | undefined
  >(getDefaultDeliveryAddress());
  const [contactInfo, setContactInfo] = useState<ContactInfo | undefined>(
    getDefaultContactInfo(),
  );

  const [isContactInfoValid, setIsContactInfoValid] = useState<boolean>(true);
  const [isDeliveryAddressValid, setIsDeliveryAddressValid] =
    useState<boolean>(true);

  const availableCountries: Map<string, string> = getAvailableCountries();
  const [fullName, setFullName] = useState<string>(contactInfo?.fullName ?? "");
  const [phoneNumber, setPhoneNumber] = useState<string>(
    contactInfo?.phoneNumber ?? "",
  );

  const [country, setCountry] = useState<string>(
    deliveryAddress?.country ?? "",
  );
  const [address, setAddress] = useState<string>(
    deliveryAddress?.address ?? "",
  );

  const onAddressChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setAddress(e.target.value);
    },
    [setAddress],
  );

  const onEditProfile = useCallback((): void => {
    const contactInfo: ContactInfo = {
      fullName: fullName,
      phoneNumber: phoneNumber,
    };

    const deliveryAddress: DeliveryAddress = {
      country: country,
      address: address,
    };

    const editProfileRequest: EditProfileRequest = {
      contactInfo: contactInfo,
      deliveryAddress: deliveryAddress,
    };
    //TODO Add Validation function here
    editProfile(editProfileRequest);
  }, [fullName, phoneNumber]);

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

  const onCountrySelected = useCallback(
    (key?: string, newValue?: string) => {
      setCountry(newValue ? newValue : "");
    },
    [setCountry],
  );

  const onLanguageSelected = useCallback((key: string) => {
    setLanguage(key);
  }, []);

  const languageItems = new Map<string, string>([
    ["english", "English"],
    ["french", "French"],
  ]);

  return (
    <div className="flex w-full flex-col items-end gap-12">
      <FormSection title="Contact Information">
        <Input
          value={fullName}
          title="full name"
          required
          onChange={onFullNameChange}
        />
        <Input
          value={phoneNumber}
          title="phone number"
          required
          onChange={onPhoneNumberChange}
        />
      </FormSection>

      <FormSection title="Delivery address">
        <Combobox
          items={availableCountries}
          title="Country"
          value={country}
          required
          onItemSelected={onCountrySelected}
        />
        <Input
          value={address}
          title="address"
          required
          onChange={onAddressChangeHandler}
        />
      </FormSection>

      <SettingsSection title="Language" description="Select your language.">
        <Dropdown
          title={"Language"}
          items={languageItems}
          selectedKey={language}
          onKeySelected={onLanguageSelected}
          disabled
        />
      </SettingsSection>

      <div className="flex w-full justify-end">
        <div className="w-2/9">
          <Button
            variant="default"
            fill="parent"
            disabled={!isContactInfoValid || !isDeliveryAddressValid}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
