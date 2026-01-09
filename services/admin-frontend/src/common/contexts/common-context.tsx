import { createContext } from "react";

import { RiskDialogController } from "types";

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showDangerAlertDialog: () => {} });
