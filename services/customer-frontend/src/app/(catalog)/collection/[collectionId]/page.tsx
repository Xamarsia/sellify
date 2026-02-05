import "server-only";

import { notFound } from "next/navigation";

import { Collection } from "@sellify/customer-ui-components/types";
import Banner from "@sellify/customer-ui-components/banners/Banner";

import { getCollectionById } from "actions/collection-actions";
import BreadcrumbsProvider from "providers/BreadcrumbsProvider";
import CollectionProductsPageContent from "components/pages-content/CollectionProductsPageContent";

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
      <Banner banner={collection.banner} />
      <div className="flex grow w-full justify-center relative shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-6">
          <BreadcrumbsProvider>
            <CollectionProductsPageContent collectionTitle={collection.title} />
          </BreadcrumbsProvider>
        </div>
      </div>
    </>
  );
}
