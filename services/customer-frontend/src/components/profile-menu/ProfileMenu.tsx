"use client";

import { usePathname } from "next/navigation";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

import { ProfileMenuItems } from "../../constants";

export default function ProfileMenu() {
  const pathname: string = usePathname();

  return <SideMenu items={ProfileMenuItems} pathname={pathname} />;
}
