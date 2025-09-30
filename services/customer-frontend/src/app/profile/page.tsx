"use client";

import Input from "@sellify/common-ui-components/input/Input";
import Button from "@sellify/common-ui-components/buttons/Button";
import Combobox from "@sellify/common-ui-components/combobox/Combobox";
import { useCallback, useState } from "react";
import { getAvailableCountries, getDefaultDeliveryAddress } from "common/actions/profile-actions";
import { DeliveryAddress } from "@sellify/customer-ui-components/types";

export default function ProfilePage() {
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress | undefined>(getDefaultDeliveryAddress());
  const [country, setCountry] = useState<string>(deliveryAddress ? deliveryAddress.country : "");
  const availableCountries: Map<string, string> = getAvailableCountries();

  const onItemSelected = useCallback((key?: string, newValue?: string) => {
    setCountry(newValue ? newValue : "");
  }, [setCountry]);

  return (
    <div className="flex w-full flex-col items-end gap-6">
      <Button variant="default" disabled>
        Edit Profile
      </Button>
      <div className="flex w-full flex-col md:flex-row gap-6">
        <div className="flex basis-1/2 flex-col gap-4 w-full">
          <Input title="First Name" required />
          <Input title="Phone Number" required />
          <Combobox
            items={availableCountries}
            title="Country"
            value={country}
            required
            onItemSelected={onItemSelected}
          />
        </div>

        <div className="flex basis-1/2  flex-col gap-4">
          <Input title="Last Name" required />
          <Input title="Email Address" required />
          <Input title="Shipping Address" required />
        </div>
      </div>
    </div>
  );
}
