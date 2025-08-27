"use client";

import { Fragment, useEffect, useState } from "react";

import ProgressBarItem from "./ProgressBarItem";

type ProgressBarProps = {
  barItems: Array<ProgressItemInfo>;
  currentPathname: string;
};

export default function ProgressBar({
  barItems,
  currentPathname,
}: ProgressBarProps) {
  const [currentBarItem, setCurrentBarItem] = useState<number>(-1);

  useEffect(() => {
    const isHrefCurrent = (item: ProgressItemInfo): boolean => {
      return item.href === currentPathname;
    };
    setCurrentBarItem(barItems.findIndex(isHrefCurrent));
  }, [currentPathname, barItems]);

  return (
    <nav className="w-full flex justify-between items-top h-16">
      {barItems.map(({ href, title, icon }, index) => {
        const isSelected = currentBarItem >= index;
        return (
          <Fragment key={"ProgressBarItem-" + index}>
            {index > 0 ? (
              <div
                className={`grow h-5 border-b border-dashed ${isSelected ? "border-black" : "border-stroke"}`}
              />
            ) : (
              <></>
            )}
            <ProgressBarItem
              label={title}
              href={href}
              icon={icon}
              selected={isSelected}
              position={
                index == 0
                  ? "first"
                  : index == barItems.length
                    ? "last"
                    : "center"
              }
            />
          </Fragment>
        );
      })}
    </nav>
  );
}
