"use client";

import RiskDialog from "@sellify/common-ui-components/dialog/RiskDialog";

import { RiskDialogContent, RiskDialogController } from "types";
import { RiskDialogContext } from "contexts/common-context";
import { ReactNode, useCallback, useState } from "react";

export default function RiskDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [content, setContent] = useState<RiskDialogContent>();
  const [dialogOpened, setDialogOpened] = useState<boolean>(false);

  const onDialogCloseClicked = useCallback((): void => {
    setDialogOpened(false);
  }, []);

  const contextValue: RiskDialogController = {
    showRiskDialog: useCallback((dialogContent) => {
      setContent(dialogContent);
      setDialogOpened(true);
    }, []),
  };

  return (
    <RiskDialogContext.Provider value={contextValue}>
      {content && (
        <RiskDialog
          title={content.title}
          dialogOpen={dialogOpened}
          description={content.description}
          onDialogClose={onDialogCloseClicked}
          buttonActionTitle={content.buttonActionTitle}
          onConfirm={content.onConfirm}
          onPasswordValidated={content.onPasswordValidated}
        />
      )}
      {children}
    </RiskDialogContext.Provider>
  );
}
