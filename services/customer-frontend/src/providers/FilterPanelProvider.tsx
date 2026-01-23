"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

import SidePanel from "@sellify/common-ui-components/SidePanel";
import Button from "@sellify/common-ui-components/buttons/Button";
import FilterSection from "@sellify/common-ui-components/filter/FilterSection";

import { FilterPanelContext } from "contexts/common-context";
import { FilterPanelController } from "types";

// TODO change imports into "@sellify/common-ui-components/"
import {
  CheckboxFilterPropertyValue,
  FilterPropertyValue,
  RangeFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
import {
  CheckboxFilterProperty,
  RangeFilterProperty,
} from "../../../../packages/common-ui-components/src/filter/common/Property";
import { FilterSection as FilterSectionType } from "../../../../packages/common-ui-components/src/filter/common/Section";

export default function FilterPanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [filterPanelOpened, setFilterPanelOpened] = useState<boolean>(false);
  const [modifiedSectionProperties, setCustomSectionProperties] = useState<
    Map<string, Map<string, FilterPropertyValue>>
  >(new Map()); // sectionKey: string, propertyKey: string, value

  const filterSections = useMemo<Array<FilterSectionType>>(() => {
    return [
      new FilterSectionType("size", [
        new CheckboxFilterProperty("s", new CheckboxFilterPropertyValue(false)),
        new CheckboxFilterProperty("m", new CheckboxFilterPropertyValue(false)),
        new CheckboxFilterProperty("l", new CheckboxFilterPropertyValue(false)),
        new CheckboxFilterProperty(
          "xl",
          new CheckboxFilterPropertyValue(false),
        ),
      ]),
      new FilterSectionType("type", [
        new CheckboxFilterProperty(
          "succulents",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "flowering",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "herbs",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "ornamental",
          new CheckboxFilterPropertyValue(false),
        ),
      ]),
      new FilterSectionType("light-requirement", [
        new CheckboxFilterProperty(
          "low",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "medium",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "bright-indirect",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "direct",
          new CheckboxFilterPropertyValue(false),
        ),
      ]),
      new FilterSectionType("price-range", [
        new RangeFilterProperty(
          "price-range",
          new RangeFilterPropertyValue({ min: 100, max: 344 }),
          new RangeFilterPropertyValue({ min: 200, max: 344 }),
        ),
      ]),
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

  const onFilterSectionChange = useCallback(
    (sectionKey: string, propertyKey: string, value: FilterPropertyValue) => {
      let sectionValues =
        modifiedSectionProperties.get(sectionKey) ??
        new Map<string, FilterPropertyValue>();

      sectionValues.set(propertyKey, value);
      modifiedSectionProperties.set(sectionKey, sectionValues);

      setCustomSectionProperties(new Map(modifiedSectionProperties));
    },
    [modifiedSectionProperties],
  );

  return (
    <FilterPanelContext.Provider value={contextValue}>
      <SidePanel
        open={filterPanelOpened}
        onClose={onFilterPanelClose}
        title="Filter"
      >
        <div className="flex grow flex-col justify-between h-full gap-5 overflow-y-auto">
          <div className="flex grow flex-col gap-4 overflow-y-auto scrollbar pr-4">
            {filterSections.map((section) => (
              <FilterSection
                sectionKey={section.key}
                properties={section.properties}
                modifiedProperties={modifiedSectionProperties.get(section.key)}
                onFilterSectionChange={onFilterSectionChange}
                key={`FilterSection_${section.key}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <Button fill="parent" variant="outline" onClick={onFilterReset}>
              Reset
            </Button>
            <Button fill="parent">Apply</Button>
          </div>
        </div>
      </SidePanel>
      {children}
    </FilterPanelContext.Provider>
  );
}
