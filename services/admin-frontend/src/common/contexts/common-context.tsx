import { createContext } from "react";

import { AlertDialogController, RiskDialogController } from "types";

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showRiskDialog: () => {} });

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({
    showAlertDialog: () => {},
    closeAlertDialog: () => {},
  });
