import { useEffect, useRef } from "react";

import XMark from "@sellify/common-icons/x-mark";
import AddedToCartDialogContent from "./AddedToCartDialogContent";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type DialogProps = {
  dialogOpen: boolean;
  cartItem: CartItem;
  onDialogClose: () => void;
  onCheckout?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function AddedToCartDialog({
  cartItem,
  dialogOpen,
  onDialogClose,
  onCheckout,
}: DialogProps) {
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
            <XMark style="size-6 stroke-current" />
          </TransparentIconButton>
        </div>
        <AddedToCartDialogContent cartItem={cartItem} onCheckout={onCheckout} />
      </div>
    </div>
  );
}
