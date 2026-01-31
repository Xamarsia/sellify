"use client";

import ProductFeedContent from "components/ProductFeedContent";
import { useContext, useEffect } from "react";
import { SearchPanelController } from "types";
import { SearchPanelContext } from "contexts/search-context";

type Props = {
  query: string;
};

export default function SearchProductPageContent({ query }: Props) {
  const { setInitialQuery } =
    useContext<SearchPanelController>(SearchPanelContext);

  useEffect(() => {
    setInitialQuery(query);
  }, [query]);

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1 className="text-justify break-all">{`Results for "${query.replace(/-/g, " ")}"`}</h1>
      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <ProductFeedContent />
      </div>
    </div>
  );
}
