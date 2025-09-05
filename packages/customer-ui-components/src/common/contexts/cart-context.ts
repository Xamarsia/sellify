"use client";

import { createContext } from "react";

// Create a new context for the ProductAddedDialog
export const ProductAddedDialogContext: React.Context<DialogContext> =
  createContext<DialogContext>({ addProductToCart: () => {} });
