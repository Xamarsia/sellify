"use client";

import { useCallback, useContext } from "react";

import FilterButton from "@sellify/common-ui-components/filter/FilterButton";

import { FilterPanelController } from "types";
import { FilterPanelContext } from "common/contexts/common-context";
import { FilterSection } from "../../../../packages/common-ui-components/src/filter/common/Section";

type Props = {
  filterSections: Array<FilterSection>;
};

export default function Filter({ filterSections }: Props) {
  const { openFilterPanel } =
    useContext<FilterPanelController>(FilterPanelContext);

  const openFilter = useCallback((): void => {
    openFilterPanel(filterSections);
  }, [openFilterPanel]);

  return <FilterButton onClick={openFilter} />;
}
