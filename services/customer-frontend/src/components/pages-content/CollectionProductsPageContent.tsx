"use client";

import { useMemo } from "react";

import ProductFeedContent from "components/ProductFeedContent";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

import { Collection } from "@sellify/customer-ui-components/types";
import CollectionBanner from "@sellify/customer-ui-components/collection/CollectionBanner";

type Props = {
  collection: Collection;
  collectionTitle: string;
};

export default function CollectionProductsPageContent({
  collection,
  collectionTitle,
}: Props) {
  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/collection/", title: "Collections" },
      { href: `/collection/${collectionTitle}`, title: `${collectionTitle}` },
    ];
    return crumbs;
  }, [collectionTitle]);

  return (
    <>
      <CollectionBanner collection={collection} />
      <div className="flex grow w-full justify-center relative flex-shrink-0 mt-12 px-8 pb-16 max-w-7xl">
        <div className="flex w-full flex-col gap-6">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="pb-3">{collectionTitle}</h1>
          <ProductFeedContent productLabel={collectionTitle} />
        </div>
      </div>
    </>
  );
}
