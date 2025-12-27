"use client";

import { useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

import { CollectionPreview } from "@sellify/customer-ui-components/types";
import CollectionCardsFeed from "@sellify/customer-ui-components/collection/CollectionCardsFeed";

type Props = {
  collections: Array<CollectionPreview>;
};

export default function CollectionsPageContent({ collections }: Props) {
  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/collection/", title: "Collections" },
    ];
    return crumbs;
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 ">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="pb-3">{"All Collection"}</h1>

      <CollectionCardsFeed collections={collections} />
    </div>
  );
}
