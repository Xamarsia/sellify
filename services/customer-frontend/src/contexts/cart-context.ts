"use client";

import { createContext } from "react";
import { CartPanelController, ProductAddedDialogController } from "types";

export const ProductAddedDialogContext: React.Context<ProductAddedDialogController> =
  createContext<ProductAddedDialogController>({
    openProductAddedDialog: () => {},
  });

export const CartPanelContext: React.Context<CartPanelController> =
  createContext<CartPanelController>({ openCartPanel: () => {} });
