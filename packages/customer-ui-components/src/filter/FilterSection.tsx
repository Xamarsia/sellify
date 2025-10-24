import { useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

import { FilterSection } from "../types";
import FilterProperty from "./FilterProperty";

type FilterSectionProps = {
  filterSection: FilterSection;
  onFilterSectionChange: (key: string, selectedProperties: Array<string>) => void;
};

export default function FilterSectionComponent({ filterSection, onFilterSectionChange }: FilterSectionProps) {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const [selectedProperties, setSelectedProperties] = useState<Array<string>>([]);

  const onSectionClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended]);

  const onFilterPropertyChange = useCallback((key: string, selected: boolean) => {
    if (selected) {
      setSelectedProperties([...selectedProperties, key]);
    } else {
      setSelectedProperties(selectedProperties.filter(property => property !== key))
    }
    onFilterSectionChange(filterSection.key, selectedProperties)
  }, [selectedProperties, filterSection, onFilterSectionChange]);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={onSectionClick}
        className={`flex items-center h-16 justify-between w-full bg-primary capitalize 
          cursor-pointer ${isExtended ? "text-black" : "text-[#555555] hover:text-[#000000]"}`}
      >
        <h4>{filterSection.value}</h4>
        {isExtended ? (
          <MinusIcon style="size-6" />
        ) : (
          <PlusIcon style="size-6" />
        )}
      </button>
      {isExtended && <div className="flex flex-col gap-3">
        {filterSection.filterProperties.map((property, index) =>
          <FilterProperty filterProperty={property} onFilterPropertyChange={onFilterPropertyChange} key={`FilterProperty_${filterSection.key}_${property.key}`} />)}
      </div>}
    </div>
  );
}
