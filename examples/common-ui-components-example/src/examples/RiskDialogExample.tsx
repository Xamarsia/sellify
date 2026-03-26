"use client";

import { useCallback, useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";
import RiskDialog from "@sellify/common-ui-components/dialog/RiskDialog";

export default function RiskDialogExample() {
  const [opened, setOpened] = useState<boolean>(false);

  const onClose = useCallback((): void => {
    setOpened(false);
  }, []);

  const onOpen = useCallback((): void => {
    setOpened(true);
  }, []);

  const onConfirm = useCallback((password: string): boolean => {
    return password === "password";
  }, []);

  const onPasswordValidated = useCallback((): void => {
    setOpened(false);
  }, []);

  return (
    <>
      <Button variant="destructive" onClick={onOpen}>
        Open Risk Dialog
      </Button>
      <RiskDialog
        title="Confirm Dangerous Action"
        description="Please enter your password to confirm this action."
        dialogOpen={opened}
        buttonActionTitle="Confirm"
        onDialogClose={onClose}
        onConfirm={onConfirm}
        onPasswordValidated={onPasswordValidated}
      />
    </>
  );
}
