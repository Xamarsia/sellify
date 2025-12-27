"use client";

import { useCallback, useContext } from "react";

import UserIcon from "@sellify/common-icons/user";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";
import Bars3Icon from "@sellify/common-icons/bars-3";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import { NavMenuItem } from "@sellify/common-ui-components/types";

import { CartPanelContext } from "common/contexts/cart-context";
import { SearchPanelContext } from "common/contexts/search-context";
import { CartPanelController, NavbarDrawerController, SearchPanelController } from "types";
import { NavbarDrawerContext } from "common/contexts/common-context";

export default function Header() {
  const { openCartPanel } = useContext<CartPanelController>(CartPanelContext);
  const { openSearchPanel } = useContext<SearchPanelController>(SearchPanelContext);
  const { openNavbarDrawer } = useContext<NavbarDrawerController>(NavbarDrawerContext);

  const menuItem: Array<NavMenuItem> = [
    { href: "/all-products", title: "All Products" },
    { href: "/collections", title: "Collections" },
    { href: "/collection/bestsellers", title: "Bestsellers" },
    { href: "/collection/gifts", title: "Gifts" },
  ];

  const openDrawer = useCallback((): void => {
    openNavbarDrawer(menuItem);
  }, [openNavbarDrawer]);

  return (
    <header
      className="fixed top-0 flex-shrink-0 flex items-center justify-between 
      w-full border-y bg-white border-stroke h-20 z-20 px-8 xl:px-12"
    >
      <p className="body not-md:order-2">LOGO</p>

      <div className="md:hidden not-md:order-1">
        <TransparentIconButton onClick={openDrawer}>
          <Bars3Icon style="size-8" />
        </TransparentIconButton>
      </div>

      <nav className="flex gap-[36px] not-md:hidden">
        {menuItem.map(({ href, title }, index) => {
          return (
            <LinkButton key={`NavMenuItem-${index}`} href={href}>
              {title}
            </LinkButton>
          );
        })}
      </nav>

      <div className="flex gap-[16px] not-md:order-3">
        <TransparentIconButton onClick={openSearchPanel}>
          <MagnifyingGlassIcon />
        </TransparentIconButton>
        <a href="/profile">
          <TransparentIconButton>
            <UserIcon />
          </TransparentIconButton>
        </a>
        <TransparentIconButton onClick={openCartPanel}>
          <ShoppingBagIcon />
        </TransparentIconButton>
      </div>
    </header>
  );
}
