import "server-only";

import { notFound } from "next/navigation";

import { Collection } from "@sellify/customer-ui-components/types";

import { getCollection, isCollectionFound } from "common/actions/collection-actions";
import CollectionProductsPageContent from "components/pages-content/CollectionProductsPageContent";

type Props = {
  params: Promise<{ collectionTitle: string }>;
};

export default async function CollectionProductsPage({ params }: Props) {
  const collectionTitle: string = (await params).collectionTitle;
  const collection: Collection = getCollection(collectionTitle);

  if (!isCollectionFound(collectionTitle)) {
    notFound();
  }

  return (
    <CollectionProductsPageContent collection={collection} collectionTitle={collectionTitle} />
  );
}
