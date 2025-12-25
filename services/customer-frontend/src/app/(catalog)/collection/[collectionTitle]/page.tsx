import "server-only";

import { notFound } from "next/navigation";

import { Collection } from "@sellify/customer-ui-components/types";
import CollectionBanner from "@sellify/customer-ui-components/collection/CollectionBanner";

import { getCollection, isCollectionFound } from "common/actions/collection-actions";
import ProductFeedContent from "components/ProductFeedContent";


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
    <>
      {collection && <CollectionBanner collection={collection} />}
      <div className="flex grow w-full justify-center relative flex-shrink-0 mt-20 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-9 ">
          <h1>{collectionTitle}</h1>
          <ProductFeedContent productLabel={collectionTitle} />
        </div>
      </div>
    </>
  );
}
