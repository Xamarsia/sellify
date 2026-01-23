"use client";

import { ReactNode, useCallback, useState } from "react";

import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";
import SidePanel from "@sellify/common-ui-components/SidePanel";
import { NavMenuItem } from "@sellify/common-ui-components/types";

import { NavbarDrawerContext } from "contexts/common-context";
import { usePathname } from "next/navigation";
import { NavbarDrawerController } from "types";

export default function NavbarDrawerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [navbarDrawerOpened, setNavbarDrawerOpened] = useState<boolean>(false);
  const [sidebarItems, setSidebarItems] = useState<Array<NavMenuItem>>();
  const pathname: string = usePathname();

  const onNavbarDrawerClose = useCallback((): void => {
    setNavbarDrawerOpened(false);
  }, []);

  const contextValue: NavbarDrawerController = {
    openNavbarDrawer: (navItems) => {
      setNavbarDrawerOpened(true);
      setSidebarItems(navItems);
    },
  };

  return (
    <NavbarDrawerContext.Provider value={contextValue}>
      {sidebarItems && (
        <SidePanel
          open={navbarDrawerOpened}
          onClose={onNavbarDrawerClose}
          title="Brand Title"
          side="left"
        >
          <Sidebar items={sidebarItems} pathname={pathname} />
        </SidePanel>
      )}
      {children}
    </NavbarDrawerContext.Provider>
  );
}
