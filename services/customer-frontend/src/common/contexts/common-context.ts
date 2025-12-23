import { createContext } from "react";
import {
  AlertDialogController,
  FilterPanelController,
  NavbarDrawerController,
  RiskDialogController,
} from "types";

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({ showAlertDialog: () => {} });

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showDangerAlertDialog: () => {} });

export const NavbarDrawerContext: React.Context<NavbarDrawerController> =
  createContext<NavbarDrawerController>({ openNavbarDrawer: () => {} });

export const FilterPanelContext: React.Context<FilterPanelController> =
  createContext<FilterPanelController>({ openFilterPanel: () => {} });
