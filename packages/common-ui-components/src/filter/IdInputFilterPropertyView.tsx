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
};

export default function IdInputFilterPropertyView({
  propertyKey,
  currentQuery,
  onFilterPropertyChange,
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
      icon={<label className="size-5"> # </label>}
    />
  );
}
