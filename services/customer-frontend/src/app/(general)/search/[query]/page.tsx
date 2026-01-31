import "server-only";

import SearchProductPageContent from "components/pages-content/SearchProductPageContent";

type Props = {
  params: Promise<{ query: string }>;
};

export default async function SearchProductPage({ params }: Props) {
  const query: string = (await params).query;

  return <SearchProductPageContent query={query} />;
}
