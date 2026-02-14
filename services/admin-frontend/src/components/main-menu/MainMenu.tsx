"use client";

import { usePathname } from "next/navigation";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

import { MainMenuItems } from "../../constants";

export default function MainMenu() {
  const pathname: string = usePathname();

  return <SideMenu items={MainMenuItems} pathname={pathname} />;
}
