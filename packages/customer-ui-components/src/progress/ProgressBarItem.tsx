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
              body size-10 min-w-10 ring-primary-outline enabled:active:ring-4 text-white bg-primary-hover enabled:hover:bg-primary
              active:bg-primary-hover disabled:text-disabled disabled:bg-white disabled:border disabled:border-stroke
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
