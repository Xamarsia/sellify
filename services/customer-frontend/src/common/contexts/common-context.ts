import { createContext } from "react";
import { AlertContext } from "types";

export const AlertDialogContext: React.Context<AlertContext> =
  createContext<AlertContext>({ openAlertDialog: () => {} });