import type { ReactNode } from "react";

import type { CellBuilder } from "../AdaptiveCell";

type ImageCellBuilderProps = {
  src: string;
  size?: "default" | "large";
};

/**
 * Displays a square product-image preview in a data-view cell.
 *
 * @param src - Product image source
 * @param size - Preview size variant
 */
export const ImageCellBuilder = {
  buildView({ src, size = "default" }: ImageCellBuilderProps): ReactNode {
    const sizeStyle = {
      default: "size-20",
      large: "size-24",
    }[size];

    return (
      <div
        className={`relative aspect-square rounded-md shrink-0 ${sizeStyle}`}
      >
        <img
          src={src}
          alt="Product preview image"
          className="size-full object-cover rounded-md"
        />
      </div>
    );
  },
} satisfies CellBuilder<ImageCellBuilderProps>;
