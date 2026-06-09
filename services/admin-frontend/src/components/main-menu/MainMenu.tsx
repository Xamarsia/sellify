"use client";

import { usePathname } from "next/navigation";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

import { MAIN_MENU_ITEMS } from "../../constants";

export default function MainMenu() {
  const pathname: string = usePathname();

  return <SideMenu items={MAIN_MENU_ITEMS} pathname={pathname} />;
}
