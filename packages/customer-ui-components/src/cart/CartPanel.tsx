"use client";

import { useMemo } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import CartItem from "./CartItem";
import SidePanel from "../SidePanel";
import { CartItem as CartItemType } from "./../types";

type DialogProps = {
  dialogOpen: boolean;
  cartItems: Array<CartItemType>;
  onDialogClose: () => void;
  onItemRemove: (productId: number) => void;
};

export default function CartPanel({
  dialogOpen,
  cartItems,
  onDialogClose,
  onItemRemove,
}: DialogProps) {
  const totalPrice = useMemo((): number => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.amount;
    }, 0);
  }, [cartItems]);

  return (
    <SidePanel open={dialogOpen} onClose={onDialogClose} title="Cart">
      {cartItems.length ? (
        <div className="grow flex flex-col justify-between flex-grow h-full justify-between gap-5 overflow-y-auto">
          <ul className="flex grow flex-col gap-4 overflow-y-auto">
            {cartItems.map((item, index) => (
              <li key={item.product.productId.toString() + index}>
                <CartItem cartItem={item} onItemRemove={onItemRemove} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between my-2">
              <h2>Subtotal</h2>
              <h2>${totalPrice}</h2>
            </div>
            <Button fill="parent">Checkout</Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-top">
          <h3 className="py-4 uppercase ">
            Cart is empty :-( Please add products
          </h3>
          <Button fill="parent">Sign In</Button>
          <Button fill="parent" variant="outline">
            Continue Shopping
          </Button>
        </div>
      )}
    </SidePanel>
  );
}
