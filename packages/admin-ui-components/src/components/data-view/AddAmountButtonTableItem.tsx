import { useCallback, useState } from "react";

import AddAmountButton from "../AddAmountButton";

type AddAmountButtonTableItemProps = {
  productId: number;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

export default function AddAmountButtonTableItem({
  productId,
  disabled,
  onSubmit,
}: AddAmountButtonTableItemProps) {
  const [quantity, setQuantity] = useState<number>();

  const onAmountChange = useCallback((): void => {
    if (quantity) {
      onSubmit(productId, quantity);
    }
  }, [quantity, productId, onSubmit]);

  return (
    <AddAmountButton
      value={quantity}
      onChange={setQuantity}
      onSubmit={onAmountChange}
      disabled={disabled}
    />
  );
}
