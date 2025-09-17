"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import { DeliveryAddress } from "../types";
import Button from "@sellify/common-ui-components/buttons/Button";
import Input from "@sellify/common-ui-components/input/Input";
import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import CountryCombobox from "../CountryCombobox";

type DeliveryAddressProps = {
  deliveryAddress?: DeliveryAddress;
  onSubmit: (address: DeliveryAddress) => void;
};

export default function DeliveryAddressForm({
  deliveryAddress,
  onSubmit,
}: DeliveryAddressProps) {
  const [country, setCountry] = useState<string>(
    deliveryAddress ? deliveryAddress.country : "",
  );
  const [address, setAddress] = useState<string>(
    deliveryAddress ? deliveryAddress.address : "",
  );

  const onAddressChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      setAddress(e.target.value);
    },
    [setAddress],
  );

  const onChangeContactInformationFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const deliveryAddress: DeliveryAddress = {
        country: country,
        address: address,
      };
      onSubmit(deliveryAddress);
    },
    [country, address, onSubmit],
  );

  return (
    <form
      onSubmit={onChangeContactInformationFormSubmit}
      className=" flex flex-col w-full gap-5"
    >
      <CountryCombobox />
      <Input
        value={address}
        title="address"
        required
        onChange={onAddressChangeHandler}
      />

      <Checkbox label="Use as my default address" />

      <div className="pt-5">
        <Button type="submit" disabled>
          Select New Address
        </Button>
      </div>
    </form>
  );
}
