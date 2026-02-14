"use client";

import { NavMenuItem } from "./types";

type BreadcrumbsProps = {
  items: Array<NavMenuItem>;
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex flex-row max-w-screen">
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        return (
          <li
            className="inline-flex items-center truncate max-w-64 md:max-w-96"
            key={`${item.href}-${index}`}
          >
            {!isLastItem ? (
              <a href={item.href} className="hover:text-secondary text-black">
                {item.title}
              </a>
            ) : (
              <>
                <span className="text-secondary px-2">/</span>
                <p className="text-secondary">{item.title}</p>
              </>
            )}
            {index < items.length - 2 && <span className="px-2">/</span>}
          </li>
        );
      })}
    </nav>
  );
}
