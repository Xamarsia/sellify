import { createContext } from "react";
import {
  AlertDialogController,
  BreadcrumbsController,
  FilterPanelController,
  NavbarDrawerController,
  RiskDialogController,
} from "types";

export const AlertDialogContext: React.Context<AlertDialogController> =
  createContext<AlertDialogController>({ showAlertDialog: () => {} });

export const RiskDialogContext: React.Context<RiskDialogController> =
  createContext<RiskDialogController>({ showRiskDialog: () => {} });

export const NavbarDrawerContext: React.Context<NavbarDrawerController> =
  createContext<NavbarDrawerController>({ openNavbarDrawer: () => {} });

export const BreadcrumbsContext: React.Context<BreadcrumbsController> =
  createContext<BreadcrumbsController>({ setNavItem: () => {} });

export const FilterPanelContext: React.Context<FilterPanelController> =
  createContext<FilterPanelController>({ openFilterPanel: () => {} });
