"use client";

import type { ReactNode } from "react";

import XMarkIcon from "@sellify/common-icons/x-mark";

import DialogBase from "./DialogBase";
import TransparentIconButton from "../buttons/TransparentIconButton";

type DialogProps = {
  title: string;
  dialogOpen: boolean;
  children?: ReactNode;
  onDialogClose: () => void;
};

/**
 * Renders a titled dialog with a close button and custom content.
 *
 * The dialog also closes when the user clicks outside its content.
 *
 * @param title - Heading displayed in the dialog header
 * @param dialogOpen - Whether the dialog is visible
 * @param children - Optional content rendered below the header
 * @param onDialogClose - Callback invoked when the dialog should close
 */
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
          <TransparentIconButton onClick={onDialogClose} icon={<XMarkIcon />} />
        </div>
        {content}
      </div>
    </DialogBase>
  );
}
