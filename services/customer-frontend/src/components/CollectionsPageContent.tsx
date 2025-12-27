"use client";

import { useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

import { CollectionPreview } from "@sellify/customer-ui-components/types";
import CollectionCard from "@sellify/customer-ui-components/collection/CollectionCard";

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
    <div className="flex w-full flex-col gap-9 ">
      <div className="flex w-full flex-col gap-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1>{"All Collection"}</h1>
      </div>

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:grid-cols-4">
        {collections.map((preview, index) => (
          <li key={preview.title.toString() + index}>
            <CollectionCard href="/" collectionPreview={preview} />
          </li>
        ))}
      </ul>
    </div>
  );
}
