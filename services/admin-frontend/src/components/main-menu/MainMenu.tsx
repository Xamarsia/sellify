"use client";

import { usePathname } from "next/navigation";

import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

import { MainMenuItems } from "../../constants";

export default function MainMenu() {
  const pathname: string = usePathname();

  return <Sidebar items={MainMenuItems} pathname={pathname} />;
}
