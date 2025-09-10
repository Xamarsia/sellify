"use client";
import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

import { getSidebarItems } from "../../common/actions/profile-actions";
export default function EditProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems: Array<SidebarItemInfo> = getSidebarItems();

  return (
    <div className="flex w-full flex-col gap-9 ">
      <h1>{sidebarItems[0]?.title}</h1>
      <div className="relative flex grow w-full max-w-7xl gap-8">
        <section className="w-60 hidden md:flex">
          <Sidebar items={sidebarItems} pathname="/" />
        </section>
        <section className="flex w-full">{children}</section>
      </div>
    </div>
  );
}
