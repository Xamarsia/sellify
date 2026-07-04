"use client";

import { useCallback, useMemo, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import FilterButton from "@sellify/common-ui-components/filter/FilterButton";
import FilterSectionComponent from "@sellify/common-ui-components/filter/FilterSection";
import SidePanel from "@sellify/common-ui-components/SidePanel";

import {
  CheckboxFilterProperty,
  IdInputFilterProperty,
  InputFilterProperty,
  MultiSelectionComboboxFilterProperty,
  RangeFilterProperty,
} from "../../../../packages/common-ui-components/src/components/filter/common/Property";
import {
  CheckboxFilterPropertyValue,
  FilterPropertyValue,
  InputFilterPropertyValue,
  MultiSelectionComboboxFilterPropertyValue,
  RangeFilterPropertyValue,
} from "../../../../packages/common-ui-components/src/components/filter/common/PropertyValues";
import { FilterSection as FilterSectionType } from "../../../../packages/common-ui-components/src/components/filter/common/Section";

export default function FilterButtonExample() {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);
  const [modifiedSectionProperties, setModifiedSectionProperties] = useState<
    Map<string, Map<string, FilterPropertyValue>>
  >(new Map());

  const filterSections = useMemo<Array<FilterSectionType<string>>>(() => {
    const categories = new Map<string, string>([
      ["indoor-plants", "Indoor plants"],
      ["garden-tools", "Garden tools"],
      ["plant-care", "Plant care"],
      ["pots", "Pots"],
    ]);

    return [
      new FilterSectionType<string>("availability", [
        new CheckboxFilterProperty(
          "in-stock",
          new CheckboxFilterPropertyValue(true),
        ),
        new CheckboxFilterProperty(
          "on-sale",
          new CheckboxFilterPropertyValue(false),
        ),
        new CheckboxFilterProperty(
          "new-arrivals",
          new CheckboxFilterPropertyValue(false),
        ),
      ]),
      new FilterSectionType<string>("search", [
        new InputFilterProperty(
          "product-title",
          new InputFilterPropertyValue(""),
          "Product title",
        ),
        new IdInputFilterProperty(
          "product-id",
          new InputFilterPropertyValue(""),
        ),
      ]),
      new FilterSectionType<string>("category", [
        new MultiSelectionComboboxFilterProperty<string>(
          "category",
          new MultiSelectionComboboxFilterPropertyValue(categories),
          ["indoor-plants", "plant-care"],
        ),
      ]),
      new FilterSectionType<string>("price", [
        new RangeFilterProperty(
          "price-range",
          new RangeFilterPropertyValue({ min: 0, max: 500 }),
          new RangeFilterPropertyValue({ min: 75, max: 320 }),
        ),
      ]),
    ];
  }, []);

  const openFilterPanel = useCallback((): void => {
    setIsFilterPanelOpen(true);
  }, []);

  const closeFilterPanel = useCallback((): void => {
    setIsFilterPanelOpen(false);
  }, []);

  const onFilterReset = useCallback((): void => {
    setModifiedSectionProperties(new Map());
  }, []);

  const onFilterSectionChange = useCallback(
    (sectionKey: string, propertyKey: string, value: FilterPropertyValue) => {
      setModifiedSectionProperties((currentModifiedSectionProperties) => {
        const sectionValues = new Map(
          currentModifiedSectionProperties.get(sectionKey),
        );

        sectionValues.set(propertyKey, value);

        return new Map(currentModifiedSectionProperties).set(
          sectionKey,
          sectionValues,
        );
      });
    },
    [],
  );

  return (
    <>
      <div className="flex-none">
        <FilterButton onClick={openFilterPanel} />
      </div>

      <SidePanel
        title="Filter"
        isOpen={isFilterPanelOpen}
        onClose={closeFilterPanel}
      >
        <div className="flex grow flex-col justify-between h-full gap-5 overflow-y-auto -m-3 p-3">
          <div className="flex flex-col overflow-y-auto scrollbar pr-4 -mx-3 px-3">
            {filterSections.map((section) => (
              <FilterSectionComponent
                sectionKey={section.key}
                properties={section.properties}
                modifiedProperties={modifiedSectionProperties.get(section.key)}
                onFilterSectionChange={onFilterSectionChange}
                key={`FilterSection_${section.key}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={onFilterReset}>
              Reset
            </Button>
            <Button onClick={closeFilterPanel}>Apply</Button>
          </div>
        </div>
      </SidePanel>
    </>
  );
}
