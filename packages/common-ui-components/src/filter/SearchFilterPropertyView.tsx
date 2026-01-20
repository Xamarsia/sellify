import { ChangeEvent, useCallback } from "react";

import { SearchFilterPropertyValue } from "./common/PropertyValues";
import Input from "../input/Input";

type FilterParameterProps = {
  propertyKey: string;
  currentQuery: SearchFilterPropertyValue;
  onFilterPropertyChange: (
    propertyKey: string,
    newQuery: SearchFilterPropertyValue,
  ) => void;
};

export default function SearchFilterPropertyView({
  propertyKey,
  currentQuery,
  onFilterPropertyChange,
}: FilterParameterProps) {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onFilterPropertyChange(
        propertyKey,
        new SearchFilterPropertyValue(e.target.value),
      );
    },
    [propertyKey, onFilterPropertyChange],
  );

  return <Input value={currentQuery.value} onChange={onChange} />;
}
