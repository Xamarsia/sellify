"use client";

import { useCallback, useState } from "react";

import FireIcon from "@sellify/common-icons/fire";

import DialogBase from "./DialogBase";
import AlertDialogIcon from "./AlertDialogIcon";

import Button from "../buttons/Button";
import FormItem from "../form/FormItem";
import Input from "../input/Input";

type RiskDialogProps = {
  title: string;
  description?: string;
  dialogOpen: boolean;
  confirmButtonLabel: string;
  onDialogClose: () => void;
  validatePassword: (password: string) => boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValidationSuccess: (...args: any) => void;
};

/**
 * Displays a high-risk confirmation dialog that requires password entry.
 * Prompts the user to enter a password before completing a destructive action.
 * @param title - Main heading displayed in the dialog
 * @param description - Optional explanatory text shown under the title
 * @param dialogOpen - Whether the dialog is currently open
 * @param confirmButtonLabel - Label displayed on the destructive confirmation button
 * @param onDialogClose - Callback fired when the dialog should close
 * @param validatePassword - Validates the entered password before the action proceeds
 * @param onValidationSuccess - Invoked after the password has been validated successfully
 */
export default function RiskDialog({
  title,
  description,
  dialogOpen,
  confirmButtonLabel,
  onDialogClose,
  validatePassword,
  onValidationSuccess,
}: RiskDialogProps) {
  const [password, setPassword] = useState<string>("");

  const confirmPassword = useCallback((): void => {
    const isConfirmed: boolean = validatePassword(password);
    if (isConfirmed) {
      onValidationSuccess();
    }
  }, [validatePassword, onValidationSuccess, password]);

  return (
    <DialogBase dialogOpen={dialogOpen} onDialogClose={onDialogClose}>
      <div className="relative flex flex-col grow justify-between min-h-72 gap-6 ">
        {/* Header */}
        <div className="self-center">
          <AlertDialogIcon icon={<FireIcon />} />
        </div>
        {/* Body */}
        <div className="grow flex flex-col justify-between gap-4">
          <h2 className="text-justify wrap-break-word self-center">{title}</h2>
          {description && (
            <p className="text-justify wrap-break-word">{description}</p>
          )}
          <FormItem title="Password" required>
            <Input
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={setPassword}
            />
          </FormItem>
        </div>
        {/* Control Panel */}
        <div className="flex justify-between gap-6">
          <Button variant="outline" onClick={onDialogClose}>
            Go Back
          </Button>
          <Button
            variant="destructive"
            onClick={confirmPassword}
            disabled={!password}
          >
            {confirmButtonLabel}
          </Button>
        </div>
      </div>
    </DialogBase>
  );
}
