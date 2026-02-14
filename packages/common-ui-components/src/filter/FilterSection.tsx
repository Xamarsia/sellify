"use client";

import { ReactNode, useCallback } from "react";

import CheckboxFilterPropertyView from "./CheckboxFilterPropertyView";
import RangeFilterPropertyView from "./RangeFilterPropertyView";
import InputFilterPropertyView from "./InputFilterPropertyView";
import {
  CheckboxFilterProperty,
  MultiSelectionComboboxFilterProperty,
  FilterProperty,
  RangeFilterProperty,
  InputFilterProperty,
  IdInputFilterProperty,
} from "./common/Property";
import {
  CheckboxFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  FilterPropertyValue,
  RangeFilterPropertyValue,
  InputFilterPropertyValue,
} from "./common/PropertyValues";
import MultiSelectionComboboxFilterPropertyView from "./MultiSelectionComboboxFilterPropertyView";
import IdInputFilterPropertyView from "./IdInputFilterPropertyView";
import CollapsiblePanel from "../CollapsiblePanel";

type FilterSectionComponentProps = {
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
}: FilterSectionComponentProps) {
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
      } else if (property instanceof InputFilterProperty) {
        return (
          <InputFilterPropertyView
            propertyKey={property.key}
            currentQuery={
              modifiedProperty instanceof InputFilterPropertyValue
                ? modifiedProperty
                : property.initialQuery
            }
            placeholder={property.placeholderText}
            onFilterPropertyChange={onFilterPropertyChange}
            key={`InputFilterProperty_${sectionKey}_${property.key}`}
          />
        );
      } else if (property instanceof IdInputFilterProperty) {
        return (
          <IdInputFilterPropertyView
            propertyKey={property.key}
            currentQuery={
              modifiedProperty instanceof InputFilterPropertyValue
                ? modifiedProperty
                : property.initialQuery
            }
            onFilterPropertyChange={onFilterPropertyChange}
            key={`IdInputFilterProperty_${sectionKey}_${property.key}`}
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
    <CollapsiblePanel panelTitle={sectionKey}>
      <div className="flex flex-col gap-3">
        {properties.map((property) => getPropertyComponent(property))}
      </div>
    </CollapsiblePanel>
  );
}
