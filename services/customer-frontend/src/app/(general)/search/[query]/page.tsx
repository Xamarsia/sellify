import "server-only";

import SearchProductPageContent from "components/pages-content/SearchProductPageContent";

type Props = {
  params: Promise<{ query: string }>;
};

export default async function SearchProductPage({ params }: Props) {
  const query: string = (await params).query;

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>{`Search Product`}</h1>

      <div className="flex w-full justify-between gap-12 xl:gap-24 xl:flex-row flex-col">
        <SearchProductPageContent query={query}/>
      </div>
    </div>
  );
}
