"use client";

import { usePathname } from "next/navigation";

import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

import { ProfileMenuItems } from "../constants";

export default function ProfileMenu() {
  const pathname: string = usePathname();

  return <Sidebar items={ProfileMenuItems} pathname={pathname} />;
}
