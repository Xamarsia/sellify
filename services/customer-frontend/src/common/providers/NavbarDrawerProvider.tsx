"use client";

import { ReactNode, useCallback, useState } from "react";

import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";
import SidePanel from "@sellify/customer-ui-components/SidePanel";

import { NavbarDrawerContext } from "common/contexts/common-context";
import { usePathname } from "next/navigation";
import { NavbarDrawerController } from "types";
import { NavMenuItem } from "@sellify/common-ui-components/types";

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
    openNavbarDrawer: (navbarDrawerController) => {
      setNavbarDrawerOpened(true);
      setSidebarItems(navbarDrawerController);
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
