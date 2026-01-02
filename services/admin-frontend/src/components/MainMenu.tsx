"use client";

import { useMemo } from "react";

import { usePathname } from "next/navigation";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

export default function MainMenu() {
  const pathname: string = usePathname();

  const sidebarItems = useMemo<Array<NavMenuItem>>(() => {
    return [
      { href: "/home", title: "Home" },
      { href: "/orders", title: "Orders" },
      { href: "/products", title: "Products" },
      { href: "/category", title: "Category" },
      { href: "/inventory", title: "Inventory" },
      { href: "/customers", title: "Customers" },
      { href: "/admins", title: "Admins" },
      { href: "/roles", title: "Roles" },
      { href: "/settings", title: "Settings" },
    ];
  }, [pathname]);

  return <Sidebar items={sidebarItems} pathname={pathname} />;
}
