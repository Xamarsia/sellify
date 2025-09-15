"use client";

import { useCallback, useState } from "react";

import Dropdown from "@sellify/common-ui-components/dropdown/Dropdown";

type DropdownProps = {
  title: string;
  items: Map<string, string>;
  disabled?: boolean;
};

export default function DropdownUseExample({
  title,
  items,
  disabled,
}: DropdownProps) {
  const [selectedKey, setSelectedKey] = useState<string>();
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const onKeySelected = useCallback((key: string) => {
    setSelectedKey(key);
    setIsExtended(false);
  }, []);

  return (
    <Dropdown
      title={title}
      items={items}
      selectedKey={selectedKey}
      disabled={disabled}
      isExtended={isExtended}
      onKeySelected={onKeySelected}
      setIsExtended={setIsExtended}
    />
  );
}
