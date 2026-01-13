"use client";

import { useCallback, useContext } from "react";

import UserIcon from "@sellify/common-icons/user";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";
import Bars3Icon from "@sellify/common-icons/bars-3";

import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import { NavMenuItem } from "@sellify/common-ui-components/types";

import HeaderItem from "@sellify/customer-ui-components/header/HeaderItem";

import { CartPanelContext } from "common/contexts/cart-context";
import { SearchPanelContext } from "common/contexts/search-context";
import { NavbarDrawerContext } from "common/contexts/common-context";
import {
  CartPanelController,
  NavbarDrawerController,
  SearchPanelController,
} from "types";
import { usePathname } from "next/navigation";

export default function Header() {
  const { openCartPanel } = useContext<CartPanelController>(CartPanelContext);
  const { openSearchPanel } =
    useContext<SearchPanelController>(SearchPanelContext);
  const { openNavbarDrawer } =
    useContext<NavbarDrawerController>(NavbarDrawerContext);
  const pathname: string = usePathname();

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
      className="fixed top-0 shrink-0 flex items-center justify-between 
      w-full border-y bg-white border-stroke h-20 z-20 px-8 xl:px-12"
    >
      <p className="body not-md:order-2">LOGO</p>

      <div className="md:hidden not-md:order-1">
        <TransparentIconButton onClick={openDrawer}>
          <Bars3Icon style="size-8" />
        </TransparentIconButton>
      </div>

      <nav className="flex gap-9 not-md:hidden">
        {menuItem.map(({ href, title }, index) => {
          return (
            <HeaderItem
              key={`NavMenuItem-${index}`}
              text={title}
              href={href}
              selected={href === pathname}
            />
          );
        })}
      </nav>

      <div className="flex gap-4 not-md:order-3">
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
