"use client";
import FilterButton from "@sellify/customer-ui-components/filter/FilterButton";
import { FilterPanelContext } from "common/contexts/common-context";
import { useContext } from "react";
import { FilterPanelController } from "types";

export default function Home() {
  const { openFilterPanel } = useContext<FilterPanelController>(FilterPanelContext);

  return (
    <div className="flex w-full justify-between">
      <div>Page</div>
      <FilterButton onClick={openFilterPanel}/>
    </div>
  );
}
