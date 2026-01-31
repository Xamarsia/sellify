"use client";

import { createContext } from "react";
import { SearchPanelController } from "types";

export const SearchPanelContext: React.Context<SearchPanelController> =
  createContext<SearchPanelController>({
    openSearchPanel: () => {},
    setInitialQuery: () => {},
  });
