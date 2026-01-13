"use client";

import { ReactNode, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

import CheckboxFilterPropertyView from "./CheckboxFilterPropertyView";
import RangeFilterPropertyView from "./RangeFilterPropertyView";
import {
  CheckboxFilterProperty,
  FilterProperty,
  RangeFilterProperty,
} from "./common/Property";
import {
  CheckboxFilterPropertyValue,
  FilterPropertyValue,
  RangeFilterPropertyValue,
} from "./common/PropertyValues";

type FilterSectionProps = {
  sectionKey: string;
  properties: Array<FilterProperty>;
  modifiedProperties?: Map<string, FilterPropertyValue>;
  onFilterSectionChange: (
    sectionKey: string,
    propertyKey: string,
    value: FilterPropertyValue,
  ) => void;
};

export default function FilterSectionComponent({
  sectionKey,
  properties,
  modifiedProperties,
  onFilterSectionChange,
}: FilterSectionProps) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const onSectionClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended]);

  const onFilterPropertyChange = useCallback(
    (propertyKey: string, value: FilterPropertyValue) => {
      onFilterSectionChange(sectionKey, propertyKey, value);
    },
    [sectionKey, onFilterSectionChange],
  );

  const getPropertyComponent = useCallback(
    (property: FilterProperty): ReactNode => {
      let modifiedProperty = modifiedProperties?.get(property.key);

      if (property instanceof CheckboxFilterProperty) {
        return (
          <CheckboxFilterPropertyView
            propertyKey={property.key}
            value={
              modifiedProperty instanceof CheckboxFilterPropertyValue
                ? modifiedProperty
                : property.defaultValue
            }
            onFilterPropertyChange={onFilterPropertyChange}
            key={`CheckboxFilterProperty_${sectionKey}_${property.key}`}
          />
        );
      } else if (property instanceof RangeFilterProperty) {
        return (
          <RangeFilterPropertyView
            propertyKey={property.key}
            value={
              modifiedProperty instanceof RangeFilterPropertyValue
                ? modifiedProperty
                : property.defaultValue
            }
            min={property.min}
            max={property.max}
            onFilterPropertyChange={onFilterPropertyChange}
            key={`RangeFilterProperty_${sectionKey}_${property.key}`}
          />
        );
      }
    },
    [modifiedProperties, onFilterPropertyChange],
  );

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={onSectionClick}
        className={`flex items-center h-16 justify-between w-full bg-white capitalize 
          cursor-pointer ${isExtended ? "text-black" : "text-secondary hover:text-black"}`}
      >
        <h4>{sectionKey}</h4>
        {isExtended ? (
          <MinusIcon style="size-6" />
        ) : (
          <PlusIcon style="size-6" />
        )}
      </button>
      {isExtended && (
        <div className="flex flex-col gap-3">
          {properties.map((property) => getPropertyComponent(property))}
        </div>
      )}
    </div>
  );
}
