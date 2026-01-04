"use client";

import { useMemo } from "react";

import { usePathname } from "next/navigation";

export default function PageTitle() {
  const pathname: string = usePathname();

  const currentTitle = useMemo<string | undefined>(() => {
    switch (pathname) {
      case "/home":
        return "Home";
      case "/orders":
        return "Orders";
      case "/products":
        return "Products";
      case "/categories":
        return "Categories";
      case "/inventory":
        return "Inventory";
      case "/customers":
        return "Customers";
      case "/roles":
        return "Roles";
      case "/admins":
        return "Admins";
      case "/security":
        return "Security";
    }
  }, [pathname]);

  return <h1 className="py-4">{currentTitle}</h1>;
}
