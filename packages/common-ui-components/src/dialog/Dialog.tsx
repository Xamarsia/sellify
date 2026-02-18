"use client";

import { ReactNode } from "react";

import XMarkIcon from "@sellify/common-icons/x-mark";
import { Size } from "@sellify/common-icons/enums";

import DialogBase from "./DialogBase";
import TransparentIconButton from "../buttons/TransparentIconButton";

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
            <XMarkIcon size={Size.lg} />
          </TransparentIconButton>
        </div>
        {content}
      </div>
    </DialogBase>
  );
}
