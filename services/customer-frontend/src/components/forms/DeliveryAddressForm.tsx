"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import FormItem from "@sellify/common-ui-components/FormItem";
import Input from "@sellify/common-ui-components/input/Input";
import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";

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

  const onAddressChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setAddress(e.target.value);
    },
    [setAddress],
  );

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
    [country, address, onChange],
  );

  const onUseAsDefaultChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setUseAsDefault(e.target.checked);
    },
    [setUseAsDefault],
  );

  const onItemSelected = useCallback(
    (key?: string, newValue?: string) => {
      setCountry(newValue ? newValue : "");
    },
    [setCountry],
  );

  return (
    <FormSection onChange={onChangeAddressForm}>
      <FormItem title={"Country"} required>
        <Combobox
          items={availableCountries}
          value={country}
          required
          onItemSelected={onItemSelected}
        />
      </FormItem>
      <FormItem title={"Address"} required>
        <Input value={address} required onChange={onAddressChangeHandler} />
      </FormItem>
      <Checkbox
        value="use_as_default_address"
        label="Use as my default address"
        checked={useAsDefault}
        onChange={onUseAsDefaultChangeHandler}
      />
    </FormSection>
  );
}
