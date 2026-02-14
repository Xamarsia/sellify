"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import SidePanel from "@sellify/common-ui-components/SidePanel";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";

import SearchItem from "./SearchItem";
import { SearchItem as SearchItemType, NavigationLink } from "../types";

type SearchPanelProps = {
  query: string;
  isOpen: boolean;
  onClose: () => void;
  onQueryChange: (query: string) => Array<SearchItemType>;
  onSearch: () => void;
  popularQuickLinks: Array<NavigationLink>;
};

export default function SearchPanel({
  query,
  onSearch,
  isOpen,
  onClose,
  onQueryChange,
  popularQuickLinks,
}: SearchPanelProps) {
  const [searchResults, setSearchResults] = useState<Array<SearchItemType>>([]);

  const onQueryChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setSearchResults(onQueryChange(query));
    },
    [onQueryChange],
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      onSearch();
    },
    [onSearch],
  );

  return (
    <SidePanel open={isOpen} onClose={onClose} title="Search">
      <SearchInput
        value={query}
        onChange={onQueryChanged}
        onSubmit={onSubmit}
        fill="parent"
      />
      {query ? (
        <div className="grow flex flex-col justify-between h-full gap-5 overflow-y-auto">
          <h4 className="text-disabled capitalize pt-5">Product Results</h4>
          <ul className="flex grow flex-col gap-4 overflow-y-auto scrollbar pr-4">
            {searchResults.map((item, index) => (
              <li key={"SearchResult:" + item.productId.toString() + index}>
                <SearchItem searchItem={item} />
              </li>
            ))}
          </ul>
          <LinkButton href={`/search/${query.replace(/\s/g, "-")}`}>
            See More Results <ArrowLongRightIcon style="size-6" />
          </LinkButton>
        </div>
      ) : (
        <div className="flex flex-col py-9 gap-5">
          <h4 className="text-disabled capitalize">Quick Links</h4>
          <ul className="flex grow flex-col gap-2 overflow-y-auto capitalize">
            {popularQuickLinks.map((navItem, index) => (
              <li key={"PopularQuickLinks:" + index}>
                <LinkButton href={navItem.href}>
                  <ArrowLongRightIcon style="size-5" /> {navItem.title}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SidePanel>
  );
}
