"use client";

import { usePathname } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";
import { Size } from "@sellify/common-icons/enums";

import {
  NavMenuItem,
  SliderRange,
  TabItemInfo,
} from "@sellify/common-ui-components/types";

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

import Section from "components/Section";
import SectionItem from "components/SectionItem";

import AlertDialogExample from "examples/AlertDialogExample";
import ComboboxUseExample from "examples/ComboboxUseExample";
import DialogExample from "examples/DialogExample";
import DropdownUseExample from "examples/DropdownUseExample";
import MultiSelectionComboboxUseExample from "examples/MultiSelectionComboboxUseExample";
import PagesExample from "examples/PagesExample";
import SearchBarExample from "examples/SearchBarExample";

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
    <div className="min-h-full">
      <header className="flex items-center h-32 bg-primary px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl">Common UI Components</h1>
      </header>
      <main className="flex flex-col w-full ">
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

            <Button variant="outline">
              Outline Button <PlusIcon size={Size.lg} />
            </Button>

            <Button variant="destructive">
              Destructive Button <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button disabled variant="destructive">
              Disabled Destructive <PlusIcon size={Size.lg} />
            </Button>

            <Button disabled variant="outline">
              Disabled Outline <PlusIcon size={Size.lg} />
            </Button>

            <Button disabled variant="destructive">
              Disabled Destructive <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button size="small">
              Small Button <PlusIcon size={Size.lg} />
            </Button>

            <Button variant="outline" size="small">
              Small Button <PlusIcon size={Size.lg} />
            </Button>

            <Button variant="destructive" size="small">
              Small Button <PlusIcon size={Size.lg} />
            </Button>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Icon Button"}>
          <SectionItem>
            <IconButton>
              <PlusIcon size={Size.lg} />
            </IconButton>

            <IconButton variant="outline">
              <PlusIcon size={Size.lg} />
            </IconButton>
          </SectionItem>

          <SectionItem>
            <IconButton disabled>
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
              <PlusIcon size={Size.lg} />
            </TransparentIconButton>

            <TransparentIconButton variant="destructive">
              <PlusIcon size={Size.lg} />
            </TransparentIconButton>
          </SectionItem>

          <SectionItem>
            <TransparentIconButton disabled>
              <PlusIcon size={Size.lg} />
            </TransparentIconButton>

            <TransparentIconButton variant="destructive" disabled>
              <PlusIcon size={Size.lg} />
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
            <DropdownUseExample
              items={comboboxItems}
              title="Sort By"
              disabled
            />
            <DropdownUseExample items={comboboxItems} title="Sort By" />
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

        <Section title={"Dialog"}>
          <SectionItem>
            <DialogExample title="Dialog" />
            <AlertDialogExample title="Alert Dialog" />
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
              <p>Content</p>
            </CollapsiblePanel>
          </SectionItem>
        </Section>
      </main>
    </div>
  );
}
