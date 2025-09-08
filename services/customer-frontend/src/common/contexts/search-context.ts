"use client";

import { createContext } from "react";
import { SearchContext } from "../../types";

export const SearchPanelContext: React.Context<SearchContext> =
  createContext<SearchContext>({ openSearchPanel: () => {} });
