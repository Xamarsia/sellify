"use client";

import { ReactNode, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onSearchPanelClose = useCallback((): void => {
    setSearchPanelOpened(false);
  }, []);

  const onQueryChange = useCallback((query: string): Array<SearchItem> => {
    setQuery(query);
    return search(query);
  }, []);

  const onSearch = useCallback((): void => {
    router.push(`/search/${query.replace(/\s/g, "-")}`);
    onSearchPanelClose();
  }, [router, query]);

  const contextValue: SearchPanelController = {
    openSearchPanel: () => {
      setSearchPanelOpened(true);
    },
    setInitialQuery: (initialQuery?: string) => {
      if (initialQuery) {
        setQuery(initialQuery);
      }
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
        isOpen={searchPanelOpened}
        onClose={onSearchPanelClose}
        onSearch={onSearch}
        onQueryChange={onQueryChange}
        popularQuickLinks={popularQuickLinks}
      />
      {children}
    </SearchPanelContext.Provider>
  );
}
