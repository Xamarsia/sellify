import { useCallback, useState } from "react";

import ChevronUpMiniIcon from "@sellify/common-icons/chevron-up-mini";
import ChevronDownMiniIcon from "@sellify/common-icons/chevron-down-mini";

import ColumnHeaderButton from "../buttons/ColumnHeaderButton";

type Props = {
  label: string;
  onSortAscending?: () => void;
  onSortDescending?: () => void;
  onResetSort?: () => void;
};

export default function SortableColumnHeaderItem(
  { label,
    onSortAscending,
    onSortDescending,
    onResetSort,
  }: Props
) {
  const [isAscendingActive, setIsAscendingActive] = useState<boolean>(false);
  const [isDescendingActive, setIsDescendingActive] = useState<boolean>(false);

  const handleAscendingClick = useCallback(() => {
    if (isAscendingActive) {
      setIsAscendingActive(false);
      if (onResetSort) {
        onResetSort();
      }
    } else {
      setIsAscendingActive(true);
      setIsDescendingActive(false);
      if (onSortAscending) {
        onSortAscending();
      }
    }
  }, [isAscendingActive, onResetSort, onSortAscending],);

  const handleDescendingClick = useCallback(() => {
    if (isDescendingActive) {
      setIsDescendingActive(false);
      if (onResetSort) {
        onResetSort();
      }
    } else {
      setIsDescendingActive(true);
      setIsAscendingActive(false);
      if (onSortDescending) {
        onSortDescending();
      }
    }
  }, [isDescendingActive, onResetSort, onSortDescending],);

  return (
    <div className="flex w-full items-center px-3 lg:px-6 gap-2">
      <h3>{label}</h3>
      <div className="flex flex-col">
        <ColumnHeaderButton selected={isAscendingActive!} onClick={handleAscendingClick}>
          <ChevronUpMiniIcon style="size-4" />
        </ColumnHeaderButton>
        <ColumnHeaderButton selected={isDescendingActive} onClick={handleDescendingClick} >
          <ChevronDownMiniIcon style="size-4" />
        </ColumnHeaderButton>
      </div>
    </div>
  );
}
