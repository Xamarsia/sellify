"use client";

import { ChangeEvent, useCallback, useState } from "react";

import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import ArrowLongRightIcon from "@sellify/common-icons/arrow-long-right";

import SearchItem from "./SearchItem";
import SidePanel from "../SidePanel";
import { SearchItem as SearchItemType, NavigationLink } from "../types";

type SearchPanelProps = {
  query: string;
  dialogOpen: boolean;
  onDialogClose: () => void;
  onSearch: (query: string) => Array<SearchItemType>;
  popularQuickLinks: Array<NavigationLink>;
};

export default function SearchPanel({
  query,
  onSearch,
  dialogOpen,
  onDialogClose,
  popularQuickLinks,
}: SearchPanelProps) {
  const [searchResults, setSearchResults] = useState<Array<SearchItemType>>([]);

  const onSearchChanged = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const query: string = e.target.value;
      setSearchResults(onSearch(query));
    },
    [onSearch],
  );

  return (
    <SidePanel open={dialogOpen} onClose={onDialogClose} title="Search">
      <SearchInput value={query} onChange={onSearchChanged} fill="parent" />
      {query ? (
        <div className="grow flex flex-col justify-between flex-grow h-full justify-between gap-5 overflow-y-auto">
          <h4 className="text-disabled capitalize pt-5">Product Results</h4>
          <ul className="flex grow flex-col gap-4 overflow-y-auto scrollbar pr-4">
            {searchResults.map((item, index) => (
              <li key={"SearchResult:" + item.productId.toString() + index}>
                <SearchItem searchItem={item} />
              </li>
            ))}
          </ul>
          <LinkButton>
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
