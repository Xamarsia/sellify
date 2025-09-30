"use client";

import { usePathname } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

import PlusIcon from "@sellify/common-icons/plus";

import {
  SidebarItemInfo,
  TabItemInfo,
} from "@sellify/common-ui-components/types";

import Button from "@sellify/common-ui-components/buttons/Button";
import IconButton from "@sellify/common-ui-components/buttons/IconButton";
import LinkButton from "@sellify/common-ui-components/buttons/LinkButton";
import TransparentIconButton from "@sellify/common-ui-components/buttons/TransparentIconButton";
import Checkbox from "@sellify/common-ui-components/input/Checkbox";
import Input from "@sellify/common-ui-components/input/Input";
import MediaInputField from "@sellify/common-ui-components/input/MediaInputField";
import Radio from "@sellify/common-ui-components/input/Radio";
import Textarea from "@sellify/common-ui-components/input/Textarea";
import Sidebar from "@sellify/common-ui-components/sidebar/SideMenu";
import Tabs from "@sellify/common-ui-components/tabs/Tabs";
import OrderSubtotal from "@sellify/common-ui-components/OrderSubtotal";

import Section from "../components/Section";
import SectionItem from "../components/SectionItem";

import AlertDialogExample from "../examples/AlertDialogExample";
import ComboboxUseExample from "../examples/ComboboxUseExample";
import DialogExample from "../examples/DialogExample";
import DropdownUseExample from "../examples/DropdownUseExample";
import MultipleSelectionComboboxUseExample from "../examples/MultipleSelectionComboboxUseExample";
import PagesExample from "../examples/PagesExample";
import SearchBarExample from "../examples/SearchBarExample";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");

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

  const sidebarItem: Array<SidebarItemInfo> = [
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

  return (
    <div className="min-h-full">
      <header className="flex items-center h-32 bg-[#242424] px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl">Common UI Components</h1>
      </header>
      <main className="flex flex-col w-full ">
        <Section title={"Button"}>
          <SectionItem>
            <Button>
              Default Button
              <PlusIcon style="size-6" />
            </Button>

            <Button variant="outline">
              Outline Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="destructive">
              Destructive Button <PlusIcon style="size-6" />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button disabled>
              Disabled Default
              <PlusIcon style="size-6" />
            </Button>

            <Button disabled variant="outline">
              Disabled Outline
              <PlusIcon style="size-6" />
            </Button>

            <Button disabled variant="destructive">
              Disabled Destructive <PlusIcon style="size-6" />
            </Button>
          </SectionItem>

          <SectionItem>
            <Button size="small">
              Small Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="outline" size="small">
              Small Button <PlusIcon style="size-6" />
            </Button>

            <Button variant="destructive" size="small">
              Small Button
              <PlusIcon style="size-6" />
            </Button>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Icon Button"}>
          <SectionItem>
            <IconButton>
              <PlusIcon style="size-6" />
            </IconButton>

            <IconButton variant="outline">
              <PlusIcon style="size-6" />
            </IconButton>
          </SectionItem>

          <SectionItem>
            <IconButton disabled>
              <PlusIcon style="size-6" />
            </IconButton>

            <IconButton variant="outline" disabled>
              <PlusIcon style="size-6" />
            </IconButton>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Link Button"}>
          <SectionItem>
            <LinkButton>Link Button</LinkButton>
            <LinkButton>
              Link Button <PlusIcon style="size-6" />
            </LinkButton>
            <LinkButton>
              <PlusIcon style="size-6" /> Link Button
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
              <PlusIcon style="size-6" />
            </TransparentIconButton>

            <TransparentIconButton variant="destructive">
              <PlusIcon style="size-6" />
            </TransparentIconButton>
          </SectionItem>

          <SectionItem>
            <TransparentIconButton disabled>
              <PlusIcon style="size-6" />
            </TransparentIconButton>

            <TransparentIconButton variant="destructive" disabled>
              <PlusIcon style="size-6" />
            </TransparentIconButton>
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Input"}>
          <SectionItem>
            <Input
              value={inputValue}
              placeholder="Required Input"
              title="Required Input"
              required
              onChange={handleInputChange}
            />
            <Input
              title="Disabled Input"
              value="Disabled"
              disabled
              onChange={handleInputChange}
            />
            <Input
              placeholder="Invalid Input"
              value="Invalid"
              title="Invalid Input"
              state="invalid"
              onChange={handleInputChange}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Textarea"}>
          <SectionItem>
            <Textarea
              value={textareaValue}
              placeholder="Required"
              title="Required Textarea"
              required
              onChange={handleTextareaChange}
            />
            <Textarea
              value={textareaValue}
              title="Disabled Textarea"
              disabled
              onChange={handleTextareaChange}
            />
            <Textarea
              placeholder="Invalid"
              value="Invalid"
              title="Invalid Textarea"
              state="invalid"
              onChange={handleTextareaChange}
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Media Input Field"}>
          <SectionItem>
            <MediaInputField size="small" text="Small Media Input Field" />
            <MediaInputField text="Default Media Input Field" />
          </SectionItem>
        </Section>
        {/* ------------------------------------------------------------- */}

        <Section title={"Search Input"}>
          <SectionItem>
            <SearchBarExample />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Checkbox & Radio buttons"}>
          <SectionItem>
            <Checkbox label="Default Checkbox" value="default" />
            <Checkbox checked label="Checked Checkbox" value="checked" />
            <Checkbox disabled label="Disabled Checkbox" value="disabled" />
            <Checkbox
              disabled
              checked
              label="Disabled Checked Checkbox"
              value="disabled-checked"
            />
          </SectionItem>
          <SectionItem>
            <Radio label="Default Radio" value="default" />
            <Radio checked label="Checked Radio" value="checked" />
            <Radio disabled label="Disabled Radio" value="disabled" />
            <Radio
              disabled
              checked
              label="Disabled Checked Radio"
              value="disabled-checked"
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Sidebar"}>
          <SectionItem>
            <Sidebar items={sidebarItem} pathname={pathname} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Tab"}>
          <SectionItem>
            <Tabs items={tabs} pathname={pathname} />
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
            <ComboboxUseExample
              items={comboboxItems}
              title="Required Combobox"
              required
            />
            <ComboboxUseExample
              items={comboboxItems}
              title="Disabled Combobox"
              disabled
              defaultValue="Default value"
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Multiple Selection Combobox"}>
          <SectionItem>
            <MultipleSelectionComboboxUseExample
              items={comboboxItems}
              title="Required Combobox"
              required
            />
            <MultipleSelectionComboboxUseExample
              items={comboboxItems}
              title="Disabled Combobox"
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
      </main>
    </div>
  );
}
