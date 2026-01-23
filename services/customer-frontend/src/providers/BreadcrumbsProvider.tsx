"use client";

import { ReactNode, useState } from "react";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";

import { BreadcrumbsContext } from "contexts/common-context";
import { BreadcrumbsController } from "types";

export default function BreadcrumbsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<NavMenuItem>>();

  const contextValue: BreadcrumbsController = {
    setNavItem: (navItems) => {
      setBreadcrumbs(navItems);
    },
  };

  return (
    <BreadcrumbsContext.Provider value={contextValue}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {children}
    </BreadcrumbsContext.Provider>
  );
}
