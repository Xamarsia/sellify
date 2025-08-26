import { useCallback } from "react";

import TrashIcon from "@sellify/common-icons/trash";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type Props = {
  cartItem: CartItem;
  onItemRemove: (productId: number) => void;
};

export default function CartItem({ cartItem, onItemRemove }: Props) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      onItemRemove(cartItem.product.productId);
    },
    [onItemRemove],
  );

  return (
    <div className="flex gap-4 justify-between items-end">
      <div className="flex gap-4">
        <div className="flex basis-28 aspect-square rounded-md">
          <img
            src={cartItem.product.image}
            alt="Product image"
            className={`size-full object-cover rounded-md`}
          />
        </div>

        <div className="flex basis-64 my-2 flex-col h-24 justify-between shrink-0">
          {/* TODO add link to Product page */}
          <a href="/">
            <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3">
              {cartItem.product.title}
            </h4>
          </a>
          <p> Quantity: {cartItem.amount} </p>
          <h4>$ {cartItem.product.price}</h4>
        </div>
      </div>

      <TransparentIconButton variant="destructive" onClick={handleClick}>
        <TrashIcon />
      </TransparentIconButton>
    </div>
  );
}
