import { createContext } from "react";
import { AlertDialogController, RiskDialogController } from "types";

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({ showAlertDialog: () => {} });

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showDangerAlertDialog: () => {} });
