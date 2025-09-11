"use client";

import { ReactNode, useCallback, useState } from "react";

import SearchPanel from "@sellify/customer-ui-components/search/SearchPanel";
import {
  SearchItem,
  SearchNavigationItem,
} from "@sellify/customer-ui-components/types.ts";

import { SearchPanelContext } from "../contexts/search-context";
import { search } from "../actions/search-actions";
import { SearchContext } from "../../types";

export default function SearchPanelProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchPanelOpened, setSearchPanelOpened] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const onSearchPanelClose = useCallback((): void => {
    setSearchPanelOpened(false);
  }, []);

  const onSearch = useCallback((query: string): Array<SearchItem> => {
    setQuery(query);
    return search(query);
  }, []);

  const contextValue: SearchContext = {
    openSearchPanel: () => {
      setSearchPanelOpened(true);
    },
  };

  const popularQuickLinks: Array<SearchNavigationItem> = [
    { href: "/", title: "Indoor Plants" },
    { href: "/", title: "Flowering Plants" },
    { href: "/", title: "Tropical Plants" },
    { href: "/", title: "Bonsai Trees" },
  ];

  return (
    <SearchPanelContext.Provider value={contextValue}>
      <SearchPanel
        query={query}
        dialogOpen={searchPanelOpened}
        onDialogClose={onSearchPanelClose}
        onSearch={onSearch}
        popularQuickLinks={popularQuickLinks}
      />
      {children}
    </SearchPanelContext.Provider>
  );
}
