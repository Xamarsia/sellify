import { createContext } from "react";

import {
  AlertDialogController,
  FilterPanelController,
  RiskDialogController,
} from "types";

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showRiskDialog: () => {} });

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({
    showAlertDialog: () => {},
    closeAlertDialog: () => {},
  });

export const FilterPanelContext: React.Context<FilterPanelController> =
  createContext<FilterPanelController>({ openFilterPanel: () => {} });
