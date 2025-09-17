"use client";

import { useCallback, useState } from "react";

import Combobox from "@sellify/common-ui-components/combobox/Combobox";

type ComboboxProps = {
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string;
};

export default function CountryCombobox({
  required,
  disabled,
  defaultValue,
}: ComboboxProps) {
  const [value, setValue] = useState<string | undefined>(
    defaultValue ? defaultValue : undefined,
  );

  const countries = new Map<string, string>([
    ["canada", "Canada"],
    ["usa", "USA"],
    ["ukraine", "Ukraine"],
  ]);

  const onItemSelected = useCallback((key?: string, newValue?: string) => {
    setValue(newValue);
  }, []);

  return (
    <Combobox
      items={countries}
      title="Country"
      value={value}
      disabled={disabled}
      required={required}
      onItemSelected={onItemSelected}
    />
  );
}
