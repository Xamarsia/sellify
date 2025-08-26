import { useEffect, useRef } from "react";

import XMark from "@sellify/common-icons/x-mark";
import AddedToCartDialogContent from "./AddedToCartDialogContent";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

type DialogProps = {
  dialogOpen: boolean;
  cartItem: CartItem;
  onDialogClose: () => void;
};

export default function AddedToCartDialog({
  cartItem,
  dialogOpen,
  onDialogClose,
}: DialogProps) {
  const preview: ProductPreview = cartItem.product;
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
      className={`fixed top-0 left-0 z-50 size-full  ${dialogOpen ? "" : "hidden"}`}
    >
      <div
        ref={modal}
        className="bg-white w-full max-w-xl h-fit max-h-screen p-4 rounded-lg border border-stroke"
      >
        <div className="flex justify-between items-center pb-4">
          <h2>Added To Cart</h2>
          <TransparentIconButton onClick={onDialogClose}>
            <XMark style="size-6 stroke-current" />
          </TransparentIconButton>
        </div>
        <AddedToCartDialogContent cartItem={cartItem} />
      </div>
    </div>
  );
}
