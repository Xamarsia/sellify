import { useMemo } from "react";

import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { ImageCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/ImageCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";

import { AddAmountButtonCellBuilder } from "../cell-builders/AddAmountButtonCellBuilder";
import { InventoryProduct } from "../../types";

type InventoryViewProps = {
  content: Array<InventoryProduct>;
  onSubmit: (productId: number, quantity: number) => void;
  disabled?: boolean;
};

export default function InventoryView({
  disabled,
  content,
  onSubmit,
}: InventoryViewProps) {
  const cellPrototypes = useMemo<
    ReadonlyArray<CellPrototype<InventoryProduct>>
  >(
    () => [
      createCellPrototype("", ImageCellBuilder, ({ image }) => ({
        src: image,
      })),
      createCellPrototype(
        "Product",
        LinkTextCellBuilder,
        ({ productId, productTitle }) => ({
          href: `/product/${productId}`,
          text: productTitle,
        }),
      ),
      createCellPrototype("Product ID", IdCellBuilder, ({ productId }) => ({
        id: productId,
      })),
      createCellPrototype("Quantity", NumberCellBuilder, ({ quantity }) => ({
        value: quantity,
      })),
      createCellPrototype(
        "Actions",
        AddAmountButtonCellBuilder,
        ({ productId }) => ({
          onSubmit,
          productId,
          disabled,
        }),
      ),
    ],
    [disabled, onSubmit],
  );

  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
