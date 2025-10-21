import { useCallback } from "react";

import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import TrashIcon from "@sellify/common-icons/trash";

type Props = {
  cartItemId: number;
  onCartItemRemove: (cartItemId: number) => void;
};

export default function CartItemRemoveButton({
  cartItemId,
  onCartItemRemove,
}: Props) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      onCartItemRemove(cartItemId);
    },
    [cartItemId, onCartItemRemove],
  );

  return (
    <TransparentIconButton variant="destructive" onClick={handleClick}>
      <TrashIcon />
    </TransparentIconButton>
  );
}
