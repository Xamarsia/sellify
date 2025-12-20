'use client'

import { useCallback, useEffect, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import MinusIcon from "@sellify/common-icons/minus";

import { PropertyValue } from "../types";
import FilterProperty from "./FilterProperty";



type FilterSectionProps = {
  sectionKey: string,
  properties: Array<PropertyValue>,
  onFilterSectionChange: (sectionKey: string, propertyKey: string, selected: boolean) => void;
};

export default function FilterSectionComponent({ sectionKey, properties, onFilterSectionChange }: FilterSectionProps) {
  useEffect(() => {
    console.log("selectedProperties ", properties);
  }, [properties]);
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const onSectionClick = useCallback(() => {
    setIsExtended(!isExtended);
  }, [isExtended]);

  const onFilterPropertyChange = useCallback((propertyKey: string, selected: boolean) => {
    onFilterSectionChange(sectionKey, propertyKey, selected);
  }, [sectionKey]);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={onSectionClick}
        className={`flex items-center h-16 justify-between w-full bg-primary capitalize 
          cursor-pointer ${isExtended ? "text-black" : "text-[#555555] hover:text-[#000000]"}`}
      >
        <h4>{sectionKey}</h4>
        {isExtended ? (
          <MinusIcon style="size-6" />
        ) : (
          <PlusIcon style="size-6" />
        )}
      </button>
      {isExtended && <div className="flex flex-col gap-3">
        {properties.map((property) =>
          <FilterProperty
            propertyKey={property.key}
            value={property.value}
            onFilterPropertyChange={onFilterPropertyChange}
            key={`FilterProperty_${sectionKey}_${property.key}`} />
        )}
      </div>}
    </div>
  );
}
