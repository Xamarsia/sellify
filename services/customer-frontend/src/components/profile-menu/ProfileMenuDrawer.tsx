"use client";

import { useCallback, useMemo, useState } from "react";
import { notFound, usePathname } from "next/navigation";

import ChevronDown from "@sellify/common-icons/chevron-down";
import ChevronUp from "@sellify/common-icons/chevron-up";

import { NavMenuItem } from "@sellify/common-ui-components/types";
import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

import { ProfileMenuItems } from "../../constants";

export default function ProfileMenuDrawer() {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const pathname: string = usePathname();

  const onDropdownClick = useCallback(() => {
    if (setIsExtended) {
      setIsExtended(!isExtended);
    }
  }, [isExtended, setIsExtended]);

  const selectedItem = useMemo<NavMenuItem>(() => {
    return (
      ProfileMenuItems.find((item) => {
        return item.href === pathname;
      }) ?? notFound()
    );
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        onClick={onDropdownClick}
        className={`flex w-full items-center justify-between cursor-pointer 
        bg-white text-secondary hover:text-black`}
      >
        <h3>{selectedItem?.title}</h3>
        {isExtended ? (
          <ChevronUp style="size-4" />
        ) : (
          <ChevronDown style="size-4" />
        )}
      </button>

      {isExtended && <SideMenu items={ProfileMenuItems} pathname={pathname} />}
    </div>
  );
}
