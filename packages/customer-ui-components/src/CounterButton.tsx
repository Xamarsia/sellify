"use client";

import { useCallback } from "react";

import MinusIcon from "@sellify/common-icons/minus";
import PlusIcon from "@sellify/common-icons/plus";
import { Size } from "@sellify/common-icons/enums";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type CounterButtonProps = {
  count: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onCountChange: (count: number) => void;
};

export default function CounterButton({
  count,
  min,
  max,
  disabled = false,
  onCountChange,
}: CounterButtonProps) {
  const decreaseCounter = useCallback(() => {
    onCountChange(count - 1);
  }, [count, onCountChange]);

  const increaseCounter = useCallback(() => {
    onCountChange(count + 1);
  }, [count, onCountChange]);

  return (
    <div className="flex items-center justify-evenly min-w-28 xl:min-w-36 h-12 xl:h-14 rounded-lg border border-stroke has-enabled:hover:border-black has-focus:border-black">
      <TransparentIconButton
        onClick={decreaseCounter}
        disabled={(min && count <= min) || disabled}
      >
        <div className="xl:hidden">
          <MinusIcon size={Size.sm} />
        </div>
        <div className="not-xl:hidden">
          <MinusIcon size={Size.lg} />
        </div>
      </TransparentIconButton>

      <span
        className={`w-4 xl:w-6 text-center ${disabled ? "text-disabled" : "text-black"}`}
      >
        {count}
      </span>

      <TransparentIconButton
        onClick={increaseCounter}
        disabled={(max && count === max) || disabled}
      >
        <div className="xl:hidden">
          <PlusIcon size={Size.sm} />
        </div>
        <div className="not-xl:hidden">
          <PlusIcon size={Size.lg} />
        </div>
      </TransparentIconButton>
    </div>
  );
}
