"use client";

import { useCallback, useMemo, useState } from "react";

import Section from "./components/Section";
import SectionItem from "./components/SectionItem";

import image from "./../../resources/1/image.jpg";
import image2 from "./../../resources/1/image2.jpg";
import image3 from "./../../resources/2/image.jpg";
import image4 from "./../../resources/2/image2.jpg";
import image5 from "./../../resources/3/image.jpg";
import image6 from "./../../resources/3/image2.jpg";

import HomeIcon from "@sellify/common-icons/home";
import CreditCard from "@sellify/common-icons/credit-card";
import Clipboard from "@sellify/common-icons/clipboard";

import {
  CartItem as CartItemType,
  ProductPreview,
  ProgressItemInfo,
} from "@sellify/customer-ui-components/types";

import CartItem from "@sellify/customer-ui-components/cart/CartItem";
import CounterButton from "@sellify/customer-ui-components/CounterButton";
import OrderSubtotal from "@sellify/customer-ui-components/OrderSubtotal";
import ProductPreviewFeed from "@sellify/customer-ui-components/product-preview/ProductPreviewFeed";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";

export default function Home() {
  const [count, setCount] = useState<number>(1);

  const barItems: Array<ProgressItemInfo> = useMemo(() => {
    const progressBarItems: Array<ProgressItemInfo> = [
      { href: "/", title: "Delivery Info", icon: <HomeIcon /> },
      { href: "/orders", title: "Payment Method", icon: <CreditCard /> },
      { href: "/review", title: "Review", icon: <Clipboard /> },
    ];
    return progressBarItems;
  }, []);

  const productPreview: ProductPreview = {
    image: image.src,
    hoveredImage: image2.src,
    price: 443,
    productId: 5447,
    title: "Product Title",
  };

  const productPreview2: ProductPreview = {
    image: image3.src,
    hoveredImage: image4.src,
    price: 443,
    productId: 5447,
    title:
      "Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title | Long Product Title",
  };

  const productPreview3: ProductPreview = {
    image: image5.src,
    hoveredImage: image6.src,
    price: 443,
    productId: 5447,
    title:
      "LongUnbreakableProductTitleWord|LongUnbreakableProductTitleWordLongUnbreakableProductTitleWord",
  };

  const cartItem: CartItemType = {
    amount: 1,
    product: productPreview2,
    cartItemId: 0
  };

  const handleAddToCartClick = useCallback(
    (productPreview: ProductPreview): void => {
      console.log("ProductPreviewId: " + productPreview);
    },
    [],
  );

  const handleRemoveFromCartClick = useCallback(
    (productPreviewId: number): void => {
      console.log("ProductPreviewId: " + productPreviewId);
    },
    [],
  );

  return (
    <div className="min-h-full">
      <header className="flex items-center h-32 bg-[#242424] px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl">Customer UI Components</h1>
      </header>
      <main className="flex flex-col w-full ">
        <Section title={"Add Amount Button"}>
          <SectionItem>
            <CounterButton
              count={count}
              onCountChange={setCount}
              min={1}
              max={10}
            />
            <CounterButton
              count={count}
              onCountChange={setCount}
              min={1}
              max={10}
              disabled
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Progress Bar"}>
          <SectionItem>
            <ProgressBar barItems={barItems} currentPathname={"/"} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Cart Item"}>
          <SectionItem>
            <CartItem
              cartItem={cartItem}
              onItemRemove={handleRemoveFromCartClick}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Product Preview Feed"}>
          <SectionItem>
            <ProductPreviewFeed
              onProductAddedToCart={handleAddToCartClick}
              previews={[
                productPreview,
                productPreview2,
                productPreview3,
                productPreview,
                productPreview2,
                productPreview3,
              ]}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Order Subtotal Card"}>
          <SectionItem>
            <OrderSubtotal totalPrice={345} deliveryCharge={5} />
          </SectionItem>
        </Section>
      </main>
    </div>
  );
}
