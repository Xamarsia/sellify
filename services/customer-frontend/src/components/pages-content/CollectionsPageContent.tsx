"use client";

import { useContext, useEffect, useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";

import { CollectionPreview } from "@sellify/customer-ui-components/types";
import CollectionCardsFeed from "@sellify/customer-ui-components/collection/CollectionCardsFeed";

import { BreadcrumbsController } from "types";
import { BreadcrumbsContext } from "contexts/common-context";

type Props = {
  collections: Array<CollectionPreview>;
};

export default function CollectionsPageContent({ collections }: Props) {
  const { setNavItem } = useContext<BreadcrumbsController>(BreadcrumbsContext);

  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/collections/", title: "Collections" },
    ];
    return crumbs;
  }, []);

  useEffect(() => {
    setNavItem(breadcrumbs);
  }, [breadcrumbs]);

  return (
    <>
      <h1 className="pb-3">{"All Collection"}</h1>
      <CollectionCardsFeed collections={collections} />
    </>
  );
}
