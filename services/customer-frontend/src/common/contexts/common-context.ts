import { createContext } from "react";
import {
  AlertDialogController,
  NavbarDrawerController,
  RiskDialogController,
} from "types";

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({ showAlertDialog: () => {} });

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showDangerAlertDialog: () => {} });

export const NavbarDrawerContext: React.Context<NavbarDrawerController> =
  createContext<NavbarDrawerController>({ openNavbarDrawer: () => {} });
