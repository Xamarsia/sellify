"use client";

import { usePathname } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

import Section from "@sellify/example-ui-components/Section";
import SectionItem from "@sellify/example-ui-components/SectionItem";
import Header from "@sellify/example-ui-components/Header";
import MainLayout from "@sellify/example-ui-components/MainLayout";

import PlusIcon from "@sellify/common-icons/plus";
import { Size } from "@sellify/common-icons/enums";

import {
  NavMenuItem,
  SliderRange,
  TabItemInfo,
} from "@sellify/common-ui-components/types";

import image from "resources/1/image.jpg";
import image2 from "resources/1/image2.jpg";
import image3 from "resources/2/image.jpg";
import image4 from "resources/2/image2.jpg";
import image5 from "resources/3/image.jpg";
import image6 from "resources/3/image2.jpg";

import Button from "@sellify/common-ui-components/buttons/Button";
import IconButton from "@sellify/common-ui-components/buttons/IconButton";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import Input from "@sellify/common-ui-components/input/Input";
import MediaInput from "@sellify/common-ui-components/input/media-input/MediaInput";
import Radio from "@sellify/common-ui-components/input/Radio";
import Textarea from "@sellify/common-ui-components/input/Textarea";
import SideMenu from "@sellify/common-ui-components/side-menu/SideMenu";
import Tabs from "@sellify/common-ui-components/tabs/Tabs";
import OrderSubtotal from "@sellify/common-ui-components/OrderSubtotal";
import CollapsiblePanel from "@sellify/common-ui-components/CollapsiblePanel";
import PriceRangeSlider from "@sellify/common-ui-components/range-slider/PriceRangeSlider";
import FormItem from "@sellify/common-ui-components/FormItem";
import Breadcrumbs from "@sellify/common-ui-components/Breadcrumbs";
import FilterButton from "@sellify/common-ui-components/filter/FilterButton";
import ProductImagesSlider from "@sellify/common-ui-components/slider/ProductImagesSlider";

import AlertDialogExample from "examples/AlertDialogExample";
import ComboboxUseExample from "examples/ComboboxUseExample";
import DialogExample from "examples/DialogExample";
import DropdownUseExample from "examples/DropdownUseExample";
import MultiSelectionComboboxUseExample from "examples/MultiSelectionComboboxUseExample";
import PagesExample from "examples/PagesExample";
import SearchBarExample from "examples/SearchBarExample";
import SidePanelExample from "examples/SidePanelExample";
import RiskDialogExample from "examples/RiskDialogExample";
import AdaptiveDataViewExample from "examples/AdaptiveDataViewExample";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onIsCheckedChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setIsChecked(e.target.checked);
    },
    [setIsChecked],
  );

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const value: string = e.target.value;
      setInputValue(value);
    },
    [],
  );

  const handleTextareaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      const value: string = e.target.value;
      setTextareaValue(value);
    },
    [],
  );

  const pathname: string = usePathname();

  const comboboxDefaultSelectedValues: string[] = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "cherry",
    "coconut",
    "cranberry",
  ];

  const comboboxItems = new Map<string, string>([
    ["apple", "Apple"],
    ["apricot", "Apricot"],
    ["avocado", "Avocado"],
    ["banana", "Banana"],
    ["blueberry", "Blueberry"],
    ["cherry", "Cherry"],
    ["coconut", "Coconut"],
    ["cranberry", "Cranberry"],
    ["fig", "Fig"],
    ["grape", "Grape"],
    ["grapefruit", "Grapefruit"],
    ["guava", "Guava"],
  ]);

  const sideMenuItems: Array<NavMenuItem> = [
    { href: "/", title: "Home" },
    { href: "/orders", title: "Orders" },
    { href: "/products", title: "Products" },
    { href: "/category", title: "Category" },
  ];

  const tabs: Array<TabItemInfo> = [
    {
      href: "/",
      title: "Home",
      content: <p>Here we show information about the client.</p>,
    },
    {
      href: "/description",
      title: "Description",
      content: <p>Here we show description.</p>,
    },
    {
      href: "/info",
      title: "Additional Information",
      content: <p>Here we show additional information.</p>,
    },
  ];

  const range: SliderRange = {
    min: 200,
    max: 1000,
  };

  return (
    <>
      <Header title="Common UI Components" />
      <MainLayout>
        <Section title={"Price Range Slider"}>
          <SectionItem>
            <PriceRangeSlider range={range} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Button"}>
          <SectionItem>
            <Button>
              Default Button <PlusIcon size={Size.lg} />
            </Button>
            <Button size="small">
              Small Default Button <PlusIcon size={Size.lg} />
            </Button>
            <Button disabled>
              Disabled Default Button <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button variant="outline">
              Outline Button <PlusIcon size={Size.lg} />
            </Button>
            <Button size="small" variant="outline">
              Small Outline Button <PlusIcon size={Size.lg} />
            </Button>
            <Button disabled variant="outline">
              Disabled Outline Button <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button variant="destructive">
              Destructive Button <PlusIcon size={Size.lg} />
            </Button>
            <Button size="small" variant="destructive">
              Small Destructive Button <PlusIcon size={Size.lg} />
            </Button>
            <Button disabled variant="destructive">
              Disabled Destructive Button <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Icon Button"}>
          <SectionItem>
            <IconButton>
              <PlusIcon size={Size.lg} />
            </IconButton>
            <IconButton disabled>
              <PlusIcon size={Size.lg} />
            </IconButton>
          </SectionItem>

          <SectionItem>
            <IconButton variant="outline">
              <PlusIcon size={Size.lg} />
            </IconButton>
            <IconButton variant="outline" disabled>
              <PlusIcon size={Size.lg} />
            </IconButton>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Link Button"}>
          <SectionItem>
            <LinkButton>Link Button</LinkButton>
            <LinkButton>
              Link Button <PlusIcon size={Size.lg} />
            </LinkButton>
            <LinkButton>
              <PlusIcon size={Size.lg} />
            </LinkButton>
            <div className="bg-black text-white">
              <LinkButton>Link Button</LinkButton>
            </div>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Transparent Icon Button"}>
          <SectionItem>
            <TransparentIconButton>
              <PlusIcon size={Size.xxl} />
            </TransparentIconButton>
            <TransparentIconButton disabled>
              <PlusIcon size={Size.xxl} />
            </TransparentIconButton>
          </SectionItem>

          <SectionItem>
            <TransparentIconButton variant="destructive">
              <PlusIcon size={Size.xxl} />
            </TransparentIconButton>
            <TransparentIconButton variant="destructive" disabled>
              <PlusIcon size={Size.xxl} />
            </TransparentIconButton>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Input"}>
          <SectionItem>
            <Input
              value={inputValue}
              placeholder="Required Input"
              required
              onChange={handleInputChange}
            />
            <Input
              value="Disabled Input"
              disabled
              onChange={handleInputChange}
            />
            <Input
              placeholder="Invalid Input"
              value="Invalid"
              state="invalid"
              onChange={handleInputChange}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Search Input"}>
          <SectionItem>
            <SearchBarExample />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Form Input Item "}>
          <SectionItem>
            <FormItem title="Required Input" required>
              <Input
                value={inputValue}
                placeholder="Required Input"
                required
                onChange={handleInputChange}
              />
            </FormItem>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Textarea"}>
          <SectionItem>
            <Textarea
              value={textareaValue}
              placeholder="Required Textarea"
              required
              onChange={handleTextareaChange}
            />
            <Textarea
              value={textareaValue}
              placeholder="Disabled Textarea"
              disabled
              onChange={handleTextareaChange}
            />
            <Textarea
              placeholder="Invalid Textarea"
              value="Invalid"
              state="invalid"
              onChange={handleTextareaChange}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Media Input Field"}>
          <SectionItem>
            <MediaInput images={images} onImagesChanged={setImages} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Checkbox & Radio buttons"}>
          <SectionItem>
            <Checkbox
              label="Default Checkbox"
              value="default"
              checked={isChecked}
              onChange={onIsCheckedChange}
            />
            <Checkbox
              label="Checked Checkbox"
              value="checked"
              checked={true}
              readOnly
            />
            <Checkbox
              label="Disabled Checkbox"
              value="disabled"
              checked={false}
              disabled
            />
            <Checkbox
              disabled
              checked
              label="Disabled Checked Checkbox"
              value="disabled-checked"
              readOnly
            />
          </SectionItem>
          <SectionItem>
            <Radio label="Default Radio" value="default" />
            <Radio checked label="Checked Radio" value="checked" readOnly />
            <Radio disabled label="Disabled Radio" value="disabled" readOnly />
            <Radio
              disabled
              checked
              readOnly
              label="Disabled Checked Radio"
              value="disabled-checked"
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"SideMenu"}>
          <SectionItem>
            <SideMenu items={sideMenuItems} pathname={pathname} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Tab"}>
          <SectionItem>
            <Tabs items={tabs} hash={""} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Dropdown"}>
          <SectionItem>
            <DropdownUseExample items={comboboxItems} title="Sort By" />
            <DropdownUseExample
              items={comboboxItems}
              title="Sort By"
              disabled
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Combobox"}>
          <SectionItem>
            <ComboboxUseExample items={comboboxItems} required />
            <ComboboxUseExample
              items={comboboxItems}
              disabled
              defaultValue="Default value"
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Multi Selection Combobox"}>
          <SectionItem>
            <MultiSelectionComboboxUseExample items={comboboxItems} required />
            <MultiSelectionComboboxUseExample
              items={comboboxItems}
              disabled
              defaultSelectedValues={comboboxDefaultSelectedValues}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Breadcrumbs"}>
          <SectionItem>
            <Breadcrumbs
              items={[
                { href: "/", title: "Home" },
                { href: "/", title: "Products" },
                { href: "/", title: "Product title" },
              ]}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Side Panel"}>
          <SectionItem>
            <SidePanelExample />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Dialog"}>
          <SectionItem>
            <DialogExample title="Dialog" />
            <AlertDialogExample title="Alert Dialog" />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Risk Dialog"}>
          <SectionItem>
            <RiskDialogExample />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Filter Button"}>
          <SectionItem>
            <FilterButton />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Pagination"}>
          <SectionItem>
            <PagesExample />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Order Subtotal Card"}>
          <SectionItem>
            <OrderSubtotal
              itemsSubtotal={345}
              deliveryFee={5}
              totalPrice={350}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Collapsible Panel"}>
          <SectionItem>
            <CollapsiblePanel panelTitle="Collapsible Panel">
              <p>
                Content. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam finibus, massa venenatis ornare aliquam, urna enim
                interdum nibh, non fermentum magna odio eget odio. Vivamus a
                egestas nulla. Morbi hendrerit efficitur urna, et porta sapien
                blandit nec.
              </p>
            </CollapsiblePanel>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Product Images Slider"}>
          <SectionItem>
            <ProductImagesSlider
              images={[
                image.src,
                image2.src,
                image3.src,
                image4.src,
                image5.src,
                image6.src,
              ]}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Adaptive Data View"}>
          <SectionItem>
            <AdaptiveDataViewExample />
          </SectionItem>
        </Section>
      </MainLayout>
    </>
  );
}
