"use client";

import { ReactNode, useCallback, useState } from "react";

import AlertDialog from "@sellify/common-ui-components/dialog/AlertDialog";

import { AlertDialogContent, AlertDialogController } from "types";
import { AlertDialogContext } from "contexts/common-context";

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

  const contextValue: AlertDialogController = {
    showAlertDialog: useCallback((alertDialogContent) => {
      setDialogOpened(true);
      setContent(alertDialogContent);
    }, []),
    closeAlertDialog: useCallback(() => {
      setDialogOpened(false);
    }, []),
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
