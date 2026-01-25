import "server-only";

import { notFound } from "next/navigation";

import { Collection } from "@sellify/customer-ui-components/types";

import { getCollectionById } from "actions/collection-actions";
import CollectionProductsPageContent from "components/pages-content/CollectionProductsPageContent";
import CollectionBanner from "@sellify/customer-ui-components/collection/CollectionBanner";
import BreadcrumbsProvider from "providers/BreadcrumbsProvider";

type Props = {
  params: Promise<{ collectionId: number }>;
};

export default async function CollectionProductsPage({ params }: Props) {
  const collectionId: number = (await params).collectionId;
  const collection: Collection = getCollectionById(collectionId);

  if (!collection) {
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
              collectionTitle={collection.title}
            />
          </BreadcrumbsProvider>
        </div>
      </div>
    </>
  );
}
