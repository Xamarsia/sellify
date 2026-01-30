"use client";

import { ChangeEvent, useCallback, useState } from "react";

import { SearchItem as SearchItemType } from "@sellify/customer-ui-components/types";
import SearchInput from "@sellify/common-ui-components/input/SearchInput";
import SearchItem from "@sellify/customer-ui-components/search/SearchItem";

type SearchPanelProps = {
  query: string;
  onSearch: (query: string) => Array<SearchItemType>;
};

export default function SearchProductPageContent({
  query = "",
  onSearch,
}: SearchPanelProps
) {
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
    <>
      <SearchInput value={query} onChange={onSearchChanged} />
      <ul className="flex grow flex-col gap-4 overflow-y-auto scrollbar pr-4">
        {searchResults.map((item, index) => (
          <li key={"SearchResult:" + item.productId.toString() + index}>
            <SearchItem searchItem={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

