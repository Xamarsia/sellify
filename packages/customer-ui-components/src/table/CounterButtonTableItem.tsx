import { useCallback, useState } from "react";

import { CartItem } from "../types";
import CounterButton from "../CounterButton";

type Props = {
  cartItem: CartItem;
  getProductMaxQuantity: (productId: number) => number;
  onCartItemQuantityChanged: (cartItemId: number, quantity: number) => void;
};

export default function CounterButtonTableItem({
  cartItem,
  getProductMaxQuantity,
  onCartItemQuantityChanged,
}: Props) {
  const [count, setCount] = useState<number>(cartItem.amount);

  const onQuantityChanged = useCallback((quantity: number): void => {
    setCount(quantity);
    onCartItemQuantityChanged(cartItem.cartItemId, quantity);
  }, [setCount, onCartItemQuantityChanged]);

  return (
    <CounterButton
      count={count}
      onCountChange={onQuantityChanged}
      min={1}
      max={getProductMaxQuantity(cartItem.product.productId)}
    />
  );
}
