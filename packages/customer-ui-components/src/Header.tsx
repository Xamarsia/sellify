"use client";

import { useCallback, useState } from "react";

import UserIcon from "@sellify/common-icons/user";
import HeartIcon from "@sellify/common-icons/heart";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import CartPanel from "./cart/CartPanel";

type HeaderProps = {
  cartItems: Array<CartItem>;
};

export default function Header({ cartItems }: HeaderProps) {
  const [cartPanelOpened, setCartPanelOpened] = useState<boolean>(false);

  const onCartPanelOpen = useCallback((): void => {
    setCartPanelOpened(true);
  }, []);

  const onCartPanelClose = useCallback((): void => {
    setCartPanelOpened(false);
  }, []);

  //TODO Implement onRemoveCartItem
  const onRemoveCartItem = useCallback(
    (productPreviewId: number): void => {},
    [],
  );

  return (
    <header
      className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-stroke h-20 z-20 px-12"
    >
      <p className="body">LOGO</p>
      <div className="flex gap-[36px] not-md:hidden">
        <LinkButton>Home</LinkButton>
        <LinkButton>New</LinkButton>
        <LinkButton>Bestsellers</LinkButton>
        <LinkButton>Gifts</LinkButton>
      </div>

      <div className="flex gap-[16px]">
        <TransparentIconButton>
          <MagnifyingGlassIcon />
        </TransparentIconButton>
        <TransparentIconButton disabled>
          <HeartIcon />
        </TransparentIconButton>
        <TransparentIconButton>
          <UserIcon />
        </TransparentIconButton>
        <TransparentIconButton onClick={onCartPanelOpen}>
          <ShoppingBagIcon />
        </TransparentIconButton>
      </div>
      <CartPanel
        dialogOpen={cartPanelOpened}
        onDialogClose={onCartPanelClose}
        onItemRemove={onRemoveCartItem}
        cartItems={cartItems}
      />
    </header>
  );
}
