import { useState } from "react";

import AddAmountButton from "../AddAmountButton";

type Props = {
  onSubmit: (value: number) => void;
  disabled?: boolean;
};

export default function AddAmountButtonTableItem({
  disabled,
  onSubmit,
}: Props) {
  const [quantity, setQuantity] = useState<number>();

  return (
    <AddAmountButton
      value={quantity}
      onChange={setQuantity}
      onSubmit={onSubmit}
      disabled={disabled}
    />
  );
}
