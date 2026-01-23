"use client";

import { useContext, useEffect, useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";

import { Collection } from "@sellify/customer-ui-components/types";

import ProductFeedContent from "components/ProductFeedContent";
import { BreadcrumbsContext } from "contexts/common-context";
import { BreadcrumbsController } from "types";

type Props = {
  collection: Collection;
  collectionTitle: string;
};

export default function CollectionProductsPageContent({
  collectionTitle,
}: Props) {
  const { setNavItem } = useContext<BreadcrumbsController>(BreadcrumbsContext);

  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/collections/", title: "Collections" },
      { href: `/collections/${collectionTitle}`, title: `${collectionTitle}` },
    ];
    return crumbs;
  }, [collectionTitle]);

  useEffect(() => {
    setNavItem(breadcrumbs);
  }, [breadcrumbs]);

  return (
    <>
      <h1 className="pb-3">{collectionTitle}</h1>
      <ProductFeedContent productLabel={collectionTitle} />
    </>
  );
}
