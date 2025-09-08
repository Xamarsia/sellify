"use client";

import { ReactNode } from "react";
import DialogBase from "./DialogBase";
import AlertDialogHeader from "./AlertDialogHeader";

type DialogProps = {
  title: string;
  dialogOpen: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  onDialogClose: () => void;
};

export default function AlertDialog({
  title,
  children: content,
  dialogOpen,
  icon,
  onDialogClose,
}: DialogProps) {
  return (
    <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose}>
      <div className="flex flex-col grow justify-between min-h-72">
        <AlertDialogHeader title={title} icon={icon} />
        {content}
      </div>
    </DialogBase>
  );
}
