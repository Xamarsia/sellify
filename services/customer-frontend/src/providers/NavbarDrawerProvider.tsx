"use client";

import { ReactNode, useCallback, useState } from "react";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";
import SidePanel from "@sellify/common-ui-components/SidePanel";
import { NavMenuItem } from "@sellify/common-ui-components/types";
import { SIDE_PANEL_PLACEMENT } from "@sellify/common-ui-components/constants";

import { NavbarDrawerContext } from "contexts/common-context";
import { usePathname } from "next/navigation";
import { NavbarDrawerController } from "types";

export default function NavbarDrawerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [navbarDrawerOpened, setNavbarDrawerOpened] = useState<boolean>(false);
  const [sideMenuItems, setSideMenuItems] = useState<Array<NavMenuItem>>();
  const pathname: string = usePathname();

  const onNavbarDrawerClose = useCallback((): void => {
    setNavbarDrawerOpened(false);
  }, []);

  const contextValue: NavbarDrawerController = {
    openNavbarDrawer: (navItems) => {
      setNavbarDrawerOpened(true);
      setSideMenuItems(navItems);
    },
  };

  return (
    <NavbarDrawerContext.Provider value={contextValue}>
      {sideMenuItems && (
        <SidePanel
          isOpen={navbarDrawerOpened}
          onClose={onNavbarDrawerClose}
          title="Brand Title"
          placement={SIDE_PANEL_PLACEMENT.LEFT}
        >
          <SideMenu items={sideMenuItems} pathname={pathname} />
        </SidePanel>
      )}
      {children}
    </NavbarDrawerContext.Provider>
  );
}
