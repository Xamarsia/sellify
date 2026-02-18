"use client";

import { useCallback, useMemo, useState } from "react";
import { notFound, usePathname } from "next/navigation";

import ChevronDownIcon from "@sellify/common-icons/chevron-down";
import ChevronUpIcon from "@sellify/common-icons/chevron-up";
import { Size } from "@sellify/common-icons/enums";
import { NavMenuItem } from "@sellify/common-ui-components/types";

import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";

import { MainMenuItems } from "../../constants";

export default function MainMenuDrawer() {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  const pathname: string = usePathname();

  const onDropdownClick = useCallback(() => {
    if (setIsExtended) {
      setIsExtended(!isExtended);
    }
  }, [isExtended, setIsExtended]);

  const selectedItem = useMemo<NavMenuItem>(() => {
    return (
      MainMenuItems.find((item) => {
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
          <ChevronUpIcon size={Size.sm} />
        ) : (
          <ChevronDownIcon size={Size.sm} />
        )}
      </button>

      {isExtended && <SideMenu items={MainMenuItems} pathname={pathname} />}
    </div>
  );
}
