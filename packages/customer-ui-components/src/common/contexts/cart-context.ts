"use client";

import { createContext } from "react";

export const ProductAddedDialogContext: React.Context<DialogContext> =
  createContext<DialogContext>({ addProductToCart: () => {} });

export const CartPanelContext: React.Context<CartContext> =
  createContext<CartContext>({ openCartPanel: () => {} });
