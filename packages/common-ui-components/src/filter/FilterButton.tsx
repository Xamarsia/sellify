"use client";

import AdjustmentsHorizontalIcon from "@sellify/common-icons/adjustments-horizontal";
import { Size } from "@sellify/common-icons/enums";

type FilterButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    /* External div for anti-flex */
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`flex justify-center body items-center px-6 gap-x-4 rounded-lg group enabled:cursor-pointer h-13 uppercase
          text-black bg-white border border-stroke hover:text-white hover:bg-primary-hover active:hover:bg-primary`}
      >
        <AdjustmentsHorizontalIcon size={Size.lg} />
        <h4> filter </h4>
      </button>
    </div>
  );
}
