"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

import ProfileDrawer from "./ProfileDrawer";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname: string = usePathname();
  const sidebarItems: Array<NavMenuItem> = [
    { href: "/profile", title: "Profile" },
    { href: "/profile/orders", title: "Order History" },
    { href: "/profile/security", title: "Security" },
  ];

  const currentTitle = useMemo<string | undefined>(() => {
    switch (pathname) {
      case "/profile":
        return "Personal Information";
      case "/profile/orders":
        return "Orders";
      case "/profile/security":
        return "Security Settings";
    }
  }, [pathname]);

  return (
    <div className="flex w-full flex-col gap-9">
      <div className="flex w-full flex-col gap-6">
        <section className="flex w-full sm:hidden">
          <ProfileDrawer sidebarItems={sidebarItems} pathname={pathname} />
        </section>
        <h1>{currentTitle}</h1>
      </div>
      <div className="relative flex grow w-full gap-12 not-sm:flex-col max-w-7xl ">
        <section className="flex w-72 not-sm:hidden">
          <Sidebar items={sidebarItems} pathname={pathname} />
        </section>
        <section className="flex w-full">{children}</section>
      </div>
    </div>
  );
}
