import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";

import { AdminPreview } from "../../types";

type PreviewViewProps = {
  content: Array<AdminPreview>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<AdminPreview>> = [
  createCellPrototype("Name", LinkTextCellBuilder, ({ adminId, name }) => ({
    href: `/admin/${adminId}`,
    text: name,
  })),
  createCellPrototype("Admin ID", IdCellBuilder, ({ adminId }) => ({
    id: adminId,
  })),
];

export default function PreviewView({ content }: PreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
