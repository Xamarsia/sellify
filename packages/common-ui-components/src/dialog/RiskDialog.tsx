"use client";

import { ChangeEvent, useCallback, useState } from "react";

import FireIcon from "@sellify/common-icons/fire";

import DialogBase from "./DialogBase";
import AlertDialogIcon from "./AlertDialogIcon";

import Input from "input/Input";
import Button from "buttons/Button";

type DialogProps = {
  title: string;
  description?: string;
  dialogOpen: boolean;
  buttonActionTitle: string;
  onDialogClose: () => void;
  onPasswordConfirmed: (password: string) => void;
};

export default function RiskDialog({
  title,
  description,
  dialogOpen,
  buttonActionTitle,
  onDialogClose,
  onPasswordConfirmed,
}: DialogProps) {
  const [password, setPassword] = useState<string>("");

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setPassword(value);
  }, [setPassword]);

  const confirmPassword = useCallback((): void => {
    onPasswordConfirmed(password);
  }, [onPasswordConfirmed, password]);

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
          <Input
            type="password"
            value={password}
            placeholder="Required Input"
            title="Required Input"
            required
            onChange={handlePasswordChange}
          />
        </div>
        {/* Control Panel */}
        <div className="flex justify-between gap-6">
          <Button variant="outline" fill="parent" onClick={onDialogClose}>
            Go Back
          </Button>
          <Button
            variant="destructive"
            fill="parent"
            onClick={confirmPassword}
            disabled={!password}
          >
            {buttonActionTitle}
          </Button>
        </div>
      </div>
    </DialogBase>
  );
}
