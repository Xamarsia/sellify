import { useCallback, useState, useEffect } from "react";

import Input from "../input/Input";
import FormItem from "../form/FormItem";

type RangeNumberInputProps = {
  min: number;
  max: number;
  value: number;
  title: string;
  onChange: (value: number) => void;
};

export default function RangeNumberInput({
  min,
  max,
  value,
  title,
  onChange,
}: RangeNumberInputProps) {
  const [quantity, setQuantity] = useState<string>(value.toString());

  const handleChange = useCallback(
    (possibleNumber: string): void => {
      if (possibleNumber === "") {
        setQuantity(possibleNumber);
        return;
      }

      const numberRegex = /^[\d]+$/;
      if (!numberRegex.test(possibleNumber)) {
        return;
      }

      const num = parseInt(possibleNumber);

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
    <FormItem title={title} required>
      <Input value={quantity} onChange={handleChange} />
    </FormItem>
  );
}
