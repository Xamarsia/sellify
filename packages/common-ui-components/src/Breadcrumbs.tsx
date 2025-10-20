"use client";

import { NavMenuItem } from "./types";

type BreadcrumbsProps = {
  items: Array<NavMenuItem>;
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex flex-row max-w-screen ">
      {items.map((item, index) => {
        return (
          <li className="inline-flex items-center cursor-pointer truncate max-w-64 md:max-w-96  " key={index}>
            {index < items.length - 1 ?
              <a
                href={item.href}
                className={`bg-primary hover:text-[#555555] text-black`}
              >
                {item.title}
              </a>
              :
              <>
                <span className="text-[#555555] px-2">{"/"}</span>
                <p className={`bg-primary text-[#555555] cursor-not-allowed`}>
                  {item.title}
                </p>
              </>
            }
            {index < items.length - 2 && <span className="px-2">{"/"}</span>}
          </li>

        );
      })}
    </nav>
  );
}
