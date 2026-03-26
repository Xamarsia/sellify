"use client";

import { useCallback, useMemo, useState } from "react";

import Section from "@sellify/example-ui-components/Section";
import SectionItem from "@sellify/example-ui-components/SectionItem";
import Header from "@sellify/example-ui-components/Header";
import MainLayout from "@sellify/example-ui-components/MainLayout";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";
import image3 from "resources/2/image.jpg";
import image4 from "resources/2/image2.jpg";
import image5 from "resources/3/image.jpg";
import image6 from "resources/3/image2.jpg";

import HomeIcon from "@sellify/common-icons/home";
import CreditCardIcon from "@sellify/common-icons/credit-card";
import ClipboardIcon from "@sellify/common-icons/clipboard";

import {
  Banner,
  CartItem as CartItemType,
  CollectionPreview,
  NavigationLink,
  OrderPreview,
  ProductPreview,
  ProgressStepInfo,
  SearchItem as SearchItemType,
} from "@sellify/customer-ui-components/types";

import BannerComponent from "@sellify/customer-ui-components/banners/Banner";
import CartItem from "@sellify/customer-ui-components/cart/CartItem";
import CartPanel from "@sellify/customer-ui-components/cart/CartPanel";
import CheckoutProductsView from "@sellify/customer-ui-components/data-view/CheckoutProductsView";
import CollectionCardsFeed from "@sellify/customer-ui-components/collection/CollectionCardsFeed";
import ContentSection from "@sellify/customer-ui-components/ContentSection";
import CounterButton from "@sellify/customer-ui-components/CounterButton";
import FinalProductsView from "@sellify/customer-ui-components/data-view/FinalProductsView";
import Footer from "@sellify/customer-ui-components/footer/Footer";
import OrdersView from "@sellify/customer-ui-components/data-view/OrdersView";
import ProductAddedDialog from "@sellify/customer-ui-components/cart/dialog/ProductAddedDialog";
import ProductPreviewFeed from "@sellify/customer-ui-components/product-preview/ProductPreviewFeed";
import ProgressBar from "@sellify/customer-ui-components/progress/ProgressBar";
import SearchItem from "@sellify/customer-ui-components/search/SearchItem";
import SearchPanel from "@sellify/customer-ui-components/search/SearchPanel";
import SettingsSection from "@sellify/customer-ui-components/SettingsSection";
import Button from "@sellify/common-ui-components/buttons/Button";
import { OrderStatus } from "@sellify/common-ui-components/constants";

export default function Home() {
  const [count, setCount] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCartPanelOpen, setIsCartPanelOpen] = useState<boolean>(false);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [searchQuery] = useState<string>("");

  const barItems = useMemo<Array<ProgressStepInfo>>(() => {
    const progressBarItems: Array<ProgressStepInfo> = [
      { step: 0, title: "Delivery Info", icon: <HomeIcon /> },
      { step: 1, title: "Payment Method", icon: <CreditCardIcon /> },
      { step: 2, title: "Review", icon: <ClipboardIcon /> },
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
    cartItemId: 0,
  };

  const cartItems: Array<CartItemType> = [
    cartItem,
    { amount: 2, product: productPreview, cartItemId: 1 },
    { amount: 3, product: productPreview3, cartItemId: 2 },
  ];

  const banner: Banner = {
    image: image5.src,
    title: "Summer Collection",
    description:
      "Discover our latest summer arrivals with exclusive discounts.",
  };

  const orderPreviews: Array<OrderPreview> = [
    {
      orderId: 1001,
      date: "2026-03-20",
      total: 452.99,
      status: OrderStatus.New,
    },
    {
      orderId: 1002,
      date: "2026-03-15",
      total: 129.5,
      status: OrderStatus.InProgress,
    },
    {
      orderId: 1003,
      date: "2026-03-10",
      total: 89.0,
      status: OrderStatus.Shipped,
    },
    {
      orderId: 1004,
      date: "2026-02-28",
      total: 320.0,
      status: OrderStatus.Canceled,
    },
  ];

  const popularQuickLinks: Array<NavigationLink> = [
    { href: "/collections/new", title: "New Arrivals" },
    { href: "/collections/sale", title: "Sale" },
    { href: "/collections/bestsellers", title: "Bestsellers" },
  ];

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

  const handleGetProductMaxQuantity = useCallback((): number => 10, []);

  const handleCartItemQuantityChanged = useCallback(
    (cartItemId: number, quantity: number): void => {
      console.log(`Cart item ${cartItemId} quantity changed to ${quantity}`);
    },
    [],
  );

  const searchItems = useMemo<Array<SearchItemType>>(() => {
    const searchItems: Array<SearchItemType> = [
      { productId: 1, image: image.src, title: "Search Result 1" },
      { productId: 2, image: image3.src, title: "Search Result 2" },
      { productId: 3, image: image5.src, title: "Search Result 3" },
    ];
    return searchItems;
  }, []);

  const handleSearchQueryChange = useCallback(
    (): Array<SearchItemType> => searchItems,
    [searchItems],
  );

  const collectionPreviews: Array<CollectionPreview> = [
    {
      id: 34534,
      image: image.src,
      title: "Collection Card",
    },
    {
      id: 245,
      image: image2.src,
      title:
        "Collection Card Collection Card Collection Card Collection Card CollectionCardCollectionCardCollectionCard",
    },
    {
      id: 789,
      image: image3.src,
      title: "Collection Card Collection Card Collection Card",
    },
    {
      id: 22,
      image: image4.src,
      title: "CollectionCardCollectionCardCollectionCardCollectionCard",
    },
  ];

  return (
    <>
      <Header title="Customer UI Components" />
      <MainLayout>
        <Section title={"Counter Button"}>
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
            <ProgressBar
              steps={barItems}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />
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

        <Section title={"Search Item"}>
          <SectionItem>
            {searchItems.map((item, index) => (
              <SearchItem
                key={item.productId + "-" + index}
                searchItem={item}
              />
            ))}
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Cart Panel"}>
          <SectionItem>
            <Button onClick={() => setIsCartPanelOpen(true)}>
              Open Cart Panel
            </Button>
            <CartPanel
              open={isCartPanelOpen}
              cartItems={cartItems}
              onClose={() => setIsCartPanelOpen(false)}
              onCartItemRemove={handleRemoveFromCartClick}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Search Panel"}>
          <SectionItem>
            <Button onClick={() => setIsSearchPanelOpen(true)}>
              Open Search Panel
            </Button>
            <SearchPanel
              query={searchQuery}
              isOpen={isSearchPanelOpen}
              onClose={() => setIsSearchPanelOpen(false)}
              onQueryChange={handleSearchQueryChange}
              onSearch={() => console.log("Search submitted")}
              popularQuickLinks={popularQuickLinks}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Product Added Dialog"}>
          <SectionItem>
            <Button onClick={() => setIsDialogOpen(true)}>
              Open Product Added Dialog
            </Button>
            <ProductAddedDialog
              dialogOpen={isDialogOpen}
              cartItem={cartItem}
              onDialogClose={() => setIsDialogOpen(false)}
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

        <Section title={"Collection Cards Feed"}>
          <SectionItem>
            <CollectionCardsFeed collections={collectionPreviews} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Banner"}>
          <SectionItem>
            <BannerComponent banner={banner} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Content Section"}>
          <SectionItem title="Default">
            <ContentSection title="Section Title" image={image.src}>
              <p>
                Section Content. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam finibus, massa venenatis ornare aliquam,
                urna enim interdum nibh, non fermentum magna odio eget odio.
                Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique
                risus. Nam faucibus imperdiet ante ut laoreet.{" "}
              </p>
            </ContentSection>
          </SectionItem>
          <SectionItem title="With Image Left">
            <ContentSection
              title="Section Title"
              image={image3.src}
              imageSide="left"
            >
              <p>
                Section Content. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam finibus, massa venenatis ornare aliquam,
                urna enim interdum nibh, non fermentum magna odio eget odio.
                Vivamus a egestas nulla. Donec ac ornare nunc, ut tristique
                risus. Nam faucibus imperdiet ante ut laoreet.{" "}
              </p>
            </ContentSection>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Settings Section"}>
          <SectionItem>
            <SettingsSection
              title="Title"
              description="Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
              <button className="px-4 py-2 border border-stroke rounded-md">
                Action Button
              </button>
            </SettingsSection>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Adaptive Data View"}>
          <SectionItem title="Orders View">
            <OrdersView content={orderPreviews} />
          </SectionItem>

          <SectionItem title="Checkout Products View">
            <CheckoutProductsView
              content={cartItems}
              onItemRemove={handleRemoveFromCartClick}
              getProductMaxQuantity={handleGetProductMaxQuantity}
              onCartItemQuantityChanged={handleCartItemQuantityChanged}
            />
          </SectionItem>

          <SectionItem title="Final Products View">
            <FinalProductsView content={cartItems} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Footer"}>
          <SectionItem>
            <Footer
              copyright="2026 Sellify. All rights reserved."
              onSubscribe={(email) => console.log("Footer subscribe:", email)}
            />
          </SectionItem>
        </Section>
      </MainLayout>
    </>
  );
}
