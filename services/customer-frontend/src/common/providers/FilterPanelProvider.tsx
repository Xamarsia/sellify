"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

import { FilterSection as FilterSectionType, PropertyValue } from "@sellify/customer-ui-components/types";
import FilterSection from "@sellify/customer-ui-components/filter/FilterSection";
import SidePanel from "@sellify/customer-ui-components/SidePanel";
import Button from "@sellify/common-ui-components/buttons/Button";

import { FilterPanelContext } from "common/contexts/common-context";
import { FilterPanelController } from "types";

export default function FilterPanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filterPanelOpened, setFilterPanelOpened] = useState<boolean>(false);
  const [customSectionProperties, setCustomSectionProperties] = useState<Map<string, Map<string, boolean>>>(new Map());

  const filterSections = useMemo<Array<FilterSectionType>>(() => {
    return [
      {
        key: "size", properties:
          [
            { key: "s", type: "checkbox", defaultValue: false },
            { key: "m", type: "checkbox", defaultValue: false },
            { key: "l", type: "checkbox", defaultValue: false },
            { key: "xl", type: "checkbox", defaultValue: false },
          ]
      },
      {
        key: "type", properties:
          [
            { key: "succulents", type: "checkbox", defaultValue: false },
            { key: "flowering", type: "checkbox", defaultValue: false },
            { key: "herbs", type: "checkbox", defaultValue: false },
            { key: "ornamental", type: "checkbox", defaultValue: false },
          ]
      },
      {
        key: "light-requirement", properties:
          [
            { key: "low", type: "checkbox", defaultValue: false },
            { key: "medium", type: "checkbox", defaultValue: false },
            { key: "bright-indirect", type: "checkbox", defaultValue: false },
            { key: "direct", type: "checkbox", defaultValue: false },
          ]
      },


      // {
      //   key: "type", values:
      //     [
      //       { key: "succulents", value: "Succulents", amount: 1 },
      //       { key: "flowering", value: "Flowering Plants", amount: 1 },
      //       { key: "herbs", value: "Herbs", amount: 1 },
      //       { key: "ornamental", value: "Ornamental Plants", amount: 1 },
      //     ]
      // },
      // {
      //   key: "light-requirement", values:
      //     [
      //       { key: "low", value: "Low Light", amount: 1 },
      //       { key: "medium", value: "Medium Light", amount: 1 },
      //       { key: "bright-indirect", value: "Bright Indirect", amount: 1 },
      //       { key: "direct", value: "Direct Sunlight", amount: 1 },
      //     ]
      // },
    ];
  }, []);

  const onFilterPanelClose = useCallback((): void => {
    setFilterPanelOpened(false);
  }, [setFilterPanelOpened]);

  const onFilterReset = useCallback((): void => {
    setCustomSectionProperties(new Map());
  }, []);

  const contextValue: FilterPanelController = {
    openFilterPanel: () => {
      setFilterPanelOpened(true);
    },
    // onApply?: (filter: Filter) => void;
  };

  const onFilterSectionChange = useCallback((sectionKey: string, propertyKey: string, selected: boolean) => {
    let sectionValues = customSectionProperties.get(sectionKey) ?? new Map();

    sectionValues.set(propertyKey, selected);
    customSectionProperties.set(sectionKey, sectionValues);

    setCustomSectionProperties(new Map(customSectionProperties));
  }, [customSectionProperties]);


  return (
    <FilterPanelContext.Provider value={contextValue}>
      <SidePanel open={filterPanelOpened} onClose={onFilterPanelClose} title="Cart">
        <div className="flex grow flex-col justify-between h-full gap-5 overflow-y-auto">
          <div className="flex grow flex-col gap-4 overflow-y-auto">
            {filterSections.map((section) =>
              <FilterSection
                sectionKey={section.key} properties={section.properties.map(property => {
                  const propertyValue: PropertyValue = {
                    key: property.key,
                    value: customSectionProperties.get(section.key)?.get(property.key) ?? property.defaultValue
                  };

                  return propertyValue;
                })}
                onFilterSectionChange={onFilterSectionChange} key={`FilterSection_${section.key}`} />)}
          </div>
          <div className="flex gap-4">
            <Button fill="parent" variant="outline" onClick={onFilterReset}>Reset</Button>
            <Button fill="parent">Apply</Button>
          </div>
        </div>
      </SidePanel>
      {children}
    </FilterPanelContext.Provider>
  );
}
