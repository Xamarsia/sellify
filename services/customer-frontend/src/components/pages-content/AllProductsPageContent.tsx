"use client";

import { useContext, useEffect, useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";

import ProductFeedContent from "components/ProductFeedContent";
import { BreadcrumbsContext } from "common/contexts/common-context";
import { BreadcrumbsController } from "types";

export default function AllProductsPageContent() {
  const { setNavItem } = useContext<BreadcrumbsController>(BreadcrumbsContext);

  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/all-products/", title: "All Products" },
    ];
    return crumbs;
  }, []);

  useEffect(() => {
    setNavItem(breadcrumbs);
  }, [breadcrumbs]);

  return (
    <>
      <h1 className="pb-3">{"Shop all"}</h1>
      <ProductFeedContent />
    </>
  );
}
