"use client";

import { useCallback, useMemo, useState } from "react";
import { notFound } from "next/navigation";

import ChevronDown from "@sellify/common-icons/chevron-down";
import ChevronUp from "@sellify/common-icons/chevron-up";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";

type Props = {
  sidebarItems: Array<NavMenuItem>;
  pathname: string;
};

export default function ProfileDrawer({ sidebarItems, pathname }: Props) {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  const onDropdownClick = useCallback(() => {
    if (setIsExtended) {
      setIsExtended(!isExtended);
    }
  }, [isExtended, setIsExtended]);


  const selectedItem = useMemo<NavMenuItem>(() => {
   return sidebarItems.find(item => { return item.href === pathname }) ?? notFound();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        onClick={onDropdownClick}
        className={`flex w-full items-center justify-between cursor-pointer 
        bg-primary text-[#555555] hover:text-[#000000]`}
      >
        <h3>{selectedItem?.title}</h3>
        {isExtended ? (
          <ChevronUp style="size-4" />
        ) : (
          <ChevronDown style="size-4" />
        )}
      </button>

      {isExtended && <Sidebar items={sidebarItems} pathname={pathname} />}
    </div>
  );
}
