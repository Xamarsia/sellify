"use client";

import { ReactNode } from "react";
import DialogBase from "./DialogBase";
import TransparentIconButton from "../buttons/TransparentIconButton";

import XMark from "@sellify/common-icons/x-mark";

type DialogProps = {
  title: string;
  dialogOpen: boolean;
  children?: ReactNode;
  onDialogClose: () => void;
};

export default function Dialog({
  title,
  children: content,
  dialogOpen,
  onDialogClose,
}: DialogProps) {
  return (
    <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose}>
      <div className="flex flex-col grow justify-between min-h-96 h-full">
        {/* DialogHeader  */}
        <div className="flex justify-between items-center pb-9">
          <h2>{title}</h2>
          <TransparentIconButton onClick={onDialogClose}>
            <XMark style="size-6 stroke-current" />
          </TransparentIconButton>
        </div>
        {content}
      </div>
    </DialogBase>
  );
}
