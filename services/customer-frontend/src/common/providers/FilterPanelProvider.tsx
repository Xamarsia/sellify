"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";

import { FilterSection as FilterSectionType } from "@sellify/customer-ui-components/types";
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
  const [sections] = useState<Map<string, Array<string>>>(new Map());

  const filterSections = useMemo<Array<FilterSectionType>>(() => {
    return [
      {
        key: "size", value: "Size", filterProperties:
          [
            { key: "s", value: "Small", amount: 1 },
            { key: "m", value: "Medium", amount: 1 },
            { key: "l", value: "Large", amount: 1 },
            { key: "xl", value: "Extra Large", amount: 1 },
          ]
      },
      {
        key: "type", value: "Plant Type", filterProperties:
          [
            { key: "succulents", value: "Succulents", amount: 1 },
            { key: "flowering", value: "Flowering Plants", amount: 1 },
            { key: "herbs", value: "Herbs", amount: 1 },
            { key: "ornamental", value: "Ornamental Plants", amount: 1 },
          ]
      },
      {
        key: "light-requirement", value: "Light Requirement", filterProperties:
          [
            { key: "low", value: "Low Light", amount: 1 },
            { key: "medium", value: "Medium Light", amount: 1 },
            { key: "bright-indirect", value: "Bright Indirect", amount: 1 },
            { key: "direct", value: "Direct Sunlight", amount: 1 },
          ]
      },
    ];
  }, []);

  const onFilterSectionChange = useCallback((key: string, selectedProperties: Array<string>) => {
    if (!selectedProperties.length) {
      sections.delete(key);
    } else {
      sections.set(key, selectedProperties);
    }
  }, [sections]);

  const onFilterPanelClose = useCallback((): void => {
    setFilterPanelOpened(false);
  }, []);

  const contextValue: FilterPanelController = {
    openFilterPanel: () => {
      setFilterPanelOpened(true);
    },
    // onApply?: (filter: Filter) => void;
  };

  return (
    <FilterPanelContext.Provider value={contextValue}>
      <SidePanel open={filterPanelOpened} onClose={onFilterPanelClose} title="Cart">
        <div className="flex grow flex-col justify-between h-full gap-5 overflow-y-auto">
          <div className="flex grow flex-col gap-4 overflow-y-auto">
            {filterSections.map((section) =>
              <FilterSection 
              filterSection={section} onFilterSectionChange={onFilterSectionChange} key={`FilterSection_${section.key}`} />)}
          </div>
          <Button fill="parent">Apply</Button>
        </div>
      </SidePanel>
      {children}
    </FilterPanelContext.Provider>
  );
}
