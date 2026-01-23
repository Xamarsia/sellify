import "server-only";

import { notFound } from "next/navigation";

import { Collection } from "@sellify/customer-ui-components/types";

import { getCollection, isCollectionFound } from "actions/collection-actions";
import CollectionProductsPageContent from "components/pages-content/CollectionProductsPageContent";
import CollectionBanner from "@sellify/customer-ui-components/collection/CollectionBanner";
import BreadcrumbsProvider from "providers/BreadcrumbsProvider";

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
      <CollectionBanner collection={collection} />
      <div className="flex grow w-full justify-center relative shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-6">
          <BreadcrumbsProvider>
            <CollectionProductsPageContent
              collection={collection}
              collectionTitle={collectionTitle}
            />
          </BreadcrumbsProvider>
        </div>
      </div>
    </>
  );
}
