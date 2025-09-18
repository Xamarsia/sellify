"use client";

import { createContext } from "react";
import { CartContext, DialogContext } from "types";

export const ProductAddedDialogContext: React.Context<DialogContext> =
  createContext<DialogContext>({ openProductAddedDialog: () => {} });

export const CartPanelContext: React.Context<CartContext> =
  createContext<CartContext>({ openCartPanel: () => {} });
