"use client";

import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";
import { SidebarItemInfo } from "@sellify/common-ui-components/types";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname: string = usePathname();
    const sidebarItems: Array<SidebarItemInfo> = [
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
        <div className="flex w-full flex-col gap-9 ">
            <h1>{currentTitle}</h1>
            <div className="relative flex grow w-full max-w-7xl gap-12">
                <section className="w-72 hidden xl:flex">
                    <Sidebar items={sidebarItems} pathname={pathname} />
                </section>
                <section className="flex w-full">{children}</section>
            </div>
        </div>
    );
}
