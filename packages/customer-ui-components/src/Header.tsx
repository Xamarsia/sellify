"use client";

import { useCallback, useContext } from "react";

import UserIcon from "@sellify/common-icons/user";
import HeartIcon from "@sellify/common-icons/heart";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

import { CartPanelContext } from "../../../services/customer-frontend/src/common/contexts/cart-context";
import { SearchPanelContext } from "../../../services/customer-frontend/src/common/contexts/search-context";

import { CartItem } from "./types";

type HeaderProps = {
  cartItems: Array<CartItem>;
};

export default function Header({ cartItems }: HeaderProps) {
  const { openCartPanel } = useContext(CartPanelContext);
  const { openSearchPanel } = useContext(SearchPanelContext);

  const onCartPanelOpen = useCallback((): void => {
    openCartPanel(cartItems);
  }, []);

  return (
    <header
      className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-stroke h-20 z-20 px-12"
    >
      <p className="body">LOGO</p>
      <div className="flex gap-[36px] not-md:hidden">
        <LinkButton href="/home">Home</LinkButton>
        <LinkButton href="/new">New</LinkButton>
        <LinkButton href="/bestsellers">Bestsellers</LinkButton>
        <LinkButton href="/gifts">Gifts</LinkButton>
      </div>

      <div className="flex gap-[16px]">
        <TransparentIconButton onClick={openSearchPanel}>
          <MagnifyingGlassIcon />
        </TransparentIconButton>
        <TransparentIconButton disabled>
          <HeartIcon />
        </TransparentIconButton>
        <a href="/profile">
          <TransparentIconButton>
            <UserIcon />
          </TransparentIconButton>
        </a>
        <TransparentIconButton onClick={onCartPanelOpen}>
          <ShoppingBagIcon />
        </TransparentIconButton>
      </div>
    </header>
  );
}
