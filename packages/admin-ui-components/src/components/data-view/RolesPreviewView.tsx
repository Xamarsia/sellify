import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { IdCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/IdCellBuilder";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";

import { RolePreview } from "../../types";

type RolesPreviewViewProps = {
  content: Array<RolePreview>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<RolePreview>> = [
  createCellPrototype("Title", LinkTextCellBuilder, ({ roleId, title }) => ({
    href: `/role/${roleId}`,
    text: title,
  })),
  createCellPrototype("Role ID", IdCellBuilder, ({ roleId }) => ({
    id: roleId,
  })),
];

export default function RolesPreviewView({ content }: RolesPreviewViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
