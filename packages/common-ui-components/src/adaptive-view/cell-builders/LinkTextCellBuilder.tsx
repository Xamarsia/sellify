"use client";

import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import LinkButton from "../../buttons/LinkButton";

type LinkTextCellBuilderProps = {
  href: string;
  text: string;
};

/**
 * Displays text as a link in a data-view cell.
 *
 * @param href - Link destination
 * @param text - Text displayed inside the link
 */
export const LinkTextCellBuilder = {
  buildView({ href, text }: LinkTextCellBuilderProps): ReactNode {
    return (
      <LinkButton href={href}>
        <p className="text-justify line-clamp-3 break-all">{text}</p>
      </LinkButton>
    );
  },
} satisfies CellBuilder<LinkTextCellBuilderProps>;
