"use client";

import { ReactNode, useCallback, useState } from "react";

import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";

import { AlertDialogContent, AlertContext } from "types";
import { AlertDialogContext } from "common/contexts/common-context";

export default function AlertDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);
  const [content, setContent] = useState<AlertDialogContent>();

  const onAlertDialogCloseClicked = useCallback((): void => {
    setDialogOpened(false);
  }, []);

  // TODO Implement onCheckout
  const onCheckout = useCallback((): void => {}, []);

  const contextValue: AlertContext = {
    openAlertDialog: (alertDialogContent) => {
      setDialogOpened(true);
      setContent(alertDialogContent);
    },
  };

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {content && (
        <AlertDialog
          title={content.title}
          dialogOpen={dialogOpened}
          description={content.description}
          onDialogClose={onAlertDialogCloseClicked}
          icon={content.icon}
        >
          {content.controlPanel}
        </AlertDialog>
      )}
      {children}
    </AlertDialogContext.Provider>
  );
}
