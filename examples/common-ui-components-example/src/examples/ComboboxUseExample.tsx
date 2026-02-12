"use client";

import { useCallback, useState } from "react";

import Combobox from "@sellify/common-ui-components/combobox/Combobox";

type ComboboxProps = {
  required?: boolean;
  disabled?: boolean;
  items: Map<string, string>;
  defaultValue?: string;
};

export default function ComboboxUseExample({
  required,
  items,
  disabled,
  defaultValue,
}: ComboboxProps) {
  const [value, setValue] = useState<string | undefined>(
    defaultValue ? defaultValue : undefined,
  );

  const onItemSelected = useCallback((key?: string, newValue?: string) => {
    console.log("On Item Selected:", newValue);
    setValue(newValue);
  }, []);

  return (
    <Combobox
      items={items}
      value={value}
      disabled={disabled}
      required={required}
      onItemSelected={onItemSelected}
    />
  );
}
