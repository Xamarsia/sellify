"use client";

import { useEffect, useRef } from "react";

import XMarkIcon from "@sellify/common-icons/x-mark";
import { Size } from "@sellify/common-icons/enums";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

import ProductAddedDialogContent from "./ProductAddedDialogContent";
import { CartItem } from "../../types";

type ProductAddedDialogProps = {
  dialogOpen: boolean;
  cartItem: CartItem;
  onDialogClose: () => void;
  onCheckout?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductAddedDialog({
  cartItem,
  dialogOpen,
  onDialogClose,
  onCheckout,
}: ProductAddedDialogProps) {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dialogOpen && !modal.current?.contains(e.target as Node)) {
        onDialogClose();
      }
    };
    if (dialogOpen) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }
  }, [onDialogClose, dialogOpen]);

  return (
    <div
      className={`fixed flex top-16 right-2 z-50  ${dialogOpen ? "" : "hidden"}`}
    >
      <div
        ref={modal}
        className="bg-white w-full h-fit max-w-md md:max-w-lg lg:max-w-xl p-4 rounded-lg border border-stroke mx-2 md:mx-4"
      >
        <div className="flex justify-between items-center pb-4">
          <h2>Added To Cart</h2>
          <TransparentIconButton onClick={onDialogClose}>
            <XMarkIcon size={Size.lg} />
          </TransparentIconButton>
        </div>
        <ProductAddedDialogContent
          cartItem={cartItem}
          onCheckout={onCheckout}
        />
      </div>
    </div>
  );
}
