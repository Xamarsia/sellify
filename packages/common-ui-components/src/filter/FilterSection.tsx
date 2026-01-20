"use client";

import { ReactNode, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

import CheckboxFilterPropertyView from "./CheckboxFilterPropertyView";
import RangeFilterPropertyView from "./RangeFilterPropertyView";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  FilterProperty,
  RangeFilterProperty,
} from "./common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  FilterPropertyValue,
  RangeFilterPropertyValue,
} from "./common/PropertyValues";
import MultiSelectionComboboxFilterPropertyView from "./MultiSelectionComboboxFilterPropertyView";

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
            selectedValue={
              modifiedProperty instanceof CheckboxFilterPropertyValue
                ? modifiedProperty
                : property.initialValue
            }
            onFilterPropertyChange={onFilterPropertyChange}
            key={`CheckboxFilterProperty_${sectionKey}_${property.key}`}
          />
        );
      } else if (property instanceof RangeFilterProperty) {
        return (
          <RangeFilterPropertyView
            propertyKey={property.key}
            selectedRange={
              modifiedProperty instanceof RangeFilterPropertyValue
                ? modifiedProperty
                : property.initialRange
            }
            fullRange={property.fullRange}
            onFilterPropertyChange={onFilterPropertyChange}
            key={`RangeFilterProperty_${sectionKey}_${property.key}`}
          />
        );
      } else if (property instanceof MultiSelectionComboboxFilterProperty) {
        return (
          <MultiSelectionComboboxFilterPropertyView
            propertyKey={property.key}
            items={property.items}
            selectedItems={
              modifiedProperty instanceof
              MultiSelectionComboboxFilterPropertyValue
                ? modifiedProperty
                : new MultiSelectionComboboxFilterPropertyValue(
                    new Map<any, string>(),
                  )
            }
            initialSelectedKeys={property.initialSelectedKeys}
            onFilterPropertyChange={onFilterPropertyChange}
            key={`ComboboxFilterProperty_${sectionKey}_${property.key}`}
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
