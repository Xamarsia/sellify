"use client";

import { NavMenuItem } from "../types";

type BreadcrumbsProps = {
  readonly items: NavMenuItem[];
};

/**
 * Renders a breadcrumb trail for hierarchical navigation.
 * Ancestor items are links, and the current page is rendered as plain text.
 * @param items - Ordered breadcrumb items from the top-level destination to the current page.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumbs" className="max-w-screen">
      <ol className="flex flex-row">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;
          const showSeparator = index < items.length - 2;

          return (
            <li
              className="inline-flex max-w-64 items-center truncate md:max-w-96"
              key={`${item.href}-${index}`}
            >
              {!isCurrentPage ? (
                <a href={item.href} className="text-black hover:text-secondary">
                  {item.title}
                </a>
              ) : (
                <>
                  <span className="px-2 text-secondary">/</span>
                  <p className="text-secondary">{item.title}</p>
                </>
              )}
              {showSeparator && <span className="px-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
