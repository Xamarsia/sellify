"use client";

import { ReactNode } from "react";
import DialogBase from "./DialogBase";
import AlertDialogIcon from "./AlertDialogIcon";

type AlertDialogProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
  dialogOpen: boolean;
  onDialogClose: () => void;
};

export default function AlertDialog({
  icon,
  title,
  description,
  children: controlPanel,
  dialogOpen,
  onDialogClose,
}: AlertDialogProps) {
  return (
    <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose}>
      <div className="relative flex flex-col grow justify-between min-h-72 gap-6 ">
        {/* Header */}
        <div className="self-center">
          <AlertDialogIcon icon={icon} />
        </div>
        {/* Body */}
        <div className="grow flex flex-col justify-between gap-4">
          <h2 className="text-justify wrap-break-word self-center">{title}</h2>
          {description && (
            <p className="text-justify wrap-break-word">{description}</p>
          )}
        </div>
        {/* Control Panel */}
        <div className="flex justify-between gap-6">{controlPanel}</div>
      </div>
    </DialogBase>
  );
}
