"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

import SidePanel from "@sellify/common-ui-components/SidePanel";
import Button from "@sellify/common-ui-components/buttons/Button";

import FilterSection from "@sellify/common-ui-components/filter/FilterSection";

import { FilterPanelContext } from "contexts/common-context";
import { FilterPanelController } from "types";

// TODO change imports into "@sellify/common-ui-components/"
import { FilterPropertyValue } from "../../../../packages/common-ui-components/src/filter/common/PropertyValues";
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
  const [filterSections, setFilterSections] =
    useState<Array<FilterSectionType>>();

  const onFilterPanelClose = useCallback((): void => {
    setFilterPanelOpened(false);
  }, [setFilterPanelOpened]);

  const onFilterReset = useCallback((): void => {
    setCustomSectionProperties(new Map());
  }, []);

  const contextValue: FilterPanelController = {
    openFilterPanel: (filterSections) => {
      setFilterPanelOpened(true);
      setFilterSections(filterSections);
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
            {filterSections &&
              filterSections.map((section) => (
                <FilterSection
                  sectionKey={section.key}
                  properties={section.properties}
                  modifiedProperties={modifiedSectionProperties.get(
                    section.key,
                  )}
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
