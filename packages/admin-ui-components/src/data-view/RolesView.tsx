import {
  createCellPrototype,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";
import AdaptiveDataView from "@sellify/common-ui-components/adaptive-view/AdaptiveDataView";
import { LinkTextCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/LinkTextCellBuilder";
import { NumberCellBuilder } from "@sellify/common-ui-components/adaptive-view/cell-builders/NumberCellBuilder";

import { Role } from "../types";

type RolesViewProps = {
  content: Array<Role>;
};

const cellPrototypes: ReadonlyArray<CellPrototype<Role>> = [
  createCellPrototype("Role", LinkTextCellBuilder, ({ roleId, title }) => ({
    href: `/role/${roleId}`,
    text: title,
  })),
  createCellPrototype(
    "Related Users Amount",
    NumberCellBuilder,
    ({ relatedUsersCount }) => ({ value: relatedUsersCount }),
  ),
];

export default function RolesView({ content }: RolesViewProps) {
  return <AdaptiveDataView cellPrototypes={cellPrototypes} data={content} />;
}
