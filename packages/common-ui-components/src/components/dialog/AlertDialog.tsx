"use client";

import type { ComponentProps, ReactNode } from "react";

import Button from "../buttons/Button";
import DialogBase from "./DialogBase";
import AlertDialogIcon from "./AlertDialogIcon";

type ButtonProps = ComponentProps<typeof Button>;

type AlertDialogProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  actions?: ButtonProps[];
  dialogOpen: boolean;
  onDialogClose: () => void;
};

/**
 * Renders an alert dialog with an icon, message, and optional actions.
 *
 * The dialog closes when the user clicks outside its content. Actions are
 * rendered as buttons in the provided order.
 *
 * @param icon - Icon displayed above the dialog message
 * @param title - Main heading displayed in the dialog
 * @param description - Optional supporting text displayed below the title
 * @param actions - Optional button props rendered in the control panel
 * @param dialogOpen - Whether the dialog is visible
 * @param onDialogClose - Callback invoked when the dialog should close
 */
export default function AlertDialog({
  icon,
  title,
  description,
  actions,
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
        <div className="flex justify-between gap-6">
          {actions?.map((action, index) => (
            <Button {...action} key={index} />
          ))}
        </div>
      </div>
    </DialogBase>
  );
}
