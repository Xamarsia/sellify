"use client";

import XMark from "@sellify/common-icons/x-mark";
import TransparentIconButton from "../buttons/TransparentIconButton";

type DialogProps = {
  title: string;
  onDialogClose: () => void;
};

export default function DialogHeader({ title, onDialogClose }: DialogProps) {
  return (
    <div className="flex justify-between items-center pb-9">
      <h2>{title}</h2>
      <TransparentIconButton onClick={onDialogClose}>
        <XMark style="size-6 stroke-current" />
      </TransparentIconButton>
    </div>
  );
}
