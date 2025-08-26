import UserIcon from "@sellify/common-icons/user";
import HeartIcon from "@sellify/common-icons/heart";
import ShoppingBagIcon from "@sellify/common-icons/shopping-bag";
import MagnifyingGlassIcon from "@sellify/common-icons/magnifying-glass";

import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";

export default function Header() {
  return (
    <header
      className="fixed top-0 flex-shrink-0 flex items-center justify-between w-full 
            border-y bg-white border-stroke h-[72px] z-10 px-12"
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
        <TransparentIconButton>
          <ShoppingBagIcon />
        </TransparentIconButton>
      </div>
    </header>
  );
}
