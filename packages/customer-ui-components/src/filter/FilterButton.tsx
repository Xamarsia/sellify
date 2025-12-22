"use client";

import AdjustmentsHorizontalIcon from "@sellify/common-icons/adjustments-horizontal";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function FilterButton({ onClick }: ButtonProps) {
  return (
    /* External div for anti-flex */
    <div>
      <button
        type="button"
        onClick={onClick}
        className={`flex justify-center body items-center px-6 gap-x-4 rounded-lg group enabled:cursor-pointer h-13 uppercase
          text-black bg-primary border border-stroke hover:text-white hover:bg-[#383838] active:hover:bg-[#242424]`}
      >
        <AdjustmentsHorizontalIcon style="size-6" />
        <h4> filter </h4>
      </button>
    </div>
  );
}
