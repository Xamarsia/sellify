import type { OrderStatus } from "@sellify/common-ui-components/types";
import type { CartItem } from "@sellify/customer-ui-components/types";
import { ReactNode } from "react";

export type ProgressBarContent = {
  isValid: boolean;
  content: ReactNode;
};

export type AlertDialogContent = {
  title: string;
  icon: ReactNode;
  description?: string;
  controlPanel: ReactNode;
};

export type RiskDialogContent = {
  title: string;
  description?: string;
  buttonActionTitle: string;
  onConfirm: (password: string) => boolean;
  onPasswordValidated: (...args: any) => void;
};

export type ProductAddedDialogController = {
  openProductAddedDialog: (cartItem: CartItem) => void;
};

export type CartPanelController = {
  openCartPanel: () => void;
};

export type SearchPanelController = {
  openSearchPanel: () => void;
};

export type AlertDialogController = {
  showAlertDialog: (content: AlertDialogContent) => void;
};

export type RiskDialogController = {
  showRiskDialog: (content: RiskDialogContent) => void;
};

export type NavbarDrawerController = {
  openNavbarDrawer: (navItems: Array<NavMenuItem>) => void;
};

export type BreadcrumbsController = {
  setNavItem: (navItems: Array<NavMenuItem>) => void;
};

export type FilterPanelController = {
  openFilterPanel: () => void;
};

export type EditProfileRequest = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
};
