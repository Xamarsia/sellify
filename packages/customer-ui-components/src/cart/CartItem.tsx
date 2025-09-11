import { useCallback } from "react";

import TrashIcon from "@sellify/common-icons/trash";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

import { CartItem } from "./../types";

type Props = {
  cartItem: CartItem;
  onItemRemove: (productId: number) => void;
};

export default function CartItemComponent({ cartItem, onItemRemove }: Props) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      onItemRemove(cartItem.product.productId);
    },
    [onItemRemove],
  );

  return (
    <div className="flex gap-4 justify-between items-top">
      <div className="flex size-24 aspect-square rounded-md">
        <img
          src={cartItem.product.image}
          alt="Product image"
          className={`size-full object-cover rounded-md`}
        />
      </div>
      <div className="flex gap-9 my-2">
        <div className="grow flex flex-col justify-between">
          {/* TODO add link to Product page */}
          <a href="/">
            <h4 className="text-justify line-clamp-2 break-all hover:underline underline-offset-3">
              {cartItem.product.title}
            </h4>
          </a>
          <div className="flex gap-2">
            <p> Quantity: {cartItem.amount} </p>
            <p>×</p>
            <h4>$ {cartItem.product.price}</h4>
          </div>
        </div>
        <TransparentIconButton variant="destructive" onClick={handleClick}>
          <TrashIcon />
        </TransparentIconButton>
      </div>
    </div>
  );
}
