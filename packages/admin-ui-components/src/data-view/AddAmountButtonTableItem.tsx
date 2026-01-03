import { useCallback, useState } from "react";

import AddAmountButton from "../AddAmountButton";

type Props = {
  productId: number;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

export default function AddAmountButtonTableItem({
  productId,
  disabled,
  onSubmit,
}: Props) {
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
