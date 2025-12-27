"use client";

import { useMemo } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";

import ProductFeedContent from "components/ProductFeedContent";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

export default function AllProductsPageContent() {
  const breadcrumbs = useMemo<Array<NavMenuItem>>(() => {
    const crumbs: Array<NavMenuItem> = [
      { href: "/", title: "Home" },
      { href: "/all-products/", title: "All Products" },
    ];
    return crumbs;
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-6">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="pb-3">{"Shop all"}</h1>
        <ProductFeedContent />
      </div>
    </>
  );
}
