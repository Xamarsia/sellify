"use client";

import { ReactNode, useCallback, useState } from "react";

import {
  SearchItem,
  NavigationLink,
} from "@sellify/customer-ui-components/types";
import SearchPanel from "@sellify/customer-ui-components/search/SearchPanel";

import { SearchPanelController } from "types";
import { SearchPanelContext } from "contexts/search-context";
import { search } from "actions/search-actions";

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

  const contextValue: SearchPanelController = {
    openSearchPanel: () => {
      setSearchPanelOpened(true);
    },
  };

  const popularQuickLinks: Array<NavigationLink> = [
    { href: "/collection/345", title: "Indoor Plants" },
    { href: "/collection/323", title: "Flowering Plants" },
    { href: "/collection/53", title: "Tropical Plants" },
    { href: "/collection/2", title: "Bonsai Trees" },
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
