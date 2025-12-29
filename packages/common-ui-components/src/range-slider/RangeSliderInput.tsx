import { ChangeEvent, useCallback } from "react";

type Props = {
  min: number;
  max: number;
  value: number;
  style?: string;
  onChange: (value: number) => void;
};

export default function RangeSliderInput({
  min,
  max,
  value,
  style,
  onChange,
}: Props) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const possibleNumber: string = e.target.value;
      let num = parseInt(possibleNumber);
      if (num > max) {
        num = max;
      } else if (num < min) {
        num = min;
      }
      onChange(num);
    },
    [onChange, min, max],
  );

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className={`thumb ${style} pointer-events-none absolute h-0 outline-none w-full cursor-pointer mt-[2px]`}
    />
  );
}
