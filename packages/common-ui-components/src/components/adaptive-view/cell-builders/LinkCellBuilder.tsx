"use client";

import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";
import LinkButton from "../../buttons/LinkButton";

type LinkCellBuilderProps = {
  href: string;
  children: ReactNode;
};

/**
 * Displays arbitrary cell content as a link.
 *
 * @param href - Link destination
 * @param children - Content displayed inside the link
 */
export const LinkCellBuilder = {
  buildView({ href, children }: LinkCellBuilderProps): ReactNode {
    return <LinkButton href={href}>{children}</LinkButton>;
  },
} satisfies CellBuilder<LinkCellBuilderProps>;
