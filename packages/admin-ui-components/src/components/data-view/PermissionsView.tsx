import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";
import { Permission } from "@sellify/admin-ui-components/types";

type PermissionsViewProps = {
  content: Array<Permission>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Permission>> = [
  createCellPrototype(
    "Permission",
    LinkTextCellBuilder,
    ({ permissionId, title }) => ({
      href: `/permission/${permissionId}`,
      text: title,
    }),
  ),
  createCellPrototype(
    "Related Roles Amount",
    NumberCellBuilder,
    ({ relatedRolesCount }) => ({ value: relatedRolesCount }),
  ),
];

export default function PermissionsView({ content }: PermissionsViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
