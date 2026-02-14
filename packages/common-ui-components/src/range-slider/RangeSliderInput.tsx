import { ChangeEvent } from "react";

type RangeSliderInputProps = {
  min: number;
  max: number;
  value: number;
  style?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function RangeSliderInput({
  min,
  max,
  value,
  style,
  onChange,
}: RangeSliderInputProps) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={`thumb ${style} pointer-events-none absolute h-0 outline-none w-full cursor-pointer mt-[2px]`}
    />
  );
}
