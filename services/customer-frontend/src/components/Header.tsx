"use client";

import { useContext } from "react";

import UserIcon from "@sellify/common-icons/user";
import HeartIcon from "@sellify/common-icons/heart";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

import { CartPanelContext } from "common/contexts/cart-context";
import { SearchPanelContext } from "common/contexts/search-context";
import { CartContext, SearchContext } from "types";

export default function Header() {
  const { openCartPanel } = useContext<CartContext>(CartPanelContext);
  const { openSearchPanel } = useContext<SearchContext>(SearchPanelContext);

  return (
    <header
      className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-stroke h-20 z-20 px-8 xl:px-12"
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
        <TransparentIconButton onClick={openCartPanel}>
          <ShoppingBagIcon />
        </TransparentIconButton>
      </div>
    </header>
  );
}
