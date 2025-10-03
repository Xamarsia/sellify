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

export type DialogContext = {
  openProductAddedDialog: (cartItem: CartItem) => void;
};

export type CartContext = {
  openCartPanel: () => void;
};

export type SearchContext = {
  openSearchPanel: () => void;
};

export type AlertContext = {
  openAlertDialog: (content: AlertDialogContent) => void;
};


export type EditProfileRequest = {
  contactInfo: ContactInfo;
  deliveryAddress: DeliveryAddress;
};