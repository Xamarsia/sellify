import React, { useCallback, ChangeEvent, useState, useEffect } from "react";

import Input from "../input/Input";

type Props = {
  min: number;
  max: number;
  value: number;
  title: string;
  onChange: (value: number) => void;
};

export default function NumberInput({
  min,
  max,
  value,
  title,
  onChange,
}: Props) {
  const [quantity, setQuantity] = useState<string>(value.toString());

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const possibleNumber: string = e.target.value;

      if (possibleNumber == "") {
        setQuantity(possibleNumber);
        return;
      }

      const numberRegex = /^[\d]+$/;
      if (!numberRegex.test(possibleNumber)) {
        return;
      }

      let num = parseInt(possibleNumber);

      if (num >= max) {
        onChange(max);
      } else if (num > min) {
        onChange(num);
      }
      setQuantity(num >= max ? max.toString() : possibleNumber);
    },
    [onChange, min, max],
  );

  useEffect(() => {
    setQuantity(value.toString());
  }, [value]);

  return (
    <Input
      value={quantity}
      title={title}
      onChange={handleChange}
    />
  );
}
