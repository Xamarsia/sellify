"use client";

import { TabItemInfo } from "../types";
import Tab from "./Tab";

type TabsProps = {
  items: Array<TabItemInfo>;
  hash: string;
};

export default function Tabs({ items, hash }: TabsProps) {
  return (
    <>
      <div className="w-full flex flex-col not-lg:hidden">
        <nav className="w-full flex flex-wrap border-b border-stroke">
          {items.map(({ href, title }) => (
            <Tab
              key={"TabHeader" + title}
              href={href}
              text={title}
              selected={hash === href}
            />
          ))}
        </nav>
        {items.map((item, index) => (
          <div
            key={"TabContent" + index}
            className={`w-full py-6 ${hash !== item.href && "hidden"} `}
          >
            {item.content}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-9 lg:hidden">
        {items.map((item, index) => (
          <div
            className="flex w-full flex-col gap-4"
            key={"TabSection" + index}
          >
            <h4 className="tab_header">{item.title}</h4>
            <div className="flex grow items-start flex-col gap-4">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
