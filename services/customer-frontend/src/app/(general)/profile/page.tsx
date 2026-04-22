"use client";

import { useCallback, useState } from "react";

import FormItem from "@sellify/common-ui-components/form/FormItem";
import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

import {
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";
import InfoSection from "@sellify/customer-ui-components/InfoSection";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";

import {
  editProfile,
  getAvailableCountries,
  getDefaultContactInfo,
  getDefaultDeliveryAddress,
} from "actions/profile-actions";
import { EditProfileRequest } from "types";

export default function ProfilePage() {
  const [language, setLanguage] = useState<string>("english");

  const availableCountries: Map<string, string> = getAvailableCountries();
  const deliveryAddress: DeliveryAddress | undefined =
    getDefaultDeliveryAddress();
  const contactInfo: ContactInfo | undefined = getDefaultContactInfo();

  const [isContactInfoValid] = useState<boolean>(true);
  const [isDeliveryAddressValid] = useState<boolean>(true);

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
  }, [address, country, fullName, phoneNumber]);

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
      <InfoSection title="Contact Information">
        <FormItem title={"Full Name"} required>
          <Input value={fullName} required onChange={setFullName} />
        </FormItem>

        <FormItem title={"Phone Number"} required>
          <Input value={phoneNumber} required onChange={setPhoneNumber} />
        </FormItem>
      </InfoSection>

      <InfoSection title="Delivery address">
        <FormItem title={"Country"} required>
          <Combobox
            items={availableCountries}
            value={country}
            required
            onItemSelected={onCountrySelected}
          />
        </FormItem>
        <FormItem title={"Address"} required>
          <Input value={address} required onChange={setAddress} />
        </FormItem>
      </InfoSection>

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
            onClick={onEditProfile}
            disabled={!isContactInfoValid || !isDeliveryAddressValid}
          >
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
