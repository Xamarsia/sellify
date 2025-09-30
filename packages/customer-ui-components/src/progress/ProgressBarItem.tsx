"use client";

import { ReactNode } from "react";

type ProgressBarItemProps = {
  step: number;
  label: string;
  icon: ReactNode;
  isSelected?: boolean;
  position?: "first" | "center" | "last";
  onStepClick: (step: number) => void;
};

export default function ProgressBarItem({
  step,
  label,
  icon,
  isSelected,
  position = "center",
  onStepClick,
}: ProgressBarItemProps) {
  const positionStyle = {
    first: "left-0",
    center: "",
    last: "right-0",
  }[position];

  return (
    <div className={`flex flex-col gap-2 items-center relative`}>
      <button
        onClick={() => onStepClick(step)}
        disabled={!isSelected}
        className={`flex justify-center items-center rounded-lg enabled:cursor-pointer disabled:cursor-not-allowed
              body size-10 min-w-10 ring-stroke focus:ring-4 text-white bg-[#383838] enabled:hover:bg-[#242424]
              focus:bg-[#383838] disabled:text-disabled disabled:bg-primary disabled:border disabled:border-stroke
          `}
      >
        <div className="size-6 stroke-2">{icon}</div>
      </button>
      <label className={`label absolute top-12 truncate ${positionStyle}`}>
        {label}
      </label>
    </div>
  );
}
