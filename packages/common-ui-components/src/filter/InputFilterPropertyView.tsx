import { ChangeEvent, useCallback } from "react";

import { InputFilterPropertyValue } from "./common/PropertyValues";
import Input from "../input/Input";

type FilterParameterProps = {
  propertyKey: string;
  currentQuery: InputFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    newQuery: InputFilterPropertyValue,
  ) => void;
  placeholder?: string;
};

export default function InputFilterPropertyView({
  propertyKey,
  currentQuery,
  onFilterPropertyChange,
  placeholder,
}: FilterParameterProps) {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onFilterPropertyChange(
        propertyKey,
        new InputFilterPropertyValue(e.target.value),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  return (
    <Input
      value={currentQuery.value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
