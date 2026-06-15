"use client";

import { FormEvent, useCallback, useState } from "react";

import InputFormItem from "@sellify/common-ui-components/form/InputFormItem";
import CheckboxFormItem from "@sellify/common-ui-components/form/CheckboxFormItem";
import ComboboxFormItem from "@sellify/common-ui-components/form/ComboboxFormItem";

import FormSection from "@sellify/customer-ui-components/FormSection";
import { DeliveryAddress } from "@sellify/customer-ui-components/types";

import { getAvailableCountries } from "actions/profile-actions";

type DeliveryAddressProps = {
  deliveryAddress?: DeliveryAddress;
  onChange: (
    address: DeliveryAddress,
    isValid: boolean,
    isSetAsDefault: boolean,
  ) => void;
};

export default function DeliveryAddressForm({
  deliveryAddress,
  onChange,
}: DeliveryAddressProps) {
  const [country, setCountry] = useState<string>(
    deliveryAddress?.country ?? "",
  );
  const [address, setAddress] = useState<string>(
    deliveryAddress?.address ?? "",
  );
  const [useAsDefault, setUseAsDefault] = useState<boolean>(false);

  const availableCountries: Map<string, string> = getAvailableCountries();

  const onChangeAddressForm = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const deliveryAddress: DeliveryAddress = {
        country: country,
        address: address,
      };
      //TODO Add Validation function here
      onChange(deliveryAddress, false, useAsDefault);
    },
    [country, address, onChange, useAsDefault],
  );

  const onItemSelected = useCallback(
    (key?: string, newValue?: string) => {
      setCountry(newValue ? newValue : "");
    },
    [setCountry],
  );

  return (
    <FormSection onChange={onChangeAddressForm}>
      <ComboboxFormItem
        label="Country"
        items={availableCountries}
        value={country}
        required
        onItemSelected={onItemSelected}
      />
      <InputFormItem
        label="Address"
        value={address}
        required
        onChange={setAddress}
      />
      <CheckboxFormItem
        value="use_as_default_address"
        label="Use as my default address"
        checked={useAsDefault}
        onChange={setUseAsDefault}
      />
    </FormSection>
  );
}
